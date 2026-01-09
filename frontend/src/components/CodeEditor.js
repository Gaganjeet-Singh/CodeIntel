import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";

export default function CodeEditor({ language, setLanguage, code, setCode, onAnalyze }) {
  return (
    <main className="editor">
      <h2>AI Code Review</h2>

      <select value={language} onChange={e => setLanguage(e.target.value)}>
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
      </select>

      <CodeMirror
        value={code}
        height="300px"
        extensions={language === "python" ? [python()] : [javascript()]}
        onChange={value => setCode(value)}
      />

      <button onClick={onAnalyze} className="analyze-btn">
        Analyze Code
      </button>
    </main>
  );
}
