import React, { useState } from 'react';
import { Check, ShieldCheck, Zap, Sparkles } from 'lucide-react';

const ShopPageComponent = ({ onOpenAuth, currentUser, onOpenCheckout }) => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleSelectTier = (tier) => {
    if (!currentUser) {
      onOpenAuth();
    } else {
      onOpenCheckout();
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem 5rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#ffffff' }}>
          Licensing & Resins Subscription Pricing
        </h1>
        <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0.6rem auto 0 auto', fontSize: '1.05rem' }}>
          Flexible software subscription plans and material bundles for academic labs and industrial cleanrooms.
        </p>

        {/* Monthly / Yearly Toggle */}
        <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '10px', border: '1px solid rgba(0, 242, 254, 0.3)', marginTop: '1.8rem' }}>
          <button
            onClick={() => setBillingCycle('monthly')}
            style={{
              background: billingCycle === 'monthly' ? '#00f2fe' : 'transparent',
              color: billingCycle === 'monthly' ? '#050811' : '#94a3b8',
              border: 'none',
              padding: '0.5rem 1.2rem',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer'
            }}>Monthly Billing</button>
          <button
            onClick={() => setBillingCycle('yearly')}
            style={{
              background: billingCycle === 'yearly' ? '#00f2fe' : 'transparent',
              color: billingCycle === 'yearly' ? '#050811' : '#94a3b8',
              border: 'none',
              padding: '0.5rem 1.2rem',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer'
            }}>Yearly (Save 20%)</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Academic Tier */}
        <div className="glass-card" style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>Academic License</h3>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.5rem' }}>For university research labs & educational cleanrooms</p>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#00f2fe', marginBottom: '1.5rem' }}>
              ${billingCycle === 'yearly' ? '119' : '149'} <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 400 }}>/ mo</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '2rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00f2fe" /> Single User Desktop License</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00f2fe" /> 2PP Physics Engine & Voxel Studio</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00f2fe" /> Standard Photoresin Presets (IP-Dip)</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00f2fe" /> Academic Forum & Email Support</li>
            </ul>
          </div>

          <button onClick={() => handleSelectTier('academic')} className="btn-cyan" style={{ width: '100%', justifyContent: 'center' }}>
            Subscribe Academic
          </button>
        </div>

        {/* Commercial Tier */}
        <div className="glass-card" style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '2px solid #00f2fe', boxShadow: '0 0 25px rgba(0,242,254,0.3)' }}>
          <div>
            <div style={{ background: '#00f2fe', color: '#050811', fontWeight: 700, fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', display: 'inline-block', marginBottom: '0.8rem' }}>MOST POPULAR</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>Commercial R&D</h3>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.5rem' }}>For corporate R&D & optics manufacturing</p>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#00f2fe', marginBottom: '1.5rem' }}>
              ${billingCycle === 'yearly' ? '399' : '499'} <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 400 }}>/ mo</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '2rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00f2fe" /> 5 Multi-Seat Floating Licenses</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00f2fe" /> Full Photoresin Catalog & Custom Formulation</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00f2fe" /> Dual SQLite + MongoDB Cloud Sync</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00f2fe" /> Priority Technical Telemetry Support</li>
            </ul>
          </div>

          <button onClick={() => handleSelectTier('commercial')} className="btn-cyan" style={{ width: '100%', justifyContent: 'center' }}>
            Subscribe Commercial
          </button>
        </div>

        {/* Enterprise Tier */}
        <div className="glass-card" style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>Enterprise Industrial</h3>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.5rem' }}>For high-volume cleanrooms & semiconductor fabs</p>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#00f2fe', marginBottom: '1.5rem' }}>
              ${billingCycle === 'yearly' ? '799' : '999'} <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 400 }}>/ mo</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '2rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00f2fe" /> Unlimited Organization Licenses</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00f2fe" /> On-Premise API & Custom Physics Engine</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00f2fe" /> Dedicated Chemical Synthesis Specialist</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00f2fe" /> 24/7 SLA Guarantee & Cleanroom Audit</li>
            </ul>
          </div>

          <button onClick={() => handleSelectTier('enterprise')} className="btn-cyan" style={{ width: '100%', justifyContent: 'center' }}>
            Subscribe Enterprise
          </button>
        </div>
      </div>
    </div>
  );
};

export const ShopPage = ShopPageComponent;
export default ShopPageComponent;
