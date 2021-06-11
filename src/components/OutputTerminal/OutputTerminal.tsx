import './OutputTerminal.css'
import React from "react";
import {Resizable} from 're-resizable';


const OutputTerminal : React.FC = () => {
    return(
        <Resizable
            className="OutputTerminal border-t-4 border-black"
            enable={{ top:true, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}>
            <div>
                Output Terminal
            </div>
        </Resizable>
    )
}



export default OutputTerminal;