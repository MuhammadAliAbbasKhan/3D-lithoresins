import os
import logging
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger(__name__)

MONGODB_URI = os.getenv('MONGODB_URI', 'mongodb+srv://admin:aliabbas1234578!@cluster0.mongodb.net/threedlithoresins_db?retryWrites=true&w=majority')
DB_NAME = 'threedlithoresins_db'

_mongo_client = None

def get_mongo_db():
    global _mongo_client
    try:
        if _mongo_client is None:
            _mongo_client = MongoClient(MONGODB_URI, serverSelectionTimeoutMS=2000)
        return _mongo_client[DB_NAME]
    except Exception as e:
        logger.warning(f"MongoDB Cloud connection skipped/offline: {e}")
        return None

def sync_user_to_mongodb(user_obj):
    db = get_mongo_db()
    if db is not None:
        try:
            users_col = db['threedlithoresins_users']
            doc = {
                'username': user_obj.username,
                'email': user_obj.email,
                'plan_tier': user_obj.plan_tier,
                'billing_cycle': user_obj.billing_cycle,
                'is_active': user_obj.is_active,
                'is_admin': user_obj.is_admin,
                'payment_reference': user_obj.payment_reference,
                'stripe_customer_id': user_obj.stripe_customer_id,
                'stripe_payment_intent_id': user_obj.stripe_payment_intent_id,
                'created_at': user_obj.created_at.isoformat() if hasattr(user_obj, 'created_at') and user_obj.created_at else None
            }
            users_col.update_one({'username': user_obj.username}, {'$set': doc}, upsert=True)
        except Exception as e:
            logger.warning(f"Failed to sync user to MongoDB: {e}")

def sync_trial_request_to_mongodb(trial_obj):
    db = get_mongo_db()
    if db is not None:
        try:
            trials_col = db['threedlithoresins_trials']
            doc = {
                'full_name': trial_obj.full_name,
                'email': trial_obj.email,
                'company': trial_obj.company,
                'software_choice': trial_obj.software_choice,
                'comments': trial_obj.comments,
                'created_at': trial_obj.created_at.isoformat() if hasattr(trial_obj, 'created_at') and trial_obj.created_at else None
            }
            trials_col.insert_one(doc)
        except Exception as e:
            logger.warning(f"Failed to sync trial request to MongoDB: {e}")

def sync_contact_inquiry_to_mongodb(inquiry_obj):
    db = get_mongo_db()
    if db is not None:
        try:
            inquiries_col = db['threedlithoresins_inquiries']
            doc = {
                'name': inquiry_obj.name,
                'email': inquiry_obj.email,
                'subject': inquiry_obj.subject,
                'message': inquiry_obj.message,
                'created_at': inquiry_obj.created_at.isoformat() if hasattr(inquiry_obj, 'created_at') and inquiry_obj.created_at else None
            }
            inquiries_col.insert_one(doc)
        except Exception as e:
            logger.warning(f"Failed to sync inquiry to MongoDB: {e}")

def sync_service_request_to_mongodb(service_obj):
    db = get_mongo_db()
    if db is not None:
        try:
            services_col = db['threedlithoresins_service_requests']
            doc = {
                'user_name': service_obj.user_name,
                'user_email': service_obj.user_email,
                'company_name': service_obj.company_name,
                'project_title': service_obj.project_title,
                'service_type': service_obj.service_type,
                'industry': service_obj.industry,
                'wavelength_range': service_obj.wavelength_range,
                'system_specifications': service_obj.system_specifications,
                'status': service_obj.status,
                'admin_notes': service_obj.admin_notes,
                'created_at': service_obj.created_at.isoformat() if hasattr(service_obj, 'created_at') and service_obj.created_at else None
            }
            services_col.insert_one(doc)
        except Exception as e:
            logger.warning(f"Failed to sync service request to MongoDB: {e}")
