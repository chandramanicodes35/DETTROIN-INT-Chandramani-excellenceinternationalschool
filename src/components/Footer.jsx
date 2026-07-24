import React from 'react';
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ShieldCheck,
  Heart
} from 'lucide-react';

export default function Footer({ onOpenPortal }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <a href="#hero" className="footer-logo">
              <GraduationCap size={32} className="gold-icon" />
              <div className="brand-text">
                <span className="brand-title light">EXCELLENCE</span>
                <span className="brand-sub">INTERNATIONAL SCHOOL</span>
              </div>
            </a>
            <p className="footer-desc">
              Empowering students through academic distinction, STEM innovation, and character building in a 30-acre modern smart campus.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <ul className="footer-links">
              <li><a href="#about">About Our Ethos</a></li>
              <li><a href="#academics">Academic Programs</a></li>
              <li><a href="#tour">Campus Virtual Tour</a></li>
              <li><a href="#admissions">Fee Estimator</a></li>
              <li><a href="#events">News & Circulars</a></li>
              <li><a href="#faculty">Faculty Directory</a></li>
            </ul>
          </div>

          {/* Academic Wings */}
          <div className="footer-col">
            <h4>Academic Portals</h4>
            <ul className="footer-links">
              <li><button onClick={onOpenPortal} className="text-link">Student ERP Dashboard</button></li>
              <li><button onClick={onOpenPortal} className="text-link">Parent Portal Login</button></li>
              <li><a href="#admissions">Online Admission Form</a></li>
              <li><a href="#academics">CBSE Board Syllabus</a></li>
              <li><a href="#academics">IB Diploma Pathway</a></li>
              <li><a href="#events">Scholarship Exam (SAT)</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="footer-col newsletter-col">
            <h4>Campus Newsletter</h4>
            <p>Subscribe for monthly academic updates, event alerts, and newsletter bulletins.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Excellence Newsletter!'); }} className="newsletter-form">
              <input type="email" required placeholder="Enter your email" />
              <button type="submit" aria-label="Subscribe">
                <Send size={16} />
              </button>
            </form>
            <div className="affiliation-badge">
              <ShieldCheck size={16} className="text-gold" />
              <span>Affiliated to CBSE Board (Aff. No. 2130849)</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Excellence International School. Redesigned for Dettroin Full Stack Developer Internship Assessment.</p>
          <p className="credit-text">
            Crafted with <Heart size={14} className="heart-icon" /> by Chandramani Yadav for <strong>Dettroin Internship Round 1</strong>
          </p>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #090d16;
          color: rgba(255, 255, 255, 0.8);
          padding: 4.5rem 0 2rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 0.8fr 1.2fr;
          gap: 2.5rem;
          margin-bottom: 3.5rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          margin-bottom: 1rem;
        }

        .brand-title.light {
          color: #ffffff;
        }

        .footer-desc {
          font-size: 0.88rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-links a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s;
        }

        .social-links a:hover {
          background: var(--accent-gold);
          transform: translateY(-3px);
        }

        .footer-col h4 {
          color: #ffffff;
          font-size: 1.05rem;
          margin-bottom: 1.25rem;
          position: relative;
        }

        .footer-col h4::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--accent-gold);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-links a, .text-link {
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          font-size: 0.88rem;
          transition: color 0.2s;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
        }

        .footer-links a:hover, .text-link:hover {
          color: var(--accent-gold);
        }

        .newsletter-col p {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 1rem;
        }

        .newsletter-form {
          display: flex;
          margin-bottom: 1.25rem;
        }

        .newsletter-form input {
          flex-grow: 1;
          padding: 0.65rem 1rem;
          border-radius: var(--radius-sm) 0 0 var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          font-size: 0.88rem;
        }

        .newsletter-form button {
          background: var(--accent-gold);
          color: #ffffff;
          border: none;
          padding: 0 1.25rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          cursor: pointer;
        }

        .affiliation-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .heart-icon {
          color: #ef4444;
          display: inline;
          vertical-align: middle;
        }

        @media (max-width: 1024px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 0.75rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
