import { createContext, useContext, useState } from "react";

const EditorContext = createContext();

export const EditorProvider = ({children}) => {
    const [code,setCode] = useState("");
    const [reviewId,setReviewId] = useState(null);
    const [result,setResult] = useState(null);

    const ResetCode = () => {
        setCode("");
        setReviewId(null);
    }  
    
    const ResetResult = () => {
        setResult(null);
    }

    return (
        <EditorContext.Provider value={{code,setCode,reviewId,setReviewId,ResetCode,result,setResult,ResetResult}}>
            {children}
        </EditorContext.Provider>
    )
};

export const useEdit = () => useContext(EditorContext);