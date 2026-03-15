import Editor from "@monaco-editor/react";

function CodeEditor() {
  return (
    <div style={{ padding: "15px", height: "100%", width: "100%", boxSizing: "border-box" }}>
      <Editor
        height="100%"
        defaultLanguage="javascript"
        defaultValue="// Start coding..."
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