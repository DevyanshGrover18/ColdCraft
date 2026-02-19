
import Groq from "groq-sdk";
import { buildEmailPrompt } from "./utils/prompt.js";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
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
      customRequest
    } = req.body;

    const prompt = buildEmailPrompt({
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
      customRequest
    });

    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 1500,
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(
      completion.choices[0].message.content
    );

    return res.status(200).json({
      subject: result.subject,
      body: result.body,
      insights: result.insights || [],
      metadata: {
        tone: tone || "professional",
        length: length || "medium",
        goal: goal || "interview",
        wordCount: result.body.split(/\s+/).length,
      },
    });

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      error: "Failed to generate email",
    });
  }
}
