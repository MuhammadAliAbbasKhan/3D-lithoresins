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
      background: 'rgba(5, 8, 17, 0.85)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'flex-start',
      justify: 'center',
      paddingTop: '6rem',
      paddingLeft: '1rem',
      paddingRight: '1rem'
    }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '560px',
        borderRadius: '16px',
        padding: '1.5rem',
        position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer'
          }}>
          <X size={20} />
        </button>

        <div style={{ position: 'relative', marginBottom: '1.2rem' }}>
          <Search size={18} color="#00f2fe" style={{ position: 'absolute', left: '14px', top: '14px' }} />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Instant search across 3D lithoResins..."
            style={{
              width: '100%',
              padding: '0.75rem 0.75rem 0.75rem 2.6rem',
              background: 'rgba(5, 8, 17, 0.7)',
              border: '1px solid #00f2fe',
              borderRadius: '10px',
              color: '#ffffff',
              fontSize: '1rem',
              outline: 'none',
              boxShadow: '0 0 15px rgba(0, 242, 254, 0.3)'
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '320px', overflowY: 'auto' }}>
          {filtered.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(item.page)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                padding: '0.75rem 1rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}>
              <div>
                <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '0.9rem' }}>{item.title}</div>
                <div style={{ fontSize: '0.75rem', color: '#00f2fe' }}>{item.category}</div>
              </div>
              <ArrowRight size={16} color="#94a3b8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
