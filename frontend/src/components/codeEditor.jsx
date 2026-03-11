import Editor from "@monaco-editor/react";

function CodeEditor() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Editor
        height="100%"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="// Start coding..."
      />
    </div>
  );
}

export default CodeEditor;