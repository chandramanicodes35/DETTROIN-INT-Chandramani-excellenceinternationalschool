import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Tag, 
  ArrowRight, 
  CheckCircle, 
  X, 
  Megaphone,
  Bell
} from 'lucide-react';

export default function EventsNews() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [registerEvent, setRegisterEvent] = useState(null);
  const [registeredSuccess, setRegisteredSuccess] = useState(false);

  const events = [
    {
      id: 1,
      category: 'academics',
      title: 'National Science & AI Expo 2026',
      date: 'March 22, 2026',
      time: '09:00 AM - 04:00 PM',
      location: 'STEM Innovation Hub',
      desc: 'Student robotics demonstrations, AI project displays, and guest keynote by ISRO scientists.',
      img: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'sports',
      title: 'Annual Inter-School Aquatics Meet',
      date: 'April 05, 2026',
      time: '08:30 AM - 03:00 PM',
      location: 'Olympic Swimming Complex',
      desc: 'Competitive swimming events across 50m, 100m, and medley relays with 20+ participating schools.',
      img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      category: 'cultural',
      title: 'International Model UN (EIS-MUN 2026)',
      date: 'April 18 - 20, 2026',
      time: '09:00 AM - 05:00 PM',
      location: 'Grand Auditorium',
      desc: '3-day global diplomacy simulation debating climate action, cybersecurity, and international trade.',
      img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 4,
      category: 'cultural',
      title: 'Annual Performing Arts Gala "Harmony"',
      date: 'May 10, 2026',
      time: '05:00 PM - 08:30 PM',
      location: 'Open Air Amphitheater',
      desc: 'Orchestral musical performances, classical kathak dance recitals, and multi-lingual stage theater.',
      img: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const newsItems = [
    {
      tag: 'Academic Distinction',
      date: 'Feb 12, 2026',
      title: 'EIS Ranked #1 International School in Regional Survey 2026',
      summary: 'Awarded top honors for curriculum innovation, STEM infrastructure, and sports facilities.'
    },
    {
      tag: 'Admissions Notice',
      date: 'Feb 05, 2026',
      title: 'Scholarship Aptitude Test (SAT-EIS) Schedule Released',
      summary: 'Merit-based scholarships offering up to 50% tuition waiver for Grade XI applicants.'
    },
    {
      tag: 'Green Campus',
      date: 'Jan 28, 2026',
      title: 'School Campus Certified 100% Carbon Neutral by Green Rating Council',
      summary: 'Completion of 250kW solar panel canopy and zero-water-waste rain harvest system.'
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(e => e.category === selectedCategory);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setRegisteredSuccess(true);
  };

  return (
    <section id="events" className="section-padding events-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-blue">Events & Circulars</span>
          <h2>Life at Excellence International School</h2>
          <p>
            Stay updated with upcoming campus events, academic milestones, and official press releases.
          </p>
        </div>

        {/* Category Filter */}
        <div className="event-filter-bar">
          <button 
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Events
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'academics' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('academics')}
          >
            Science & Tech
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'sports' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('sports')}
          >
            Sports Tournaments
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'cultural' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('cultural')}
          >
            Cultural & Arts
          </button>
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {filteredEvents.map((evt) => (
            <div key={evt.id} className="glass-card event-card animate-fade-in">
              <div className="event-img-box" style={{ backgroundImage: `url(${evt.img})` }}>
                <span className="event-category-badge">{evt.category.toUpperCase()}</span>
              </div>

              <div className="event-body">
                <div className="event-meta">
                  <span><Calendar size={14} /> {evt.date}</span>
                  <span><Clock size={14} /> {evt.time}</span>
                </div>

                <h3>{evt.title}</h3>
                <p className="event-desc">{evt.desc}</p>

                <div className="event-location">
                  <MapPin size={14} className="text-gold" />
                  <span>{evt.location}</span>
                </div>

                <button 
                  onClick={() => { setRegisterEvent(evt); setRegisteredSuccess(false); }} 
                  className="btn btn-outline full-width event-reg-btn"
                >
                  <span>Register as Guest / Parent</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* News & Bulletins Section */}
        <div className="news-bulletin-container">
          <div className="bulletin-header">
            <div className="b-title">
              <Megaphone size={24} className="text-gold" />
              <h3>Latest Campus News & Circulars</h3>
            </div>
            <a href="#contact" className="subscribe-link">
              <Bell size={16} /> Get WhatsApp Bulletins
            </a>
          </div>

          <div className="news-grid">
            {newsItems.map((item, idx) => (
              <div key={idx} className="news-card">
                <div className="news-top">
                  <span className="news-tag">{item.tag}</span>
                  <span className="news-date">{item.date}</span>
                </div>
                <h4>{item.title}</h4>
                <p>{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Registration Modal */}
      {registerEvent && (
        <div className="modal-overlay" onClick={() => setRegisterEvent(null)}>
          <div className="modal-box event-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setRegisterEvent(null)}>
              <X size={20} />
            </button>

            {registeredSuccess ? (
              <div className="register-success animate-fade-in">
                <CheckCircle2 size={52} className="success-icon" />
                <h3>Seat Reserved Successfully!</h3>
                <p>Your entry pass for <strong>{registerEvent.title}</strong> on {registerEvent.date} has been confirmed.</p>
                <button onClick={() => setRegisterEvent(null)} className="btn btn-gold">
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="register-form">
                <h3>Event Visitor Registration</h3>
                <p className="modal-sub">Reserve your attendee pass for: <strong>{registerEvent.title}</strong></p>

                <div className="form-group mb-3">
                  <label>Full Name *</label>
                  <input type="text" required placeholder="Your name" />
                </div>

                <div className="form-group mb-3">
                  <label>Email Address *</label>
                  <input type="email" required placeholder="email@example.com" />
                </div>

                <div className="form-group mb-3">
                  <label>Number of Attendees</label>
                  <select defaultValue="1 Pass">
                    <option value="1 Pass">1 Pass</option>
                    <option value="2 Passes">2 Passes</option>
                    <option value="3 Passes">3 Passes (Family)</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-gold full-width">
                  Confirm Registration
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <style>{`
        .events-section {
          background: var(--bg-light);
        }

        .event-filter-bar {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.55rem 1.25rem;
          border-radius: 9999px;
          border: 1px solid var(--border-light);
          background: var(--bg-card);
          color: var(--text-dark);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .filter-btn:hover, .filter-btn.active {
          background: var(--primary-navy);
          color: #ffffff;
          border-color: var(--primary-navy);
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .event-card {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          overflow: hidden;
          padding: 0;
        }

        .event-img-box {
          background-size: cover;
          background-position: center;
          position: relative;
          min-height: 220px;
        }

        .event-category-badge {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          background: rgba(217, 119, 6, 0.9);
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }

        .event-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }

        .event-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.8rem;
          color: var(--accent-gold);
          font-weight: 600;
          margin-bottom: 0.6rem;
        }

        .event-meta span {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .event-body h3 {
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .event-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .event-location {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 1.25rem;
        }

        .news-bulletin-container {
          background: var(--bg-card);
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
        }

        .bulletin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.75rem;
        }

        .b-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .b-title h3 {
          font-size: 1.4rem;
        }

        .subscribe-link {
          color: var(--sky-blue);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .news-card {
          background: var(--bg-light);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
        }

        .news-top {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-bottom: 0.6rem;
        }

        .news-tag {
          font-weight: 700;
          color: var(--accent-gold);
          text-transform: uppercase;
        }

        .news-date {
          color: var(--text-muted);
        }

        .news-card h4 {
          font-size: 0.98rem;
          margin-bottom: 0.4rem;
          line-height: 1.4;
        }

        .news-card p {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .event-modal-box {
          max-width: 500px;
        }

        .register-success {
          text-align: center;
          padding: 1.5rem 0;
        }

        @media (max-width: 1024px) {
          .events-grid {
            grid-template-columns: 1fr;
          }
          .news-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .event-card {
            grid-template-columns: 1fr;
          }
          .bulletin-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
