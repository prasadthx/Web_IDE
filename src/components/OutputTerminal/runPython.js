export const RunPython = async (code, setOutput) => {
        setOutput(window.pyodide.runPython(code));
}