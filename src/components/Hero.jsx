import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Award, 
  Users, 
  BookOpen, 
  ShieldCheck, 
  Play, 
  CheckCircle,
  Download,
  Calendar
} from 'lucide-react';

export default function Hero({ onOpenPortal }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: "World-Class CBSE & IB Curriculum",
      title: "Empowering Next-Gen Leaders with Excellence",
      subtitle: "Fostering academic distinction, innovation, and character building in a state-of-the-art 30-acre smart campus environment.",
      bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop",
      stat: "Ranked #1 International School"
    },
    {
      badge: "STEM & Robotics Innovation Hub",
      title: "Where Curiosity Meets Cutting-Edge Technology",
      subtitle: "Hands-on robotics labs, AI learning, and advanced science research facilities designed to spark lifelong discovery.",
      bgImage: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1600&auto=format&fit=crop",
      stat: "100+ STEM Projects Built"
    },
    {
      badge: "Holistic Sports & Cultural Academy",
      title: "Building Champions On & Off the Field",
      subtitle: "Olympic-standard swimming pools, synthetic athletics tracks, performing arts theater, and expert coaching staff.",
      bgImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1600&auto=format&fit=crop",
      stat: "35+ State Gold Medals"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="hero" className="hero-section">
      {/* Background Slideshow */}
      <div className="hero-bg-container">
        {slides.map((slide, idx) => (
          <div 
            key={idx}
            className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.65) 100%), url(${slide.bgImage})` }}
          />
        ))}
      </div>

      <div className="container hero-content">
        <div className="hero-grid">
          {/* Main Text Content */}
          <div className="hero-text-block">
            <div className="badge badge-gold animate-fade-in hero-badge">
              <Award size={14} />
              <span>{slides[currentSlide].badge}</span>
            </div>

            <h1 className="hero-title">
              {slides[currentSlide].title}
            </h1>

            <p className="hero-subtitle">
              {slides[currentSlide].subtitle}
            </p>

            <div className="hero-actions">
              <a href="#admissions" className="btn btn-gold btn-lg">
                <span>Start Admission 2026</span>
                <ArrowRight size={18} />
              </a>

              <a href="#tour" className="btn btn-outline btn-lg hero-btn-light">
                <Play size={16} fill="currentColor" />
                <span>Virtual Campus Tour</span>
              </a>
            </div>

            {/* Quick Key Highlights */}
            <div className="hero-highlights">
              <div className="highlight-item">
                <CheckCircle size={16} className="text-gold" />
                <span>100% CBSE Pass Record</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={16} className="text-gold" />
                <span>Smart AC Classrooms</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={16} className="text-gold" />
                <span>GPS Tracked Transport</span>
              </div>
            </div>
          </div>

          {/* Floating Hero Feature Card */}
          <div className="hero-card-container">
            <div className="glass-card hero-floating-card">
              <div className="card-header-badge">
                <ShieldCheck size={20} className="text-gold" />
                <span>Excellence Distinction</span>
              </div>

              <h3>Admissions Open for Session 2026-27</h3>
              <p>Limited seats available for Pre-Primary to Grade XI. Entrance assessment dates released.</p>

              <div className="card-features">
                <div className="feature-row">
                  <Calendar size={18} className="feature-icon" />
                  <div>
                    <strong>Next Entrance Exam</strong>
                    <p>Sunday, March 15, 2026</p>
                  </div>
                </div>

                <div className="feature-row">
                  <Download size={18} className="feature-icon" />
                  <div>
                    <strong>Information Brochure</strong>
                    <p>PDF prospectus (2.4 MB)</p>
                  </div>
                </div>
              </div>

              <div className="card-buttons">
                <a href="#admissions" className="btn btn-navy full-width">
                  Apply Online Now
                </a>
                <button onClick={onOpenPortal} className="btn btn-outline full-width portal-link-btn">
                  Parent ERP Login
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Slider Dots */}
        <div className="slider-dots">
          {slides.map((_, idx) => (
            <button 
              key={idx}
              className={`dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Statistics Banner */}
        <div className="hero-stats-banner">
          <div className="stat-card">
            <div className="stat-icon-wrap"><Users size={24} /></div>
            <div className="stat-info">
              <span className="stat-number">2,500+</span>
              <span className="stat-label">Enrolled Students</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrap"><BookOpen size={24} /></div>
            <div className="stat-info">
              <span className="stat-number">100%</span>
              <span className="stat-label">Academic Distinction</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrap"><Award size={24} /></div>
            <div className="stat-info">
              <span className="stat-number">50+</span>
              <span className="stat-label">National Awards</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrap"><ShieldCheck size={24} /></div>
            <div className="stat-info">
              <span className="stat-number">30+ Acres</span>
              <span className="stat-label">Eco Smart Campus</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          padding: 4rem 0 3rem 0;
          color: #ffffff;
          overflow: hidden;
        }

        .hero-bg-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1.2s ease-in-out;
        }

        .hero-slide.active {
          opacity: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-badge {
          margin-bottom: 1.25rem;
        }

        .hero-title {
          font-size: 3.2rem;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          font-weight: 800;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 2rem;
          max-width: 620px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .btn-lg {
          padding: 0.9rem 2.2rem;
          font-size: 1rem;
        }

        .hero-btn-light {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.4);
        }

        .hero-btn-light:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          border-color: #ffffff;
        }

        .hero-highlights {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          font-size: 0.88rem;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .text-gold {
          color: var(--accent-gold);
        }

        .hero-floating-card {
          padding: 2rem;
          color: var(--text-dark);
        }

        .card-header-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-family: var(--font-heading);
          color: var(--accent-gold);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
        }

        .hero-floating-card h3 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
        }

        .hero-floating-card p {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 1.25rem;
        }

        .card-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding: 1rem 0;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .feature-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .feature-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .feature-row strong {
          display: block;
          font-size: 0.88rem;
        }

        .feature-row p {
          margin: 0;
          font-size: 0.8rem;
        }

        .card-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2.5rem;
          margin-bottom: 3rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .dot.active {
          width: 32px;
          border-radius: 6px;
          background: var(--accent-gold);
        }

        .hero-stats-banner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-md);
          padding: 1.75rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon-wrap {
          width: 48px;
          height: 48px;
          background: rgba(217, 119, 6, 0.15);
          color: var(--accent-gold);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-number {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
          line-height: 1.1;
          color: #ffffff;
        }

        .stat-label {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hero-title {
            font-size: 2.4rem;
          }
          .hero-stats-banner {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 1.9rem;
          }
          .hero-stats-banner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
