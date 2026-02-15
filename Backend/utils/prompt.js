export function buildEmailPrompt(data) {
  const {
    name,
    role,
    company,
    jobRole,
    recruiter,
    years,
    skills,
    companyDescription,
    jobDescription,
    tone,
    length,
    goal,
  } = data;

  return `Generate a professional cold email for a job application.

=== CANDIDATE INFORMATION ===
Name: ${name}
Role: ${role}
${years ? `Experience: ${years} years` : ""}
${skills ? `Skills: ${skills}` : ""}

=== TARGET INFORMATION ===
Company: ${company}
Job Position: ${jobRole}
${recruiter ? `Recruiter: ${recruiter}` : "Recruiter: Unknown"}
${companyDescription ? `About Company: ${companyDescription}` : ""}
${jobDescription ? `Job Details: ${jobDescription}` : ""}

=== EMAIL PARAMETERS ===
Tone: ${tone || "professional"}
Length: ${length || "medium"}
Goal: ${goal || "interview"}

=== FORMATTING REQUIREMENTS ===

${length === "short" ? `
SHORT EMAIL FORMAT:
- 2 paragraphs
- No formal closing remarks needed
- Keep it brief and direct
` : length === "medium" ? `
MEDIUM EMAIL FORMAT:
- 3 paragraphs total
- End with professional closing remarks (e.g., "Best regards," "Kind regards," "Sincerely,")
- Follow with sender's name
` : `
LONG EMAIL FORMAT:
- 4 paragraphs total
- End with professional closing remarks (e.g., "Best regards," "Kind regards," "Sincerely,")
- Follow with sender's name
`}

=== OUTPUT FORMAT ===
Return ONLY valid JSON in this structure:
{
  "subject": "compelling subject line",
  "body": "email body with paragraphs separated by \\n\\n${length !== "short" ? ", ending with closing remarks and name" : ""}",
  "insights": ["what made this personalized", "key points included", "why this approach"]
}

${length !== "short" ? `
IMPORTANT: The body must end with:
- Empty line (\\n\\n)
- Closing remark ("Best regards," or similar)
- Empty line (\\n\\n)
- Sender's name (${name})
` : ""}`;
}