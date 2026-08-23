// src/pages/ProductsPage.jsx
import React, { useState } from 'react';

export function ProductsPageComponent({ setCurrentPage, onOpenTrial }) {
  const [activeTab, setActiveTab] = useState('tab-41624');
  const [activeMaterialTab, setActiveMaterialTab] = useState('tab-50128');
  const [openTableSections, setOpenTableSections] = useState({
    'Focus applications': true,
    'Printing on dedicated scales': false,
    'Printing technologies': false,
    'Specialized application sets': false,
    'Software': false
  });
  const [mobileToggleOpen, setMobileToggleOpen] = useState({});

  // Product Tabs Data
  const productTabs = [
    {
      id: 'tab-41624',
      title: 'Quantum X shape',
      image: 'https://www.nanoscribe.com/fileadmin/Nanoscribe/Products/Printer/Quantum-X-shape/high-resolution-3d-printer-Buehne-Zoom-mobil.jpg',
      desktopImage: 'https://www.nanoscribe.com/fileadmin/_processed_/2/e/csm_Quantum-X-shape-high-resolution-3d-printer-System-TabNav_052e883075.jpg',
      description: 'High-resolution 3D printer Most versatile, powerful system for advanced research',
      features: [
        { label: 'High-res 3D printing', included: true },
        { label: 'High-res 3D biofabrication', included: false },
        { label: 'Optics manufacturing', included: false },
        { label: '2.5D surface patterning', included: false }
      ],
      buttonText: 'Discover Quantum X shape',
      buttonLink: '/en/products/quantum-x-shape-high-resolution-3d-printer/'
    },
    {
      id: 'tab-41610',
      title: 'Quantum X align',
      image: 'https://www.nanoscribe.com/fileadmin/Nanoscribe/Products/Printer/Quantum-X-align/high-precision-3d-optics-printer-Zoom-header-mobil.jpg',
      desktopImage: 'https://www.nanoscribe.com/fileadmin/_processed_/5/9/csm_Quantum-X-align-aligned-2-photon-lithography-System-TabNav_16578be914.jpg',
      description: 'High-precision 3D optics printer Aligned 3D printing for integrated photonics & optics',
      features: [
        { label: 'High-res 3D printing', included: false },
        { label: 'High-res 3D biofabrication', included: false },
        { label: 'Optics manufacturing', included: true },
        { label: '2.5D surface patterning', included: false }
      ],
      buttonText: 'Discover Quantum X align',
      buttonLink: '/en/products/quantum-x-align/'
    },
    {
      id: 'tab-41617',
      title: 'Quantum X bio',
      image: 'https://www.nanoscribe.com/fileadmin/Nanoscribe/Products/Printer/Quantum-X-bio/high-resolution-3d-bioprinting-front-half-header-mobil.jpg',
      desktopImage: 'https://www.nanoscribe.com/fileadmin/_processed_/f/0/csm_Quantum-X-bio-high-resolution-3d-bioprinter-System-TabNav_7b007f1afb.jpg',
      description: 'High-resolution 3D bioprinter 3D printing for life sciences and microfluidics',
      features: [
        { label: 'High-res 3D printing', included: false },
        { label: 'High-res 3D biofabrication', included: true },
        { label: 'Optics manufacturing', included: false },
        { label: '2.5D surface patterning', included: false }
      ],
      buttonText: 'Discover Quantum X bio',
      buttonLink: '/en/products/high-resolution-3d-bioprinter-quantum-x-bio/'
    },
    {
      id: 'tab-41603',
      title: 'Quantum X litho',
      image: 'https://www.nanoscribe.com/fileadmin/Nanoscribe/Products/Printer/Quantum-X-litho/maskless-lithography-system-product-header.jpg',
      desktopImage: 'https://www.nanoscribe.com/fileadmin/_processed_/2/0/csm_Quantum-X-litho-two-photon-grayscale-lithography-System-TabNav_1f93def746.jpg',
      description: 'Grayscale lithography system 2.5D printing for rapid prototyping, patterning and mastering',
      features: [
        { label: 'High-res 3D printing', included: false },
        { label: 'High-res 3D biofabrication', included: false },
        { label: 'Optics manufacturing', included: false },
        { label: '2.5D surface patterning', included: true }
      ],
      buttonText: 'Discover Quantum X litho',
      buttonLink: '/en/products/quantum-x-litho/'
    }
  ];

  // Material Tabs Data
  const materialTabs = [
    {
      id: 'tab-50128',
      title: 'High-res 3D printing',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/3/c/csm_scaffold-mesh-cube-Quantum-X-Web_0328803f36.jpg',
      image2: 'https://www.nanoscribe.com/fileadmin/_processed_/4/6/csm_Quantum-X-laser-fusion-targets-Web_5ccf33d89e.jpg',
      description: 'microfluidics, micromechanics & MEMS, mechanical, optical, metamaterials and more',
      features: [
        { label: 'Polymer', included: true },
        { label: 'Glass', included: true },
        { label: 'Biomaterial', included: false }
      ],
      buttonText: 'Explore our resins for high-resolution 3D printing',
      buttonLink: '/en/products/high-resolution-3d-2pp-printing-materials/'
    },
    {
      id: 'tab-50121',
      title: 'High-res 3D biofabrication',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/e/8/csm_needles-twisted-Quantum-X-Web_3547d89766.jpg',
      image2: 'https://www.nanoscribe.com/fileadmin/_processed_/4/e/csm_QuantumX-bio-Fluo-Web_28b2f780b7.jpg',
      description: 'medical devices, microneedles, cell culturing, tissue engineering, live cell printing, microfluidic systems and more',
      features: [
        { label: 'Polymer', included: true },
        { label: 'Glass', included: true },
        { label: 'Biomaterial', included: true }
      ],
      buttonText: 'Explore our resins for high-resolution 3D biofabrication',
      buttonLink: '/en/products/high-resolution-3d-biofabrication-2pp-printing-materials/'
    },
    {
      id: 'tab-50114',
      title: 'Optics manufacturing',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/1/6/csm_TIRLens-Quantum-X-Web_8a4bf11f13.jpg',
      image2: 'https://www.nanoscribe.com/fileadmin/_processed_/3/6/csm_Fresnel-Lens-Quantum-X-Web_212ee333ee.jpg',
      description: '2.5D and 3D microoptics, optical interconnects, microoptics on fibers and chips and more',
      features: [
        { label: 'Polymer', included: true },
        { label: 'Glass', included: false },
        { label: 'Biomaterial', included: false }
      ],
      buttonText: 'Explore our resins for optics manufacturing',
      buttonLink: '/en/products/optics-manufacturing-2pp-printing-materials/'
    },
    {
      id: 'tab-50107',
      title: '2.5D surface patterning',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/2/2/csm_multiscale-broadband-optical-diffuser-Quantum-X-Web_13f94baa57.jpg',
      image2: 'https://www.nanoscribe.com/fileadmin/_processed_/a/e/csm_Random-microlens-array-Quantum-X-Web_afd01e5d56.jpg',
      description: 'rapid prototyping, master template fabrication, patterning, wafer-scale production and more',
      features: [
        { label: 'Polymer', included: true },
        { label: 'Glass', included: false },
        { label: 'Biomaterial', included: false }
      ],
      buttonText: 'Explore our resins for 2.5D surface patterning',
      buttonLink: '/en/products/surface-patterning-2pp-printing-materials/'
    }
  ];

  // Table Data
  const tableData = {
    'Focus applications': [
      { label: 'High-resolution 3D printing', shape: 'included', align: 'optional', bio: 'optional', litho: 'optional' },
      { label: 'High-resolution 3D biofabrication', shape: 'optional', align: 'not-available', bio: 'included', litho: 'not-available' },
      { label: 'Optics manufacturing', shape: 'optional', align: 'included', bio: 'not-available', litho: 'optional' },
      { label: '2.5D surface patterning', shape: 'optional', align: 'optional', bio: 'optional', litho: 'included' }
    ],
    'Printing on dedicated scales': [
      { label: 'Nano SF Print Set', shape: 'optional', align: 'included', bio: 'optional', litho: 'optional' },
      { label: 'Micro MF Print Set', shape: 'optional', align: 'included', bio: 'included', litho: 'included' },
      { label: 'Meso LF Print Set', shape: 'optional', align: 'optional', bio: 'included', litho: 'optional' },
      { label: 'Macro XLF Print Set', shape: 'optional', align: 'not-available', bio: 'optional', litho: 'not-available' }
    ],
    'Printing technologies': [
      { label: 'Two-Photon Polymerization (2PP)', shape: 'included', align: 'optional', bio: 'included', litho: 'optional' },
      { label: 'Two-Photon Grayscale Lithography (2GL®)', shape: 'optional', align: 'optional', bio: 'optional', litho: 'included' },
      { label: 'Aligned 2-Photon Lithography (A2PL®)', shape: 'optional', align: 'included', bio: 'optional', litho: 'optional' },
      { label: '3D printing by 2GL', shape: 'optional', align: 'included', bio: 'optional', litho: 'optional' }
    ],
    'Specialized application sets': [
      { label: 'Fiber Printing Set', shape: 'optional', align: 'included', bio: 'not-available', litho: 'optional' },
      { label: 'Chip Printing Set', shape: 'optional', align: 'included', bio: 'not-available', litho: 'not-available' },
      { label: 'Bioprinting Set', shape: 'optional', align: 'not-available', bio: 'included', litho: 'not-available' }
    ],
    'Software': [
      { label: 'DeScribeX for 3D printing', shape: 'included', align: 'optional', bio: 'included', litho: 'optional' },
      { label: 'GrayScribeX for 2.5D printing', shape: 'optional', align: 'optional', bio: 'optional', litho: 'included' },
      { label: 'nanoPrintX for 3D alignment & grayscale printing', shape: 'optional', align: 'included', bio: 'optional', litho: 'optional' },
      { label: 'nanoConnectX for remote control', shape: 'included', align: 'included', bio: 'included', litho: 'included' }
    ]
  };

  const tableSections = Object.keys(tableData);

  const getStatusSymbol = (status) => {
    switch(status) {
      case 'included': return '✓';
      case 'optional': return '○';
      case 'not-available': return '−';
      default: return '';
    }
  };

  const getStatusClass = (status) => {
    switch(status) {
      case 'included': return 'text-[#0066FF] font-bold';
      case 'optional': return 'text-[#F59E0B]';
      case 'not-available': return 'text-[#9CA3AF]';
      default: return '';
    }
  };

  const toggleTableSection = (section) => {
    setOpenTableSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const FeatureIcon = ({ type }) => {
    return (
      <span 
        style={{
          display: 'inline-block',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          textAlign: 'center',
          lineHeight: '24px',
          fontSize: '0.85rem',
          fontWeight: 'bold',
          background: type === 'included' ? '#0066FF' : type === 'optional' ? '#F59E0B' : '#E5E7EB',
          color: type === 'included' ? '#ffffff' : type === 'optional' ? '#ffffff' : '#9CA3AF'
        }}
      >
        {type === 'included' ? '✓' : type === 'optional' ? '○' : '−'}
      </span>
    );
  };

  return (
    <main style={{ background: '#ffffff', color: '#0B0F33', fontFamily: 'Inter, sans-serif' }}>
      {/* ===== PRODUCTS INTRO VIDEO SECTION ===== */}
      <div id="c20795" style={{ background: '#f8faff', padding: 0 }}>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', paddingTop: '42.86%' }}>
              <video 
                className="desktop"
                poster="https://www.nanoscribe.com/fileadmin/_processed_/a/e/csm_Quantumx-Align-Shape-Product-Standbild_0fc9562358.jpg"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                preload="metadata"
                loop
                muted
                playsInline
                autoPlay
              >
                <source src="https://www.nanoscribe.com/fileadmin/Nanoscribe/Videos/Products/Materials/Quantumx-Align-Shape-Product-12-2024-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* ===== PRODUCTS INTRODUCTION TEXT ===== */}
      <div id="c41599" style={{ padding: '4rem 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div id="c41633" style={{ marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0B0F33', lineHeight: 1.25 }}>
              <span style={{ color: '#0066FF' }}>Quantum X product line</span>
              <br />
              <span>From rapid prototyping to scalable production</span>
            </h1>
          </div>

          <div id="c41632" style={{ marginBottom: '3rem' }}>
            <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Experience the forefront of microfabrication with Nanoscribe's next-generation Quantum X platform. 
              Powered by the precision of Two-Photon Polymerization (2PP), Quantum X systems combine proprietary 
              technologies to deliver outstanding performance in micro- and nanofabrication.
            </p>
          </div>

          {/* ===== PRODUCT TABS ===== */}
          <div className="tabs" id="c41602" style={{ marginBottom: '4rem' }}>
            <div className="tab-navigation" style={{ 
              display: 'flex', 
              gap: '0.6rem', 
              borderBottom: '2px solid #E5E7EB',
              marginBottom: '2.5rem',
              overflowX: 'auto'
            }}>
              {productTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '0.85rem 1.8rem',
                    background: activeTab === tab.id ? '#0066FF' : '#f8faff',
                    color: activeTab === tab.id ? '#ffffff' : '#4B5563',
                    border: 'none',
                    borderRadius: '10px 10px 0 0',
                    fontSize: '0.95rem',
                    fontWeight: activeTab === tab.id ? '700' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {productTabs.map((tab) => (
              <div 
                key={tab.id}
                style={{ display: activeTab === tab.id ? 'block' : 'none' }}
              >
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'start',
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid #E5E7EB',
                  padding: '2.5rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}>
                  <div>
                    <div style={{ 
                      borderRadius: '14px', 
                      overflow: 'hidden',
                      border: '1px solid #E5E7EB',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
                    }}>
                      <img 
                        src={tab.desktopImage} 
                        alt={tab.title}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0B0F33' }}>
                      <span>{tab.title}</span>
                    </h3>
                    <p style={{ color: '#0066FF', fontWeight: '600', marginTop: '0.5rem', fontSize: '1.1rem' }}>
                      {tab.description}
                    </p>

                    <div style={{ marginTop: '2rem' }}>
                      <a 
                        href={tab.buttonLink}
                        style={{
                          display: 'inline-block',
                          padding: '0.85rem 1.8rem',
                          border: '2px solid #0066FF',
                          color: '#0066FF',
                          borderRadius: '9999px',
                          textDecoration: 'none',
                          fontWeight: '700',
                          fontSize: '0.95rem',
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#0066FF';
                          e.target.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = '#0066FF';
                        }}
                      >
                        {tab.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== TABLE SECTION ===== */}
          <div id="c46245" style={{ marginTop: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0B0F33', marginBottom: '1.5rem' }}>
              <span style={{ color: '#0066FF' }}>The Quantum X lineup at a glance</span>
            </h3>

            <div style={{ overflowX: 'auto', background: '#ffffff', borderRadius: '16px', border: '1px solid #E5E7EB', padding: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#f8faff' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', color: '#0B0F33', minWidth: '220px' }}>Capabilities</th>
                    <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '700', color: '#0066FF' }}>Quantum X shape</th>
                    <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '700', color: '#0066FF' }}>Quantum X align</th>
                    <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '700', color: '#0066FF' }}>Quantum X bio</th>
                    <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '700', color: '#0066FF' }}>Quantum X litho</th>
                  </tr>
                </thead>
                <tbody>
                  {tableSections.map((section) => (
                    <React.Fragment key={section}>
                      <tr 
                        style={{ 
                          background: '#f8faff', 
                          cursor: 'pointer',
                          borderTop: '1px solid #E5E7EB'
                        }}
                        onClick={() => toggleTableSection(section)}
                      >
                        <td style={{ padding: '0.9rem 1rem', fontWeight: '700', color: '#0B0F33' }}>
                          <span style={{ marginRight: '0.5rem', color: '#0066FF' }}>
                            {openTableSections[section] ? '▾' : '▸'}
                          </span>
                          {section}
                        </td>
                        <td colSpan="4"></td>
                      </tr>
                      {openTableSections[section] && tableData[section].map((row, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid #E5E7EB' }}>
                          <td style={{ padding: '0.8rem 1rem', color: '#4B5563' }}>{row.label}</td>
                          <td style={{ padding: '0.8rem', textAlign: 'center' }}>
                            <span className={getStatusClass(row.shape)}>{getStatusSymbol(row.shape)}</span>
                          </td>
                          <td style={{ padding: '0.8rem', textAlign: 'center' }}>
                            <span className={getStatusClass(row.align)}>{getStatusSymbol(row.align)}</span>
                          </td>
                          <td style={{ padding: '0.8rem', textAlign: 'center' }}>
                            <span className={getStatusClass(row.bio)}>{getStatusSymbol(row.bio)}</span>
                          </td>
                          <td style={{ padding: '0.8rem', textAlign: 'center' }}>
                            <span className={getStatusClass(row.litho)}>{getStatusSymbol(row.litho)}</span>
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const ProductsPage = ProductsPageComponent;
export default ProductsPageComponent;