import './TaskBar.css';
import React from "react";

const TaskBar : React.FC = () => {
    return (
        <div className="TaskBar">
            <div className="flex justify-between">
                <div className="">
                    Theme
                </div>
                <div className="text-3xl">
                    Kraken Compiler
                </div>
                <div className="">
                    Language :
                </div>
            </div>
        </div>
    )
}

export default TaskBar;