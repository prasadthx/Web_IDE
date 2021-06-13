import './OutputTerminal.css'
import React, {useEffect, useState} from "react";
import {Resizable} from 're-resizable'
import { RunPython } from './runPython'
import { Hook, Console, Decode } from 'console-feed'


const OutputTerminal = (props: any) => {
    let [output, setOutput] = useState("(loading...)");
    let [logs, setLog] = useState([]);

    useEffect(() => {
        Hook(window.console, (log) => {
            // @ts-ignore
            setLog((logs)=>[...logs, Decode(log)]);
        })
    }, []);
    

    useEffect(() => {
        // @ts-ignore
        // window.loadPyodide({ indexURL : "https://cdn.jsdelivr.net/pyodide/v0.17.0/full/" }).then(() => {
        //     RunPython(props.code, setOutput).then(
        //         (result) => console.log(result)
        //     );
        // })
        // //     .catch(() => {
        // //     console.log("error");
        // // });
        setLog([]);
        evaluatePython(props.code, setOutput);
    }, [props.code])
    return(
        <Resizable
            className="OutputTerminal border-t-4 border-black overflow-auto"
            enable={{ top:true, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}>
            <div className="flex flex-col">
                <div className="bg-black text-white text-sm py-1 border-b-2 border-red-900">
                    Terminal
                </div>
                <div className="">
                    <Console logs={logs} variant="dark"/>
                </div>
            </div>
        </Resizable>
    )
}

// init Pyodide
async function main(){
    // @ts-ignore
    await loadPyodide({ indexURL : 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/' });
}
let pyodideReadyPromise = main();

async function evaluatePython(code:any, setOutput:any) {
    await pyodideReadyPromise;
    try {
        // @ts-ignore
        let output = await pyodide.runPythonAsync(code);
        // console.log(output)
        setOutput(output)
    } catch (err) {
        console.log(err);
    }
}

export default OutputTerminal