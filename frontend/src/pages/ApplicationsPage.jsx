import React from 'react';
import { Eye, Cpu, Activity, Zap, Layers, ArrowRight } from 'lucide-react';

const ApplicationsPageComponent = ({ setCurrentPage }) => {
  const apps = [
    {
      title: 'Micro-Optics & Photonic Integrated Circuits',
      icon: <Eye size={28} color="#00f2fe" />,
      desc: 'Freeform micro-lenses, fiber couplers, diffractive optical elements (DOEs), and photonic crystal waveguides printed directly on chip facets with optical-quality surface roughness (Ra < 10nm).'
    },
    {
      title: 'Biofabrication & Cell Scaffolding',
      icon: <Activity size={28} color="#7928ca" />,
      desc: 'Biocompatible 3D hydrogel micro-matrices and porous scaffolds designed for cell culture, tissue engineering, and micro-vessel biomimicry.'
    },
    {
      title: 'Microfluidics & Organ-on-a-Chip',
      icon: <Layers size={28} color="#4facfe" />,
      desc: 'Complex 3D microfluidic channels, passive mixers, capillary pumps, and lab-on-a-chip fluidic manifolds fabricated in a single lithographic step.'
    },
    {
      title: 'MEMS & Micro-Mechanics',
      icon: <Cpu size={28} color="#00f2fe" />,
      desc: 'Ultra-precise mechanical metamaterials, compliant mechanisms, micro-grippers, and 3D spring resonators with sub-micron geometrical accuracy.'
    }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem 5rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#ffffff' }}>
          3D Nanolithography Applications
        </h1>
        <p style={{ color: '#94a3b8', maxWidth: '750px', margin: '0.6rem auto 0 auto', fontSize: '1.05rem' }}>
          Empowering cutting-edge research and industrial production across photonics, life sciences, and micro-engineering.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {apps.map((app, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '2.2rem' }}>
            <div style={{ marginBottom: '1.2rem' }}>{app.icon}</div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.8rem' }}>{app.title}</h3>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem' }}>{app.desc}</p>
            <button onClick={() => setCurrentPage('premium-consultation')} className="btn-outline" style={{ fontSize: '0.85rem' }}>
              Configure Technical Spec <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ApplicationsPage = ApplicationsPageComponent;
export default ApplicationsPageComponent;
