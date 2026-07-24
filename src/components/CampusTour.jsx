import React, { useState } from 'react';
import { 
  Maximize2, 
  X, 
  MapPin, 
  Sparkles,
  Shield,
  Layers
} from 'lucide-react';

export default function CampusTour() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedFacility, setSelectedFacility] = useState(null);

  const categories = [
    { id: 'all', label: 'All Facilities' },
    { id: 'tech', label: 'STEM & Robotics' },
    { id: 'sports', label: 'Sports Arenas' },
    { id: 'arts', label: 'Library & Arts' },
    { id: 'campus', label: 'Smart Campus' }
  ];

  const facilities = [
    {
      id: 1,
      category: 'tech',
      title: 'Robotics & AI Innovation Lab',
      subtitle: 'Hands-on 3D printing, Arduino kits, and micro-controller programming workstations.',
      img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
      area: '2,500 sq.ft.',
      highlights: ['Dual-extruder 3D Printers', 'Drone Assembly Bay', 'AI & Machine Learning Software']
    },
    {
      id: 2,
      category: 'sports',
      title: 'Olympic-Standard Swimming Pool',
      subtitle: 'Temperature-controlled 8-lane pool with certified lifesaving coaches and spectator gallery.',
      img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop',
      area: '50-Meter Pool',
      highlights: ['Water Quality Auto Filtration', 'Separate Kids Splash Pool', 'Professional Diving Blocks']
    },
    {
      id: 3,
      category: 'arts',
      title: 'Central Digital Resource Library',
      subtitle: 'Over 35,000 physical volumes plus access to IEEE, JSTOR, and digital audiobook kiosks.',
      img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop',
      area: '10,000+ Books & Journals',
      highlights: ['Quiet Study Pods', 'Kindle E-Reader Stations', 'Online Dissertation Archives']
    },
    {
      id: 4,
      category: 'tech',
      title: 'Advanced Science Research Complex',
      subtitle: 'State-of-the-art Physics, Chemistry, and Biotechnology laboratories with high-precision optics.',
      img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop',
      area: 'Integrated Labs',
      highlights: ['Fume Hood Safety Systems', 'Digital Microscopes', 'Chemical Spill Protection']
    },
    {
      id: 5,
      category: 'sports',
      title: 'All-Weather Synthetic Tennis & Basketball Courts',
      subtitle: 'Floodlit ITF-approved courts with shock-absorbing acrylic surface for multi-sport training.',
      img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop',
      area: 'Floodlit Outdoor Arena',
      highlights: ['ITF Approved Surface', 'Night Training Lighting', 'Coach Observation Deck']
    },
    {
      id: 6,
      category: 'arts',
      title: 'Grand Performing Arts Auditorium',
      subtitle: '800-seater air-conditioned auditorium with acoustic soundproofing and dynamic stage lighting.',
      img: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800&auto=format&fit=crop',
      area: '800 Seats Capacity',
      highlights: ['Dolby Surround Sound', 'Green Rooms & Dressing Bays', 'Motorized Stage Curtains']
    },
    {
      id: 7,
      category: 'campus',
      title: 'Solar-Powered Smart Eco-Campus',
      subtitle: 'Zero-carbon campus initiative with rain-water harvesting, organic greenhouse, and solar grids.',
      img: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=800&auto=format&fit=crop',
      area: '30-Acres Greenery',
      highlights: ['250 kW Solar Power', 'Organic Student Botanical Garden', 'Zero Waste Recycling']
    },
    {
      id: 8,
      category: 'campus',
      title: 'Nutritious Organic Dining Hall',
      subtitle: 'Hygienic Central Dining serving chef-prepared balanced meals curated by pediatric nutritionists.',
      img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
      area: '1,200 Seating Dining Hall',
      highlights: ['Steam Sterilized Utensils', 'Pediatric Dietitian Approved Menu', 'Filtered Water Stations']
    }
  ];

  const filteredFacilities = activeCategory === 'all' 
    ? facilities 
    : facilities.filter(f => f.category === activeCategory);

  return (
    <section id="tour" className="section-padding tour-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-gold">Interactive Campus Tour</span>
          <h2>Explore Our 30-Acre World-Class Infrastructure</h2>
          <p>
            Experience safe, modern, and inspiring learning environments built to unlock every student's full potential.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-chip ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="facilities-grid">
          {filteredFacilities.map((item) => (
            <div 
              key={item.id} 
              className="glass-card facility-card animate-fade-in"
              onClick={() => setSelectedFacility(item)}
            >
              <div className="facility-img-wrap">
                <img src={item.img} alt={item.title} className="facility-img" />
                <div className="facility-overlay">
                  <button className="preview-btn" aria-label="Expand Preview">
                    <Maximize2 size={18} />
                    <span>View Detail</span>
                  </button>
                </div>
                <span className="area-badge">
                  <MapPin size={12} /> {item.area}
                </span>
              </div>

              <div className="facility-card-body">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>

                <div className="facility-tags">
                  {item.highlights.slice(0, 2).map((h, i) => (
                    <span key={i} className="mini-tag">
                      <Sparkles size={11} /> {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Detail Modal */}
      {selectedFacility && (
        <div className="modal-overlay" onClick={() => setSelectedFacility(null)}>
          <div className="modal-box facility-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedFacility(null)}>
              <X size={20} />
            </button>

            <div className="facility-modal-grid">
              <div className="modal-img-wrap">
                <img src={selectedFacility.img} alt={selectedFacility.title} className="modal-img" />
              </div>

              <div className="modal-details">
                <div className="badge badge-gold mb-2">
                  <Layers size={13} /> {selectedFacility.area}
                </div>
                <h2>{selectedFacility.title}</h2>
                <p className="modal-desc">{selectedFacility.subtitle}</p>

                <h4>Infrastructure Highlights</h4>
                <ul className="modal-highlights-list">
                  {selectedFacility.highlights.map((point, idx) => (
                    <li key={idx}>
                      <Shield size={16} className="text-gold" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="modal-action">
                  <a href="#admissions" onClick={() => setSelectedFacility(null)} className="btn btn-gold full-width">
                    Schedule In-Person Campus Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .tour-section {
          background: var(--bg-light);
        }

        .filter-bar {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .filter-chip {
          padding: 0.6rem 1.4rem;
          border-radius: 9999px;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-dark);
          cursor: pointer;
          transition: all 0.2s;
        }

        .filter-chip:hover, .filter-chip.active {
          background: var(--accent-gold);
          color: #ffffff;
          border-color: var(--accent-gold);
          box-shadow: 0 4px 12px var(--accent-gold-glow);
        }

        .facilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .facility-card {
          cursor: pointer;
          overflow: hidden;
          padding: 0;
        }

        .facility-img-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .facility-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .facility-card:hover .facility-img {
          transform: scale(1.06);
        }

        .facility-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.45);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s;
        }

        .facility-card:hover .facility-overlay {
          opacity: 1;
        }

        .preview-btn {
          background: var(--bg-card);
          color: var(--text-dark);
          border: none;
          padding: 0.6rem 1.25rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          box-shadow: var(--shadow-md);
        }

        .area-badge {
          position: absolute;
          top: 0.85rem;
          right: 0.85rem;
          background: rgba(15, 23, 42, 0.8);
          color: #ffffff;
          backdrop-filter: blur(8px);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.3rem 0.65rem;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .facility-card-body {
          padding: 1.5rem;
        }

        .facility-card-body h3 {
          font-size: 1.15rem;
          margin-bottom: 0.4rem;
        }

        .facility-card-body p {
          color: var(--text-muted);
          font-size: 0.88rem;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .facility-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .mini-tag {
          font-size: 0.75rem;
          background: rgba(2, 132, 199, 0.1);
          color: var(--sky-blue);
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-weight: 600;
        }

        .facility-modal-box {
          max-width: 900px;
          padding: 2rem;
        }

        .facility-modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
        }

        .modal-img-wrap {
          border-radius: var(--radius-md);
          overflow: hidden;
          height: 320px;
        }

        .modal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-desc {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .modal-highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }

        .modal-highlights-list li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
          .facilities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .facility-modal-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .facilities-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
