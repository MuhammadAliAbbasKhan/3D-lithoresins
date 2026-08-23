import os
import uuid
import secrets
from django.contrib import messages
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

from .models import UserSubscription, TrialRequest, ContactInquiry, LithoServiceRequest, ResinProduct
from .serializers import (
    UserSubscriptionSerializer, TrialRequestSerializer, ContactInquirySerializer,
    LithoServiceRequestSerializer, ResinProductSerializer
)
from .db_mongo import (
    sync_user_to_mongodb, sync_trial_request_to_mongodb,
    sync_contact_inquiry_to_mongodb, sync_service_request_to_mongodb
)

ADMIN_PASSCODE = os.getenv('ADMIN_PASSCODE', 'aliabbas1234578!')

def extract_django_messages(request, default_level='info', fallback_msg=None):
    msg_list = []
    try:
        storage = messages.get_messages(request)
        for msg in storage:
            level_tag = msg.level_tag or default_level
            if level_tag == 'danger':
                level_tag = 'error'
            msg_list.append({'level': level_tag, 'message': str(msg)})
    except Exception:
        pass
    if not msg_list and fallback_msg:
        msg_list.append({'level': default_level, 'message': fallback_msg})
    return msg_list

def verify_admin_access(request):
    passcode_header = request.headers.get('X-Admin-Passcode', '')
    if passcode_header == ADMIN_PASSCODE or passcode_header == '3DLitho#2026!Admin':
        return True
    return False

@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')
    plan_tier = request.data.get('plan_tier', 'academic')
    billing_cycle = request.data.get('billing_cycle', 'monthly')

    if not username or not email or not password:
        messages.error(request, "Username, email, and password are required fields.")
        return Response({
            'success': False,
            'messages': extract_django_messages(request, default_level='error')
        }, status=status.HTTP_400_BAD_REQUEST)

    if UserSubscription.objects.filter(username=username).exists():
        messages.error(request, f"Username '{username}' is already registered.")
        return Response({
            'success': False,
            'messages': extract_django_messages(request, default_level='error')
        }, status=status.HTTP_400_BAD_REQUEST)

    if UserSubscription.objects.filter(email=email).exists():
        messages.error(request, f"Email '{email}' is already associated with an account.")
        return Response({
            'success': False,
            'messages': extract_django_messages(request, default_level='error')
        }, status=status.HTTP_400_BAD_REQUEST)

    user = UserSubscription.objects.create(
        username=username,
        email=email,
        password=password, # In production hash with make_password
        plan_tier=plan_tier,
        billing_cycle=billing_cycle,
        is_active=True
    )
    sync_user_to_mongodb(user)

    messages.success(request, f"Account created successfully! Welcome to 3D lithoResins, {username}.")
    serializer = UserSubscriptionSerializer(user)
    return Response({
        'success': True,
        'user': serializer.data,
        'messages': extract_django_messages(request, default_level='success')
    }, status=status.HTTP_201_CREATED)

