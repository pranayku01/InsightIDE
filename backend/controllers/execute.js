const { executeCode }= require("../services/execution.js");

const execute = async (req, res) => {
  try {

    const { code, language, input } = req.body;

    if (!code || !language) {
      return res.status(400).json({
        error: "Code and language are required"
      });
    }

    const result = await executeCode({
      code,
      language,
      input
    });

    res.json({
      stdout: result.program_output,
      stderr: result.program_error,
      status: "success"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Execution failed"
    });

  }
};
module.exports = {execute};