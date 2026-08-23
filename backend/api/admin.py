from django.contrib import admin
from .models import UserSubscription, TrialRequest, ContactInquiry, LithoServiceRequest, ResinProduct

@admin.register(UserSubscription)
class UserSubscriptionAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'plan_tier', 'billing_cycle', 'is_active', 'is_admin', 'created_at')
    search_fields = ('username', 'email', 'payment_reference')

@admin.register(TrialRequest)
class TrialRequestAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'company', 'software_choice', 'created_at')
    search_fields = ('full_name', 'email', 'company')

@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at')
    search_fields = ('name', 'email', 'subject')

@admin.register(LithoServiceRequest)
class LithoServiceRequestAdmin(admin.ModelAdmin):
    list_display = ('project_title', 'user_name', 'company_name', 'service_type', 'status', 'created_at')
    search_fields = ('project_title', 'user_name', 'company_name')

@admin.register(ResinProduct)
class ResinProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'code_name', 'category', 'price', 'refractive_index', 'resolution_limit')
    search_fields = ('name', 'code_name', 'category')
