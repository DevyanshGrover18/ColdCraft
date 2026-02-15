import '../styles/inputform.css'

function InputForm({ formData, onChange, onGenerate, loading, error }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate();
  };

  return (
    <div className="form-panel">
      <h2 className="panel-title">
        <span>📝</span>
        Your Information
      </h2>

      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Section A - Basic Info */}
        <div className="form-section">
          <h3 className="section-title">Basic Info</h3>
          
          <div className="form-group">
            <label>Your Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => onChange('name', e.target.value)}
              placeholder="Alex Chen"
              required
            />
          </div>

          <div className="form-group">
            <label>Your Role / Skillset *</label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => onChange('role', e.target.value)}
              placeholder="Senior Frontend Developer"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Years of Experience</label>
              <input
                type="number"
                value={formData.years}
                onChange={(e) => onChange('years', e.target.value)}
                placeholder="5"
                min="0"
                max="50"
              />
            </div>

            <div className="form-group">
              <label>Key Skills</label>
              <input
                type="text"
                value={formData.skills}
                onChange={(e) => onChange('skills', e.target.value)}
                placeholder="React, TypeScript, Node.js"
              />
            </div>
          </div>
        </div>

        {/* Section B - Target Info */}
        <div className="form-section">
          <h3 className="section-title">Target Company</h3>

          <div className="form-row">
            <div className="form-group">
              <label>Recruiter Name</label>
              <input
                type="text"
                value={formData.recruiter}
                onChange={(e) => onChange('recruiter', e.target.value)}
                placeholder="Sarah (optional)"
              />
            </div>

            <div className="form-group">
              <label>Company Name *</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => onChange('company', e.target.value)}
                placeholder="Stripe"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Job Role Applying For *</label>
            <input
              type="text"
              value={formData.jobRole}
              onChange={(e) => onChange('jobRole', e.target.value)}
              placeholder="Senior React Developer"
              required
            />
          </div>

          <div className="form-group">
            <label>Company Description</label>
            <textarea
              value={formData.companyDescription}
              onChange={(e) => onChange('companyDescription', e.target.value)}
              placeholder="Paste info from company website or LinkedIn... What do they do? Recent launches? Mission?"
              rows="4"
            />
          </div>

          <div className="form-group">
            <label>Job Description</label>
            <textarea
              value={formData.jobDescription}
              onChange={(e) => onChange('jobDescription', e.target.value)}
              placeholder="Paste the job posting or key requirements..."
              rows="4"
            />
          </div>
        </div>

        {/* Section C - Customization */}
        <div className="form-section">
          <h3 className="section-title">Customize</h3>

          <div className="form-group">
            <label>Tone</label>
            <div className="select-group">
              {['confident', 'concise', 'formal', 'friendly'].map(tone => (
                <button
                  key={tone}
                  type="button"
                  className={`select-btn ${formData.tone === tone ? 'active' : ''}`}
                  onClick={() => onChange('tone', tone)}
                >
                  {tone.charAt(0).toUpperCase() + tone.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Email Length</label>
            <div className="select-group">
              {[
                { value: 'short', label: 'Short (80-120)' },
                { value: 'medium', label: 'Medium (120-180)' },
                { value: 'long', label: 'Long (200-250)' }
              ].map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  className={`select-btn ${formData.length === value ? 'active' : ''}`}
                  onClick={() => onChange('length', value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Goal</label>
            <div className="select-group">
              {[
                { value: 'interview', label: 'Interview' },
                { value: 'referral', label: 'Referral' },
                { value: 'coffee', label: 'Coffee Chat' },
                { value: 'followup', label: 'Follow-up' }
              ].map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  className={`select-btn ${formData.goal === value ? 'active' : ''}`}
                  onClick={() => onChange('goal', value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          className="generate-btn"
          disabled={loading}
        >
          {loading ? 'Generating...' : '🔥 Generate Email'}
        </button>
      </form>
    </div>
  );
}

export default InputForm;