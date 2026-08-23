import React from 'react';
import { LithoResinCanvas } from '../components/simulation/LithoResinCanvas';
import { Cpu, Sparkles, BookOpen, Layers, Zap } from 'lucide-react';

const DesignerPageComponent = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem 5rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#00f2fe', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
          <Cpu size={16} /> INTERACTIVE SIMULATION STUDIO
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff' }}>
          2PP Photopolymerization & Voxel Tuning Studio
        </h1>
        <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0.5rem auto 0 auto', fontSize: '1rem' }}>
          Simulate galvo scanning trajectory, femtosecond laser pulse absorption, and sub-micron polymer voxel crosslinking kinetics.
        </p>
      </div>

      <LithoResinCanvas />

      {/* Physics Principles Panel */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
        <div className="glass-panel" style={{ padding: '1.8rem', borderRadius: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <Zap size={20} color="#00f2fe" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>Two-Photon Absorption (TPA)</h3>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>
            Nonlinear excitation occurs exclusively at the tightly focused focal spot where photon density exceeds the threshold $I^2$. This enables true 3D spatial confinement without out-of-focus polymerization.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1.8rem', borderRadius: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <Layers size={20} color="#7928ca" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>Dip-in Laser Lithography (DiLL)</h3>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>
            The objective lens is directly immersed into the photoresin liquid, eliminating spherical aberrations from cover glass interfaces and enabling millimeter-scale print heights with sub-200nm resolution.
          </p>
        </div>
      </div>
    </div>
  );
};

export const DesignerPage = DesignerPageComponent;
export default DesignerPageComponent;
