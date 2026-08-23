import React from 'react';
import { Building2, Users, Globe } from 'lucide-react';

const AboutPageComponent = ({ onOpenTrial }) => {
  return (
    <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '5rem 2rem 8rem 2rem', background: '#ffffff', color: '#0B0F33' }}>
      <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
        <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '9999px', background: '#e6f0ff', border: '1px solid #0066FF', color: '#0066FF', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.2rem' }}>
          About Our Organization
        </div>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0B0F33', lineHeight: 1.25, marginBottom: '1rem' }}>
          Who We Are — Pioneers in 3D Microfabrication
        </h1>
        <p style={{ color: '#4B5563', maxWidth: '820px', margin: '0.8rem auto 0 auto', fontSize: '1.15rem', lineHeight: 1.8 }}>
          3D lithoResins GmbH is a specialized team focused on two-photon photopolymer formulations, laser optical CAD software, and sub-micron fabrication solutions inspired by Nanoscribe.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem', marginBottom: '5rem' }}>
        <div style={{ padding: '2.8rem', borderRadius: '20px', background: '#f8faff', border: '1px solid #E5E7EB', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
          <Building2 size={36} color="#0066FF" style={{ marginBottom: '1.2rem' }} />
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0B0F33', marginBottom: '0.8rem' }}>Cleanroom Facilities</h3>
          <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: 1.8 }}>
            Our ISO 5 cleanroom laboratory in Eggenstein-Leopoldshafen near Karlsruhe is equipped with state-of-the-art chemical synthesis reactors and laser optics diagnostic benches.
          </p>
        </div>

        <div style={{ padding: '2.8rem', borderRadius: '20px', background: '#f8faff', border: '1px solid #E5E7EB', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
          <Users size={36} color="#7928ca" style={{ marginBottom: '1.2rem' }} />
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0B0F33', marginBottom: '0.8rem' }}>Interdisciplinary Team</h3>
          <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: 1.8 }}>
            Founded by laser physicists, organic polymer chemists, and software engineers with decades of combined experience in 3D laser nanolithography.
          </p>
        </div>

        <div style={{ padding: '2.8rem', borderRadius: '20px', background: '#f8faff', border: '1px solid #E5E7EB', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
          <Globe size={36} color="#0066FF" style={{ marginBottom: '1.2rem' }} />
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0B0F33', marginBottom: '0.8rem' }}>Global Reach & Partners</h3>
          <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: 1.8 }}>
            Partnered with leading research hubs including the Karlsruhe Institute of Technology (KIT), Ferdinand-Braun-Institut, OpTecBB, EPIC, and IVAM Microtechnology.
          </p>
        </div>
      </div>

      <div style={{ borderRadius: '24px', padding: '4rem 3rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto', background: '#f8faff', border: '1px solid #E5E7EB', boxShadow: '0 8px 25px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0B0F33', marginBottom: '1rem' }}>
          Ready to Explore 3D Laser Microfabrication?
        </h2>
        <p style={{ color: '#4B5563', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Request a free 14-day evaluation license or evaluate IP-Photoresin test kits in your cleanroom.
        </p>
        <button onClick={onOpenTrial} style={{
          padding: '1rem 2.5rem',
          fontSize: '1.05rem',
          background: '#0066FF',
          color: 'white',
          border: 'none',
          borderRadius: '9999px',
          fontWeight: 700,
          cursor: 'pointer'
        }}>
          Request Evaluation Sample Kit
        </button>
      </div>
    </div>
  );
};

export const AboutPage = AboutPageComponent;
export default AboutPageComponent;
