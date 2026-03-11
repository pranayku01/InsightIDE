import OutputConsole from "./outputConsole";
import AiSuggestions from "./aiSuggestions";

function AiPanel() {
  return (
    <div className="ai-panel">
      <OutputConsole />
      <AiSuggestions />
    </div>
  );
}

export default AiPanel;