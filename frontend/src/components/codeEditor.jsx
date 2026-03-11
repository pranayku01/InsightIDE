import Editor from "@monaco-editor/react";

function CodeEditor() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Editor
        height="100%"
        defaultLanguage="javascript"
        defaultValue="// Start coding..."
        theme="vs-dark"
      />
    </div>
  );
}

export default CodeEditor;