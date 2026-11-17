// src/components/common/Footer.jsx
import React from 'react';
import { Mail, MapPin, Phone, ExternalLink, ShieldCheck, Award, Box } from 'lucide-react';

export function FooterComponent({ setCurrentPage = () => {} }) {
  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#070b14',
      borderTop: '1px solid rgba(0, 242, 254, 0.25)',
      color: '#e2e8f0',
      paddingTop: '4.5rem',
      fontSize: '0.9rem'
    }}>
      {/* Main Footer Grid Content */}
      <div style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '0 2rem 4rem 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '3rem'
      }}>
        {/* Column 1: Brand & Headquarters */}
        <div>
          <div 
            onClick={() => navigate('home')} 
            style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', marginBottom: '1.2rem' }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #00f2fe 0%, #7928ca 100%)',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              boxShadow: '0 0 15px rgba(0, 242, 254, 0.5)'
            }}>
              <Box size={24} color="#ffffff" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
              3D lithoResins
            </div>
          </div>

          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Next-generation two-photon photopolymer formulations, galvo laser optical CAD software, and 3D nanolithography solutions.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <MapPin size={16} color="#00f2fe" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span>Address coming soon</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Phone size={16} color="#00f2fe" />
              <span>Phone coming soon</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Mail size={16} color="#00f2fe" />
              <span>Email coming soon</span>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation & Quick Links */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.2rem', letterSpacing: '0.5px' }}>
            QUICK NAVIGATION
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
            <li onClick={() => navigate('home')} style={footerLinkStyle}>Home & Overview</li>
            <li onClick={() => navigate('products')} style={footerLinkStyle}>Photoresin Catalog</li>
            <li onClick={() => navigate('designer')} style={footerLinkStyle}>2PP Physics Engine Studio</li>
            <li onClick={() => navigate('applications')} style={footerLinkStyle}>Micro-Optics & Biofabrication</li>
            <li onClick={() => navigate('shop')} style={footerLinkStyle}>Resin & License Shop</li>
            <li onClick={() => navigate('premium-consultation')} style={footerLinkStyle}>Technical Spec Builder</li>
          </ul>
        </div>

        {/* Column 3: Legal & Policies */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.2rem', letterSpacing: '0.5px' }}>
            LEGAL & POLICIES
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
            <li onClick={() => navigate('legal-notice')} style={footerLinkStyle}>Legal Notice (Impressum)</li>
            <li onClick={() => navigate('privacy-statement')} style={footerLinkStyle}>Privacy Statement & GDPR</li>
            <li onClick={() => navigate('terms-conditions')} style={footerLinkStyle}>Terms & Conditions of Sale</li>
            <li onClick={() => navigate('service-specification')} style={footerLinkStyle}>Service Specification</li>
            <li onClick={() => navigate('how-to-order')} style={footerLinkStyle}>How to Order & Delivery</li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Social */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.2rem', letterSpacing: '0.5px' }}>
            STAY CONNECTED
          </h4>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1.2rem' }}>
            Subscribe to our bimonthly 2PP nanolithography updates & research papers.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to 3D lithoResins newsletter!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              required
              style={{
                width: '100%',
                padding: '0.7rem 1rem',
                background: 'rgba(5, 8, 17, 0.7)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
            <button type="submit" className="btn-cyan" style={{ justifyContent: 'center', padding: '0.7rem' }}>
              Subscribe
            </button>
          </form>

          {/* TODO: add verified social links */}
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: '#050811',
        padding: '1.5rem 2rem'
      }}>
        <div style={{
          maxWidth: '1360px',
          margin: '0 auto',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#94a3b8'
        }}>
          <div>
            © {new Date().getFullYear()} 3D lithoResins. All Rights Reserved.
          </div>
          <div style={{ color: '#00f2fe', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={16} /> ISO 9001:2015 & ISO 14001 Certified Cleanroom Facilities
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerLinkStyle = {
  color: '#94a3b8',
  cursor: 'pointer',
  transition: 'color 0.2s ease',
  display: 'inline-block'
};

const socialIconStyle = {
  width: '38px',
  height: '38px',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justify: 'center',
  color: '#00f2fe',
  textDecoration: 'none',
  transition: 'all 0.3s'
};

export const Footer = FooterComponent;
export default FooterComponent;