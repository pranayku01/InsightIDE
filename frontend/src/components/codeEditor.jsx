import Editor from "@monaco-editor/react";

function CodeEditor({ code, setCode, language }) {
  const monacoLanguage = language === "C++" ? "cpp" : language.toLowerCase();

  return (
    <div style={{ padding: "15px", height: "100%", width: "100%", boxSizing: "border-box" }}>
      <Editor
        height="100%"
        language={monacoLanguage}
        value={code}
        onChange={(value) => setCode(value || "")}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          fontFamily: "'Fira Code', 'Monaco', monospace",
          scrollBeyondLastLine: false,
          padding: { top: 10 }
        }}
      />
    </div>
  );
}

export default CodeEditor;