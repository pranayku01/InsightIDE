function InputConsole({ input, setInput }) {
  return (
    <div className="panel-card input-console">
      <h4>Input</h4>
      <div className="content">
        <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter custom input here..."
          className="input-textarea"
          style={{ width: "100%", height: "100%", background: "transparent", border: "none", color: "white", resize: "none" }}
        ></textarea>
      </div>
    </div>
  );
}

export default InputConsole;
