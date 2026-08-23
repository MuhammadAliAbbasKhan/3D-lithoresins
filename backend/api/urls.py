from django.urls import path
from . import views

urlpatterns = [
    # Auth
    path('auth/register/', views.register_user, name='register_user'),
    path('auth/login/', views.login_user, name='login_user'),

    # Public Forms
    path('trials/', views.submit_trial_request, name='submit_trial'),
    path('inquiries/', views.submit_contact_inquiry, name='submit_inquiry'),
    path('service-requests/', views.service_requests_api, name='service_requests_api'),
    path('products/', views.get_products, name='get_products'),

    # Stripe Payment
    path('stripe/create-payment-intent/', views.create_payment_intent, name='create_payment_intent'),
    path('subscribe/', views.activate_subscription, name='activate_subscription'),

    # Admin Protected Endpoints
    path('admin/analytics/', views.admin_analytics, name='admin_analytics'),
    path('admin/users/', views.admin_users, name='admin_users'),
    path('admin/users/update-plan/', views.admin_update_user_plan, name='admin_update_user_plan'),
]
