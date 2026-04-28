import Editor from "@monaco-editor/react";

function CodeEditor({ code, setCode, language }) {
  const monacoLanguage = language === "C++" ? "cpp" : language.toLowerCase();

  const handleEditorWillMount = (monaco) => {
    monaco.editor.defineTheme("algolens-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#1E1E2F", // Purplish slate background matching --bg-editor
        "editor.lineHighlightBackground": "#282A36",
        "editorCursor.foreground": "#f9c74f", // Yellow cursor
      },
    });
  };

  return (
    <div style={{ padding: "15px", height: "100%", width: "100%", boxSizing: "border-box" }}>
      <Editor
        height="100%"
        language={monacoLanguage}
        value={code}
        onChange={(value) => setCode(value || "")}
        beforeMount={handleEditorWillMount}
        theme="algolens-dark"
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