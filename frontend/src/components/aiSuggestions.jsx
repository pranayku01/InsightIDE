function AiSuggestions({ aiResponse, isAiLoading }) {
  return (
    <div className="panel-card ai-suggestions">
      <h4>AI Analysis</h4>
      <div className="content">
        {isAiLoading ? (
          "Analyzing code... Please wait."
        ) : aiResponse ? (
          <div style={{ whiteSpace: "pre-wrap" }}>{aiResponse}</div>
        ) : (
          "AI suggestions will appear here after analysis."
        )}
      </div>
    </div>
  );
}

export default AiSuggestions;