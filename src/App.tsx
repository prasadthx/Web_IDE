import React, {useState} from 'react';
import './App.css';
import CodePlayground from './components/CodePlayground/CodePlayground';
import TaskBar from "./components/TaskBar/TaskBar";
import OutputTerminal from './components/OutputTerminal/OutputTerminal';


function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("Python");
  const [theme, setTheme] = useState("Twilight");
  return (
    <div className="App">
      <TaskBar setLanguage={setLanguage} setTheme={setTheme}/>
      <CodePlayground setCode={setCode} language={language} theme={theme}/>
      <OutputTerminal code={code}/>
    </div>
  );
}

export default App;
