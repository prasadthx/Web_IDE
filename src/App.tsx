import React from 'react';
import './App.css';
import CodePlayground from './components/CodePlayground/CodePlayground';
import TaskBar from "./components/TaskBar/TaskBar";
import OutputTerminal from './components/OutputTerminal/OutputTerminal';


function App() {
  return (
    <div className="App">
      <TaskBar/>
      <CodePlayground/>
      <OutputTerminal/>
    </div>
  );
}

export default App;
