import './OutputTerminal.css'
import React from "react";
import { ResizableBox, Resizable } from 'react-resizable';
import {stat} from "fs";

const OutputTerminal : React.FC = () => {
    let state = {
        width: 200,
        height: 200,
    };
    let onResize = (event: any, {element, size, handle}: any) => {
        state.width = size.width;
        state.height = size.height;
    };
    return(
        <Resizable height={state.height} width={state.width} onResize={onResize}>
            <div className="OutputTerminal">
                Output Terminal
            </div>
        </Resizable>
    )
}



export default OutputTerminal;