// src/pages/DesignerPage.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function DesignerPageComponent() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Hero slides data
  const heroSlides = [
    {
      id: 'c31824',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/1/b/csm_2PP-high-resolution-3D-printed-endomicroscope-stacked-lens_c830143310.jpg',
      mobileImage: 'https://www.nanoscribe.com/fileadmin/_processed_/5/a/csm_2PP-high-resolution-3D-printed-endomicroscope-stacked-lens-m_1bccd755f6.jpg',
      alt: '2PP high resolution 3D printed endomicroscope stacked lens'
    },
    {
      id: 'c34725',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/d/5/csm_microfabrication-of-3D-cell-scaffolds-by-2PP-two-photon-lithography-wide_943a87a6a5.jpg',
      mobileImage: 'https://www.nanoscribe.com/fileadmin/_processed_/9/5/csm_microfabrication-of-3D-cell-scaffolds-by-2PP-two-photon-lithography_m_8f5c8a1d3a.jpg',
      alt: 'microfabrication-of-3D-cell-scaffolds-by-2PP-two-photon-lithography'
    },
    {
      id: 'c34726',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/d/e/csm_Random-microlens-array-MLA-by-2GL-Two-Photon-Grayscale-Lithography_01_d7f0c7f916.jpg',
      mobileImage: 'https://www.nanoscribe.com/fileadmin/_processed_/a/7/csm_Random-microlens-array-MLA-by-2GL-Two-Photon-Grayscale-Lithography_m_78aa629161.jpg',
      alt: 'SEM of a random-microlens-array-MLA-by-2GL'
    },
    {
      id: 'c34727',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/4/0/csm_Aligned-2-Photon-Lithography-A2PL-aligns-microoptics-on-fiber-on-chip_01_451736ea0f.jpg',
      mobileImage: 'https://www.nanoscribe.com/fileadmin/_processed_/b/f/csm_Aligned-2-Photon-Lithography-A2PL-aligns-microoptics-on-fiber-on-chip_m_fa10b8eeb1.jpg',
      alt: 'Aligned-2-Photon-Lithography-A2PL-aligns-microoptics-on-fiber'
    },
    {
      id: 'c34730',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/e/c/csm_Split-benchy-boat-superior-quality-3D-printing-by-2GL-wide_3e58269315.jpg',
      mobileImage: 'https://www.nanoscribe.com/fileadmin/_processed_/a/d/csm_Split-benchy-boat-superior-quality-3D-printing-by-2GL_m_9d961ea484.jpg',
      alt: 'Split-benchy-boat-superior-quality-3D-printing-by-2GL'
    }
  ];

  // Auto-play hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Technologies data
  const technologies = [
    {
      id: '2pp',
      title: 'Two-Photon Polymerization 2PP',
      link: '/en/microfabrication-technologies/2pp-two-photon-polymerization/',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/8/2/csm_microfabrication-of-3D-cell-scaffolds-by-2PP-two-photon-lithography_6ca5fd12ad.jpg',
      description: 'Two-Photon Polymerization (2PP) utilizes femtosecond laser light pulses to crosslink photopolymers for high-resolution 3D printing at the nano-, micro-, meso- and macroscale.',
      buttonText: 'Learn more about 2PP'
    },
    {
      id: '2gl',
      title: 'Two-Photon Grayscale Lithography 2GL®',
      link: '/en/microfabrication-technologies/2gl-two-photon-grayscale-lithography/',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/d/6/csm_Random-microlens-array-MLA-by-2GL-Two-Photon-Grayscale-Lithography_0182776e7d.jpg',
      description: 'Two-Photon Grayscale Lithography (2GL®) employs high-speed laser modulation for voxel tuning to print 2.5D topographies with an exceptionally high throughput and excellent shape accuracy.',
      buttonText: 'Learn more about 2GL'
    },
    {
      id: 'a2pl',
      title: 'Aligned 2-Photon Lithography A2PL®',
      link: '/en/microfabrication-technologies/a2pl-aligned-2-photon-lithography/',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/b/6/csm_Aligned-2-Photon-Lithography-aligns-microoptics-on-fiber-on-chip_274515f7aa.jpg',
      description: 'Aligned 2-Photon Lithography (A2PL®) automatically aligns microoptical structures to the optical axes of fibers or 3D topographies on complex substrates, e.g. photonic chips.',
      buttonText: 'Get to know A2PL'
    },
    {
      id: '3d-printing-2gl',
      title: 'New 3D printing by 2GL®',
      link: '/en/microfabrication-technologies/3d-printing-by-2gl/',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/7/e/csm_Split-benchy-boat-superior-quality-3D-printing-by-2GL_c33c2b0b0d.jpg',
      description: 'A proprietary voxel tuning process makes 2GL® the fastest high-resolution 3D printing technology with unparalleled shape accuracy and superior print quality.',
      buttonText: '3D printing by 2GL',
      isNew: true
    }
  ];

  return (
    <main style={{ background: '#ffffff', color: '#0B0F33', fontFamily: 'Inter, sans-serif' }}>
      {/* ===== HERO SLIDER ===== */}
      <div id="c31827" style={{ background: '#f8faff', overflow: 'hidden' }}>
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

            {/* Pagination dots */}
            <div style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '0.6rem',
              zIndex: 10
            }}>
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  style={{
                    width: index === activeSlide ? '28px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    background: index === activeSlide ? '#0066FF' : 'rgba(0, 0, 0, 0.2)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== INTRODUCTION SECTION ===== */}
      <div id="c31823" style={{ padding: '5rem 0', background: '#ffffff', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div id="c31822" style={{ marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0B0F33', lineHeight: 1.25 }}>
              Highest Precision 2PP Microfabrication & Voxel Simulator
            </h1>
          </div>

          <div id="c31821" style={{ maxWidth: '880px', margin: '0 auto' }}>
            <p style={{ color: '#4B5563', fontSize: '1.15rem', lineHeight: '1.9' }}>
              Two-Photon Polymerization (2PP), also known as multi-photon lithography or direct 
              laser writing, is a key enabling technology for innovations in high-precision additive manufacturing 
              with 3D printing and grayscale lithography systems. Print any 3D design with submicron features and 
              sizes up to the centimeter range, with excellent shape accuracy and at the highest throughput.
            </p>
          </div>
        </div>
      </div>

      {/* ===== PIONEERING TECHNOLOGIES SECTION ===== */}
      <div id="c31959" style={{ padding: '5rem 0', background: '#0066FF' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div id="c31978" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#ffffff' }}>
              Pioneering 2PP-based microfabrication technologies
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginTop: '0.5rem', fontWeight: 600 }}>
              Opening up new applications and driving emerging markets
            </p>
          </div>

          {/* Technologies Grid */}
          <div id="c31960" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {technologies.map((tech) => (
              <div key={tech.id} style={{ 
                background: '#ffffff', 
                borderRadius: '20px', 
                border: '1px solid #E5E7EB',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                <div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 700, 
                    color: '#0B0F33',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    {tech.title}
                    {tech.isNew && (
                      <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 'bold',
                        color: '#0066FF',
                        background: '#e6f0ff',
                        padding: '0.15rem 0.6rem',
                        borderRadius: '4px'
                      }}>
                        NEW
                      </span>
                    )}
                  </h3>

                  <div style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    aspectRatio: '16/11',
                    marginBottom: '1.2rem',
                    border: '1px solid #E5E7EB',
                    background: '#f8faff'
                  }}>
                    <img 
                      src={tech.image} 
                      alt={tech.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  <p style={{ color: '#4B5563', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {tech.description}
                  </p>
                </div>

                <a 
                  href={tech.link}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '0.8rem',
                    border: '2px solid #0066FF',
                    color: '#0066FF',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: '0.9rem',
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
                  {tech.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== TWO-PHOTON POLYMERIZATION DETAIL SECTION ===== */}
      <div id="c31788" style={{ padding: '5rem 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div id="c31786" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0B0F33' }}>
              <span style={{ color: '#0066FF' }}>Two-Photon Polymerization Physics</span>
              <br />
              <span style={{ fontWeight: 'normal', color: '#6B7280', fontSize: '1.4rem' }}>Sub-micron 3D spatial resolution kinetics</span>
            </h2>
            <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: '1.8', marginTop: '1.2rem' }}>
              Additive manufacturing (AM) approaches have the advantage of allowing micro-engineers to produce complex 
              freeform geometries that would otherwise be impossible to create. Two-photon lithography unlocks 
              unprecedented 100nm spatial resolution by driving non-linear light-matter absorption inside the focal volume.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}>
            <div style={{ background: '#f8faff', padding: '2.5rem', borderRadius: '20px', border: '1px solid #E5E7EB' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0066FF', marginBottom: '1rem' }}>
                3D printing with submicron features
              </h3>
              <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: '1.8' }}>
                The smallest feature sizes achieved by 2-photon polymerization extend far into the submicron 
                range, exceeding the capabilities of conventional 3D printing technologies. For example, Fused 
                Deposition Modeling (FDM) or Selective Laser Sintering (SLS) are typically limited to several hundred micrometers. 
                In contrast, 2PP enables feature size control down to 100 nanometers and optical 
                quality surfaces with a surface roughness Ra down to 5 nm.
              </p>
            </div>

            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #E5E7EB',
                boxShadow: '0 8px 25px rgba(0,0,0,0.06)'
              }}>
                <img 
                  src="https://www.nanoscribe.com/fileadmin/Nanoscribe/Technologies/high-resolution-3d-printer-smallest-feature-size-2PP.jpg" 
                  alt="Nanofabrication smallest feature size: free-floating line 115nm thick by 2PP 3D printing"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const DesignerPage = DesignerPageComponent;
export default DesignerPageComponent;