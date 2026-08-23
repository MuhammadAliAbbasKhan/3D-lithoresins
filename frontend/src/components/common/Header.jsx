// src/components/common/Header.jsx
import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, User, LogOut, Box } from 'lucide-react';

export function HeaderComponent({
  currentPage = 'home',
  setCurrentPage = () => {},
  currentUser = null,
  onOpenAuth = () => {},
  onOpenSearch = () => {},
  onLogout = () => {}
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 1024;

  const handleNavClick = (page, e) => {
    if (e) e.preventDefault();
    setCurrentPage(page);
    setOpenSubmenu(null);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    {
      id: 'products',
      label: 'Products',
      page: 'products',
      hasSubmenu: true,
      submenu: {
        columns: [
          {
            headline: 'Printers & Workstations',
            headlinePage: 'products',
            sections: [
              {
                title: 'Universal 3D Systems',
                items: [
                  { title: 'Quantum X shape', description: 'High-resolution 2PP 3D printer', page: 'products' }
                ]
              },
              {
                title: 'Specialized 2PP Platforms',
                items: [
                  { title: 'Quantum X align', description: 'High-precision 3D optics printer', page: 'products' },
                  { title: 'Quantum X bio', description: 'High-resolution 3D bioprinter', page: 'products' },
                  { title: 'Quantum X litho', description: 'Grayscale lithography workstation', page: 'products' }
                ]
              }
            ]
          },
          {
            headline: 'Photoresin Formulations',
            headlinePage: 'products',
            sections: [
              {
                items: [
                  { title: 'IP-Photoresins', description: 'Sub-micron 3D printing resins', page: 'products' },
                  { title: 'Bio-Hydrogel Matrices', description: 'Cell scaffolding & life science media', page: 'products' },
                  { title: 'Micro-Optics Resins', description: 'Highly transparent index-matched resins', page: 'products' }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      id: 'applications',
      label: 'Applications',
      page: 'applications',
      hasSubmenu: true,
      submenu: {
        columns: [
          {
            headline: 'Micro-Optics & Photonics',
            sections: [
              {
                items: [
                  { title: 'Freeform Micro-Lenses', page: 'applications' },
                  { title: 'Fiber Couplers & DOEs', page: 'applications' },
                  { title: 'Photonic Packaging', page: 'applications' }
                ]
              }
            ]
          },
          {
            headline: 'Life Sciences & MEMS',
            sections: [
              {
                items: [
                  { title: '3D Bio-Scaffolds', page: 'applications' },
                  { title: 'Microfluidics & Channels', page: 'applications' },
                  { title: 'Micromechanics & Metamaterials', page: 'applications' }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      id: 'designer',
      label: '2PP Simulator',
      page: 'designer',
      hasSubmenu: false
    },
    {
      id: 'shop',
      label: 'Shop & Plans',
      page: 'shop',
      hasSubmenu: false
    },
    {
      id: 'support',
      label: 'Support',
      page: 'support',
      hasSubmenu: false
    },
    {
      id: 'about',
      label: 'Who We Are',
      page: 'about',
      hasSubmenu: false
    }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      width: '100%',
      maxWidth: '100vw',
      background: '#ffffff',
      borderBottom: '1px solid #E5E7EB',
      boxShadow: isScrolled ? '0 4px 15px rgba(0, 0, 0, 0.08)' : 'none',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto',
        padding: windowWidth < 640 ? '0.6rem 0.8rem' : '0.8rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        boxSizing: 'border-box'
      }}>
        {/* Brand Logo & Heading */}
        <div 
          onClick={(e) => handleNavClick('home', e)} 
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            flexShrink: 0
          }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #0066FF 0%, #00afeb 100%)',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            boxShadow: '0 4px 12px rgba(0, 102, 255, 0.3)',
            flexShrink: 0
          }}>
            <Box size={22} color="#ffffff" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{
              fontSize: windowWidth < 400 ? '1.1rem' : '1.3rem',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              color: '#0B0F33',
              lineHeight: '1.1',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              whiteSpace: 'nowrap'
            }}>
              <span>3D lithoResins</span>
              <span style={{
                background: '#e6f0ff',
                color: '#0066FF',
                border: '1px solid #0066FF',
                borderRadius: '4px',
                padding: '1px 5px',
                fontSize: '0.68rem',
                fontWeight: 700
              }}>2PP</span>
            </div>
            {windowWidth >= 480 && (
              <div style={{ fontSize: '0.68rem', color: '#0066FF', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'lowercase', marginTop: '1px' }}>
                nanoscale precision in 3D
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <nav style={{ flexShrink: 0, boxSizing: 'border-box' }}>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '1.2rem', alignItems: 'center' }}>
              {navItems.map((item) => (
                <li 
                  key={item.id}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => item.hasSubmenu && setOpenSubmenu(item.id)}
                  onMouseLeave={() => item.hasSubmenu && setOpenSubmenu(null)}
                >
                  <button 
                    onClick={(e) => handleNavClick(item.page, e)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      padding: '0.4rem 0.3rem',
                      color: currentPage === item.page ? '#0066FF' : '#0B0F33',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.92rem',
                      fontWeight: currentPage === item.page ? '700' : '500',
                      transition: 'color 0.2s ease',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {item.label}
                    {item.hasSubmenu && <ChevronDown size={14} color="#0066FF" />}
                  </button>

                  {/* Submenu Dropdown Panel — Responsive Fit */}
                  {item.hasSubmenu && openSubmenu === item.id && item.submenu && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      background: '#ffffff',
                      borderRadius: '16px',
                      border: '1px solid #E5E7EB',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                      padding: '1.5rem',
                      width: '580px',
                      maxWidth: '85vw',
                      marginTop: '0.5rem',
                      boxSizing: 'border-box',
                      zIndex: 1100
                    }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                        {item.submenu.columns.map((column, idx) => (
                          <div key={idx}>
                            {column.headline && (
                              <div 
                                onClick={(e) => column.headlinePage && handleNavClick(column.headlinePage, e)}
                                style={{
                                  fontWeight: '700',
                                  color: '#0066FF',
                                  cursor: 'pointer',
                                  fontSize: '0.92rem',
                                  marginBottom: '0.6rem',
                                  borderBottom: '2px solid #0066FF',
                                  paddingBottom: '0.4rem'
                                }}
                              >
                                {column.headline}
                              </div>
                            )}
                            {column.sections && column.sections.map((section, sIdx) => (
                              <div key={sIdx} style={{ marginBottom: '0.8rem' }}>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                  {section.items.map((subItem, iIdx) => (
                                    <li key={iIdx} style={{ marginBottom: '0.4rem' }}>
                                      <div 
                                        onClick={(e) => handleNavClick(subItem.page || item.page, e)}
                                        style={{
                                          color: '#4B5563',
                                          cursor: 'pointer',
                                          fontSize: '0.85rem',
                                          padding: '0.2rem 0'
                                        }}
                                      >
                                        <span style={{ fontWeight: '600', color: '#0B0F33' }}>{subItem.title}</span>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Header Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            style={{
              background: '#f3f4f6',
              border: '1px solid #E5E7EB',
              color: '#4B5563',
              borderRadius: '8px',
              padding: windowWidth < 640 ? '0.45rem 0.6rem' : '0.45rem 0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              cursor: 'pointer',
              fontSize: '0.82rem'
            }}
          >
            <Search size={15} />
            {windowWidth >= 640 && <span>Search resins...</span>}
          </button>

          {/* User Auth Widget */}
          {currentUser ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#0B0F33', fontSize: '0.82rem' }}>
                <User size={15} color="#0066FF" />
                {windowWidth >= 480 && <span style={{ fontWeight: 600 }}>{currentUser.username}</span>}
              </div>
              <button
                onClick={onLogout}
                style={{
                  background: '#fee2e2',
                  color: '#ef4444',
                  border: '1px solid #ef4444',
                  borderRadius: '6px',
                  padding: '0.3rem 0.6rem',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.2rem'
                }}
              >
                <LogOut size={13} />
                {windowWidth >= 480 && <span>Logout</span>}
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              style={{
                padding: windowWidth < 640 ? '0.45rem 0.9rem' : '0.5rem 1.2rem',
                background: '#0066FF',
                color: 'white',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.85rem',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                whiteSpace: 'nowrap'
              }}
            >
              <User size={14} />
              <span>{windowWidth < 480 ? 'Sign In' : 'Sign In / Register'}</span>
            </button>
          )}

          {/* Mobile Hamburger Toggle Button */}
          {isMobile && (
            <button
              onClick={toggleMobileMenu}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#0B0F33',
                padding: '0.3rem',
                display: 'flex',
                alignItems: 'center',
                justify: 'center'
              }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Dropdown Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderTop: '1px solid #E5E7EB',
          padding: '1.2rem 1.5rem 2rem 1.5rem',
          maxHeight: '75vh',
          overflowY: 'auto',
          boxSizing: 'border-box',
          width: '100%'
        }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {navItems.map((item) => (
              <li key={item.id} style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: '0.7rem' }}>
                <div 
                  onClick={(e) => handleNavClick(item.page, e)}
                  style={{ color: '#0B0F33', fontSize: '1.05rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  {item.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export const Header = HeaderComponent;
export default HeaderComponent;