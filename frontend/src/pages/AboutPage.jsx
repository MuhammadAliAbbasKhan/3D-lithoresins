import React from 'react';
import { Award, ShieldCheck, MapPin, Users, Globe, Building2 } from 'lucide-react';

const AboutPageComponent = ({ onOpenTrial }) => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem 5rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#ffffff' }}>
          Who We Are — Pioneers in 3D Microfabrication
        </h1>
        <p style={{ color: '#94a3b8', maxWidth: '750px', margin: '0.6rem auto 0 auto', fontSize: '1.05rem' }}>
          3D lithoResins GmbH is a spin-off specialized in two-photon photopolymer formulations, laser optical CAD software, and sub-micron fabrication solutions inspired by Nanoscribe.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div className="glass-panel" style={{ padding: '2rem', borderRadius: '12px' }}>
          <Building2 size={32} color="#00f2fe" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem' }}>Cleanroom Facilities</h3>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>
            Our ISO 5 cleanroom laboratory in Eggenstein-Leopoldshafen near Karlsruhe is equipped with state-of-the-art chemical synthesis reactors and laser optics diagnostic benches.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '2rem', borderRadius: '12px' }}>
          <Users size={32} color="#7928ca" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem' }}>Interdisciplinary Team</h3>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>
            Founded by laser physicists, organic polymer chemists, and software engineers with decades of combined experience in 3D laser nanolithography.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '2rem', borderRadius: '12px' }}>
          <Globe size={32} color="#4facfe" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem' }}>Global Reach & Partners</h3>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>
            Partnered with leading research hubs including the Karlsruhe Institute of Technology (KIT), Ferdinand-Braun-Institut, OpTecBB, EPIC, and IVAM Microtechnology.
          </p>
        </div>
      </div>

      <div className="glass-panel" style={{ borderRadius: '16px', padding: '3rem', textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.8rem' }}>
          Ready to Explore 3D Laser Microfabrication?
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '2rem' }}>
          Request a free 14-day evaluation license or evaluate IP-Photoresin test kits in your cleanroom.
        </p>
        <button onClick={onOpenTrial} className="btn-cyan" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
          Request Evaluation Sample Kit
        </button>
      </div>
    </div>
  );
};

export const AboutPage = AboutPageComponent;
export default AboutPageComponent;
