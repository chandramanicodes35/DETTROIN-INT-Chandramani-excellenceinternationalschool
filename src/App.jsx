import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Academics from './components/Academics';
import CampusTour from './components/CampusTour';
import Admissions from './components/Admissions';
import EventsNews from './components/EventsNews';
import Faculty from './components/Faculty';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PortalModal from './components/PortalModal';

export default function App() {
  const [portalOpen, setPortalOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('hero');

  // Toggle Theme between Light & Dark
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  // Intersection Observer for scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <div className="app-main-wrapper">
      {/* Navigation Header */}
      <Navbar 
        onOpenPortal={() => setPortalOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Page Sections */}
      <main>
        <Hero onOpenPortal={() => setPortalOpen(true)} />
        <AboutSection />
        <Academics />
        <CampusTour />
        <Admissions />
        <EventsNews />
        <Faculty />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenPortal={() => setPortalOpen(true)} />

      {/* Interactive ERP Demo Portal Modal */}
      <PortalModal 
        isOpen={portalOpen} 
        onClose={() => setPortalOpen(false)} 
      />
    </div>
  );
}
