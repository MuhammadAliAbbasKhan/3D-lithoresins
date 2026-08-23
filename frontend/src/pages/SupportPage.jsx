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
    <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '5rem 2rem 8rem 2rem', background: '#ffffff', color: '#0B0F33' }}>
      <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
        <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '9999px', background: '#e6f0ff', border: '1px solid #0066FF', color: '#0066FF', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.2rem' }}>
          Documentation & Helpdesk
        </div>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0B0F33', lineHeight: 1.25, marginBottom: '1rem' }}>
          Support, Tutorials & Processing Handbook
        </h1>
        <p style={{ color: '#4B5563', maxWidth: '780px', margin: '0.8rem auto 0 auto', fontSize: '1.15rem', lineHeight: 1.8 }}>
          Expert nanolithography documentation, video guides, chemical safety specs, and 24/7 technical support.
        </p>
      </div>

      {/* Resource Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '5rem' }}>
        <div style={{ padding: '2.5rem', borderRadius: '20px', background: '#f8faff', border: '1px solid #E5E7EB', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
          <Video size={32} color="#0066FF" style={{ marginBottom: '1.2rem' }} />
          <h3 style={{ fontSize: '1.4rem', color: '#0B0F33', fontWeight: 700, marginBottom: '0.8rem' }}>Video Tutorials</h3>
          <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: 1.7 }}>
            Step-by-step video guides covering galvo alignment, substrate preparation, and developmental wash protocols.
          </p>
        </div>

        <div style={{ padding: '2.5rem', borderRadius: '20px', background: '#f8faff', border: '1px solid #E5E7EB', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
          <BookOpen size={32} color="#7928ca" style={{ marginBottom: '1.2rem' }} />
          <h3 style={{ fontSize: '1.4rem', color: '#0B0F33', fontWeight: 700, marginBottom: '0.8rem' }}>2PP Processing Handbook</h3>
          <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: 1.7 }}>
            Comprehensive chemical safety data sheets (MSDS), optical dose formulas, and refractive index lookup tables.
          </p>
        </div>

        <div style={{ padding: '2.5rem', borderRadius: '20px', background: '#f8faff', border: '1px solid #E5E7EB', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
          <FileText size={32} color="#0066FF" style={{ marginBottom: '1.2rem' }} />
          <h3 style={{ fontSize: '1.4rem', color: '#0B0F33', fontWeight: 700, marginBottom: '0.8rem' }}>Changelog & Release Notes</h3>
          <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: 1.7 }}>
            Track latest updates to 3D lithoResins Studio software, physics engine algorithms, and new resin formulations.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0B0F33', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ padding: '2rem 2.5rem', borderRadius: '16px', background: '#f8faff', border: '1px solid #E5E7EB' }}>
              <h4 style={{ color: '#0066FF', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.8rem' }}>{faq.q}</h4>
              <p style={{ color: '#4B5563', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div style={{ borderRadius: '24px', padding: '3.5rem 3rem', maxWidth: '800px', margin: '0 auto', background: '#f8faff', border: '1px solid #E5E7EB', boxShadow: '0 8px 25px rgba(0,0,0,0.05)' }}>
        <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#0B0F33', marginBottom: '0.6rem', textAlign: 'center' }}>
          Contact Nanolithography Support
        </h3>
        <p style={{ color: '#4B5563', fontSize: '1.05rem', textAlign: 'center', marginBottom: '2.5rem' }}>
          Our chemical engineers and laser physics team respond within 24 hours.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>Your Name *</label>
              <input type="text" required value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>Your Email *</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>Subject *</label>
            <input type="text" required value={subject} onChange={e => setSubject(e.target.value)} style={inputStyle} />
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>Message / Technical Inquiry *</label>
            <textarea rows={5} required value={message} onChange={e => setMessage(e.target.value)} style={{ ...inputStyle, resize: 'none' }} />
          </div>

          <button type="submit" disabled={loading} style={{
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
            gap: '0.5rem'
          }}>
            <Send size={18} /> {loading ? 'Sending Inquiry...' : 'Submit Technical Inquiry'}
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.8rem 1rem',
  background: '#ffffff',
  border: '1px solid #E5E7EB',
  borderRadius: '10px',
  color: '#0B0F33',
  fontSize: '0.95rem',
  outline: 'none'
};

export const SupportPage = SupportPageComponent;
export default SupportPageComponent;
