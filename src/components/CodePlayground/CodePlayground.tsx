import './CodePlayground.css'
import React, {useRef, useState} from "react";
import { CodeDisplay } from "./CodeDisplay/CodeDisplay";


const CodePlayground:React.FC = () => {
    let [value, setValue] = useState("");
    // @ts-ignore
    return(
        <div className="CodePlayground relative">
            <textarea     className="absolute top-0 bg-transparent w-full h-full editor" onChange={e => setValue(e.target.value)} onScroll={e => scrollSync()}></textarea>
            <CodeDisplay  className="absolute top-0 w-full h-full" code={value}/>
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