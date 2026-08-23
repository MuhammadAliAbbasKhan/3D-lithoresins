import React from 'react';
import { ShieldCheck, FileText, ArrowLeft } from 'lucide-react';

const LegalPageComponent = ({ type = 'legal-notice', setCurrentPage }) => {
  const titles = {
    'legal-notice': 'Legal Notice (Impressum)',
    'privacy-statement': 'Privacy Statement & GDPR Policy',
    'terms-conditions': 'Terms & Conditions of Sale',
    'service-specification': 'Service Specifications & Standards',
    'how-to-order': 'How to Order & Delivery Policy'
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem 5rem 2rem' }}>
      <button onClick={() => setCurrentPage('home')} className="btn-outline" style={{ marginBottom: '2rem', fontSize: '0.85rem' }}>
        <ArrowLeft size={14} /> Back to Home
      </button>

      <div className="glass-panel" style={{ borderRadius: '16px', padding: '3rem', color: '#cbd5e1', lineHeight: 1.7 }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', borderBottom: '1px solid rgba(0, 242, 254, 0.2)', paddingBottom: '1rem' }}>
          {titles[type] || 'Legal Information'}
        </h1>

        {type === 'legal-notice' && (
          <div>
            <h3 style={{ color: '#00f2fe', marginTop: '1rem' }}>Information according to § 5 TMG</h3>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>3D lithoResins GmbH</strong><br />
              Hermann-von-Helmholtz-Platz 6<br />
              76344 Eggenstein-Leopoldshafen, Germany
            </p>
            <h4 style={{ color: '#ffffff', marginTop: '1.5rem' }}>Represented by:</h4>
            <p>Dr. Elena Vance, Managing Director</p>
            <h4 style={{ color: '#ffffff', marginTop: '1.5rem' }}>Register Entry:</h4>
            <p>Entry in Handelsregister. Registering Court: Amtsgericht Mannheim. Registration Number: HRB 709821.</p>
            <h4 style={{ color: '#ffffff', marginTop: '1.5rem' }}>VAT ID:</h4>
            <p>Value added tax identification number according to §27 a Umsatzsteuergesetz: DE 312 984 551.</p>
          </div>
        )}

        {type === 'privacy-statement' && (
          <div>
            <h3 style={{ color: '#00f2fe', marginTop: '1rem' }}>General Data Protection Regulation (GDPR) Compliance</h3>
            <p style={{ marginTop: '0.5rem' }}>
              We take the protection of your personal data very seriously. All telemetry data from 2PP simulation sessions, user subscription accounts, and custom synthesis inquiries are encrypted using TLS 1.3 and stored in compliance with EU regulations.
            </p>
          </div>
        )}

        {type === 'terms-conditions' && (
          <div>
            <h3 style={{ color: '#00f2fe', marginTop: '1rem' }}>Standard Terms of Chemical Supply & Software Licensing</h3>
            <p style={{ marginTop: '0.5rem' }}>
              All photoresin products (IP-Dip, IP-L, BioResin) are supplied for authorized laboratory research and cleanroom production under strict chemical handling protocols.
            </p>
          </div>
        )}

        {type === 'service-specification' && (
          <div>
            <h3 style={{ color: '#00f2fe', marginTop: '1rem' }}>2PP Laser Resolution & Tolerances</h3>
            <p style={{ marginTop: '0.5rem' }}>
              Sub-micron features are guaranteed within +/- 5% voxel dimensional tolerance when operated under specified laser power and objective numerical aperture.
            </p>
          </div>
        )}

        {type === 'how-to-order' && (
          <div>
            <h3 style={{ color: '#00f2fe', marginTop: '1rem' }}>Order Processing & Cold-Chain Shipping</h3>
            <p style={{ marginTop: '0.5rem' }}>
              IP-Photoresins are shipped in UV-opaque amber glass bottles with cold-chain gel packs (+4°C) to ensure chemical stability.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export const LegalPage = LegalPageComponent;
export default LegalPageComponent;