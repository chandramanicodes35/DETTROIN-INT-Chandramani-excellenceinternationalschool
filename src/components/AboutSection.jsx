import React, { useState } from 'react';
import { 
  Target, 
  Eye, 
  Award, 
  Quote, 
  BookOpen, 
  Globe, 
  Sparkles, 
  ShieldAlert,
  Play,
  X
} from 'lucide-react';

export default function AboutSection() {
  const [videoModal, setVideoModal] = useState(false);

  const coreValues = [
    {
      icon: <Target className="text-gold" size={28} />,
      title: "Academic Excellence",
      desc: "Rigorous curriculum focused on critical thinking, problem-solving, and international standards."
    },
    {
      icon: <Globe className="text-gold" size={28} />,
      title: "Global Citizenship",
      desc: "Cultivating intercultural awareness, environmental ethics, and global perspective."
    },
    {
      icon: <Sparkles className="text-gold" size={28} />,
      title: "Innovation & STEM",
      desc: "Integrating artificial intelligence, robotics, and coding into foundational learning."
    },
    {
      icon: <Award className="text-gold" size={28} />,
      title: "Holistic Growth",
      desc: "Equal emphasis on sports, fine arts, emotional intelligence, and leadership development."
    }
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-gold">Our Legacy & Philosophy</span>
          <h2>Educating Minds, Empowering Futures</h2>
          <p>
            At Excellence International School, we combine academic rigor with traditional values and modern technology to shape the global leaders of tomorrow.
          </p>
        </div>

        {/* Two Column Overview Grid */}
        <div className="about-grid">
          {/* Left Column: Principal Message & Video Preview */}
          <div className="about-video-card glass-card">
            <div className="video-thumbnail" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop')` }}>
              <div className="video-overlay">
                <button onClick={() => setVideoModal(true)} className="play-pulse-btn" aria-label="Play School Video">
                  <Play size={24} fill="#ffffff" />
                </button>
                <span>Watch School Overview (2:45)</span>
              </div>
            </div>

            <div className="principal-quote-box">
              <Quote size={32} className="quote-icon" />
              <p className="quote-text">
                "Our mission is to create a nurturing environment where every child discovers their unique talents, embraces intellectual curiosity, and steps forward with confidence."
              </p>
              <div className="principal-author">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                  alt="Principal Dr. Meenakshi Sharma"
                  className="principal-avatar" 
                />
                <div>
                  <h4>Dr. Meenakshi Sharma</h4>
                  <p>Principal & Academic Director (Ph.D. Education, Oxford)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Vision */}
          <div className="about-values-col">
            <div className="vision-mission-cards">
              <div className="vm-card">
                <div className="vm-icon"><Eye size={22} /></div>
                <div>
                  <h3>Our Vision</h3>
                  <p>To be a premier global institution recognized for academic innovation, ethical character building, and developing compassionate world leaders.</p>
                </div>
              </div>

              <div className="vm-card">
                <div className="vm-icon"><BookOpen size={22} /></div>
                <div>
                  <h3>Our Mission</h3>
                  <p>Providing holistic education through state-of-the-art facilities, experiential learning, and personalized student mentoring.</p>
                </div>
              </div>
            </div>

            <h3 className="subheading-values">Core Pillars of Excellence</h3>

            <div className="values-grid">
              {coreValues.map((val, idx) => (
                <div key={idx} className="value-item-card">
                  <div className="value-icon">{val.icon}</div>
                  <h4>{val.title}</h4>
                  <p>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoModal && (
        <div className="modal-overlay" onClick={() => setVideoModal(false)}>
          <div className="modal-box video-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setVideoModal(false)}>
              <X size={20} />
            </button>
            <h3>Excellence International School - Virtual Experience</h3>
            <div className="embed-responsive">
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="School Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .about-section {
          background: var(--bg-light);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        .about-video-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .video-thumbnail {
          height: 260px;
          border-radius: var(--radius-md);
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.45);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          color: #ffffff;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .play-pulse-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--accent-gold);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #ffffff;
          box-shadow: 0 0 0 8px rgba(217, 119, 6, 0.3);
          transition: transform 0.2s;
        }

        .play-pulse-btn:hover {
          transform: scale(1.1);
        }

        .principal-quote-box {
          position: relative;
          padding: 1.25rem 0 0 0;
          border-top: 1px solid var(--border-light);
        }

        .quote-icon {
          color: var(--accent-gold);
          opacity: 0.4;
          margin-bottom: 0.5rem;
        }

        .quote-text {
          font-style: italic;
          color: var(--text-dark);
          font-size: 1.02rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .principal-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .principal-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--accent-gold);
        }

        .principal-author h4 {
          font-size: 1rem;
          margin-bottom: 0.15rem;
        }

        .principal-author p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .vision-mission-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .vm-card {
          display: flex;
          gap: 1rem;
          background: var(--bg-card);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
        }

        .vm-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(2, 132, 199, 0.1);
          color: var(--sky-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .vm-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
        }

        .vm-card p {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .subheading-values {
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .value-item-card {
          background: var(--bg-card);
          padding: 1.25rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
        }

        .value-icon {
          margin-bottom: 0.5rem;
        }

        .value-item-card h4 {
          font-size: 0.98rem;
          margin-bottom: 0.3rem;
        }

        .value-item-card p {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .embed-responsive {
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-top: 1rem;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
