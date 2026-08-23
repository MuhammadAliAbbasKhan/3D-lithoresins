from rest_framework import serializers
from .models import UserSubscription, TrialRequest, ContactInquiry, LithoServiceRequest, ResinProduct

class UserSubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSubscription
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

class TrialRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrialRequest
        fields = '__all__'

class ContactInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInquiry
        fields = '__all__'

class LithoServiceRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = LithoServiceRequest
        fields = '__all__'

class ResinProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResinProduct
        fields = '__all__'
