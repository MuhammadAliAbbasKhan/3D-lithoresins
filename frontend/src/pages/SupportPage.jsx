import React, { useState } from 'react';
import { HelpCircle, BookOpen, Send, FileText, Video } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';

const SupportPageComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const { handleDjangoMessages, addToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('/api/v1/inquiries/', { name, email, subject, message });
      handleDjangoMessages(res.data.messages);
      if (res.data.success) {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    } catch (err) {
      addToast('Failed to send contact inquiry.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      q: 'What laser wavelength is required for 3D lithoResins photopolymerization?',
      a: 'Our IP-Photoresins are designed primarily for Two-Photon Polymerization (2PP) using 780nm femtosecond lasers (~100fs pulse width, 80MHz repetition rate). Single-photon 405nm UV lasers can also be utilized for surface micro-patterning.'
    },
    {
      q: 'How are unexposed photoresins developed after 3D printing?',
      a: 'Substrates are immersed in PGMEA (Propylene Glycol Monomethyl Ether Acetate) or Isopropanol (IPA) for 10-20 minutes, followed by a gentle N2 blow-dry.'
    },
    {
      q: 'Are BioResin hydrogels suitable for live cell encapsulation?',
      a: 'Yes, BioResin hydrogels are non-cytotoxic and can be crosslinked in the presence of cell suspensions using visible light photoinitiators.'
    }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem 5rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#ffffff' }}>
          Support, Tutorials & Processing Handbook
        </h1>
        <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0.6rem auto 0 auto', fontSize: '1.05rem' }}>
          Expert nanolithography documentation, video guides, and technical support.
        </p>
      </div>

      {/* Resource Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
        <div className="glass-card" style={{ padding: '1.8rem' }}>
          <Video size={28} color="#00f2fe" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.5rem' }}>Video Tutorials</h3>
          <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5 }}>
            Step-by-step video guides covering galvo alignment, substrate preparation, and developmental wash protocols.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '1.8rem' }}>
          <BookOpen size={28} color="#7928ca" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.5rem' }}>2PP Processing Handbook</h3>
          <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5 }}>
            Comprehensive chemical safety data sheets (MSDS), optical dose formulas, and refractive index lookup tables.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '1.8rem' }}>
          <FileText size={28} color="#4facfe" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.5rem' }}>Changelog & Release Notes</h3>
          <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5 }}>
            Track latest updates to 3D lithoResins Studio software, physics engine algorithms, and new resin formulations.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="glass-panel" style={{ padding: '1.5rem', borderRadius: '10px' }}>
              <h4 style={{ color: '#00f2fe', fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem' }}>{faq.q}</h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="glass-panel" style={{ borderRadius: '16px', padding: '2.5rem', maxWidth: '700px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem', textAlign: 'center' }}>
          Contact Nanolithography Support
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', textAlign: 'center', marginBottom: '1.8rem' }}>
          Our chemical engineers and laser physics team respond within 24 hours.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>Your Name</label>
              <input type="text" required value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>Your Email</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>Subject</label>
            <input type="text" required value={subject} onChange={e => setSubject(e.target.value)} style={inputStyle} />
          </div>

          <div>
            <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>Message / Issue Details</label>
            <textarea rows={4} required value={message} onChange={e => setMessage(e.target.value)} style={{ ...inputStyle, resize: 'none' }} />
          </div>

          <button type="submit" disabled={loading} className="btn-cyan" style={{ justifyContent: 'center', padding: '0.8rem' }}>
            <Send size={16} /> {loading ? 'Sending Inquiry...' : 'Submit Technical Inquiry'}
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

export const SupportPage = SupportPageComponent;
export default SupportPageComponent;
