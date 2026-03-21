const axios=require("axios");

const languageMap = {
  cpp: "gcc-head",
  python: "cpython-3.10.2",
  rust: "rust-head",
  go: "go-head",
  javascript: "nodejs-head"
};

const executeCode = async ({ code, language, input }) => {
  const compiler = languageMap[language];
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
module.exports={executeCode};