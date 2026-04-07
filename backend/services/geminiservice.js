const { GoogleGenAI }=require("@google/genai");
const { buildCodeAnalysisPrompt }=require("../utils/promptbuilder.js");

const genAI = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});

const analyzeCodeService = async ({ code, language }) => {
  try {
    const prompt = buildCodeAnalysisPrompt({ code, language });

    const result = await genAI.models.generateContent({model:"gemini-3.1-flash-lite-preview",contents:prompt});


    return result.text;
  } catch (error) {
    console.error("Gemini Service Error:", error);
    throw new Error("Failed to analyze code");
  }
};
module.exports={analyzeCodeService};