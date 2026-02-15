import '../styles/outputpannel.css'

function OutputPanel({ output, loading, onCopy, onRegenerate }) {
  if (loading) {
    return (
      <div className="output-panel">
        <div className="loading">
          <div className="spinner"></div>
          <p>Crafting your perfect email...</p>
          <p className="loading-subtext">Analyzing company context and personalizing content</p>
        </div>
      </div>
    );
  }

  if (!output) {
    return (
      <div className="output-panel">
        <div className="empty-state">
          <div className="empty-state-icon">✉️</div>
          <h3>Your email will appear here</h3>
          <p>Fill in the form and click Generate to create your personalized cold email</p>
        </div>
      </div>
    );
  }

  return (
    <div className="output-panel sticky">
      <h2 className="panel-title">
        <span>✨</span>
        Your Email
      </h2>

      <div className="email-output">
        {/* Subject Line */}
        <div className="output-subject">
          <div className="output-subject-label">Subject Line</div>
          <div className="output-subject-text">{output.subject}</div>
        </div>

        {/* Email Body */}
        <div className="output-body">
          {output.body}
        </div>

        {/* Personalization Insights */}
        <div className="output-insights">
          <h4>
            <span>💡</span>
            What We Personalized
          </h4>
          <ul>
            {output.insights.map((insight, index) => (
              <li key={index}>{insight}</li>
            ))}
          </ul>
        </div>

        {/* Metadata */}
        {output.metadata && (
          <div className="output-metadata">
            <span className="metadata-item">
              {output.metadata.wordCount} words
            </span>
            <span className="metadata-item">
              {output.metadata.tone}
            </span>
            <span className="metadata-item">
              {output.metadata.length}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="btn btn-copy" onClick={onCopy}>
            📋 Copy Email
          </button>
          <button className="btn btn-regenerate" onClick={onRegenerate}>
            🔄 Regenerate
          </button>
        </div>
      </div>
    </div>
  );
}

export default OutputPanel;