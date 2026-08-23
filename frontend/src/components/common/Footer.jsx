import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, Award, ShieldCheck, Box } from 'lucide-react';

export const Footer = ({ setCurrentPage }) => {
  return (
    <footer style={{
      background: '#070b14',
      borderTop: '1px solid rgba(0, 242, 254, 0.2)',
      padding: '3rem 2rem 1.5rem 2rem',
      color: '#94a3b8',
      fontSize: '0.9rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '2.5rem',
        marginBottom: '2.5rem'
      }}>
        {/* Column 1: Company & Contact */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Box size={22} color="#00f2fe" />
            <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>3D lithoResins</span>
          </div>
          <p style={{ fontSize: '0.85rem', marginBottom: '1rem', lineHeight: '1.5' }}>
            Next-generation two-photon photopolymerization photoresins and 3D laser microfabrication solutions.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <MapPin size={16} color="#00f2fe" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Hermann-von-Helmholtz-Platz 6, 76344 Eggenstein-Leopoldshafen, Germany</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={16} color="#00f2fe" />
              <span>+49 721 9170 0</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} color="#00f2fe" />
              <span>contact@3dlithoresins.com</span>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                color: '#00f2fe',
                textDecoration: 'none',
                marginTop: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 600
              }}>
              Google Maps Location <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Column 2: Legal Links */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.5px' }}>
            LEGAL & POLICIES
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
            <span onClick={() => setCurrentPage('legal-notice')} style={footerLinkStyle}>LEGAL NOTICE</span>
            <span onClick={() => setCurrentPage('privacy-statement')} style={footerLinkStyle}>PRIVACY STATEMENT</span>
            <span onClick={() => setCurrentPage('terms-conditions')} style={footerLinkStyle}>TERMS & CONDITIONS</span>
            <span onClick={() => setCurrentPage('service-specification')} style={footerLinkStyle}>SERVICE SPECIFICATION</span>
            <span onClick={() => setCurrentPage('how-to-order')} style={footerLinkStyle}>HOW TO ORDER</span>
          </div>
        </div>

        {/* Column 3: Quick Nav */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.5px' }}>
            QUICK NAVIGATION
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
            <span onClick={() => setCurrentPage('designer')} style={footerLinkStyle}>2PP Physics Simulator</span>
            <span onClick={() => setCurrentPage('products')} style={footerLinkStyle}>Photoresins Catalog</span>
            <span onClick={() => setCurrentPage('applications')} style={footerLinkStyle}>Micro-Optics & Biofabrication</span>
            <span onClick={() => setCurrentPage('shop')} style={footerLinkStyle}>Resin & License Shop</span>
            <span onClick={() => setCurrentPage('premium-consultation')} style={footerLinkStyle}>Nanofabrication Spec Builder</span>
          </div>
        </div>

        {/* Column 4: Media & Certifications */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.5px' }}>
            CERTIFICATIONS & MEDIA
          </h4>
          <div style={{
            background: 'rgba(0, 242, 254, 0.05)',
            border: '1px solid rgba(0, 242, 254, 0.2)',
            borderRadius: '8px',
            padding: '0.8rem',
            marginBottom: '1rem'
          }}>
            <div style={{ fontSize: '0.8rem', color: '#00f2fe', fontWeight: 600, marginBottom: '0.3rem' }}>
              🎥 2PP Nano-Printing Tutorial
            </div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              Watch sub-micron galvo laser voxel scanning in high-speed 3D polymer formulation.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={badgeStyle}><Award size={12} color="#00f2fe" /> OpTecBB</span>
            <span style={badgeStyle}><ShieldCheck size={12} color="#00f2fe" /> EPIC Member</span>
            <span style={badgeStyle}><Award size={12} color="#00f2fe" /> IVAM Microtechnology</span>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        fontSize: '0.8rem'
      }}>
        <div>
          © {new Date().getFullYear()} 3D lithoResins GmbH. All Rights Reserved. Inspired by Nanoscribe Microfabrication.
        </div>
        <div style={{ color: '#00f2fe' }}>
          ISO 9001:2015 Certified Cleanroom Formulation Facilities
        </div>
      </div>
    </footer>
  );
};

const footerLinkStyle = {
  cursor: 'pointer',
  transition: 'color 0.2s',
  textTransform: 'uppercase',
  fontWeight: 500,
  letterSpacing: '0.5px'
};

const badgeStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '4px',
  padding: '0.2rem 0.5rem',
  fontSize: '0.72rem',
  color: '#e2e8f0',
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem'
};
