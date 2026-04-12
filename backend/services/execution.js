const axios = require("axios");

const languageMap = {
  "c++": "gcc-head",
  cpp: "gcc-head",              // support both
  python: "cpython-3.14.0",
  rust: "rust-1.82.0",
  go: "go-1.23.2",
  javascript: "nodejs-20.17.0",
  java: "openjdk-head"
};

const executeCode = async ({ code, language, input }) => {
  const compiler = languageMap[language.toLowerCase()];

  if (!compiler) {
    throw new Error(`Unsupported language: ${language}`);
  }

  const response = await axios.post(
    "https://wandbox.org/api/compile.json",
    {
      compiler: compiler,
      code: code,
      stdin: input || ""
    }
  );

  return response.data;
};

module.exports = { executeCode };