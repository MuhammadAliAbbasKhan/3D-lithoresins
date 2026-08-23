// src/pages/ApplicationsPage.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ApplicationsPageComponent({ setCurrentPage }) {
  const [activeSlide, setActiveSlide] = useState(0);

  // Hero slides data
  const heroSlides = [
    {
      id: 'c25521',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/1/3/csm_Microneedles-Applications-Header_33dccd6246.jpg',
      mobileImage: 'https://www.nanoscribe.com/fileadmin/_processed_/e/0/csm_Microneedles-Applications-Header-Mobil_bc6a20a609.jpg',
      alt: 'Microneedles printed with Quantum X shape'
    },
    {
      id: 'c34720',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/f/d/csm_double-sided-aspherical-lenses-shape-integrated-holder_8a246982d0.jpg',
      mobileImage: 'https://www.nanoscribe.com/fileadmin/_processed_/a/a/csm_Quantum-X-shape-high-resolution-3d-printer-double-sided-aspherical-lenses_b15e9d025a.jpg',
      alt: '225 highest precision double-sided aspherical lenses'
    },
    {
      id: 'c52911',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/2/0/csm_Nonius-Wafer-Header_0f63c40acc.jpg',
      mobileImage: 'https://www.nanoscribe.com/fileadmin/_processed_/c/1/csm_Nonius-Wafer-Header-mobil_3ac2327741.jpg',
      alt: 'An 8-inch wafer held by a person'
    },
    {
      id: 'c25519',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/2/4/csm_Photonic-Packaging-Applications-Header_bb3372b092.jpg',
      mobileImage: 'https://www.nanoscribe.com/fileadmin/_processed_/1/2/csm_Photonic-Packaging-Applications-Header-Mobil_46b259245b.jpg',
      alt: 'Lensed fiber array'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const applicationSections = [
    {
      id: 'high-res-3d-printing',
      title: 'High-resolution 3D printing',
      bgColor: '#f8faff',
      items: [
        {
          id: 'microfluidics',
          title: 'Microfluidics & Lab-on-Chip',
          link: '/en/applications-markets/3d-printed-microfluidics/',
          image: 'https://www.nanoscribe.com/fileadmin/Nanoscribe/Applications/High-resolution-3D-printing/Microfluidics/microfluidics-multiphoton-polymerization-3D-mixing-nozzle.jpg',
          buttonText: 'Explore Microfluidics'
        },
        {
          id: 'micromechanics',
          title: 'Micromechanics & MEMS',
          link: '/en/applications-markets/3d-printed-micromechanics-and-mems/',
          image: 'https://www.nanoscribe.com/fileadmin/_processed_/a/f/csm_micromechanics-mems-2pp-3d-printing-axially-actuatable-endoscopic-microsystem_b34368e3c7.gif',
          buttonText: 'Explore Micromechanics'
        },
        {
          id: 'materials-engineering',
          title: 'Materials Engineering',
          link: '/en/applications-markets/3d-microfabrication-of-high-precision-structures-for-materials-engineering/',
          image: 'https://www.nanoscribe.com/fileadmin/_processed_/5/2/csm_News-INM-Dry-Adhesives-Array-Newsletter-Web-900px_ff6cb3535f.jpg',
          buttonText: 'Explore Materials'
        }
      ]
    },
    {
      id: 'high-res-3d-printing-2',
      title: 'High-resolution 3D printing',
      bgColor: '#ffffff',
      items: [
        {
          id: 'laser-fusion-targets',
          title: 'Laser Fusion Targets',
          link: '/en/applications-markets/laser-fusion-targets/',
          image: 'https://www.nanoscribe.com/fileadmin/Nanoscribe/Applications/High-resolution-3D-printing/Laser-fusion-targets/laser-fusion-targets-2gl-grayscale-lithography-3D-printed-target-polymer-structure.jpg',
          buttonText: 'Explore Fusion Targets'
        },
        {
          id: 'functional-resin',
          title: 'Functional Resin Development',
          link: '/en/applications-markets/functional-resin-development/',
          image: 'https://www.nanoscribe.com/fileadmin/_processed_/f/b/csm_Header-Flower_2h_d85cf4fa28.jpg',
          buttonText: 'Explore Functional Resins'
        },
        {
          id: 'optical-metamaterials',
          title: 'Optical Metamaterials',
          link: '/en/applications-markets/3d-printed-optical-metamaterials/',
          image: 'https://www.nanoscribe.com/fileadmin/_processed_/c/6/csm_optical-metamaterials-two-photon-lithography-air-spaced-hybrid-achromatic-metalens_24a3c7cfa8.jpg',
          buttonText: 'Explore Metamaterials'
        }
      ]
    },
    {
      id: 'biofabrication',
      title: 'High-resolution 3D Biofabrication',
      bgColor: '#f8faff',
      items: [
        {
          id: 'life-sciences',
          title: 'Life Sciences & Cell Culture',
          link: '/en/applications-markets/3d-microstructures-for-various-life-science-applications/',
          image: 'https://www.nanoscribe.com/fileadmin/_processed_/3/8/csm_Mesh-Cube-LF-Web-900px_c555f6e99f.jpg',
          buttonText: 'Explore Life Sciences'
        },
        {
          id: 'microneedle-arrays',
          title: 'Microneedle Arrays & Medical',
          link: '/en/applications-markets/microneedles-for-medical-innovations/',
          image: 'https://www.nanoscribe.com/fileadmin/_processed_/3/b/csm_application-microneedles-2pp-3d-printing-array-sharp-tips-vaccination-biomimetic_ca6225302d.jpg',
          buttonText: 'Explore Microneedles'
        }
      ]
    },
    {
      id: 'optics-manufacturing',
      title: 'Optics Manufacturing',
      bgColor: '#ffffff',
      items: [
        {
          id: 'micro-optics',
          title: 'Freeform 3D Micro-Optics',
          link: '/en/applications-markets/additively-manufactured-3d-micro-optics/',
          image: 'https://www.nanoscribe.com/fileadmin/_processed_/5/d/csm_Nanoscribe-Three-lens-objective-Application_8f0598b539.jpg',
          buttonText: 'Explore Micro-Optics'
        },
        {
          id: 'refractive-micro-optics',
          title: '2.5D Refractive Micro-Optics',
          link: '/en/applications-markets/high-precision-refractive-micro-optics/',
          image: 'https://www.nanoscribe.com/fileadmin/_processed_/1/f/csm_two-photon-grayscale-lithography-refractive-micro-optics-random-microlens-array_717748b8c8.jpg',
          buttonText: 'Explore Refractive Lenses'
        },
        {
          id: 'diffractive-micro-optics',
          title: '2.5D Diffractive Optics (DOEs)',
          link: '/en/applications-markets/multi-level-diffractive-optical-elements/',
          image: 'https://www.nanoscribe.com/fileadmin/_processed_/0/b/csm_diffractive-optical-elements-two-photon-lithography-off-axis-holographic-projection_dca0219de6.jpg',
          buttonText: 'Explore DOEs'
        }
      ]
    }
  ];

  return (
    <main style={{ background: '#ffffff', color: '#0B0F33', fontFamily: 'Inter, sans-serif' }}>
      {/* ===== HERO SLIDER ===== */}
      <div id="c25522" style={{ background: '#f8faff', overflow: 'hidden' }}>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', height: '520px' }}>
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: index === activeSlide ? 1 : 0,
                  transition: 'opacity 850ms ease-in-out',
                  zIndex: index === activeSlide ? 1 : 0
                }}
              >
                <picture>
                  <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </picture>
              </div>
            ))}

            {/* Navigation buttons */}
            <button
              onClick={() => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
              style={{
                position: 'absolute',
                left: '1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#ffffff',
                color: '#0066FF',
                border: '1px solid #E5E7EB',
                borderRadius: '50%',
                width: '46px',
                height: '46px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
              style={{
                position: 'absolute',
                right: '1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#ffffff',
                color: '#0066FF',
                border: '1px solid #E5E7EB',
                borderRadius: '50%',
                width: '46px',
                height: '46px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* ===== INTRODUCTION SECTION ===== */}
      <div id="c52912" style={{ padding: '5rem 0', background: '#ffffff', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div id="c52914" style={{ marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0B0F33', lineHeight: 1.25 }}>
              Make your pioneering ideas a reality
            </h1>
          </div>

          <div id="c52913" style={{ maxWidth: '880px', margin: '0 auto' }}>
            <p style={{ color: '#4B5563', fontSize: '1.15rem', lineHeight: '1.9' }}>
              Take advantage of the prototyping speed, amazing design freedom and straightforward workflow of 
              high-resolution 3D printing, and combine it with the precision and performance of Two-Photon 
              Grayscale Lithography (2GL®). Nothing can stop your innovations across nano-, micro- and millimeter scales.
            </p>
          </div>
        </div>
      </div>

      {/* ===== APPLICATION SECTIONS ===== */}
      {applicationSections.map((section, sectionIndex) => (
        <div 
          key={sectionIndex}
          style={{
            padding: '4.5rem 0',
            background: section.bgColor || '#ffffff',
            borderBottom: '1px solid #E5E7EB'
          }}
        >
          <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 2rem' }}>
            
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0B0F33' }}>
                {section.title}
              </h2>
              <p style={{ color: '#0066FF', fontSize: '1rem', fontWeight: 600, marginTop: '0.4rem' }}>
                Sub-micron Application Domains
              </p>
            </div>

            {/* Application Cards Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem'
            }}>
              {section.items.map((item) => (
                <div 
                  key={item.id} 
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    border: '1px solid #E5E7EB',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0066FF';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div>
                    <h4 style={{ color: '#0B0F33', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.2rem' }}>
                      {item.title}
                    </h4>
                    
                    <div style={{
                      borderRadius: '14px',
                      overflow: 'hidden',
                      border: '1px solid #E5E7EB',
                      marginBottom: '1.5rem',
                      aspectRatio: '16/11',
                      background: '#f8faff'
                    }}>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>

                  <a 
                    href={item.link}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '0.85rem',
                      border: '2px solid #0066FF',
                      color: '#0066FF',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      textAlign: 'center',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#0066FF';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#0066FF';
                    }}
                  >
                    {item.buttonText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export const ApplicationsPage = ApplicationsPageComponent;
export default ApplicationsPageComponent;