import React, { useState } from 'react';
import { 
  Search, 
  Mail, 
  Award, 
  BookOpen, 
  Sparkles
} from 'lucide-react';

export default function Faculty() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');

  const facultyMembers = [
    {
      name: 'Dr. Meenakshi Sharma',
      role: 'Principal & Academic Director',
      dept: 'leadership',
      qual: 'Ph.D. Education (Oxford), M.Sc. Physics',
      exp: '22+ Years Experience',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      email: 'principal@excellenceinternationalschool.com'
    },
    {
      name: 'Prof. Vikramaditya Singh',
      role: 'Head of STEM & Robotics',
      dept: 'stem',
      qual: 'M.Tech Robotics (IIT Delhi), B.Tech Comp. Sci.',
      exp: '14+ Years Experience',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
      email: 'vikram.stem@excellenceinternationalschool.com'
    },
    {
      name: 'Mrs. Ananya Sen',
      role: 'Head of Languages & IB Literature',
      dept: 'humanities',
      qual: 'M.A. English Literature (JNU), CELTA Certified',
      exp: '16+ Years Experience',
      img: 'https://images.unsplash.com/photo-1580894732413-a70d2a84b553?q=80&w=400&auto=format&fit=crop',
      email: 'ananya.lit@excellenceinternationalschool.com'
    },
    {
      name: 'Capt. Rajesh Varma (Retd.)',
      role: 'Director of Physical Education & Athletics',
      dept: 'sports',
      qual: 'M.P.Ed (NIS Patiala), National Level Athlete',
      exp: '18+ Years Experience',
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
      email: 'sports@excellenceinternationalschool.com'
    },
    {
      name: 'Dr. Rahul Deshmukh',
      role: 'Senior Physics & Research Faculty',
      dept: 'stem',
      qual: 'Ph.D. Quantum Optics (IISc Bangalore)',
      exp: '11+ Years Experience',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
      email: 'rahul.physics@excellenceinternationalschool.com'
    },
    {
      name: 'Ms. Sanya Kapoor',
      role: 'Head of Visual & Fine Arts',
      dept: 'humanities',
      qual: 'M.F.A Fine Arts (Shantiniketan)',
      exp: '10+ Years Experience',
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop',
      email: 'sanya.art@excellenceinternationalschool.com'
    }
  ];

  const filteredFaculty = facultyMembers.filter(f => {
    const matchesDept = selectedDept === 'all' || f.dept === selectedDept;
    const matchesSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          f.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          f.qual.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <section id="faculty" className="section-padding faculty-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-gold">Mentors & Educators</span>
          <h2>Our Distinguished Faculty & Leadership</h2>
          <p>
            Learn from passionate educators, PhD scholars, and industry mentors dedicated to academic excellence.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="faculty-search-wrapper">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search faculty by name, qualification, or role..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="dept-tabs">
            <button 
              className={`dept-btn ${selectedDept === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedDept('all')}
            >
              All Faculty
            </button>
            <button 
              className={`dept-btn ${selectedDept === 'leadership' ? 'active' : ''}`}
              onClick={() => setSelectedDept('leadership')}
            >
              Leadership
            </button>
            <button 
              className={`dept-btn ${selectedDept === 'stem' ? 'active' : ''}`}
              onClick={() => setSelectedDept('stem')}
            >
              STEM & Science
            </button>
            <button 
              className={`dept-btn ${selectedDept === 'humanities' ? 'active' : ''}`}
              onClick={() => setSelectedDept('humanities')}
            >
              Humanities & Arts
            </button>
            <button 
              className={`dept-btn ${selectedDept === 'sports' ? 'active' : ''}`}
              onClick={() => setSelectedDept('sports')}
            >
              Sports & PE
            </button>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="faculty-grid">
          {filteredFaculty.map((f, idx) => (
            <div key={idx} className="glass-card faculty-card animate-fade-in">
              <div className="faculty-avatar-wrap">
                <img src={f.img} alt={f.name} className="faculty-avatar" />
                <span className="exp-badge">
                  <Sparkles size={11} /> {f.exp}
                </span>
              </div>

              <div className="faculty-info">
                <h3>{f.name}</h3>
                <p className="faculty-role">{f.role}</p>

                <div className="faculty-qual">
                  <BookOpen size={14} className="text-gold" />
                  <span>{f.qual}</span>
                </div>

                <div className="faculty-contact">
                  <a href={`mailto:${f.email}`} className="email-link">
                    <Mail size={14} /> Contact Educator
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faculty-section {
          background: var(--bg-card);
        }

        .faculty-search-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 3rem;
        }

        .search-box {
          position: relative;
          max-width: 540px;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-box input {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.8rem;
          border-radius: 9999px;
          border: 1px solid var(--border-light);
          background: var(--bg-light);
          color: var(--text-dark);
          font-family: var(--font-body);
          font-size: 0.95rem;
          box-shadow: var(--shadow-sm);
        }

        .search-box input:focus {
          outline: none;
          border-color: var(--accent-gold);
        }

        .dept-tabs {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .dept-btn {
          padding: 0.45rem 1rem;
          border-radius: 9999px;
          border: 1px solid var(--border-light);
          background: var(--bg-light);
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .dept-btn:hover, .dept-btn.active {
          background: var(--accent-gold);
          color: #ffffff;
          border-color: var(--accent-gold);
        }

        .faculty-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .faculty-card {
          padding: 1.75rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .faculty-avatar-wrap {
          position: relative;
          margin-bottom: 1.25rem;
        }

        .faculty-avatar {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--accent-gold);
          box-shadow: var(--shadow-md);
        }

        .exp-badge {
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary-navy);
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .faculty-info h3 {
          font-size: 1.15rem;
          margin-bottom: 0.3rem;
        }

        .faculty-role {
          color: var(--accent-gold);
          font-weight: 600;
          font-size: 0.88rem;
          margin-bottom: 0.75rem;
        }

        .faculty-qual {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          line-height: 1.4;
        }

        .faculty-contact {
          margin-top: auto;
        }

        .email-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--sky-blue);
          text-decoration: none;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          background: rgba(2, 132, 199, 0.1);
          transition: background 0.2s;
        }

        .email-link:hover {
          background: var(--sky-blue);
          color: #ffffff;
        }

        @media (max-width: 1024px) {
          .faculty-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .faculty-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
