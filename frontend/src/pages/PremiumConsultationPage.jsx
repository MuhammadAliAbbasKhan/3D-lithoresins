import React, { useState } from 'react';
import { Sliders, Send, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
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
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 2rem 5rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#00f2fe', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
          <Sparkles size={16} /> NANOFABRICATION TECHNICAL SPEC BUILDER
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff' }}>
          Custom Photoresin & Nanolithography Spec Builder
        </h1>
        <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0.6rem auto 0 auto', fontSize: '1rem' }}>
          Submit tailored optical parameters for custom chemical synthesis, sub-micron galvo tuning, or microfluidic prototyping.
        </p>
      </div>

      {!currentUser ? (
        <div className="glass-panel" style={{ borderRadius: '16px', padding: '3rem', textAlign: 'center', maxWidth: '550px', margin: '0 auto' }}>
          <Lock size={36} color="#00f2fe" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.6rem' }}>
            🔒 Premium Access Required
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.8rem' }}>
            Please sign in or register an account to access the interactive technical specification builder.
          </p>
          <button onClick={onOpenAuth} className="btn-cyan" style={{ padding: '0.8rem 1.8rem' }}>
            Sign In / Register Account
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="glass-panel" style={{ borderRadius: '16px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
            <div>
              <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>Project Title *</label>
              <input type="text" required value={projectTitle} onChange={e => setProjectTitle(e.target.value)} placeholder="e.g. Freeform DOE Array Synthesis" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>Company / Institution *</label>
              <input type="text" required value={companyName} onChange={e => setCompanyName(e.target.value)} placeholder="e.g. Max Planck Institute" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>Service Type</label>
              <select value={serviceType} onChange={e => setServiceType(e.target.value)} style={inputStyle}>
                <option value="2PP Custom Synthesis">2PP Custom Synthesis</option>
                <option value="Cleanroom Micro-Optics">Cleanroom Micro-Optics</option>
                <option value="Bio-Scaffold 3D Printing">Bio-Scaffold 3D Printing</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>Industry Domain</label>
              <select value={industry} onChange={e => setIndustry(e.target.value)} style={inputStyle}>
                <option value="Micro-Optics">Micro-Optics</option>
                <option value="Life Sciences">Life Sciences</option>
                <option value="Semiconductors">Semiconductors</option>
                <option value="MEMS">MEMS</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>Laser Wavelength</label>
              <input type="text" value={wavelength} onChange={e => setWavelength(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.8rem', color: '#e2e8f0', display: 'block', marginBottom: '0.3rem' }}>System Specifications & Target CAD Parameters</label>
            <textarea rows={5} required value={systemSpecs} onChange={e => setSystemSpecs(e.target.value)} placeholder="Specify required refractive index, NA of objective lens, laser pulse energy, substrate material (fused silica, silicon)..." style={{ ...inputStyle, resize: 'none' }} />
          </div>

          <button type="submit" disabled={loading} className="btn-cyan" style={{ justifyContent: 'center', padding: '0.85rem' }}>
            <Send size={16} /> {loading ? 'Submitting Specification...' : 'Submit Technical Specification'}
          </button>
        </form>
      )}
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

export const PremiumConsultationPage = PremiumConsultationPageComponent;
export default PremiumConsultationPageComponent;
