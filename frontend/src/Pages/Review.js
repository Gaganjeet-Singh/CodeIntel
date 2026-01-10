import React, { useState } from "react";
import api from "../utils/api";
import Sidebar from "../components/SideBar";
import ResultPanel from "../components/ResultPanel";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
import "./review.css";

export default function Review() {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);

  const analyze = async () => {
    const res = await api.post("/review", { code, language });
    setResult(res.data.review || res.data.Review);
  };

  return (
    <div className="app-shell">
      <Sidebar />

      <div className="main-area">
        <div className="topbar">
          <h1>CodeIntel AI</h1>
        </div>

        <div className="content-grid">
          {/* Editor */}
          <div className="editor-panel">
            <div className="editor-header">
              <label>Language</label>
              <select value={language} onChange={e => setLanguage(e.target.value)}>
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
              </select>
            </div>

            <div className="code-card">
              <CodeMirror
                value={code}
                height="320px"
                extensions={language === "python" ? [python()] : [javascript()]}
                onChange={v => setCode(v)}
              />
            </div>

            <button className="analyze-btn" onClick={analyze}>
              Analyze Code
            </button>
            {result && (
                <div className="card summary under-editor">
                    <h4>Code Summary</h4>
                    <p>{result.summary}</p>
                </div>
                )}

          </div>


          <div className="right-panel">
            <ResultPanel result={result} />
          </div>

        </div>
      </div>
    </div>
  );
}
