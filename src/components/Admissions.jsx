import React, { useState } from 'react';
import { 
  Calculator, 
  Send, 
  CheckCircle2, 
  FileText, 
  HelpCircle, 
  ShieldCheck, 
  Calendar,
  Sparkles
} from 'lucide-react';

export default function Admissions() {
  // Fee Calculator State
  const [selectedGrade, setSelectedGrade] = useState('primary'); // preprimary, primary, middle, high, senior
  const [includeTransport, setIncludeTransport] = useState(true);
  const [includeMeals, setIncludeMeals] = useState(true);

  // Form State
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    gradeApplying: 'Grade 1',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Fee Structure Data (Annual Basis in INR)
  const feeStructures = {
    preprimary: { name: 'Pre-Primary (Nursery - UKG)', tuition: 65000, reg: 15000, lab: 5000, transport: 24000, meals: 18000 },
    primary: { name: 'Primary School (Grades 1 - 5)', tuition: 85000, reg: 15000, lab: 8000, transport: 24000, meals: 20000 },
    middle: { name: 'Middle School (Grades 6 - 8)', tuition: 98000, reg: 15000, lab: 12000, transport: 26000, meals: 22000 },
    high: { name: 'Secondary School (Grades 9 - 10)', tuition: 115000, reg: 15000, lab: 18000, transport: 26000, meals: 24000 },
    senior: { name: 'Senior Secondary (Grades 11 - 12)', tuition: 135000, reg: 15000, lab: 25000, transport: 28000, meals: 24000 }
  };

  const currentFee = feeStructures[selectedGrade];
  const totalFee = currentFee.tuition + currentFee.reg + currentFee.lab + 
    (includeTransport ? currentFee.transport : 0) + 
    (includeMeals ? currentFee.meals : 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.email || !formData.phone) return;
    setFormSubmitted(true);
  };

  return (
    <section id="admissions" className="section-padding admissions-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-gold">Admissions 2026-27</span>
          <h2>Join the Excellence International Family</h2>
          <p>
            Simple 4-step admission journey, transparent fee calculator, and instant online inquiry portal.
          </p>
        </div>

        {/* 4 Steps Journey */}
        <div className="steps-container">
          <div className="step-card">
            <div className="step-num">01</div>
            <h4>Online Registration</h4>
            <p>Fill out the preliminary application inquiry form with candidate details.</p>
          </div>

          <div className="step-card">
            <div className="step-num">02</div>
            <h4>Interaction & Test</h4>
            <p>Scholastic aptitude interaction for Grades 1-12; informal interaction for Pre-Primary.</p>
          </div>

          <div className="step-card">
            <div className="step-num">03</div>
            <h4>Document Verification</h4>
            <p>Submit birth certificate, past academic transcripts, transfer certificate & photos.</p>
          </div>

          <div className="step-card">
            <div className="step-num">04</div>
            <h4>Seat Confirmation</h4>
            <p>Complete fee payment to reserve seat & receive welcome kit & uniform vouchers.</p>
          </div>
        </div>

        {/* Main Grid: Fee Calculator & Application Form */}
        <div className="admissions-grid">
          {/* Left Column: Interactive Fee Calculator */}
          <div className="glass-card fee-calculator-card">
            <div className="calc-header">
              <Calculator size={24} className="text-gold" />
              <h3>Interactive Tuition & Fee Estimator</h3>
            </div>
            <p className="calc-sub">Select grade level and optional services for instant annual fee estimation.</p>

            <div className="form-group mb-4">
              <label className="input-label">Select Academic Grade Level:</label>
              <select 
                value={selectedGrade} 
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="select-input"
              >
                <option value="preprimary">Pre-Primary (Nursery - UKG)</option>
                <option value="primary">Primary School (Grades 1 - 5)</option>
                <option value="middle">Middle School (Grades 6 - 8)</option>
                <option value="high">Secondary School (Grades 9 - 10)</option>
                <option value="senior">Senior Secondary (Grades 11 - 12)</option>
              </select>
            </div>

            <div className="options-toggles">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={includeTransport} 
                  onChange={(e) => setIncludeTransport(e.target.checked)} 
                />
                <span>AC Transport (GPS & Female Attendant - ₹{currentFee.transport.toLocaleString()}/yr)</span>
              </label>

              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={includeMeals} 
                  onChange={(e) => setIncludeMeals(e.target.checked)} 
                />
                <span>Hygienic Organic Dining Plan (Breakfast & Lunch - ₹{currentFee.meals.toLocaleString()}/yr)</span>
              </label>
            </div>

            {/* Fee Breakdown Table */}
            <div className="fee-breakdown-box">
              <div className="fee-row">
                <span>Annual Tuition Fee:</span>
                <strong>₹{currentFee.tuition.toLocaleString()}</strong>
              </div>
              <div className="fee-row">
                <span>One-Time Admission & Reg:</span>
                <strong>₹{currentFee.reg.toLocaleString()}</strong>
              </div>
              <div className="fee-row">
                <span>STEM & Lab Activities:</span>
                <strong>₹{currentFee.lab.toLocaleString()}</strong>
              </div>
              {includeTransport && (
                <div className="fee-row text-gold">
                  <span>School Transport Facility:</span>
                  <strong>+ ₹{currentFee.transport.toLocaleString()}</strong>
                </div>
              )}
              {includeMeals && (
                <div className="fee-row text-gold">
                  <span>Cafeteria Dining Service:</span>
                  <strong>+ ₹{currentFee.meals.toLocaleString()}</strong>
                </div>
              )}

              <div className="fee-total-row">
                <span>Estimated Annual Total:</span>
                <span className="total-amount">₹{totalFee.toLocaleString()}</span>
              </div>
            </div>
            <p className="fee-disclaimer">*Note: Payable in 4 flexible quarterly installments. Scholarships available for merit students.</p>
          </div>

          {/* Right Column: Online Application Inquiry Form */}
          <div className="glass-card application-form-card">
            {formSubmitted ? (
              <div className="submission-success animate-fade-in">
                <CheckCircle2 size={56} className="success-icon" />
                <h3>Application Submitted Successfully!</h3>
                <p>Thank you <strong>{formData.parentName}</strong>. Our Admissions Office has received your inquiry for <strong>{formData.studentName}</strong> ({formData.gradeApplying}).</p>
                <div className="success-reference">
                  <span>Application Reference ID:</span>
                  <strong>EIS-2026-REG-{Math.floor(10000 + Math.random() * 90000)}</strong>
                </div>
                <p className="next-step-hint">Our counselor will reach out via WhatsApp & Email within 24 hours.</p>
                <button 
                  onClick={() => setFormSubmitted(false)} 
                  className="btn btn-outline full-width"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="admission-form">
                <h3>Online Admission Inquiry</h3>
                <p className="form-sub">Fill out the form below to receive prospectus & call from admission officer.</p>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Parent / Guardian Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Rajesh Kumar" 
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Student's Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Aarav Kumar" 
                      value={formData.studentName}
                      onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="parent@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 98765 43210" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="form-group full-col">
                    <label>Grade Seeking Admission For *</label>
                    <select 
                      value={formData.gradeApplying}
                      onChange={(e) => setFormData({...formData, gradeApplying: e.target.value})}
                    >
                      <option value="Pre-Primary (Nursery/KG)">Pre-Primary (Nursery/KG)</option>
                      <option value="Grade 1">Grade 1</option>
                      <option value="Grade 2 - 5">Grade 2 - 5</option>
                      <option value="Grade 6 - 8">Grade 6 - 8</option>
                      <option value="Grade 9 - 10">Grade 9 - 10</option>
                      <option value="Grade 11 - 12 (Science)">Grade 11 - 12 (Science)</option>
                      <option value="Grade 11 - 12 (Commerce)">Grade 11 - 12 (Commerce)</option>
                    </select>
                  </div>

                  <div className="form-group full-col">
                    <label>Any Specific Inquiry or Remarks</label>
                    <textarea 
                      rows="3" 
                      placeholder="Tell us about previous school, hostel requirement, or transport location..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-gold full-width">
                  <Send size={18} />
                  <span>Submit Inquiry Application</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .admissions-section {
          background: var(--bg-card);
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }

        .step-card {
          background: var(--bg-light);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          position: relative;
        }

        .step-num {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2rem;
          color: var(--accent-gold);
          opacity: 0.5;
          margin-bottom: 0.5rem;
        }

        .step-card h4 {
          font-size: 1.05rem;
          margin-bottom: 0.4rem;
        }

        .step-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .admissions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        .fee-calculator-card, .application-form-card {
          padding: 2.25rem;
        }

        .calc-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.4rem;
        }

        .calc-header h3 {
          font-size: 1.35rem;
        }

        .calc-sub, .form-sub {
          color: var(--text-muted);
          font-size: 0.88rem;
          margin-bottom: 1.5rem;
        }

        .select-input, .admission-form input, .admission-form select, .admission-form textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          background: var(--bg-light);
          color: var(--text-dark);
          font-family: var(--font-body);
          font-size: 0.92rem;
          transition: border-color 0.2s;
        }

        .select-input:focus, .admission-form input:focus, .admission-form select:focus, .admission-form textarea:focus {
          outline: none;
          border-color: var(--accent-gold);
        }

        .input-label {
          display: block;
          font-weight: 600;
          font-size: 0.88rem;
          margin-bottom: 0.4rem;
        }

        .options-toggles {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.88rem;
          cursor: pointer;
        }

        .checkbox-label input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: var(--accent-gold);
        }

        .fee-breakdown-box {
          background: var(--bg-light);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          border: 1px solid var(--border-light);
          margin-bottom: 1rem;
        }

        .fee-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
        }

        .fee-total-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.75rem;
          border-top: 2px stroke var(--border-light);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .total-amount {
          font-size: 1.6rem;
          color: var(--accent-gold);
          font-weight: 800;
        }

        .fee-disclaimer {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-style: italic;
        }

        .admission-form h3 {
          font-size: 1.35rem;
          margin-bottom: 0.4rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .form-group.full-col {
          grid-column: span 2;
        }

        .form-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 0.35rem;
        }

        .submission-success {
          text-align: center;
          padding: 2rem 1rem;
        }

        .success-icon {
          color: var(--emerald);
          margin-bottom: 1rem;
        }

        .submission-success h3 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .submission-success p {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .success-reference {
          background: rgba(5, 150, 105, 0.1);
          border: 1px solid rgba(5, 150, 105, 0.25);
          padding: 1rem;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
        }

        .success-reference strong {
          color: var(--emerald);
          font-family: var(--font-heading);
          font-size: 1.2rem;
          letter-spacing: 0.05em;
        }

        .next-step-hint {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        @media (max-width: 1024px) {
          .steps-container {
            grid-template-columns: repeat(2, 1fr);
          }
          .admissions-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .steps-container {
            grid-template-columns: 1fr;
          }
          .form-grid {
            grid-template-columns: 1fr;
          }
          .form-group.full-col {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}
