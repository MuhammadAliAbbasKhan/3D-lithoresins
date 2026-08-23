import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Sparkles, ShoppingBag, Check, Layers, Zap } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const ProductsPageComponent = ({ setCurrentPage, onOpenTrial }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const { addToast } = useToast();

  useEffect(() => {
    axios.get('/api/v1/products/')
      .then(res => {
        if (res.data.success) {
          setProducts(res.data.products);
        }
      })
      .catch(() => {
        addToast('Could not fetch resin product catalog.', 'warning');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const categories = ['All', 'High Resolution', 'Optical Grade', 'High Transparency', 'Bio-Compatible', 'High Index'];

  const filtered = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem 5rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#ffffff' }}>
          3D Photoresins & Photopolymer Portfolio
        </h1>
        <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0.6rem auto 0 auto', fontSize: '1.05rem' }}>
          Precision photoresins optimized for two-photon polymerization, dip-in lithography, micro-optics, and tissue engineering.
        </p>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? '#00f2fe' : 'rgba(255,255,255,0.05)',
                color: selectedCategory === cat ? '#050811' : '#94a3b8',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                padding: '0.5rem 1.1rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', color: '#00f2fe', padding: '4rem 0' }}>
          Loading Photoresin Catalog...
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {filtered.map(p => (
            <div key={p.id || p.code_name} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{
                    background: 'rgba(0, 242, 254, 0.15)',
                    color: '#00f2fe',
                    border: '1px solid #00f2fe',
                    borderRadius: '6px',
                    padding: '0.2rem 0.6rem',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}>{p.category}</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                    ${Number(p.price).toFixed(2)}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>{p.name}</h3>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'monospace', marginBottom: '1rem' }}>Code: {p.code_name}</div>
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '1.4rem' }}>{p.description}</p>

                <div style={{ background: 'rgba(5, 8, 17, 0.6)', borderRadius: '8px', padding: '0.8rem', marginBottom: '1.5rem', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94a3b8' }}>Refractive Index:</span>
                    <strong style={{ color: '#00f2fe' }}>{p.refractive_index}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94a3b8' }}>Resolution Limit:</span>
                    <strong style={{ color: '#00f2fe' }}>{p.resolution_limit}</strong>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <button onClick={onOpenTrial} className="btn-outline" style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem' }}>
                  Request Sample
                </button>
                <button onClick={() => setCurrentPage('shop')} className="btn-cyan" style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem' }}>
                  <ShoppingBag size={14} /> Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const ProductsPage = ProductsPageComponent;
export default ProductsPageComponent;
