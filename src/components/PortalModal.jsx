import React, { useState } from 'react';
import { 
  X, 
  UserCheck, 
  Award, 
  Clock, 
  FileText, 
  Bell, 
  CheckCircle2, 
  BookOpen, 
  Calendar,
  LogOut
} from 'lucide-react';

export default function PortalModal({ isOpen, onClose }) {
  const [role, setRole] = useState('parent'); // parent or student
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen) return null;

  const studentInfo = {
    name: 'Aarav Sharma',
    class: 'Grade X - Section A',
    rollNo: '2026-X-042',
    attendance: '96.5%',
    cgpa: '9.4 / 10.0',
    feeStatus: 'Paid (Q4 cleared)'
  };

  const schedule = [
    { period: '08:00 AM - 08:40 AM', subject: 'Mathematics & Calculus', teacher: 'Mrs. S. Gupta' },
    { period: '08:40 AM - 09:20 AM', subject: 'Physics Lab & Practical', teacher: 'Dr. R. Deshmukh' },
    { period: '09:20 AM - 10:00 AM', subject: 'Computer Science (Python)', teacher: 'Prof. V. Singh' },
    { period: '10:00 AM - 10:30 AM', subject: 'Nutrition & Snack Recess', teacher: 'Campus Dining' },
    { period: '10:30 AM - 11:10 AM', subject: 'English Literature', teacher: 'Mrs. A. Sen' }
  ];

  const notices = [
    { date: 'Feb 20, 2026', title: 'Science Fair Project Submission Deadline Extended to Feb 28', urgent: true },
    { date: 'Feb 18, 2026', title: 'Parent-Teacher Meeting (PTM) Scheduled for Saturday 09:00 AM', urgent: false },
    { date: 'Feb 15, 2026', title: 'Quarter 4 Examination Date Sheet Released on ERP Portal', urgent: false }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box portal-modal-box animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Portal Header */}
        <div className="portal-header">
          <div className="portal-brand">
            <UserCheck size={26} className="text-gold" />
            <div>
              <h3>EXCELLENCE ERP PORTAL</h3>
              <p>Integrated School Management & Parent Portal</p>
            </div>
          </div>

          <div className="role-switcher">
            <button 
              className={`role-btn ${role === 'parent' ? 'active' : ''}`}
              onClick={() => setRole('parent')}
            >
              Parent Portal
            </button>
            <button 
              className={`role-btn ${role === 'student' ? 'active' : ''}`}
              onClick={() => setRole('student')}
            >
              Student Portal
            </button>
          </div>
        </div>

        {/* Student Quick Profile Card */}
        <div className="student-profile-strip">
          <div className="profile-details">
            <h4>{studentInfo.name}</h4>
            <p>{studentInfo.class} | Roll: {studentInfo.rollNo}</p>
          </div>

          <div className="profile-stats">
            <div className="p-stat">
              <span className="p-val text-gold">{studentInfo.attendance}</span>
              <span className="p-lbl">Attendance</span>
            </div>
            <div className="p-stat">
              <span className="p-val text-emerald">{studentInfo.cgpa}</span>
              <span className="p-lbl">Current CGPA</span>
            </div>
            <div className="p-stat">
              <span className="p-val text-blue">{studentInfo.feeStatus}</span>
              <span className="p-lbl">Fee Account</span>
            </div>
          </div>
        </div>

        {/* Portal Internal Nav Tabs */}
        <div className="portal-nav-tabs">
          <button 
            className={`p-tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <Clock size={16} /> Schedule & Timetable
          </button>
          <button 
            className={`p-tab ${activeTab === 'notices' ? 'active' : ''}`}
            onClick={() => setActiveTab('notices')}
          >
            <Bell size={16} /> Digital Notice Board
          </button>
          <button 
            className={`p-tab ${activeTab === 'grades' ? 'active' : ''}`}
            onClick={() => setActiveTab('grades')}
          >
            <Award size={16} /> Report Card & Grades
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="portal-content-body">
          {activeTab === 'overview' && (
            <div className="schedule-table-wrap">
              <h4>Today's Academic Schedule (Class X-A)</h4>
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Time Slot</th>
                    <th>Subject</th>
                    <th>Faculty Mentor</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((s, i) => (
                    <tr key={i}>
                      <td><Clock size={14} className="text-gold" /> {s.period}</td>
                      <td><strong>{s.subject}</strong></td>
                      <td>{s.teacher}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'notices' && (
            <div className="notices-list">
              <h4>Active School Bulletins</h4>
              {notices.map((n, i) => (
                <div key={i} className={`notice-item ${n.urgent ? 'urgent' : ''}`}>
                  <div className="n-date">{n.date}</div>
                  <div className="n-title">{n.title}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'grades' && (
            <div className="grades-summary">
              <h4>Term 1 Performance Report (2025-26)</h4>
              <div className="grade-cards-grid">
                <div className="g-card">
                  <span>Mathematics</span>
                  <strong>98 / 100 (A1)</strong>
                </div>
                <div className="g-card">
                  <span>Physics & Practical</span>
                  <strong>94 / 100 (A1)</strong>
                </div>
                <div className="g-card">
                  <span>Computer Science</span>
                  <strong>99 / 100 (A1)</strong>
                </div>
                <div className="g-card">
                  <span>English Literature</span>
                  <strong>91 / 100 (A1)</strong>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="portal-footer">
          <button onClick={onClose} className="btn btn-navy">
            <LogOut size={16} /> Exit ERP Demo
          </button>
        </div>
      </div>

      <style>{`
        .portal-modal-box {
          max-width: 840px;
          padding: 2rem;
        }

        .portal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 1.25rem;
        }

        .portal-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .portal-brand h3 {
          font-size: 1.15rem;
          margin-bottom: 0.15rem;
        }

        .portal-brand p {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .role-switcher {
          display: flex;
          background: var(--bg-light);
          padding: 0.25rem;
          border-radius: 9999px;
          border: 1px solid var(--border-light);
        }

        .role-btn {
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          border: none;
          background: transparent;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          color: var(--text-muted);
        }

        .role-btn.active {
          background: var(--accent-gold);
          color: #ffffff;
        }

        .student-profile-strip {
          background: var(--bg-light);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .profile-details h4 {
          font-size: 1.2rem;
          margin-bottom: 0.2rem;
        }

        .profile-details p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .profile-stats {
          display: flex;
          gap: 1.5rem;
        }

        .p-stat {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .p-val {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
        }

        .text-emerald { color: var(--emerald); }
        .text-blue { color: var(--sky-blue); }

        .p-lbl {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .portal-nav-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-light);
        }

        .p-tab {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.6rem 1rem;
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.88rem;
          color: var(--text-muted);
          cursor: pointer;
        }

        .p-tab.active {
          color: var(--accent-gold);
          border-bottom-color: var(--accent-gold);
        }

        .schedule-table-wrap h4, .notices-list h4, .grades-summary h4 {
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .schedule-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.88rem;
        }

        .schedule-table th, .schedule-table td {
          padding: 0.75rem 1rem;
          text-align: left;
          border-bottom: 1px solid var(--border-light);
        }

        .schedule-table th {
          background: var(--bg-light);
          font-weight: 700;
        }

        .notice-item {
          background: var(--bg-light);
          border-left: 4px solid var(--sky-blue);
          padding: 0.85rem 1rem;
          border-radius: 4px;
          margin-bottom: 0.75rem;
        }

        .notice-item.urgent {
          border-left-color: var(--accent-gold);
          background: rgba(217, 119, 6, 0.08);
        }

        .n-date {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.2rem;
        }

        .n-title {
          font-size: 0.9rem;
          font-weight: 600;
        }

        .grade-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .g-card {
          background: var(--bg-light);
          padding: 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
        }

        .g-card strong {
          color: var(--emerald);
        }

        .portal-footer {
          margin-top: 1.5rem;
          display: flex;
          justify-content: flex-end;
          border-top: 1px solid var(--border-light);
          padding-top: 1rem;
        }

        @media (max-width: 640px) {
          .student-profile-strip {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .profile-stats {
            width: 100%;
            justify-content: space-between;
          }
          .grade-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
