import React, { useState } from 'react';
import { X, Lock, Mail, User, ShieldCheck } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../../context/ToastContext';

export const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [planTier, setPlanTier] = useState('pro');
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
          onLoginSuccess(res.data.user, true); // true = triggers checkout for paid plan
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
      background: 'rgba(11, 15, 51, 0.7)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '1rem'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '480px',
        borderRadius: '20px',
        padding: '2.5rem 2rem',
        position: 'relative',
        background: '#ffffff',
        border: '1px solid #E5E7EB',
        boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
        color: '#0B0F33'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: '#f3f4f6',
            border: 'none',
            color: '#4B5563',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justify: 'center'
          }}>
          <X size={18} />
        </button>

        {/* Tab Switcher */}
        <div style={{
          display: 'flex',
          background: '#f8faff',
          borderRadius: '10px',
          padding: '4px',
          marginBottom: '1.8rem',
          border: '1px solid #E5E7EB'
        }}>
          <button
            onClick={() => setIsRegister(false)}
            style={{
              flex: 1,
              padding: '0.6rem',
              border: 'none',
              borderRadius: '8px',
              fontWeight: !isRegister ? '700' : '500',
              background: !isRegister ? '#0066FF' : 'transparent',
              color: !isRegister ? '#ffffff' : '#4B5563',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.2s'
            }}>
            Sign In
          </button>
          <button
            onClick={() => setIsRegister(true)}
            style={{
              flex: 1,
              padding: '0.6rem',
              border: 'none',
              borderRadius: '8px',
              fontWeight: isRegister ? '700' : '500',
              background: isRegister ? '#0066FF' : 'transparent',
              color: isRegister ? '#ffffff' : '#4B5563',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.2s'
            }}>
            Create Account
          </button>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0B0F33' }}>
            {isRegister ? 'Create 3D lithoResins Account' : 'Sign In to 3D lithoResins'}
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#6B7280', marginTop: '0.4rem' }}>
            {isRegister ? 'Register to unlock premium CAD spec tools & 2PP simulator' : 'Access your premium license & custom resin orders'}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div>
            <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>Username *</label>
            <div style={{ position: 'relative' }}>
              <User size={18} color="#0066FF" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                style={inputStyle}
              />
            </div>
          </div>

          {isRegister && (
            <div>
              <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>Email Address *</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} color="#0066FF" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@institution.com"
                  style={inputStyle}
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>Password *</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} color="#0066FF" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={inputStyle}
              />
            </div>
          </div>

          {isRegister && (
            <>
              <div>
                <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>License Tier</label>
                <select
                  value={planTier}
                  onChange={(e) => setPlanTier(e.target.value)}
                  style={{ ...inputStyle, paddingLeft: '1rem' }}>
                  <option value="academic">Academic Pass ($499 / mo)</option>
                  <option value="pro">Pro Litho Suite ($1,299 / mo)</option>
                  <option value="enterprise">Enterprise Cleanroom ($2,999 / mo)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>Billing Frequency</label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#4B5563', cursor: 'pointer' }}>
                    <input type="radio" name="billing" value="monthly" checked={billingCycle === 'monthly'} onChange={() => setBillingCycle('monthly')} accentColor="#0066FF" /> Monthly
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#4B5563', cursor: 'pointer' }}>
                    <input type="radio" name="billing" value="yearly" checked={billingCycle === 'yearly'} onChange={() => setBillingCycle('yearly')} accentColor="#0066FF" /> Yearly (Save 20%)
                  </label>
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.85rem',
              background: '#0066FF',
              color: 'white',
              border: 'none',
              borderRadius: '9999px',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              marginTop: '0.5rem',
              boxShadow: '0 4px 15px rgba(0, 102, 255, 0.3)'
            }}>
            {loading ? 'Processing...' : isRegister ? 'Proceed to Account Activation' : 'Sign In Now'}
          </button>
        </form>

        <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.85rem', color: '#6B7280' }}>
          {isRegister ? (
            <span>Already registered? <strong onClick={() => setIsRegister(false)} style={{ color: '#0066FF', cursor: 'pointer' }}>Sign In</strong></span>
          ) : (
            <span>Need an account? <strong onClick={() => setIsRegister(true)} style={{ color: '#0066FF', cursor: 'pointer' }}>Create Account</strong></span>
          )}
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem 0.75rem 2.8rem',
  background: '#ffffff',
  border: '1px solid #E5E7EB',
  borderRadius: '10px',
  color: '#0B0F33',
  fontSize: '0.9rem',
  outline: 'none'
};
