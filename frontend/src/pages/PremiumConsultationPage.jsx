import React, { useState } from 'react';
import { Sparkles, Send, Lock } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';

const PremiumConsultationPageComponent = ({ currentUser, onOpenAuth }) => {
  const [projectTitle, setProjectTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [serviceType, setServiceType] = useState('2PP Custom Synthesis');
  const [industry, setIndustry] = useState('Micro-Optics');
  const [wavelength, setWavelength] = useState('780 nm Femtosecond');
  const [systemSpecs, setSystemSpecs] = useState('');
  const [loading, setLoading] = useState(false);

  const { handleDjangoMessages, addToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      onOpenAuth();
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post('/api/v1/service-requests/', {
        user_name: currentUser.username,
        user_email: currentUser.email,
        company_name: companyName || 'N/A',
        project_title: projectTitle,
        service_type: serviceType,
        industry,
        wavelength_range: wavelength,
        system_specifications: systemSpecs
      });
      handleDjangoMessages(res.data.messages);
      if (res.data.success) {
        setProjectTitle('');
        setCompanyName('');
        setSystemSpecs('');
      }
    } catch (err) {
      addToast('Failed to submit technical specification.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 2rem 8rem 2rem', background: '#ffffff', color: '#0B0F33' }}>
      <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#0066FF', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', padding: '0.4rem 1.2rem', borderRadius: '9999px', background: '#e6f0ff', border: '1px solid #0066FF', marginBottom: '1.2rem' }}>
          <Sparkles size={16} /> NANOFABRICATION TECHNICAL SPEC BUILDER
        </div>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0B0F33', lineHeight: 1.25, marginBottom: '1rem' }}>
          Custom Photoresin & Nanolithography Spec Builder
        </h1>
        <p style={{ color: '#4B5563', maxWidth: '780px', margin: '0.8rem auto 0 auto', fontSize: '1.15rem', lineHeight: 1.8 }}>
          Submit tailored optical parameters for custom chemical synthesis, sub-micron galvo tuning, or microfluidic prototyping.
        </p>
      </div>

      {!currentUser ? (
        <div style={{ borderRadius: '24px', padding: '4rem 3rem', textAlign: 'center', maxWidth: '650px', margin: '0 auto', background: '#f8faff', border: '1px solid #E5E7EB', boxShadow: '0 8px 25px rgba(0,0,0,0.05)' }}>
          <Lock size={42} color="#0066FF" style={{ marginBottom: '1.5rem' }} />
          <h3 style={{ fontSize: '1.8rem', color: '#0B0F33', fontWeight: 800, marginBottom: '0.8rem' }}>
            🔒 Premium Access Required
          </h3>
          <p style={{ color: '#4B5563', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Please sign in or register an account to access the interactive technical specification builder.
          </p>
          <button onClick={onOpenAuth} style={{ padding: '0.9rem 2.2rem', fontSize: '1rem', background: '#0066FF', color: 'white', border: 'none', borderRadius: '9999px', fontWeight: 700, cursor: 'pointer' }}>
            Sign In / Register Account
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ borderRadius: '24px', padding: '3.5rem 3rem', display: 'flex', flexDirection: 'column', gap: '1.8rem', background: '#f8faff', border: '1px solid #E5E7EB', boxShadow: '0 8px 25px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>Project Title *</label>
              <input type="text" required value={projectTitle} onChange={e => setProjectTitle(e.target.value)} placeholder="e.g. Freeform DOE Array Synthesis" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>Company / Institution *</label>
              <input type="text" required value={companyName} onChange={e => setCompanyName(e.target.value)} placeholder="e.g. Max Planck Institute" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>Service Type</label>
              <select value={serviceType} onChange={e => setServiceType(e.target.value)} style={inputStyle}>
                <option value="2PP Custom Synthesis">2PP Custom Synthesis</option>
                <option value="Cleanroom Micro-Optics">Cleanroom Micro-Optics</option>
                <option value="Bio-Scaffold 3D Printing">Bio-Scaffold 3D Printing</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>Industry Domain</label>
              <select value={industry} onChange={e => setIndustry(e.target.value)} style={inputStyle}>
                <option value="Micro-Optics">Micro-Optics</option>
                <option value="Life Sciences">Life Sciences</option>
                <option value="Semiconductors">Semiconductors</option>
                <option value="MEMS">MEMS</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>Laser Wavelength</label>
              <input type="text" value={wavelength} onChange={e => setWavelength(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', color: '#0B0F33', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>System Specifications & Target CAD Parameters *</label>
            <textarea rows={6} required value={systemSpecs} onChange={e => setSystemSpecs(e.target.value)} placeholder="Specify required refractive index, NA of objective lens, laser pulse energy, substrate material (fused silica, silicon)..." style={{ ...inputStyle, resize: 'none' }} />
          </div>

          <button type="submit" disabled={loading} style={{ padding: '0.95rem', fontSize: '1rem', background: '#0066FF', color: 'white', border: 'none', borderRadius: '9999px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
            <Send size={18} /> {loading ? 'Submitting Specification...' : 'Submit Technical Specification'}
          </button>
        </form>
      )}
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

export const PremiumConsultationPage = PremiumConsultationPageComponent;
export default PremiumConsultationPageComponent;
