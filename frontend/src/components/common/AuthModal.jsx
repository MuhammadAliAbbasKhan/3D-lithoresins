import React, { useState } from 'react';
import { X, Lock, Mail, User, ShieldCheck } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../../context/ToastContext';

export const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [planTier, setPlanTier] = useState('academic');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [loading, setLoading] = useState(false);

  const { handleDjangoMessages, addToast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isRegister) {
        const res = await axios.post('/api/v1/auth/register/', {
          username,
          email,
          password,
          plan_tier: planTier,
          billing_cycle: billingCycle
        });
        handleDjangoMessages(res.data.messages);
        if (res.data.success) {
          onLoginSuccess(res.data.user, true); // true = triggers checkout
          onClose();
        }
      } else {
        const res = await axios.post('/api/v1/auth/login/', {
          username,
          password
        });
        handleDjangoMessages(res.data.messages);
        if (res.data.success) {
          onLoginSuccess(res.data.user, false);
          onClose();
        }
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.messages) {
        handleDjangoMessages(err.response.data.messages);
      } else {
        addToast('Authentication failed. Please check credentials.', 'error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9000,
      background: 'rgba(5, 8, 17, 0.85)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '1rem'
    }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '460px',
        borderRadius: '16px',
        padding: '2rem',
        position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer'
          }}>
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff' }}>
            {isRegister ? 'Create 3D lithoResins Account' : 'Sign In to 3D lithoResins'}
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.3rem' }}>
            {isRegister ? 'Select license tier and complete account registration' : 'Access your 2PP simulation projects and material orders'}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>
              Username
            </label>
            <div style={{ position: 'relative' }}>
              <User size={16} color="#00f2fe" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="text"
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter username"
                style={inputStyle}
              />
            </div>
          </div>

          {isRegister && (
            <div>
              <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} color="#00f2fe" style={{ position: 'absolute', left: '12px', top: '12px' }} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@institution.com"
                  style={inputStyle}
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="#00f2fe" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                style={inputStyle}
              />
            </div>
          </div>

          {isRegister && (
            <div>
              <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.4rem' }}>
                Select License Tier
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                <div
                  onClick={() => setPlanTier('academic')}
                  style={planTileStyle(planTier === 'academic')}>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>Academic</div>
                  <div style={{ fontSize: '0.75rem', color: '#00f2fe' }}>$149/mo</div>
                </div>
                <div
                  onClick={() => setPlanTier('commercial')}
                  style={planTileStyle(planTier === 'commercial')}>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>Commercial</div>
                  <div style={{ fontSize: '0.75rem', color: '#00f2fe' }}>$499/mo</div>
                </div>
                <div
                  onClick={() => setPlanTier('enterprise')}
                  style={planTileStyle(planTier === 'enterprise')}>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>Enterprise</div>
                  <div style={{ fontSize: '0.75rem', color: '#00f2fe' }}>$999/mo</div>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-cyan"
            style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '0.75rem' }}>
            {loading ? 'Processing...' : (isRegister ? 'Register & Upgrade Tier' : 'Sign In')}
          </button>

          <div style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
            {isRegister ? 'Already have an account? ' : "Don't have an account? "}
            <span
              onClick={() => setIsRegister(!isRegister)}
              style={{ color: '#00f2fe', cursor: 'pointer', fontWeight: 600 }}>
              {isRegister ? 'Sign In' : 'Register Here'}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.65rem 0.65rem 0.65rem 2.4rem',
  background: 'rgba(5, 8, 17, 0.6)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '0.9rem',
  outline: 'none'
};

const planTileStyle = (selected) => ({
  border: selected ? '2px solid #00f2fe' : '1px solid rgba(255,255,255,0.1)',
  background: selected ? 'rgba(0, 242, 254, 0.15)' : 'rgba(5, 8, 17, 0.4)',
  borderRadius: '8px',
  padding: '0.5rem',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s'
});
