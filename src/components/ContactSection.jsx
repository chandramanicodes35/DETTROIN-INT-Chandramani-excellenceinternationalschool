import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  HelpCircle,
  Building,
  CheckCircle
} from 'lucide-react';

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState(0);
  const [msgSent, setMsgSent] = useState(false);

  const faqs = [
    {
      q: "What is the age criteria for Pre-Primary admissions?",
      a: "For Nursery, the child should be minimum 3 years of age as of March 31st of the academic year. For LKG and UKG, 4 and 5 years respectively."
    },
    {
      q: "Does the school provide GPS-tracked bus transportation?",
      a: "Yes, our fleet of air-conditioned buses covers all major routes in Aligarh and surrounding districts with live GPS tracking accessible via Parent App and female bus attendants."
    },
    {
      q: "What boards and curricula are offered for High School?",
      a: "We offer dual stream options: Central Board of Secondary Education (CBSE Board, New Delhi) and International Baccalaureate (IB Diploma Pathway) for Senior Secondary."
    },
    {
      q: "Are scholarships available for meritorious students?",
      a: "Yes, Excellence International School awards up to 50% tuition fee waiver to top scorers in our annual Scholarship Aptitude Test (SAT-EIS) and state-level sports achievers."
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setMsgSent(true);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-gold">Connect With Us</span>
          <h2>Visit Our Campus & Reach Out</h2>
          <p>
            Have questions about admissions, campus visits, or academic programs? We are here to help.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="contact-grid mb-5">
          <div className="contact-info-card glass-card">
            <div className="c-icon-wrap"><MapPin size={22} /></div>
            <h4>Campus Address</h4>
            <p>Excellence Knowledge Park, Ramghat Road, Aligarh, Uttar Pradesh - 202001</p>
          </div>

          <div className="contact-info-card glass-card">
            <div className="c-icon-wrap"><Phone size={22} /></div>
            <h4>Phone & Helpline</h4>
            <p>Admissions: +91 (571) 270-0800</p>
            <p>Helpline: +91 98765 43210</p>
          </div>

          <div className="contact-info-card glass-card">
            <div className="c-icon-wrap"><Mail size={22} /></div>
            <h4>Email & Support</h4>
            <p>info@excellenceinternationalschool.com</p>
            <p>admissions@excellenceinternationalschool.com</p>
          </div>

          <div className="contact-info-card glass-card">
            <div className="c-icon-wrap"><Clock size={22} /></div>
            <h4>Office Hours</h4>
            <p>Mon - Sat: 08:00 AM - 04:30 PM</p>
            <p>Sunday: Closed (Except Admissions)</p>
          </div>
        </div>

        {/* Form & Map Split Row */}
        <div className="contact-split-row mb-5">
          {/* Quick Contact Form */}
          <div className="glass-card contact-form-box">
            <h3>Send Us a Quick Message</h3>
            <p className="form-sub-text">Our administrative office will respond within 12 business hours.</p>

            {msgSent ? (
              <div className="contact-success animate-fade-in">
                <CheckCircle size={48} className="text-emerald mb-2" />
                <h4>Message Delivered Successfully!</h4>
                <p>Thank you for reaching out to Excellence International School. We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="c-form">
                <div className="c-form-grid">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" required placeholder="Full Name" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" required placeholder="Phone Number" />
                  </div>
                  <div className="form-group full-col">
                    <label>Email Address *</label>
                    <input type="email" required placeholder="Email Address" />
                  </div>
                  <div className="form-group full-col">
                    <label>Message / Question *</label>
                    <textarea rows="4" required placeholder="Type your message here..."></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-gold full-width">
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Interactive Map Embed */}
          <div className="glass-card map-box">
            <div className="map-header">
              <Building size={20} className="text-gold" />
              <h4>Interactive Campus Location Map</h4>
            </div>
            <div className="map-embed-container">
              <iframe 
                title="School Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112771.50371457173!2d78.0264104085449!3d27.897388700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a4805e26b177%3A0xb35a39eb88d447a1!2sAligarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="320" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="faq-container">
          <div className="faq-header text-center mb-4">
            <div className="badge badge-blue"><HelpCircle size={14} /> Admissions FAQ</div>
            <h3>Frequently Asked Questions</h3>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                {openFaq === idx && (
                  <div className="faq-answer animate-fade-in">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: var(--bg-light);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .contact-info-card {
          padding: 1.5rem;
          text-align: center;
        }

        .c-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(217, 119, 6, 0.12);
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem auto;
        }

        .contact-info-card h4 {
          font-size: 1.05rem;
          margin-bottom: 0.4rem;
        }

        .contact-info-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .contact-split-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .contact-form-box, .map-box {
          padding: 2rem;
        }

        .contact-form-box h3 {
          font-size: 1.35rem;
          margin-bottom: 0.3rem;
        }

        .form-sub-text {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .c-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .map-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
        }

        .map-header h4 {
          font-size: 1.1rem;
        }

        .map-embed-container {
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .contact-success {
          text-align: center;
          padding: 2rem 1rem;
        }

        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .faq-item {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
          cursor: pointer;
        }

        .faq-question {
          padding: 1.1rem 1.25rem;
          font-weight: 600;
          font-size: 0.98rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-item.open .faq-question {
          color: var(--accent-gold);
          border-bottom: 1px solid var(--border-light);
        }

        .faq-answer {
          padding: 1.1rem 1.25rem;
          background: var(--bg-light);
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .mb-5 { margin-bottom: 3.5rem; }
        .mb-4 { margin-bottom: 2rem; }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .contact-split-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .c-form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
