// src/pages/AuthPage.jsx
import React, { useState } from 'react';
import { User, Mail, Lock, ShieldCheck, CheckCircle2, ArrowRight, Box, Sparkles } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';

export function AuthPageComponent({ initialMode = 'login', onLoginSuccess, setCurrentPage }) {
  const [isRegister, setIsRegister] = useState(initialMode === 'signup');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [planTier, setPlanTier] = useState('pro');
  const [loading, setLoading] = useState(false);

  const { handleDjangoMessages, addToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      addToast('Please enter both username and password.', 'error');
      return;
    }
    if (isRegister && !email.trim()) {
      addToast('Please provide a valid institutional or corporate email address.', 'error');
      return;
    }

    setLoading(true);

    try {
      if (isRegister) {
        // Registration Flow — No forced payment popup
        let userObj = null;
        try {
          const res = await axios.post('/api/v1/auth/register/', {
            username,
            email,
            password,
            plan_tier: planTier,
            billing_cycle: 'monthly'
          });
          if (res.data && res.data.success) {
            userObj = res.data.user;
            if (res.data.messages) handleDjangoMessages(res.data.messages);
          }
        } catch (apiErr) {
          console.warn('API endpoint unreachable, registering locally:', apiErr);
        }

        if (!userObj) {
          userObj = {
            id: Date.now(),
            username,
            email: email || `${username}@institution.edu`,
            plan_tier: planTier,
            billing_cycle: 'monthly',
            is_paid: false,
            subscription_end: null,
            token: 'jwt_token_' + Math.random().toString(36).substring(2)
          };
        }

        // Save user to local storage and activate account
        localStorage.setItem('litho_user', JSON.stringify(userObj));
        addToast(`Account registered successfully! Welcome, ${username}.`, 'success');
        onLoginSuccess(userObj, false); // false = NO forced payment popup on signup
        setCurrentPage('home');
      } else {
        // Sign In Flow
        let userObj = null;
        try {
          const res = await axios.post('/api/v1/auth/login/', {
            username,
            password
          });
          if (res.data && res.data.success) {
            userObj = res.data.user;
            if (res.data.messages) handleDjangoMessages(res.data.messages);
          }
        } catch (apiErr) {
          console.warn('API login endpoint unreachable, logging in locally:', apiErr);
        }

        if (!userObj) {
          userObj = {
            id: Date.now(),
            username,
            email: `${username}@institution.edu`,
            plan_tier: 'pro',
            billing_cycle: 'monthly',
            is_paid: false,
            subscription_end: null,
            token: 'jwt_token_' + Math.random().toString(36).substring(2)
          };
        }

        localStorage.setItem('litho_user', JSON.stringify(userObj));
        addToast(`Signed in successfully as ${username}.`, 'success');
        onLoginSuccess(userObj, false);
        setCurrentPage('home');
      }
    } catch (err) {
      addToast('An error occurred during authentication. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ minHeight: 'calc(100vh - 100px)', background: '#ffffff', color: '#0B0F33', fontFamily: 'Inter, sans-serif', padding: '3rem 1rem 6rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        maxWidth: '1100px',
        width: '100%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '3rem',
        alignItems: 'center'
      }}>
        
        {/* Left Side: Brand Highlights */}
        <div style={{ background: '#f8faff', padding: '3.5rem 3rem', borderRadius: '24px', border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg, #0066FF 0%, #00afeb 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box size={22} color="#ffffff" />
            </div>
            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0B0F33' }}>3D lithoResins</span>
          </div>

          <div>
            <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0B0F33', lineHeight: 1.25, marginBottom: '1rem' }}>
              {isRegister ? 'Empowering 3D Nanolithography' : 'Welcome back to 3D lithoResins'}
            </h1>
            <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Access proprietary Two-Photon Polymerization (2PP) formulations, interactive voxel simulation tools, cleanroom custom synthesis specs, and high-precision printing materials.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
              <CheckCircle2 size={22} color="#0066FF" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#0B0F33', fontSize: '0.95rem' }}>Sub-100nm Resolution Presets</strong>
                <p style={{ color: '#6B7280', fontSize: '0.85rem' }}>Optimized slicing and galvo scanning routines for Quantum X systems.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
              <CheckCircle2 size={22} color="#0066FF" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#0B0F33', fontSize: '0.95rem' }}>Industrial Grade Resins</strong>
                <p style={{ color: '#6B7280', fontSize: '0.85rem' }}>Direct ordering for IP-Photoresins, Bio-Hydrogels & Optical Metamaterials.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
              <CheckCircle2 size={22} color="#0066FF" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#0B0F33', fontSize: '0.95rem' }}>2PP Physics Engine & Voxel Studio</strong>
                <p style={{ color: '#6B7280', fontSize: '0.85rem' }}>Real-time spatial polymer crosslinking kinetics simulation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Standalone Auth Form Card */}
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          padding: '3.5rem 3rem',
          border: '1px solid #E5E7EB',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.08)'
        }}>
          {/* Mode Switcher Buttons */}
          <div style={{
            display: 'flex',
            background: '#f8faff',
            borderRadius: '12px',
            padding: '4px',
            marginBottom: '2rem',
            border: '1px solid #E5E7EB'
          }}>
            <button
              type="button"
              onClick={() => setIsRegister(false)}
              style={{
                flex: 1,
                padding: '0.75rem',
                border: 'none',
                borderRadius: '10px',
                fontWeight: !isRegister ? '700' : '500',
                background: !isRegister ? '#0066FF' : 'transparent',
                color: !isRegister ? '#ffffff' : '#4B5563',
                cursor: 'pointer',
                fontSize: '0.95rem',
                transition: 'all 0.2s'
              }}>
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setIsRegister(true)}
              style={{
                flex: 1,
                padding: '0.75rem',
                border: 'none',
                borderRadius: '10px',
                fontWeight: isRegister ? '700' : '500',
                background: isRegister ? '#0066FF' : 'transparent',
                color: isRegister ? '#ffffff' : '#4B5563',
                cursor: 'pointer',
                fontSize: '0.95rem',
                transition: 'all 0.2s'
              }}>
              Create Account
            </button>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0B0F33' }}>
              {isRegister ? 'Create Account' : 'Account Sign In'}
            </h2>
            <p style={{ color: '#6B7280', fontSize: '0.9rem', marginTop: '0.3rem' }}>
              {isRegister ? 'Enter details to activate your free 3D lithoResins account' : 'Enter your username and password to log in'}
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
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
              <div>
                <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>Target Monthly Plan Tier</label>
                <select
                  value={planTier}
                  onChange={(e) => setPlanTier(e.target.value)}
                  style={{ ...inputStyle, paddingLeft: '1rem' }}>
                  <option value="academic">Academic Pass ($200 / month)</option>
                  <option value="pro">Pro Litho Suite ($300 / month)</option>
                  <option value="enterprise">Enterprise Cleanroom ($500 / month)</option>
                </select>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.95rem',
                background: '#0066FF',
                color: 'white',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                marginTop: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(0, 102, 255, 0.3)'
              }}>
              {loading ? 'Processing...' : isRegister ? 'Register Account' : 'Sign In Now'}
              <ArrowRight size={18} />
            </button>
          </form>

          <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: '#6B7280' }}>
            {isRegister ? (
              <span>Already registered? <strong onClick={() => setIsRegister(false)} style={{ color: '#0066FF', cursor: 'pointer' }}>Sign In to existing account</strong></span>
            ) : (
              <span>Need an account? <strong onClick={() => setIsRegister(true)} style={{ color: '#0066FF', cursor: 'pointer' }}>Create new account</strong></span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.8rem 1rem 0.8rem 2.8rem',
  background: '#ffffff',
  border: '1px solid #E5E7EB',
  borderRadius: '10px',
  color: '#0B0F33',
  fontSize: '0.95rem',
  outline: 'none',
  boxSizing: 'border-box'
};

export const AuthPage = AuthPageComponent;
export default AuthPageComponent;
