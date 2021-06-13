import './CodePlayground.css'
import React, {useEffect, useState} from "react";
import { CodeDisplay } from "./CodeDisplay/CodeDisplay";


const CodePlayground = (props:any) => {
    let [value, setValue] = useState("");
    // @ts-ignore
    return(
        <div className="CodePlayground relative">
            <textarea     className="absolute top-0 bottom-0 bg-transparent w-full h-full editor" onChange={e => setValue(e.target.value)} onScroll={e => scrollSync()}></textarea>
            <CodeDisplay  className="absolute top-0 bottom-0 w-full h-full" code={value} language={props.language} theme={props.theme}/>
            <button className="absolute bottom-5 right-10 bg-red-800 rounded-xl py-2 px-5 text-white font-bold z-30"
                    onClick={(e)=>props.setCode(value)}>RUN</button>
        </div>
    )
};

const scrollSync = () => {
    let editingElement = document.getElementsByClassName("editor")[0];
    let highlightingElement = document.getElementsByClassName("highlighter")[0];
    highlightingElement.scrollTop = editingElement.scrollTop;
    highlightingElement.scrollLeft = editingElement.scrollLeft;
}


export default CodePlayground;