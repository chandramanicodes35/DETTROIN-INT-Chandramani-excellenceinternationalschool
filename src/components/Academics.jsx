import React, { useState } from 'react';
import { 
  BookOpen, 
  Cpu, 
  Palette, 
  Trophy, 
  Music, 
  Code, 
  Microscope, 
  Check,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function Academics() {
  const [activeTab, setActiveTab] = useState('primary');

  const academicLevels = [
    {
      id: 'preprimary',
      title: 'Pre-Primary',
      grades: 'Nursery, LKG, UKG (Ages 3 - 5)',
      desc: 'Play-way methodology focusing on motor skills, emotional growth, phonics, and multi-sensory discovery.',
      subjects: ['Phonics & Early Reading', 'Number Magic & Counting', 'Creative Arts & Crafts', 'Sensory Play & Outdoor Games', 'Basic Environmental Awareness'],
      highlights: ['Montessori Activity Labs', 'Child-Safe Soft Play Area', '1:10 Teacher-Student Ratio'],
      img: 'https://images.unsplash.com/photo-1587691592057-8e020ef61f39?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'primary',
      title: 'Primary School',
      grades: 'Grades I to V (Ages 6 - 10)',
      desc: 'Building foundational literacy, logical reasoning, scientific curiosity, and collaborative learning.',
      subjects: ['English & Vernacular Language', 'Mathematics & Logic', 'Environmental Studies (EVS)', 'Digital Literacy & Coding', 'Visual & Performing Arts'],
      highlights: ['Activity-Based Learning', 'Smart Board Enabled Classrooms', 'Weekly Public Speaking Sessions'],
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'middle',
      title: 'Middle School',
      grades: 'Grades VI to VIII (Ages 11 - 13)',
      desc: 'Interdisciplinary STEM learning, lab practicals, creative expression, and analytical thinking.',
      subjects: ['Advanced Mathematics', 'Physics, Chemistry, Biology', 'Social Sciences & Civics', 'Python Programming & AI Basics', 'Third Language (French/Sanskrit)'],
      highlights: ['Hands-on Science Labs', 'Robotics & Maker Space', 'Model United Nations (MUN) Prep'],
      img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'secondary',
      title: 'Secondary School',
      grades: 'Grades IX & X (Ages 14 - 15)',
      desc: 'Comprehensive CBSE board syllabus alignment, practical lab training, and career counseling.',
      subjects: ['Mathematics (Standard/Basic)', 'Integrated Sciences', 'Social Science & Geography', 'Computer Applications / AI', 'English Language & Literature'],
      highlights: ['Rigorous Exam Prep & Mock Tests', 'Personalized Mentorship', 'Skill-Based Electives'],
      img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'senior',
      title: 'Senior Secondary',
      grades: 'Grades XI & XII (Ages 16 - 17)',
      desc: 'Specialized streams with integrated preparation for JEE, NEET, CUET, and SAT college entrance exams.',
      subjects: ['Science: PCM / PCB with Comp. Sci.', 'Commerce: Accounts, Econ, Business St.', 'Humanities: Psych, Pol Sci, History', 'Applied Mathematics & IP'],
      highlights: ['Integrated Entrance Coaching', 'University Guidance Cell', 'Research Project Mentorship'],
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const currentLevel = academicLevels.find(l => l.id === activeTab);

  const coCurricular = [
    { icon: <Cpu size={24} />, name: "AI & Robotics Club", desc: "Building IoT prototypes and competing in National Tech Olympiads." },
    { icon: <Microscope size={24} />, name: "Space & Astronomy Lab", desc: "Telescopic night sky observation and space science workshops." },
    { icon: <Music size={24} />, name: "Symphony & Theater", desc: "Western & Indian classical music, dance, and annual stage drama." },
    { icon: <Trophy size={24} />, name: "Sports Excellence Academy", desc: "Professional training in Swimming, Lawn Tennis, Basketball & Cricket." }
  ];

  return (
    <section id="academics" className="section-padding academics-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-blue">Academic Pathways</span>
          <h2>Curriculum Designed for World-Class Standards</h2>
          <p>
            From early childhood discovery to university-preparatory senior streams, our curriculum fosters academic mastery and lifelong learning.
          </p>
        </div>

        {/* Level Tabs */}
        <div className="academic-tabs-wrapper">
          {academicLevels.map((level) => (
            <button
              key={level.id}
              className={`academic-tab-btn ${activeTab === level.id ? 'active' : ''}`}
              onClick={() => setActiveTab(level.id)}
            >
              <span>{level.title}</span>
              <span className="tab-sub">{level.grades.split('(')[0]}</span>
            </button>
          ))}
        </div>

        {/* Tab Detail Display */}
        {currentLevel && (
          <div className="glass-card level-display-card animate-fade-in">
            <div className="level-grid">
              {/* Content Column */}
              <div className="level-info-col">
                <div className="badge badge-gold level-grade-badge">
                  {currentLevel.grades}
                </div>
                <h3>{currentLevel.title} Program</h3>
                <p className="level-desc">{currentLevel.desc}</p>

                <div className="subjects-block">
                  <h4>Core Subjects & Modules</h4>
                  <ul className="subjects-list">
                    {currentLevel.subjects.map((sub, i) => (
                      <li key={i}>
                        <Check size={16} className="check-icon" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="highlights-block">
                  <h4>Key Pedagogical Highlights</h4>
                  <div className="highlights-pills">
                    {currentLevel.highlights.map((high, i) => (
                      <span key={i} className="highlight-pill">
                        <Sparkles size={13} /> {high}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="level-action-row">
                  <a href="#admissions" className="btn btn-navy">
                    <span>Enquire for {currentLevel.title}</span>
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>

              {/* Image Column */}
              <div className="level-img-col">
                <img 
                  src={currentLevel.img} 
                  alt={currentLevel.title}
                  className="level-img" 
                />
                <div className="img-overlay-badge">
                  <BookOpen size={18} />
                  <span>CBSE & International Standards</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Co-Curricular & Enrichment Section */}
        <div className="co-curricular-container">
          <div className="co-header">
            <h3>Beyond the Classroom: Co-Curricular Excellence</h3>
            <p>Developing well-rounded personalities through specialized clubs and sports academies.</p>
          </div>

          <div className="co-grid">
            {coCurricular.map((co, idx) => (
              <div key={idx} className="co-card">
                <div className="co-icon-box">{co.icon}</div>
                <h4>{co.name}</h4>
                <p>{co.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .academics-section {
          background: var(--bg-card);
        }

        .academic-tabs-wrapper {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .academic-tab-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.85rem 1.5rem;
          background: var(--bg-light);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-dark);
          cursor: pointer;
          transition: all 0.25s ease;
          min-width: 170px;
        }

        .tab-sub {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }

        .academic-tab-btn:hover {
          border-color: var(--accent-gold);
        }

        .academic-tab-btn.active {
          background: var(--primary-navy);
          color: #ffffff;
          border-color: var(--primary-navy);
          box-shadow: var(--shadow-md);
        }

        .academic-tab-btn.active .tab-sub {
          color: var(--accent-gold);
        }

        .level-display-card {
          padding: 2.5rem;
          margin-bottom: 4rem;
        }

        .level-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: center;
        }

        .level-grade-badge {
          margin-bottom: 1rem;
        }

        .level-info-col h3 {
          font-size: 1.8rem;
          margin-bottom: 0.75rem;
        }

        .level-desc {
          color: var(--text-muted);
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
        }

        .subjects-block {
          margin-bottom: 1.5rem;
        }

        .subjects-block h4, .highlights-block h4 {
          font-size: 1rem;
          margin-bottom: 0.75rem;
          color: var(--text-dark);
        }

        .subjects-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
        }

        .subjects-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .check-icon {
          color: var(--emerald);
          flex-shrink: 0;
        }

        .highlights-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.75rem;
        }

        .highlight-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(217, 119, 6, 0.1);
          color: var(--accent-gold);
          border: 1px solid rgba(217, 119, 6, 0.25);
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          font-size: 0.82rem;
          font-weight: 600;
        }

        .level-img-col {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }

        .level-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          display: block;
        }

        .img-overlay-badge {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          right: 1.25rem;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(10px);
          color: #ffffff;
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 600;
          font-size: 0.88rem;
        }

        .co-curricular-container {
          background: var(--bg-light);
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
        }

        .co-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .co-header h3 {
          font-size: 1.5rem;
          margin-bottom: 0.4rem;
        }

        .co-header p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .co-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .co-card {
          background: var(--bg-card);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          transition: transform 0.2s;
        }

        .co-card:hover {
          transform: translateY(-4px);
        }

        .co-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(217, 119, 6, 0.12);
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .co-card h4 {
          font-size: 1.05rem;
          margin-bottom: 0.4rem;
        }

        .co-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .level-grid {
            grid-template-columns: 1fr;
          }
          .co-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .subjects-list {
            grid-template-columns: 1fr;
          }
          .co-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
