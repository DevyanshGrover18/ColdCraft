import { useNavigate } from 'react-router-dom';
import '../styles/landingpage.css'

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <h1>Stop Sending Generic Cold Emails.</h1>
        <p>Generate personalized, high-converting outreach in seconds. No templates. No fluff. Just results.</p>
        <button className="cta-button" onClick={() => navigate('/generate')}>
          Generate My Email
        </button>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Enter Details</h3>
            <p>Add your info, target company details, and job description. The more context, the better.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Choose Tone</h3>
            <p>Select your preferred tone, length, and goal. Customize to match your style.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Get Your Email</h3>
            <p>AI generates a personalized, high-converting email. Copy and send in seconds.</p>
          </div>
        </div>
      </section>

      <section className="example-section">
        <h2>Before & After</h2>
        <div className="comparison">
          <div className="example-card before">
            <div className="example-label">❌ Generic</div>
            <div className="example-email">
              <div className="example-subject">Subject: Application for Software Engineer Position</div>
              Dear Hiring Manager,
              <br/><br/>
              I hope this email finds you well. I am writing to express my strong interest in the Software Engineer position at your company. I am a passionate and hardworking developer with experience in various technologies.
              <br/><br/>
              I would be excited to bring my skills to your dynamic team. I believe I would be a great fit for this role.
              <br/><br/>
              Please find my resume attached. I look forward to hearing from you.
              <br/><br/>
              Best regards
            </div>
          </div>

          <div className="example-card after">
            <div className="example-label">✓ ColdCraft</div>
            <div className="example-email">
              <div className="example-subject">Subject: Scaling authentication at Stripe - React specialist</div>
              Hi Sarah,
              <br/><br/>
              Noticed Stripe recently launched Payment Links v2. The OAuth integration caught my eye—I built similar auth flows at my current SaaS handling 2M+ users.
              <br/><br/>
              Spent 3 years optimizing React frontends for fintech. Last project cut checkout time by 40% using Suspense and code-splitting.
              <br/><br/>
              Would love 15 minutes to discuss how my payment UI experience could support your expansion.
              <br/><br/>
              Alex
            </div>
          </div>
        </div>
        
        <div className="final-cta">
          <button className="cta-button" onClick={() => navigate('/generate')}>
            Create Yours Now
          </button>
        </div>
      </section>
    </>
  );
}

export default LandingPage;