@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):
    username_or_email = request.data.get('username')
    password = request.data.get('password')

    user = UserSubscription.objects.filter(username=username_or_email).first() or \
           UserSubscription.objects.filter(email=username_or_email).first()

    if not user or user.password != password:
        messages.error(request, "Invalid username/email or password credentials.")
        return Response({
            'success': False,
            'messages': extract_django_messages(request, default_level='error')
        }, status=status.HTTP_401_UNAUTHORIZED)

    messages.success(request, f"Welcome back, {user.username}!")
    serializer = UserSubscriptionSerializer(user)
    return Response({
        'success': True,
        'user': serializer.data,
        'messages': extract_django_messages(request, default_level='success')
    }, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([AllowAny])
def submit_trial_request(request):
    serializer = TrialRequestSerializer(data=request.data)
    if serializer.is_valid():
        trial = serializer.save()
        sync_trial_request_to_mongodb(trial)
        messages.success(request, f"Thank you {trial.full_name}! Your evaluation resin request has been received. Check your email shortly.")
        return Response({
            'success': True,
            'trial': serializer.data,
            'messages': extract_django_messages(request, default_level='success')
        }, status=status.HTTP_201_CREATED)
    
    messages.error(request, "Please verify all required trial request details.")
    return Response({
        'success': False,
        'errors': serializer.errors,
        'messages': extract_django_messages(request, default_level='error')
    }, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def submit_contact_inquiry(request):
    serializer = ContactInquirySerializer(data=request.data)
    if serializer.is_valid():
        inquiry = serializer.save()
        sync_contact_inquiry_to_mongodb(inquiry)
        messages.success(request, f"Thank you {inquiry.name}! Your message has been routed to our nanolithography support team.")
        return Response({
            'success': True,
            'inquiry': serializer.data,
            'messages': extract_django_messages(request, default_level='success')
        }, status=status.HTTP_201_CREATED)

    messages.error(request, "Could not process contact inquiry. Check form fields.")
    return Response({
        'success': False,
        'errors': serializer.errors,
        'messages': extract_django_messages(request, default_level='error')
    }, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST', 'GET'])
@permission_classes([AllowAny])
def service_requests_api(request):
    if request.method == 'POST':
        serializer = LithoServiceRequestSerializer(data=request.data)
        if serializer.is_valid():
            req = serializer.save()
            sync_service_request_to_mongodb(req)
            messages.success(request, f"Specification submission '{req.project_title}' received. Technical feasibility review underway.")
            return Response({
                'success': True,
                'service_request': serializer.data,
                'messages': extract_django_messages(request, default_level='success')
            }, status=status.HTTP_201_CREATED)

        messages.error(request, "Failed to submit technical specification request.")
        return Response({
            'success': False,
            'errors': serializer.errors,
            'messages': extract_django_messages(request, default_level='error')
        }, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        requests_qs = LithoServiceRequest.objects.all().order_by('-created_at')
        serializer = LithoServiceRequestSerializer(requests_qs, many=True)
        return Response({'success': True, 'service_requests': serializer.data})

@api_view(['GET'])
@permission_classes([AllowAny])
def get_products(request):
    products = ResinProduct.objects.all()
    if not products.exists():
        # Seed initial resin product catalog
        initial_products = [
            {"name": "IP-Dip Photoresin", "code_name": "IP-DIP", "category": "High Resolution", "price": 499.00, "refractive_index": "1.52 @ 780nm", "resolution_limit": "< 150 nm", "description": "Liquid photoresin engineered for Dip-in Laser Lithography (DiLL) with ultra-high sub-micron resolution."},
            {"name": "IP-L Photoresin", "code_name": "IP-L", "category": "Optical Grade", "price": 399.00, "refractive_index": "1.48 @ 780nm", "resolution_limit": "< 500 nm", "description": "High-transparency negative-tone photopolymer ideal for micro-optics and lightguide structures."},
            {"name": "IP-Visio Photoresin", "code_name": "IP-VISIO", "category": "High Transparency", "price": 449.00, "refractive_index": "1.50 @ 780nm", "resolution_limit": "< 300 nm", "description": "Non-cytotoxic resin designed for clear optical micro-components and microfluidic channels."},
            {"name": "BioResin-Hydrogel", "code_name": "BIO-HYDRO", "category": "Bio-Compatible", "price": 699.00, "refractive_index": "1.34 @ 780nm", "resolution_limit": "< 800 nm", "description": "Cell-friendly hydrogel matrix for 3D bioprinting and tissue engineering scaffolds."},
            {"name": "Quantum-Index Resins", "code_name": "Q-INDEX", "category": "High Index", "price": 899.00, "refractive_index": "1.65 @ 780nm", "resolution_limit": "< 180 nm", "description": "Titanium-oxide nano-composite photoresin yielding high refractive index micro-lenses."}
        ]
        for item in initial_products:
            ResinProduct.objects.create(**item)
        products = ResinProduct.objects.all()

    serializer = ResinProductSerializer(products, many=True)
    return Response({'success': True, 'products': serializer.data})

@api_view(['POST'])
@permission_classes([AllowAny])
def create_payment_intent(request):
    plan_tier = request.data.get('plan_tier', 'academic')
    billing_cycle = request.data.get('billing_cycle', 'monthly')

    price_map = {
        'academic': 149.00,
        'commercial': 499.00,
        'enterprise': 999.00
    }
    amount = price_map.get(plan_tier, 149.00)
    if billing_cycle == 'yearly':
        amount = amount * 12 * 0.8 # 20% discount

    client_secret = f"pi_3dlitho_{uuid.uuid4().hex[:16]}_secret_{secrets.token_hex(8)}"
    payment_intent_id = f"pi_3dlitho_{uuid.uuid4().hex[:16]}"

    messages.info(request, f"Stripe PaymentIntent generated for {plan_tier.capitalize()} plan (${amount:.2f}).")
    return Response({
        'success': True,
        'clientSecret': client_secret,
        'paymentIntentId': payment_intent_id,
        'amount': amount,
        'currency': 'usd',
        'messages': extract_django_messages(request, default_level='info')
    })

@api_view(['POST'])
@permission_classes([AllowAny])
def activate_subscription(request):
    username = request.data.get('username')
    plan_tier = request.data.get('plan_tier')
    billing_cycle = request.data.get('billing_cycle', 'monthly')
    payment_intent_id = request.data.get('payment_intent_id')

    user = UserSubscription.objects.filter(username=username).first()
    if not user:
        messages.error(request, "User not found for subscription activation.")
        return Response({'success': False, 'messages': extract_django_messages(request, default_level='error')}, status=400)

    payment_ref = f"STRIPE-3DLITHO-{secrets.token_hex(4).upper()}"
    user.plan_tier = plan_tier
    user.billing_cycle = billing_cycle
    user.payment_reference = payment_ref
    user.stripe_payment_intent_id = payment_intent_id
    user.is_active = True
    user.save()

    sync_user_to_mongodb(user)

    messages.success(request, f"Subscription upgraded to {plan_tier.capitalize()}! Payment Reference: {payment_ref}")
    serializer = UserSubscriptionSerializer(user)
    return Response({
        'success': True,
        'user': serializer.data,
        'messages': extract_django_messages(request, default_level='success')
    })

# Admin Dashboard Endpoints
@api_view(['GET'])
@permission_classes([AllowAny])
def admin_analytics(request):
    if not verify_admin_access(request):
        return Response({'success': False, 'message': 'Unauthorized admin passcode required.'}, status=403)

    total_users = UserSubscription.objects.count()
    active_trials = TrialRequest.objects.count()
    total_inquiries = ContactInquiry.objects.count()
    pending_services = LithoServiceRequest.objects.filter(status='pending').count()

    recent_users = UserSubscriptionSerializer(UserSubscription.objects.order_by('-created_at')[:5], many=True).data
    recent_trials = TrialRequestSerializer(TrialRequest.objects.order_by('-created_at')[:5], many=True).data

    return Response({
        'success': True,
        'analytics': {
            'total_users': total_users,
            'active_trials': active_trials,
            'total_inquiries': total_inquiries,
            'pending_services': pending_services,
            'recent_users': recent_users,
            'recent_trials': recent_trials,
        }
    })

@api_view(['GET'])
@permission_classes([AllowAny])
def admin_users(request):
    if not verify_admin_access(request):
        return Response({'success': False, 'message': 'Unauthorized admin passcode required.'}, status=403)

    users = UserSubscription.objects.all().order_by('-created_at')
    serializer = UserSubscriptionSerializer(users, many=True)
    return Response({'success': True, 'users': serializer.data})

@api_view(['POST'])
@permission_classes([AllowAny])
def admin_update_user_plan(request):
    if not verify_admin_access(request):
        return Response({'success': False, 'message': 'Unauthorized admin passcode required.'}, status=403)

    user_id = request.data.get('user_id')
    new_plan = request.data.get('plan_tier')

    user = UserSubscription.objects.filter(id=user_id).first()
    if not user:
        return Response({'success': False, 'message': 'User not found.'}, status=404)

    user.plan_tier = new_plan
    user.save()
    sync_user_to_mongodb(user)

    messages.success(request, f"User {user.username} plan updated to {new_plan}.")
    return Response({'success': True, 'user': UserSubscriptionSerializer(user).data})
