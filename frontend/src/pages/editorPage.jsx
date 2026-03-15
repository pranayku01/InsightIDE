import Navbar from "../components/navbar";
import CodeEditor from "../components/codeEditor";
import AiPanel from "../components/aiPanel";

function EditorPage() {
  return (
    <div className="app-container">
      
      <Navbar />

      <div className="main-layout">
        <div className="editor-section">
          <CodeEditor />
        </div>

        <AiPanel />
      </div>

      <div className="bottom-bar">
        <button className="run-btn">▶ Run</button>
        <button className="analyze-btn">✨ Analyze</button>

        <div className="lang-select-wrapper">
          <span>Language:</span>
          <select>
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