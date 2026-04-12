import { useState } from "react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import Navbar from "../components/navbar";
import CodeEditor from "../components/codeEditor";
import AiPanel from "../components/aiPanel";

function EditorPage() {
  const [code, setCode] = useState("// Start coding...");
  const [language, setLanguage] = useState("JavaScript");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRunCode = async () => {
    setIsLoading(true);
    setOutput("");
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/execute/run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          code: code,
          language: language,
          input: input
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to execute code on server.");
      } else {
        if (data.stderr) {
          setError(data.stderr);
        }
        if (data.stdout) {
          setOutput(data.stdout);
        }
        if(!data.stderr && !data.stdout) {
           setOutput("Code executed successfully without output.");
        }
      }
    } catch (err) {
      console.error(err);
      setError("Network Error: Make sure the backend server runs on Port 3000.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      
      <Navbar />

      <div className="main-layout">
        <PanelGroup direction="horizontal">
          <Panel defaultSize={60} minSize={20}>
            <div className="editor-section">
              <CodeEditor code={code} setCode={setCode} language={language} />
            </div>
          </Panel>
          
          <PanelResizeHandle className="custom-resize-handle" />
          
          <Panel defaultSize={40} minSize={20}>
            <AiPanel 
              input={input} 
              setInput={setInput} 
              output={output} 
              error={error} 
              isLoading={isLoading} 
            />
          </Panel>
        </PanelGroup>
      </div>

      <div className="bottom-bar">
        <button 
          className="run-btn" 
          onClick={handleRunCode} 
          disabled={isLoading}
          style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? "not-allowed" : "pointer" }}
        >
          {isLoading ? "Running..." : "▶ Run"}
        </button>
        <button className="analyze-btn">✨ Analyze</button>

        <div className="lang-select-wrapper">
          <span>Language:</span>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option>JavaScript</option>
            <option>Python</option>
            <option>Java</option>
            <option>C++</option>
          </select>
        </div>
      </div>

    </div>
  );
}

export default EditorPage;