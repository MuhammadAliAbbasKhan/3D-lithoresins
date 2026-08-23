import React, { useState } from 'react';
import { X, Search, ArrowRight, BookOpen, Layers } from 'lucide-react';

export const SearchModal = ({ isOpen, onClose, setCurrentPage }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchItems = [
    { title: 'IP-Dip Photoresin Specification', category: 'Resins', page: 'products' },
    { title: '2PP Two-Photon Polymerization Physics', category: 'Simulation', page: 'designer' },
    { title: 'Micro-Optics & Lens Array Fabrication', category: 'Applications', page: 'applications' },
    { title: 'BioResin Hydrogel Matrix Compatibility', category: 'Resins', page: 'products' },
    { title: 'Nanofabrication Technical Spec Builder', category: 'Consultation', page: 'premium-consultation' },
    { title: '2PP Laser Galvo Telemetry Handbook', category: 'Support', page: 'support' },
  ];

  const filtered = query.trim() === ''
    ? searchItems
    : searchItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (page) => {
    setCurrentPage(page);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9800,
      background: 'rgba(11, 15, 51, 0.7)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'flex-start',
      justify: 'center',
      paddingTop: '5rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '560px',
        maxHeight: '85vh',
        overflowY: 'auto',
        borderRadius: '20px',
        padding: '2rem 1.8rem',
        position: 'relative',
        background: '#ffffff',
        border: '1px solid #E5E7EB',
        boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
        color: '#0B0F33',
        boxSizing: 'border-box'
      }}>
        {/* Prominent Close Cross Button */}
        <button
          onClick={onClose}
          aria-label="Close Search Modal"
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: '#f3f4f6',
            border: 'none',
            color: '#4B5563',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            zIndex: 10
          }}>
          <X size={20} />
        </button>

        <div style={{ position: 'relative', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
          <Search size={20} color="#0066FF" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Instant search across 3D lithoResins..."
            style={{
              width: '100%',
              padding: '0.85rem 1rem 0.85rem 2.8rem',
              background: '#f8faff',
              border: '2px solid #0066FF',
              borderRadius: '12px',
              color: '#0B0F33',
              fontSize: '1rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxHeight: '360px', overflowY: 'auto' }}>
          {filtered.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(item.page)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                padding: '0.85rem 1.2rem',
                background: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0066FF';
                e.currentTarget.style.background = '#f8faff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.background = '#ffffff';
              }}
            >
              <div>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0B0F33', display: 'block' }}>{item.title}</span>
                <span style={{ fontSize: '0.78rem', color: '#0066FF', fontWeight: 600 }}>{item.category}</span>
              </div>
              <ArrowRight size={16} color="#0066FF" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
