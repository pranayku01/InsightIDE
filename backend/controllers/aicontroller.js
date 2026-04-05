const { analyzeCodeService }=require("../services/geminiservice.js");

const analyzeCodeController = async (req, res) => {
  try {
    const { code, language } = req.body;

    if (!code) {
      return res.status(400).json({
        success: false,
        error: "Code is required",
      });
    }

    const result = await analyzeCodeService({
      code,
      language: language || "cpp",
    });

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports={analyzeCodeController};