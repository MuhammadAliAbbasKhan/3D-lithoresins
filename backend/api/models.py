from django.db import models

class UserSubscription(models.Model):
    PLAN_CHOICES = [
        ('free', 'Free Evaluation'),
        ('academic', 'Academic License'),
        ('commercial', 'Commercial R&D'),
        ('enterprise', 'Enterprise Industrial'),
        ('admin', 'Administrator'),
    ]
    BILLING_CHOICES = [
        ('monthly', 'Monthly'),
        ('yearly', 'Yearly'),
    ]

    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    plan_tier = models.CharField(max_length=20, choices=PLAN_CHOICES, default='free')
    billing_cycle = models.CharField(max_length=10, choices=BILLING_CHOICES, default='monthly')
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    payment_reference = models.CharField(max_length=100, blank=True, null=True)
    stripe_customer_id = models.CharField(max_length=100, blank=True, null=True)
    stripe_payment_intent_id = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.username} ({self.plan_tier})"

class TrialRequest(models.Model):
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    company = models.CharField(max_length=200)
    software_choice = models.CharField(max_length=100, default='3D lithoResins Studio')
    comments = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Trial: {self.full_name} ({self.company})"

class ContactInquiry(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    subject = models.CharField(max_length=250)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Inquiry: {self.subject} from {self.name}"

class LithoServiceRequest(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending Review'),
        ('in_review', 'Technical Feasibility Review'),
        ('approved', 'Approved for Fabrication'),
        ('completed', 'Completed'),
        ('rejected', 'Rejected'),
    ]

    user_name = models.CharField(max_length=200)
    user_email = models.EmailField()
    company_name = models.CharField(max_length=200)
    project_title = models.CharField(max_length=250)
    service_type = models.CharField(max_length=100) # 2PP Custom Synthesis, Cleanroom Micro-Optics, Bio-Scaffold 3D Printing
    industry = models.CharField(max_length=100)
    wavelength_range = models.CharField(max_length=100, default='780 nm Femtosecond')
    system_specifications = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    admin_notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Service Req: {self.project_title} ({self.company_name})"

class ResinProduct(models.Model):
    name = models.CharField(max_length=150)
    code_name = models.CharField(max_length=50, unique=True) # e.g. IP-Dip, IP-L, IP-Visio, BioResin-A
    description = models.TextField()
    category = models.CharField(max_length=100) # High Resolution, Optical Grade, Bio-Compatible, High Index
    price = models.DecimalField(max_digits=10, decimal_places=2)
    refractive_index = models.CharField(max_length=50, default="1.52 @ 780nm")
    resolution_limit = models.CharField(max_length=50, default="< 200 nm")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.code_name})"
