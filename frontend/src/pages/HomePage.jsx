// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ResourcesPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeProduct, setActiveProduct] = useState(2);
  const [newsIndex, setNewsIndex] = useState(0);

  // Hero slider data
  const heroSlides = [
    {
      id: 'c32143',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/a/a/csm_QuantumX-align-Redefining-Microfabrication-Buehne_41821b38af.jpg',
      mobileImage: 'https://www.nanoscribe.com/fileadmin/_processed_/a/4/csm_QuantumX-align-Redefining-Microfabrication-Buehne-m_7782fc2d83.jpg',
      title: 'Redefining microfabrication.',
      subtitle: 'For the highest precision in additive manufacturing, our 3D printers and grayscale lithography systems perform with superior quality at unrivaled speed.',
      cta: 'Ready to be impressed?',
      ctaLink: '/en/products/'
    },
    {
      id: 'c53045',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/1/0/csm_industrial-grade-resins-stage-slider_84d6e1238b.jpg',
      mobileImage: 'https://www.nanoscribe.com/fileadmin/_processed_/b/c/csm_industrial-grade-resins-stage-m_0db61ea8f7.jpg',
      title: 'Scaling production of key photoresins',
      subtitle: 'To meet growing industrial demand, Nanoscribe has invested in expanded manufacturing capabilities for five of its most widely used printing materials.',
      cta: 'Read more',
      ctaLink: '/en/news-insights/company-news/nanoscribe-scales-manufacturing-of-key-photoresins-to-meet-growing-industrial-demand/'
    },
    {
      id: 'c32145',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/4/c/csm_Quantum-X-Highest-precision-Lines_5dc6d561e2.jpg',
      mobileImage: 'https://www.nanoscribe.com/fileadmin/_processed_/f/4/csm_QuantumX-Highest-precision-Lines-m_223cdf0f32.jpg',
      title: 'Highest precision.',
      subtitle: 'Precision goes beyond resolution. It is all about high-speed laser scanning, stage positioning, distortion-free shape accuracy, reproducibility, and scalability.',
      cta: 'Explore leading-edge technologies',
      ctaLink: '/en/microfabrication-technologies/'
    },
    {
      id: 'c32146',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/d/0/csm_Quantum-X-Quality_02dc82bc3a.jpg',
      mobileImage: 'https://www.nanoscribe.com/fileadmin/_processed_/c/4/csm_QuantumX-Quality-m_a09391bf39.jpg',
      title: 'Superior quality.',
      subtitle: 'Why compromise on quality when it\'s so easy to create accurate, seamless, distortion-free shapes with high-quality surfaces and the finest features?',
      cta: 'Discover superior quality',
      ctaLink: '/en/news-insights/news/3d-printing-by-2gl/'
    },
    {
      id: 'c32147',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/f/c/csm_Quantum-X-Unrivaled-Speed-Buehne-2_c8da65bad1.png',
      mobileImage: 'https://www.nanoscribe.com/fileadmin/_processed_/a/7/csm_QuantumX-Unrivaled-Speed-Buehne2-m_738060d841.png',
      title: 'Unrivaled speed.',
      subtitle: '3D printing is no longer a slow affair. Just print fast and with superior quality. With our Quantum X systems, you can print up to 100 times faster.',
      cta: 'Get more done',
      ctaLink: '/en/microfabrication-technologies/3d-printing-by-2gl/'
    }
  ];

  // Products
  const products = [
    {
      id: 'c41673',
      title: 'Quantum X shape',
      image: 'https://www.nanoscribe.com/fileadmin/Nanoscribe/Products/Printer/Quantum-X-shape-high-resolution-3d-printer-System-Karussell.jpg',
      link: '/en/products/quantum-x-shape-high-resolution-3d-printer/'
    },
    {
      id: 'c41672',
      title: 'Quantum X bio',
      image: 'https://www.nanoscribe.com/fileadmin/Nanoscribe/Products/Printer/Quantum-X-bio-high-resolution-3d-bioprinter-System-karussell.jpg',
      link: '/en/products/high-resolution-3d-bioprinter-quantum-x-bio/'
    },
    {
      id: 'c41671',
      title: 'Quantum X align',
      image: 'https://www.nanoscribe.com/fileadmin/Nanoscribe/Products/Printer/Quantum-X-align-aligned-2-photon-lithography-System-karussell.jpg',
      link: '/en/products/quantum-x-align/'
    },
    {
      id: 'c41670',
      title: 'Quantum X litho',
      image: 'https://www.nanoscribe.com/fileadmin/Nanoscribe/Products/Printer/Quantum-X-litho-two-photon-grayscale-lithography-System-Karussell.jpg',
      link: '/en/products/quantum-x-litho/'
    }
  ];

  // News
  const newsItems = [
    {
      id: 1,
      title: 'Nanoscribe scales manufacturing of key photoresins',
      excerpt: 'To meet growing industrial demand, Nanoscribe has invested in expanded manufacturing capabilities for five of its most widely used printing materials.',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/1/5/csm_industrial-grade-resins-thumbnail_04690bdb8c.jpg',
      link: '/en/news-insights/company-news/nanoscribe-scales-manufacturing-of-key-photoresins-to-meet-growing-industrial-demand/'
    },
    {
      id: 2,
      title: 'Nanoscribe secures system orders for Fusion target fabrication',
      excerpt: 'Nanoscribe, a global leader in high-precision 3D microfabrication, has secured orders for inertial fusion energy target polymer structures.',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/c/f/csm_laser-fusion-targets-2gl-grayscale-lithography-3D-printed-target-polymer-structure-News-Header-Thumbnail_7ff8438a3f.jpg',
      link: '/en/news-insights/company-news/nanoscribe-secures-multiple-quantum-x-system-orders-for-inertial-fusion-energy-target-fabrication/'
    },
    {
      id: 3,
      title: 'Nanoscribe opens Shanghai demolab',
      excerpt: 'Nanoscribe has officially inaugurated its Shanghai Quantum X demolab to serve East Asian research and industrial partners.',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/e/9/csm_Shanghai-demolab-inauguration_News-Thumbnail_30a2cef82b.jpg',
      link: '/en/news-insights/company-news/2pp-microfabrication-demolab-in-china-shanghai/'
    },
    {
      id: 4,
      title: 'Nanoscribe reaches 400 systems sold',
      excerpt: 'In its 18th year of operation, Nanoscribe has reached a major milestone with 400 systems deployed across top international research labs.',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/8/a/csm_400-Systems-Grafik-News-Thumbnail_48ebf5a830.jpg',
      link: '/en/news-insights/news/nanoscribe-reaches-400-systems-sold/'
    },
    {
      id: 5,
      title: 'Plug-and-play fiber-to-photonic chip coupling',
      excerpt: 'Photonic chips hold enormous potential for next-generation computing and telecom interconnect solutions using 3D printed micro-lenses.',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/a/9/csm_novel-plug-and-play-fiber-to-chip-connector-Thumbnail_680ab4a3e1.jpg',
      link: '/en/news-insights/customer-success/plug-and-play-fiber-to-photonic-chip-coupling/'
    },
    {
      id: 6,
      title: '3D-printed splitter for multi-core fiber coupling',
      excerpt: 'To address the growing demand for compact photonic interconnects, custom ultracompact 3D splitters were developed.',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/a/e/csm_Ultracompact-3D-splitter-Header-Thumbnail_a390f4323a.jpg',
      link: '/en/news-insights/customer-success/3d-printed-splitter-for-multi-core-fiber-coupling/'
    }
  ];

  // Premium resources
  const premiumResources = [
    {
      id: 'c52598',
      title: 'Scaling photonic computing',
      tag: 'On-demand Webinar 12:',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/a/f/csm_Webinar-12-Scaling-Photonic-Computing-Startseite_05f8b1d15f.jpg',
      link: '/en/news-insights/premium-resources/?redirect_url=%2Fen%2Fwebinars%2Fon-demand-webinar-12-scaling-photonic-computing%2F&cHash=366f03e1386d5bf106398a69ff522ca8'
    },
    {
      id: 'c32159',
      title: 'Advanced photonic coupling',
      tag: 'On-demand Webinar 11:',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/b/f/csm_Webinar-11-Quantum-X-align-Startseite_8db071080c.jpg',
      link: '/en/news-insights/premium-resources/?redirect_url=%2Fen%2Fwebinars%2Fon-demand-webinar-11-advanced-photonic-coupling%2F&cHash=9c2ebdcd9bd197d37ab9ed3e3e215f25'
    },
    {
      id: 'c32163',
      title: 'Industrial upscaling of nano- & microfabrication',
      tag: 'Whitepaper 3:',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/4/d/csm_Whitpaper-Mastering-Premium_d2487c9b8e.jpg',
      link: '/en/news-insights/premium-resources/?redirect_url=%2Fen%2Fnews-insights%2Fwhitepapers%2Fwhitepaper-industrial-upscaling-of-nano-and-microfabrication%2F&cHash=332b94020a9925238d5c81744ed1ac9d'
    },
    {
      id: 'c32164',
      title: 'Two-Photon Grayscale Lithography',
      tag: 'Whitepaper 2:',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/e/3/csm_Whitpaper-2GL-Premium_11232a1420.jpg',
      link: '/en/news-insights/premium-resources/?redirect_url=%2Fen%2Fnews-insights%2Fwhitepapers%2Fwhitepaper-introducing-two-photon-grayscale-lithography%2F&cHash=eb203d8faf6458383bbfff3be99934d5'
    }
  ];

  // Events
  const events = [
    {
      id: 1,
      title: 'NanoFab UK',
      location: 'London (UK)',
      date: '2026/08/19 - 2026/08/21',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/b/0/csm_nanofab-uk-logo_df7b5ac121.webp',
      link: 'https://nanofabuk.com/'
    },
    {
      id: 2,
      title: 'Photon 2026',
      location: 'Newcastle (UK)',
      date: '2026/09/01 - 2026/09/04',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/e/5/csm_iop-logo_501af1fc13.png',
      link: 'https://www.photon.org.uk/'
    },
    {
      id: 3,
      title: 'CIOE 2026',
      location: 'Shenzhen (CN)',
      date: '2026/09/09 - 2026/09/11',
      image: 'https://www.nanoscribe.com/fileadmin/_processed_/2/c/csm_CIOE-2025-logo_095a0019e6.png',
      link: 'https://www.cioe.cn/en/'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextProduct = () => {
    setActiveProduct((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setActiveProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  const newsPerPage = 3;
  const nextNews = () => {
    const maxIndex = Math.max(0, newsItems.length - newsPerPage);
    setNewsIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevNews = () => {
    setNewsIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleNews = newsItems.slice(newsIndex, newsIndex + newsPerPage);

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', background: '#ffffff', color: '#0B0F33' }}>
      {/* ==================== HERO SLIDER (TEXT STRICTLY ON RIGHT SIDE & LIGHT THEME OVERLAY) ==================== */}
      <div id="c32142" style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
        <div style={{ 
          position: 'relative', 
          height: '680px', 
          width: '100%',
          minHeight: '620px'
        }}>
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: index === activeSlide ? 1 : 0,
                transition: 'opacity 900ms ease-in-out',
                zIndex: index === activeSlide ? 10 : 0,
                pointerEvents: index === activeSlide ? 'auto' : 'none'
              }}
            >
              {/* Background Image */}
              <div style={{ position: 'absolute', inset: 0 }}>
                <picture>
                  <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </picture>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to left, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.75) 50%, rgba(255, 255, 255, 0.15) 100%)'
                }}></div>
              </div>

              {/* Text Box Positioned Strictly on RIGHT SIDE with Light Backdrop Card */}
              <div style={{
                position: 'relative',
                height: '100%',
                maxWidth: '1360px',
                margin: '0 auto',
                padding: '0 3rem',
                display: 'flex',
                alignItems: 'center',
                justify: 'flex-end'
              }}>
                <div style={{
                  maxWidth: '620px',
                  width: '100%',
                  textAlign: 'right',
                  marginLeft: 'auto',
                  color: '#0B0F33',
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  padding: '3.5rem 3rem',
                  borderRadius: '24px',
                  border: '1px solid rgba(0, 102, 255, 0.2)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem'
                }}>
                  <h2 style={{
                    fontSize: '2.8rem',
                    fontWeight: 800,
                    color: '#0066FF',
                    lineHeight: '1.2',
                    letterSpacing: '-0.5px',
                    margin: 0
                  }}>
                    {slide.title}
                  </h2>
                  <p style={{
                    fontSize: '1.15rem',
                    color: '#4B5563',
                    lineHeight: '1.8',
                    fontWeight: 400,
                    margin: 0
                  }}>
                    {slide.subtitle}
                  </p>
                  <div style={{ paddingTop: '0.8rem' }}>
                    <a
                      href={slide.ctaLink}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '1rem 2.2rem',
                        background: '#0066FF',
                        color: '#ffffff',
                        borderRadius: '9999px',
                        fontWeight: 700,
                        fontSize: '1rem',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 10px 25px rgba(0, 102, 255, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#0052cc'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#0066FF'}
                    >
                      {slide.cta}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
            style={{
              position: 'absolute',
              left: '2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#ffffff',
              color: '#0066FF',
              border: '1px solid #E5E7EB',
              borderRadius: '50%',
              width: '52px',
              height: '52px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              zIndex: 20,
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
            style={{
              position: 'absolute',
              right: '2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#ffffff',
              color: '#0066FF',
              border: '1px solid #E5E7EB',
              borderRadius: '50%',
              width: '52px',
              height: '52px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              zIndex: 20,
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '0.8rem',
            zIndex: 20
          }}>
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                style={{
                  width: index === activeSlide ? '32px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: index === activeSlide ? '#0066FF' : 'rgba(0, 0, 0, 0.2)'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ==================== INTRODUCTION SECTION (WHITE THEME) ==================== */}
      <div id="c32154" style={{ padding: '6rem 2rem', background: '#f8faff', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div id="c32155" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '9999px', background: '#e6f0ff', border: '1px solid #0066FF', color: '#0066FF', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem' }}>
              Sub-Micron Additive Nanolithography
            </div>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 800,
              color: '#0B0F33',
              marginBottom: '2rem',
              lineHeight: '1.25'
            }}>
              Think big. <span style={{ color: '#0066FF' }}>Print nano.</span>
            </h2>
            <p style={{
              color: '#4B5563',
              fontSize: '1.15rem',
              lineHeight: '1.9',
              margin: '0 0 1.5rem 0',
              fontWeight: 400
            }}>
              Step into a new era of additive manufacturing with our leading-edge product portfolio. 
              Utilize the versatility of 3D printing and the performance of our innovative grayscale 
              technology, both powered by Two-Photon Polymerization – the highest resolution additive 
              manufacturing technology with feature size control down to 100 nm.
            </p>
            <p style={{
              color: '#6B7280',
              fontSize: '1.05rem',
              lineHeight: '1.8',
              margin: 0
            }}>
              Streamline manufacturing with our state-of-the-art 3D nano- and microfabrication solutions from the research lab to the factory floor. Our proprietary solutions range from 3D bioprinting for life sciences to nanoprecision alignment 3D printing for photonics applications.
            </p>
          </div>
        </div>
      </div>

      {/* ==================== PRODUCT CAROUSEL (WHITE THEME) ==================== */}
      <div id="c41669" style={{ padding: '6rem 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#0B0F33', marginBottom: '0.8rem' }}>
              Quantum X Microfabrication Platforms
            </h2>
            <p style={{ color: '#6B7280', fontSize: '1.1rem' }}>
              Industrial-grade 2PP 3D printers and grayscale nanolithography workstations
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '2.5rem'
            }}>
              {products.map((product, index) => {
                const isActive = index === activeProduct;
                return (
                  <div
                    key={product.id}
                    style={{
                      transition: 'all 500ms ease',
                      transform: isActive ? 'scale(1.03)' : 'scale(0.97)',
                      opacity: isActive ? 1 : 0.85
                    }}
                  >
                    <div style={{
                      background: '#ffffff',
                      borderRadius: '20px',
                      border: isActive ? '2px solid #0066FF' : '1px solid #E5E7EB',
                      boxShadow: isActive ? '0 12px 35px rgba(0, 102, 255, 0.15)' : '0 4px 15px rgba(0,0,0,0.05)',
                      padding: '2.2rem',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      justify: 'space-between',
                      height: '100%'
                    }}>
                      <div>
                        <h3 style={{
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          color: '#0B0F33',
                          marginBottom: '1.2rem'
                        }}>
                          {product.title}
                        </h3>
                        <div style={{
                          position: 'relative',
                          aspectRatio: '1/1',
                          marginBottom: '1.5rem',
                          overflow: 'hidden',
                          borderRadius: '14px',
                          background: '#f8faff',
                          border: '1px solid #E5E7EB'
                        }}>
                          <img
                            src={product.image}
                            alt={product.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                      </div>

                      <div style={{ paddingTop: '1rem' }}>
                        <a
                          href={product.link}
                          style={{
                            display: 'block',
                            width: '100%',
                            padding: '0.85rem 1.5rem',
                            border: '2px solid #0066FF',
                            color: '#0066FF',
                            borderRadius: '12px',
                            transition: 'all 0.3s',
                            fontWeight: '600',
                            fontSize: '0.95rem',
                            textDecoration: 'none',
                            cursor: 'pointer'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#0066FF';
                            e.currentTarget.style.color = '#ffffff';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#0066FF';
                          }}
                        >
                          Discover {product.title}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Arrow Buttons */}
            <button
              onClick={prevProduct}
              style={{
                position: 'absolute',
                left: '-1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#ffffff',
                border: '1px solid #E5E7EB',
                color: '#0066FF',
                borderRadius: '50%',
                width: '46px',
                height: '46px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProduct}
              style={{
                position: 'absolute',
                right: '-1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#ffffff',
                border: '1px solid #E5E7EB',
                color: '#0066FF',
                borderRadius: '50%',
                width: '46px',
                height: '46px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                zIndex: 20,
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

      {/* ==================== ABOUT & PARTNERSHIP (WHITE THEME) ==================== */}
      <div id="c1" style={{ padding: '6rem 2rem', background: '#f8faff', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div id="c3" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
            <p style={{ color: '#0066FF', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.6rem' }}>
              We are Nanoscribe
            </p>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0B0F33' }}>
              Your partner for <span style={{ color: '#0066FF' }}>high-precision additive manufacturing</span>
            </h2>
          </div>

          <div id="c214" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem'
          }}>
            <div style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid #E5E7EB', padding: '2.8rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
              <p style={{ color: '#4B5563', fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
                With over 100 highly qualified employees, we develop products and services on the basis 
                of Nanoscribe's Two-Photon Polymerization technology. Providing hardware, software, 
                materials and processes as a complete solution is the key to our customers' success today. 
                Thousands of active users of our systems located in over 30 countries rely on our technology 
                and printers.
              </p>
              <p style={{ color: '#4B5563', fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
                Nanoscribe is part of the <a href="https://lab14.group/" target="_blank" rel="noreferrer" style={{ color: '#0066FF', fontWeight: 700, textDecoration: 'none' }}>LAB14 Group</a>, 
                a group of successful high-tech companies providing state-of-the-art manufacturing solutions 
                with complementary products for nano- and microfabrication and surface analysis.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid #E5E7EB', padding: '2.8rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ color: '#4B5563', fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
                  As the pioneer and market leader in high-precision additive manufacturing, we push the limits 
                  of high-resolution 3D printing and challenge the state-of-the-art in nano- and microfabrication. 
                  Our technology empowers cutting edge science and drives industrial innovations across micro-optics, micromechanics, and photonics.
                </p>
                <p style={{ color: '#4B5563', fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
                  Trust and customer satisfaction are particularly important to us. Sales and support are provided 
                  worldwide from locations in Germany, China and the USA.
                </p>
              </div>

              <div id="c217" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1rem' }}>
                <a
                  href="/en/contact-support/"
                  style={{
                    padding: '0.85rem 1.8rem',
                    background: '#0066FF',
                    color: '#ffffff',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                  id="con_start_p3l"
                >
                  Contact us
                </a>
                <a
                  href="/en/contact-support/about-us/"
                  style={{
                    padding: '0.85rem 1.8rem',
                    border: '2px solid #0066FF',
                    color: '#0066FF',
                    borderRadius: '12px',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                >
                  Find out more about us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== NEWS SECTION (WHITE THEME) ==================== */}
      <div id="c326" style={{ padding: '6rem 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div id="c323" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#0B0F33', marginBottom: '0.5rem' }}>What's new?</h2>
            <p style={{ color: '#6B7280', fontSize: '1.05rem' }}>Recent research achievements, system deployments and press releases</p>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem'
            }}>
              {visibleNews.map((news) => (
                <a
                  key={news.id}
                  href={news.link}
                  style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #E5E7EB',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
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
                  <div style={{ aspectRatio: '16/10', background: '#f8faff', overflow: 'hidden' }}>
                    <img
                      src={news.image}
                      alt={news.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#0B0F33',
                      lineHeight: '1.4',
                      margin: 0
                    }}>
                      {news.title}
                    </h3>
                    <p style={{ color: '#6B7280', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>{news.excerpt}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const HomePage = ResourcesPage;