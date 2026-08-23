import React, { useState } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../../context/ToastContext';

export const TrialModal = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [softwareChoice, setSoftwareChoice] = useState('3D lithoResins Studio 2026');
  const [comments, setComments] = useState('');
  const [loading, setLoading] = useState(false);

  const { handleDjangoMessages, addToast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('/api/v1/trials/', {
        full_name: fullName,
        email,
        company,
        software_choice: softwareChoice,
        comments
      });
      handleDjangoMessages(res.data.messages);
      if (res.data.success) {
        onClose();
      }
    } catch (err) {
      addToast('Failed to request trial evaluation.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9200,
      background: 'rgba(5, 8, 17, 0.85)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '1rem'
    }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '500px',
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
          <Sparkles size={24} color="#00f2fe" />
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff' }}>Free 14-Day Evaluation License</h3>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>
              Full Name *
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              placeholder="Dr. Alexander Schmidt"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>
              Institutional / Corporate Email *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="alexander@kit.edu"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>
              Institution / Company Name *
            </label>
            <input
              type="text"
              required
              value={company}
              onChange={e => setCompany(e.target.value)}
              placeholder="Karlsruhe Institute of Technology (KIT)"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>
              Software Edition & Resins
            </label>
            <select
              value={softwareChoice}
              onChange={e => setSoftwareChoice(e.target.value)}
              style={inputStyle}>
              <option value="3D lithoResins Studio 2026">3D lithoResins Studio 2026 (Full Suite)</option>
              <option value="IP-Photoresins Evaluation Kit">IP-Photoresins Evaluation Kit</option>
              <option value="BioResin 3D Hydrogel SDK">BioResin 3D Hydrogel SDK</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>
              Project Notes & Substrate Requirements
            </label>
            <textarea
              rows={3}
              value={comments}
              onChange={e => setComments(e.target.value)}
              placeholder="Describe your microfabrication application (e.g. microlens arrays, photonic crystals)..."
              style={{ ...inputStyle, resize: 'none' }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-cyan"
            style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '0.75rem' }}>
            <Send size={16} />
            {loading ? 'Submitting Evaluation Request...' : 'Submit Evaluation Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.65rem',
  background: 'rgba(5, 8, 17, 0.6)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '0.9rem',
  outline: 'none'
};
