import React, { useState } from 'react';
import { Search, Globe, User, LogOut, ChevronDown, Shield, Box, Sparkles } from 'lucide-react';

export const Header = ({
  currentPage,
  setCurrentPage,
  currentUser,
  onOpenAuth,
  onOpenSearch,
  onLogout
}) => {
  const [lang, setLang] = useState('EN');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const navigate = (page) => {
    setCurrentPage(page);
    setActiveDropdown(null);
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      background: 'rgba(5, 8, 17, 0.95)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(0, 242, 254, 0.2)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
    }}>
      {/* Top Utility Control Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        padding: '0.4rem 2rem',
        background: '#090e1a',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        fontSize: '0.85rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: '#00f2fe', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={14} /> 2PP Nano-Printing Technology Partner
          </span>
          <span style={{ color: '#64748b' }}>|</span>
          <span style={{ color: '#94a3b8' }}>Inspired by Nanoscribe Microfabrication</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#94a3b8',
              borderRadius: '6px',
              padding: '0.3rem 0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}>
            <Search size={14} />
            <span>Search resins, docs...</span>
          </button>

          {/* Language Switcher */}
          <div style={{
            display: 'flex',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '6px',
            padding: '2px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <button
              onClick={() => setLang('DE')}
              style={{
                background: lang === 'DE' ? '#00f2fe' : 'transparent',
                color: lang === 'DE' ? '#050811' : '#94a3b8',
                border: 'none',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>DE</button>
            <button
              onClick={() => setLang('EN')}
              style={{
                background: lang === 'EN' ? '#00f2fe' : 'transparent',
                color: lang === 'EN' ? '#050811' : '#94a3b8',
                border: 'none',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>EN</button>
          </div>

          {/* User Auth Widget */}
          {currentUser ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#e2e8f0' }}>
                <User size={14} color="#00f2fe" />
                <span style={{ fontWeight: 600 }}>{currentUser.username}</span>
                <span style={{
                  background: 'rgba(0,242,254,0.15)',
                  color: '#00f2fe',
                  border: '1px solid #00f2fe',
                  borderRadius: '4px',
                  padding: '1px 6px',
                  fontSize: '0.7rem',
                  textTransform: 'uppercase'
                }}>{currentUser.plan_tier}</span>
              </div>
              <button
                onClick={onLogout}
                style={{
                  background: 'rgba(239, 68, 68, 0.2)',
                  color: '#ef4444',
                  border: '1px solid #ef4444',
                  borderRadius: '6px',
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                <LogOut size={12} /> Log Out
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="btn-cyan"
              style={{ padding: '0.3rem 0.9rem', fontSize: '0.8rem' }}>
              <User size={14} /> Sign In / Register
            </button>
          )}
        </div>
      </div>

      {/* Main Navigation Header Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        padding: '0.8rem 2rem'
      }}>
        {/* Brand Logo & Tagline */}
        <div
          onClick={() => navigate('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #00f2fe 0%, #7928ca 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(0,242,254,0.5)'
          }}>
            <Box size={24} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.5px' }} className="text-gradient-cyan">
              3D lithoResins
            </div>
            <div style={{ fontSize: '0.72rem', color: '#00f2fe', fontWeight: 500, letterSpacing: '1px', textTransform: 'lowercase' }}>
              nanoscale precision in 3D
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.8rem', position: 'relative' }}>
          <button
            onClick={() => navigate('home')}
            style={{
              background: 'none',
              border: 'none',
              color: currentPage === 'home' ? '#00f2fe' : '#e2e8f0',
              fontWeight: currentPage === 'home' ? 700 : 500,
              cursor: 'pointer',
              fontSize: '0.95rem'
            }}>Home</button>

          {/* DESIGNER Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => toggleDropdown('designer')}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === 'designer' ? '#00f2fe' : '#e2e8f0',
                fontWeight: currentPage === 'designer' ? 700 : 500,
                cursor: 'pointer',
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}>
              DESIGNER <ChevronDown size={14} />
            </button>
            {activeDropdown === 'designer' && (
              <div className="glass-panel" style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                marginTop: '0.5rem',
                minWidth: '220px',
                borderRadius: '8px',
                padding: '0.5rem 0'
              }}>
                <div onClick={() => navigate('designer')} style={dropdownItemStyle}>2PP Physics Engine</div>
                <div onClick={() => navigate('designer')} style={dropdownItemStyle}>Laser Voxel Tuning</div>
                <div onClick={() => navigate('designer')} style={dropdownItemStyle}>Material Basics</div>
                <div onClick={() => navigate('designer')} style={dropdownItemStyle}>System Requirements</div>
                <div onClick={() => navigate('designer')} style={dropdownItemStyle}>Demo Version</div>
              </div>
            )}
          </div>

          {/* Resins & Materials Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => toggleDropdown('products')}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === 'products' ? '#00f2fe' : '#e2e8f0',
                fontWeight: currentPage === 'products' ? 700 : 500,
                cursor: 'pointer',
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}>
              Resins & Materials <ChevronDown size={14} />
            </button>
            {activeDropdown === 'products' && (
              <div className="glass-panel" style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                marginTop: '0.5rem',
                minWidth: '220px',
                borderRadius: '8px',
                padding: '0.5rem 0'
              }}>
                <div onClick={() => navigate('products')} style={dropdownItemStyle}>IP-Photoresins</div>
                <div onClick={() => navigate('products')} style={dropdownItemStyle}>Bio-Compatible Resins</div>
                <div onClick={() => navigate('products')} style={dropdownItemStyle}>High-Index Resins</div>
                <div onClick={() => navigate('products')} style={dropdownItemStyle}>Quantum Resins</div>
              </div>
            )}
          </div>

          <button
            onClick={() => navigate('applications')}
            style={{
              background: 'none',
              border: 'none',
              color: currentPage === 'applications' ? '#00f2fe' : '#e2e8f0',
              fontWeight: currentPage === 'applications' ? 700 : 500,
              cursor: 'pointer',
              fontSize: '0.95rem'
            }}>Applications</button>

          <button
            onClick={() => navigate('shop')}
            style={{
              background: 'none',
              border: 'none',
              color: currentPage === 'shop' ? '#00f2fe' : '#e2e8f0',
              fontWeight: currentPage === 'shop' ? 700 : 500,
              cursor: 'pointer',
              fontSize: '0.95rem'
            }}>Shop</button>

          <button
            onClick={() => navigate('support')}
            style={{
              background: 'none',
              border: 'none',
              color: currentPage === 'support' ? '#00f2fe' : '#e2e8f0',
              fontWeight: currentPage === 'support' ? 700 : 500,
              cursor: 'pointer',
              fontSize: '0.95rem'
            }}>Support</button>

          <button
            onClick={() => navigate('about')}
            style={{
              background: 'none',
              border: 'none',
              color: currentPage === 'about' ? '#00f2fe' : '#e2e8f0',
              fontWeight: currentPage === 'about' ? 700 : 500,
              cursor: 'pointer',
              fontSize: '0.95rem'
            }}>Who We Are</button>

          <button
            onClick={() => navigate('admin')}
            style={{
              background: 'rgba(0, 242, 254, 0.1)',
              border: '1px solid #00f2fe',
              color: '#00f2fe',
              fontWeight: 600,
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}>
            <Shield size={14} /> Admin 🛡️
          </button>
        </nav>
      </div>
    </header>
  );
};

const dropdownItemStyle = {
  padding: '0.6rem 1.2rem',
  color: '#e2e8f0',
  fontSize: '0.88rem',
  cursor: 'pointer',
  transition: 'background 0.2s',
};
