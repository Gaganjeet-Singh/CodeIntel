import React,{useState} from "react";
import CodeMirror from '@uiw/react-codemirror';
import {python} from '@codemirror/lang-python';
import {javascript} from '@codemirror/lang-javascript';
import api from'../utils/api';
import {Link} from 'react-router-dom';
import './review.css';
import Sidebar from '../components/SideBar';
import CodeEditor from '../components/CodeEditor';
import ResultPanel from "../components/ResultPanel";

export default function Review() {

    const [language,setLanguage] = useState("python");
    const [code,setCode] = useState("");
    const [result,setResult] = useState("");


    const analyze = async() => {
        const res = api.post("/review",
            {code,language}
        );
        setResult(res.data.Review);
    }


    return (
        <>
            <div className="review-layout">
                <Sidebar/>
                <CodeEditor
                language={language}
                setLanguage={setLanguage}
                code = {code}
                setCode={setCode}
                onAnalyze={analyze}/>

                <ResultPanel result = {result}/>
            </div>
            
           
        </>
    )
}