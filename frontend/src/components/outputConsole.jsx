function OutputConsole({ output, error, isLoading }) {
  return (
    <div className="panel-card output-console">
      <h4>Output</h4>
      <div className="content" style={{ whiteSpace: "pre-wrap", overflowY: "auto", height: "100%" }}>
        {isLoading && <span style={{ color: "#888" }}>Executing code...</span>}
        {!isLoading && error && <span style={{ color: "#ff4d4d", fontFamily: "monospace" }}>{error}</span>}
        {!isLoading && !error && output && <span style={{ color: "#4dff4d", fontFamily: "monospace" }}>{output}</span>}
        {!isLoading && !error && !output && <span style={{ color: "#888" }}>Waiting for code execution...</span>}
      </div>
    </div>
  );
}

export default OutputConsole;