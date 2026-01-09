require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

const reviewCode = async ({ code, language }) => {
  const prompt = `
You are a senior software engineer and strict code reviewer.

Return ONLY valid JSON in the following format:
{
  "summary": string,
  "issues": string[],
  "suggestions": string[],
  "score": number,
  "code":string
}

Rules:
- score must be between 1 and 10
- issues and suggestions MUST be arrays
- DO NOT include markdown
- DO NOT include explanations
- DO NOT include extra text
- Output MUST be valid JSON only

Language: ${language}

Code:
${code}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash", // better discipline than flash
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }]
      }
    ],
    generationConfig: {
      temperature: 0, // CRITICAL for JSON
      topP: 0.1
    }
  });

  // Gemini usually obeys, but we still guard
  const text = response.text.trim();

  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("Invalid JSON from Gemini:", text);
    throw new Error("Gemini returned invalid JSON");
  }
};

module.exports = { reviewCode };
