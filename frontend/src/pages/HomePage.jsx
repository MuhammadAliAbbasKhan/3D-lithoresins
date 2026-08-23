import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Box, Layers, CheckCircle2, Zap } from 'lucide-react';
import { LithoResinCanvas } from '../components/simulation/LithoResinCanvas';

const HomePageComponent = ({ setCurrentPage, onOpenTrial, onOpenAuth }) => {
  return (
    <div style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Hero Banner Section */}
      <section style={{
        position: 'relative',
        padding: '5rem 2rem 3rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(0, 242, 254, 0.1)',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          borderRadius: '20px',
          padding: '0.4rem 1.2rem',
          fontSize: '0.85rem',
          color: '#00f2fe',
          marginBottom: '1.5rem'
        }}>
          <Sparkles size={16} /> Two-Photon Polymerization (2PP) Nanolithography
        </div>

        <h1 style={{
          fontSize: '3.2rem',
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: '1.2rem',
          letterSpacing: '-1px'
        }}>
          Sub-Micron 3D Lithography & <br />
          <span className="text-gradient">Photoresins Engineering</span>
        </h1>

        <p style={{
          fontSize: '1.15rem',
          color: '#94a3b8',
          maxWidth: '780px',
          margin: '0 auto 2.5rem auto',
          lineHeight: 1.6
        }}>
          3D lithoResins delivers ultra-high resolution photoresins, 2PP laser microfabrication tools, and real-time photopolymerization optics simulation modeled after Nanoscribe technology.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button onClick={() => setCurrentPage('designer')} className="btn-cyan" style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}>
            <Cpu size={18} /> Launch 2PP Simulator
          </button>
          <button onClick={onOpenTrial} className="btn-outline" style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}>
            Request Evaluation Sample
          </button>
        </div>
      </section>

      {/* Interactive Physics Canvas Demo Section */}
      <section style={{ maxWidth: '1100px', margin: '0 auto 4rem auto', padding: '0 1rem' }}>
        <LithoResinCanvas />
      </section>

      {/* Product Highlights Grid */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#ffffff' }}>
            High-Performance Photoresin Portfolio
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.5rem' }}>
            Tailored formulations for micro-optics, photonics, and bio-scaffold nanofabrication
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 242, 254, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
              <Box size={24} color="#00f2fe" />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem' }}>IP-Dip Photoresin</h3>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '1rem' }}>
              Liquid photoresin optimized for Dip-in Laser Lithography (DiLL) with sub-150nm feature resolution and index matching.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#00f2fe', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }} onClick={() => setCurrentPage('products')}>
              View Specifications <ArrowRight size={14} />
            </div>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(121, 40, 202, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
              <Layers size={24} color="#7928ca" />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem' }}>BioResin 3D Hydrogel</h3>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '1rem' }}>
              Cell-friendly, biocompatible hydrogel matrix engineered for 3D tissue scaffold printing and microfluidic organ-on-a-chip models.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#00f2fe', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }} onClick={() => setCurrentPage('products')}>
              View Specifications <ArrowRight size={14} />
            </div>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(79, 172, 254, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
              <Zap size={24} color="#4facfe" />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem' }}>Quantum-Index Resins</h3>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '1rem' }}>
              Titanium-oxide nanocomposite photoresins delivering high refractive index (n = 1.65) micro-lenses and wave-guides.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#00f2fe', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }} onClick={() => setCurrentPage('products')}>
              View Specifications <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const HomePage = HomePageComponent;
export default HomePageComponent;
