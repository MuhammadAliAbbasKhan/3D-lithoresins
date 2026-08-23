import React from 'react';
import { Check, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

const ShopPageComponent = ({ onOpenAuth, currentUser, onOpenCheckout }) => {

  const isSubscriptionActive = (tier) => {
    if (!currentUser || !currentUser.is_paid || !currentUser.subscription_end) return false;
    const isTierMatch = currentUser.plan_tier?.toLowerCase() === tier.toLowerCase();
    const isNotExpired = new Date(currentUser.subscription_end) > new Date();
    return isTierMatch && isNotExpired;
  };

  const handleSelectTier = (tier) => {
    if (!currentUser) {
      onOpenAuth();
    } else {
      currentUser.plan_tier = tier;
      onOpenCheckout();
    }
  };

  const formatExpiry = (isoString) => {
    if (!isoString) return '';
    return new Date(isoString).toLocaleDateString();
  };

  return (
    <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '5rem 2rem 8rem 2rem', background: '#ffffff', color: '#0B0F33', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
        <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '9999px', background: '#e6f0ff', border: '1px solid #0066FF', color: '#0066FF', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.2rem' }}>
          Monthly Subscription Plans
        </div>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0B0F33', lineHeight: 1.25, marginBottom: '1rem' }}>
          Licensing & Resins Subscription Pricing
        </h1>
        <p style={{ color: '#4B5563', maxWidth: '780px', margin: '0.8rem auto 0 auto', fontSize: '1.15rem', lineHeight: 1.8 }}>
          Transparent monthly subscription plans for university research labs, optics R&D, and industrial cleanrooms. Pay once per monthly period with no hidden fees.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {/* Academic Tier - $200 / month */}
        <div style={{ background: '#f8faff', border: '1px solid #E5E7EB', padding: '2.8rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0B0F33', marginBottom: '0.5rem' }}>Academic License</h3>
            <p style={{ fontSize: '0.9rem', color: '#6B7280', marginBottom: '2rem' }}>For university research labs & educational cleanrooms</p>
            <div style={{ fontSize: '3.2rem', fontWeight: 800, color: '#0066FF', marginBottom: '2rem' }}>
              $200 <span style={{ fontSize: '1rem', color: '#6B7280', fontWeight: 500 }}>/ month</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: '#4B5563', marginBottom: '2.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><Check size={18} color="#0066FF" /> Single User Desktop License</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><Check size={18} color="#0066FF" /> 2PP Physics Engine & Voxel Studio</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><Check size={18} color="#0066FF" /> Standard Photoresin Presets (IP-Dip)</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><Check size={18} color="#0066FF" /> Academic Forum & Email Support</li>
            </ul>
          </div>

          {isSubscriptionActive('academic') ? (
            <div style={activeBadgeStyle}>
              <CheckCircle2 size={18} color="#10B981" /> Active Subscription (Valid until {formatExpiry(currentUser.subscription_end)})
            </div>
          ) : (
            <button onClick={() => handleSelectTier('academic')} style={btnStyle}>
              Subscribe Academic ($200/mo)
            </button>
          )}
        </div>

        {/* Pro Tier - $300 / month */}
        <div style={{ background: '#ffffff', border: '2px solid #0066FF', padding: '2.8rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 12px 35px rgba(0, 102, 255, 0.15)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#0066FF', color: '#ffffff', fontWeight: 800, fontSize: '0.78rem', padding: '0.3rem 1rem', borderRadius: '9999px', letterSpacing: '0.5px' }}>
            MOST POPULAR
          </div>
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0B0F33', marginBottom: '0.5rem', marginTop: '0.5rem' }}>Pro Litho Suite</h3>
            <p style={{ fontSize: '0.9rem', color: '#6B7280', marginBottom: '2rem' }}>For corporate R&D & optics manufacturing</p>
            <div style={{ fontSize: '3.2rem', fontWeight: 800, color: '#0066FF', marginBottom: '2rem' }}>
              $300 <span style={{ fontSize: '1rem', color: '#6B7280', fontWeight: 500 }}>/ month</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: '#4B5563', marginBottom: '2.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><Check size={18} color="#0066FF" /> 5 Multi-Seat Floating Licenses</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><Check size={18} color="#0066FF" /> Full Photoresin Catalog & Custom Formulation</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><Check size={18} color="#0066FF" /> Dual SQLite + MongoDB Cloud Sync</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><Check size={18} color="#0066FF" /> Priority Technical Telemetry Support</li>
            </ul>
          </div>

          {isSubscriptionActive('pro') ? (
            <div style={activeBadgeStyle}>
              <CheckCircle2 size={18} color="#10B981" /> Active Subscription (Valid until {formatExpiry(currentUser.subscription_end)})
            </div>
          ) : (
            <button onClick={() => handleSelectTier('pro')} style={btnStylePrimary}>
              Subscribe Pro ($300/mo)
            </button>
          )}
        </div>

        {/* Enterprise Tier - $500 / month */}
        <div style={{ background: '#f8faff', border: '1px solid #E5E7EB', padding: '2.8rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0B0F33', marginBottom: '0.5rem' }}>Enterprise Cleanroom</h3>
            <p style={{ fontSize: '0.9rem', color: '#6B7280', marginBottom: '2rem' }}>For high-volume cleanrooms & semiconductor fabs</p>
            <div style={{ fontSize: '3.2rem', fontWeight: 800, color: '#0066FF', marginBottom: '2rem' }}>
              $500 <span style={{ fontSize: '1rem', color: '#6B7280', fontWeight: 500 }}>/ month</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: '#4B5563', marginBottom: '2.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><Check size={18} color="#0066FF" /> Unlimited Organization Licenses</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><Check size={18} color="#0066FF" /> On-Premise API & Custom Physics Engine</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><Check size={18} color="#0066FF" /> Dedicated Chemical Synthesis Specialist</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><Check size={18} color="#0066FF" /> 24/7 SLA Guarantee & Cleanroom Audit</li>
            </ul>
          </div>

          {isSubscriptionActive('enterprise') ? (
            <div style={activeBadgeStyle}>
              <CheckCircle2 size={18} color="#10B981" /> Active Subscription (Valid until {formatExpiry(currentUser.subscription_end)})
            </div>
          ) : (
            <button onClick={() => handleSelectTier('enterprise')} style={btnStyle}>
              Subscribe Enterprise ($500/mo)
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const activeBadgeStyle = {
  width: '100%',
  padding: '0.85rem',
  background: '#e6f4ea',
  border: '1px solid #10B981',
  color: '#065f46',
  borderRadius: '9999px',
  fontWeight: 700,
  fontSize: '0.85rem',
  display: 'flex',
  alignItems: 'center',
  justify: 'center',
  gap: '0.4rem',
  boxSizing: 'border-box'
};

const btnStyle = {
  width: '100%',
  padding: '0.85rem',
  background: 'transparent',
  border: '2px solid #0066FF',
  color: '#0066FF',
  borderRadius: '9999px',
  fontWeight: 700,
  fontSize: '0.95rem',
  cursor: 'pointer',
  transition: 'all 0.3s'
};

const btnStylePrimary = {
  width: '100%',
  padding: '0.85rem',
  background: '#0066FF',
  border: 'none',
  color: '#ffffff',
  borderRadius: '9999px',
  fontWeight: 700,
  fontSize: '0.95rem',
  cursor: 'pointer',
  boxShadow: '0 4px 15px rgba(0, 102, 255, 0.3)',
  transition: 'all 0.3s'
};

export const ShopPage = ShopPageComponent;
export default ShopPageComponent;
