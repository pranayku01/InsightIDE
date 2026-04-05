const { GoogleGenerativeAI }=require("@google/generative-ai");
const { buildCodeAnalysisPrompt }=require("../utils/promptbuilder.js");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-3.1-flash-lite-preview",
});

const analyzeCodeService = async ({ code, language }) => {
  try {
    const prompt = buildCodeAnalysisPrompt({ code, language });

    const result = await model.generateContent(prompt);
    const response = await result.response;

    return response.text();
  } catch (error) {
    console.error("Gemini Service Error:", error);
    throw new Error("Failed to analyze code");
  }
};
module.exports={analyzeCodeService};