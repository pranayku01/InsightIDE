import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import OutputConsole from "./outputConsole";
import InputConsole from "./inputConsole";
import AiSuggestions from "./aiSuggestions";

function AiPanel() {
  return (
    <div className="ai-panel">
      <PanelGroup direction="vertical">
        <Panel defaultSize={40} minSize={20}>
          <AiSuggestions />
        </Panel>
        
        <PanelResizeHandle className="custom-resize-handle-vertical" />
        
        <Panel defaultSize={60} minSize={20}>
          <PanelGroup direction="horizontal">
            <Panel defaultSize={50} minSize={20}>
              <InputConsole />
            </Panel>
            <PanelResizeHandle className="custom-resize-handle" />
            <Panel defaultSize={50} minSize={20}>
              <OutputConsole />
            </Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default AiPanel;