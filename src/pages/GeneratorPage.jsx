import { useState } from 'react';
import axios from 'axios';
import InputForm from '../components/InputForm';
import OutputPanel from '../components/OutputPanel';
import '../styles/generatorpage.css'

function GeneratorPage() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    years: '',
    skills: '',
    recruiter: '',
    company: '',
    jobRole: '',
    companyDescription: '',
    jobDescription: '',
    tone: 'confident',
    length: 'short',
    goal: 'interview'
  });

  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCopied, setShowCopied] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(null);
  };

  const generateEmail = async () => {
    // Validation
    if (!formData.name || !formData.role || !formData.company || !formData.jobRole) {
      setError('Please fill in all required fields: Name, Role, Company, and Job Role');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/generate`, formData);
      setOutput(response.data);
    } catch (err) {
      console.error('Error generating email:', err);
      setError(err.response?.data?.error || 'Failed to generate email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    const emailText = `Subject: ${output.subject}\n\n${output.body}`;
    navigator.clipboard.writeText(emailText);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 3000);
  };

  const regenerate = () => {
    generateEmail();
  };

  return (
    <div className="generator-container">
      <InputForm
        formData={formData}
        onChange={handleInputChange}
        onGenerate={generateEmail}
        loading={loading}
        error={error}
      />
      
      <OutputPanel
        output={output}
        loading={loading}
        onCopy={copyToClipboard}
        onRegenerate={regenerate}
      />

      {showCopied && (
        <div className="copied-toast">
          ✓ Copied to clipboard!
        </div>
      )}
    </div>
  );
}

export default GeneratorPage;