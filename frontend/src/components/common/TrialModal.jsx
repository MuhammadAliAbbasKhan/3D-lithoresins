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
      background: 'rgba(11, 15, 51, 0.7)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '1rem',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '500px',
        maxHeight: '90vh',
        overflowY: 'auto',
        borderRadius: '20px',
        padding: '2.5rem 2rem',
        position: 'relative',
        background: '#ffffff',
        border: '1px solid #E5E7EB',
        boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
        color: '#0B0F33',
        boxSizing: 'border-box'
      }}>
        {/* Touch-Friendly Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Trial Modal"
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: '#f3f4f6',
            border: 'none',
            color: '#4B5563',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            zIndex: 10
          }}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
          <Sparkles size={26} color="#0066FF" />
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0B0F33' }}>Free 14-Day Evaluation License</h3>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div>
            <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>
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
            <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>
              Institutional / Corporate Email *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="a.schmidt@kit.edu"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>
              Organization / Lab Name *
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
            <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>
              Software Suite Package
            </label>
            <select
              value={softwareChoice}
              onChange={e => setSoftwareChoice(e.target.value)}
              style={inputStyle}>
              <option value="3D lithoResins Studio 2026">3D lithoResins Studio 2026</option>
              <option value="DeScribeX CAD Converter">DeScribeX CAD Converter</option>
              <option value="GrayScribeX 2.5D Module">GrayScribeX 2.5D Module</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>
              Research Application Notes
            </label>
            <textarea
              rows={3}
              value={comments}
              onChange={e => setComments(e.target.value)}
              placeholder="Describe target feature size, laser parameters or photoresin requirements..."
              style={{ ...inputStyle, resize: 'none' }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.9rem',
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
            <Send size={18} /> {loading ? 'Requesting License...' : 'Submit Evaluation Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: '#ffffff',
  border: '1px solid #E5E7EB',
  borderRadius: '10px',
  color: '#0B0F33',
  fontSize: '0.9rem',
  outline: 'none',
  boxSizing: 'border-box'
};
