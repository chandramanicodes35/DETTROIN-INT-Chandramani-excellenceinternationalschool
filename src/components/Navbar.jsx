import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  Sun, 
  Moon, 
  UserCheck, 
  Menu, 
  X, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function Navbar({ onOpenPortal, theme, toggleTheme, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Virtual Tour', href: '#tour' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'News & Events', href: '#events' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      {/* Top Banner Notice Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-notice">
            <span className="badge badge-gold">
              <Sparkles size={13} /> Admissions 2026-27 Open
            </span>
            <span className="notice-text">Applications invited for Pre-Primary to Grade XII</span>
          </div>
          <div className="top-bar-contacts">
            <a href="tel:+915712700800" className="contact-link">
              <Phone size={13} /> +91 (571) 270-0800
            </a>
            <a href="mailto:info@excellenceinternationalschool.com" className="contact-link">
              <Mail size={13} /> info@excellenceinternationalschool.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="main-nav">
        <div className="container nav-container">
          {/* Logo */}
          <a href="#hero" className="brand-logo">
            <div className="logo-icon-box">
              <GraduationCap size={28} className="gold-icon" />
            </div>
            <div className="brand-text">
              <span className="brand-title">EXCELLENCE</span>
              <span className="brand-sub">INTERNATIONAL SCHOOL</span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="desktop-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Utilities */}
          <div className="nav-actions">
            {/* Theme Switcher */}
            <button 
              onClick={toggleTheme} 
              className="icon-btn" 
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Student/Parent Portal Button */}
            <button onClick={onOpenPortal} className="portal-btn">
              <UserCheck size={16} />
              <span>ERP Portal</span>
            </button>

            {/* Apply CTA Button */}
            <a href="#admissions" className="btn btn-gold desktop-only">
              Apply Now
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <div className="mobile-drawer-inner">
            <nav className="mobile-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={16} />
                </a>
              ))}
            </nav>

            <div className="mobile-drawer-actions">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenPortal(); }} 
                className="portal-btn full-width"
              >
                <UserCheck size={18} />
                <span>Access Student & Parent ERP</span>
              </button>
              <a 
                href="#admissions" 
                className="btn btn-gold full-width"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply for Admission 2026
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Inline Component Styles */}
      <style>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 900;
          width: 100%;
          transition: all 0.3s ease;
        }

        .top-bar {
          background: var(--primary-navy);
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.82rem;
          padding: 0.4rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .top-bar-notice {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .top-bar-contacts {
          display: flex;
          gap: 1.5rem;
        }

        .contact-link {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: color 0.2s;
        }

        .contact-link:hover {
          color: var(--accent-gold);
        }

        .main-nav {
          background: var(--bg-card);
          border-bottom: 1px solid var(--border-light);
          padding: 0.9rem 0;
          transition: all 0.3s ease;
        }

        .is-scrolled .main-nav {
          box-shadow: var(--shadow-md);
          padding: 0.65rem 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
        }

        [data-theme='dark'] .is-scrolled .main-nav {
          background: rgba(17, 24, 39, 0.95);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .logo-icon-box {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-navy-light) 100%);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(15, 23, 42, 0.2);
        }

        .gold-icon {
          color: var(--accent-gold);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          line-height: 1;
          color: var(--primary-navy);
          letter-spacing: 0.04em;
        }

        [data-theme='dark'] .brand-title {
          color: #ffffff;
        }

        .brand-sub {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--accent-gold);
          letter-spacing: 0.12em;
        }

        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 1.6rem;
        }

        .nav-link {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--text-dark);
          text-decoration: none;
          position: relative;
          padding: 0.25rem 0;
          transition: color 0.2s;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--accent-gold);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-gold);
          transition: width 0.25s ease;
        }

        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--border-light);
          background: var(--bg-light);
          color: var(--text-dark);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .icon-btn:hover {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
        }

        .portal-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1rem;
          border-radius: 9999px;
          background: rgba(2, 132, 199, 0.1);
          color: var(--sky-blue);
          border: 1px solid rgba(2, 132, 199, 0.25);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .portal-btn:hover {
          background: var(--sky-blue);
          color: #ffffff;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-dark);
          cursor: pointer;
        }

        .mobile-drawer {
          background: var(--bg-card);
          border-bottom: 1px solid var(--border-light);
          padding: 1.5rem;
          box-shadow: var(--shadow-lg);
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .mobile-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          color: var(--text-dark);
          text-decoration: none;
          font-weight: 600;
          background: var(--bg-light);
        }

        .mobile-drawer-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .full-width {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .desktop-menu {
            display: none;
          }
          .desktop-only {
            display: none;
          }
          .mobile-toggle {
            display: flex;
          }
          .top-bar-contacts {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
