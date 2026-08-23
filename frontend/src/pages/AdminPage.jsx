import React, { useState, useEffect } from 'react';
import { Shield, Key, Users, FileText, Activity, AlertCircle, CheckCircle } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';

const AdminPageComponent = () => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [analytics, setAnalytics] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.get('/api/v1/admin/analytics/', {
        headers: { 'X-Admin-Passcode': passcode }
      });
      if (res.data.success) {
        setIsAuthenticated(true);
        setAnalytics(res.data.analytics);
        fetchUsers(passcode);
        addToast('Admin console authenticated successfully.', 'success');
      }
    } catch (err) {
      addToast('Invalid admin passcode credential.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = (code) => {
    axios.get('/api/v1/admin/users/', {
      headers: { 'X-Admin-Passcode': code || passcode }
    }).then(res => {
      if (res.data.success) {
        setUsersList(res.data.users);
      }
    });
  };

  const handleUpdatePlan = (userId, newPlan) => {
    axios.post('/api/v1/admin/users/update-plan/', {
      user_id: userId,
      plan_tier: newPlan
    }, {
      headers: { 'X-Admin-Passcode': passcode }
    }).then(res => {
      if (res.data.success) {
        addToast(`Updated user plan to ${newPlan}`, 'success');
        fetchUsers(passcode);
      }
    });
  };

  if (!isAuthenticated) {
    return (
      <div style={{ maxWidth: '460px', margin: '5rem auto', padding: '0 1rem' }}>
        <div className="glass-panel" style={{ borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(0, 242, 254, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem auto' }}>
            <Shield size={30} color="#00f2fe" />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
            Admin Executive Passcode Gate
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1.8rem' }}>
            Enter your secret admin passcode to access telemetry & user databases
          </p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <Key size={16} color="#00f2fe" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="password"
                required
                value={passcode}
                onChange={e => setPasscode(e.target.value)}
                placeholder="Enter secret passcode"
                style={inputStyle}
              />
            </div>

            <button type="submit" disabled={loading} className="btn-cyan" style={{ justifyContent: 'center', padding: '0.75rem' }}>
              {loading ? 'Authenticating...' : 'Unlock Executive Console'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem 5rem 2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff' }}>
            Executive Control Console 🛡️
          </h1>
          <p style={{ color: '#00f2fe', fontSize: '0.9rem' }}>Dual SQLite & MongoDB Cloud Synchronization Active</p>
        </div>
        <button onClick={() => setIsAuthenticated(false)} className="btn-outline" style={{ fontSize: '0.85rem' }}>
          Lock Console
        </button>
      </div>

      {/* Analytics KPI Grid */}
      {analytics && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.4rem' }}>Total Registered Users</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#00f2fe' }}>{analytics.total_users}</div>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.4rem' }}>Active Resin Trial Requests</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#7928ca' }}>{analytics.active_trials}</div>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.4rem' }}>Technical Inquiries</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#4facfe' }}>{analytics.total_inquiries}</div>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.4rem' }}>Pending Service Requests</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#f59e0b' }}>{analytics.pending_services}</div>
          </div>
        </div>
      )}

      {/* User Subscriptions Table */}
      <div className="glass-panel" style={{ borderRadius: '14px', padding: '1.8rem', overflowX: 'auto' }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.2rem' }}>
          User Accounts & License Tiers
        </h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', color: '#e2e8f0' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left' }}>
              <th style={{ padding: '0.8rem' }}>Username</th>
              <th style={{ padding: '0.8rem' }}>Email</th>
              <th style={{ padding: '0.8rem' }}>Current Tier</th>
              <th style={{ padding: '0.8rem' }}>Payment Ref</th>
              <th style={{ padding: '0.8rem' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map(u => (
              <tr key={u.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '0.8rem', fontWeight: 600 }}>{u.username}</td>
                <td style={{ padding: '0.8rem', color: '#94a3b8' }}>{u.email}</td>
                <td style={{ padding: '0.8rem' }}>
                  <span style={{ background: 'rgba(0,242,254,0.15)', color: '#00f2fe', padding: '2px 8px', borderRadius: '4px', textTransform: 'capitalize' }}>
                    {u.plan_tier}
                  </span>
                </td>
                <td style={{ padding: '0.8rem', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                  {u.payment_reference || 'N/A'}
                </td>
                <td style={{ padding: '0.8rem' }}>
                  <select
                    value={u.plan_tier}
                    onChange={e => handleUpdatePlan(u.id, e.target.value)}
                    style={{ background: '#050811', color: '#ffffff', border: '1px solid #00f2fe', borderRadius: '4px', padding: '2px 6px', fontSize: '0.8rem' }}>
                    <option value="free">Free</option>
                    <option value="academic">Academic</option>
                    <option value="commercial">Commercial</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export const AdminPage = AdminPageComponent;
export default AdminPageComponent;
