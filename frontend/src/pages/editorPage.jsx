import Navbar from "../components/navbar";
import CodeEditor from "../components/codeEditor";
import AiPanel from "../components/aiPanel";

function EditorPage() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      
      <Navbar />

      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ width: "70%" }}>
          <CodeEditor />
        </div>

        <AiPanel />
      </div>

      <div style={{ height: "50px", background: "#111", display: "flex", alignItems: "center", gap: "10px", padding: "10px" }}>
        <button>Run</button>
        <button>Analyze</button>

        <select>
          <option>JavaScript</option>
          <option>Python</option>
          <option>Java</option>
          <option>C++</option>
        </select>
      </div>

    </div>
  );
}

export default EditorPage;