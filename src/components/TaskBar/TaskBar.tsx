import './TaskBar.css';
import React from "react";

const TaskBar = (props:any) => {

    const languages = [
        {
            label: "Python",
            value: "Python",
        },
        {
            label: "C",
            value: "C",
        },
        {
            label: "C++",
            value: "C++",
        },
        {
            label: "Swift",
            value: "Swift",
        },
    ];
    return (
        <div className="TaskBar">
            <div className="flex justify-between">
                <div className="ml-3 flex flex-col text-gray-200 justify-evenly align-middle">
                    <div className="px-3">
                        Themes :
                    </div>
                    <div>
                        <select className="rounded-3xl bg-black px-3 languageSelection" onChange={(e) => props.setTheme(e.target.value)}>
                            {languages.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="text-2xl py-4 font-bold text-gray-300">
                    Kraken Compiler
                </div>
                <div className="mr-3 flex flex-col text-gray-200 justify-evenly align-middle">
                    <div className="px-3">
                        Language :
                    </div>
                    <div>
                        <select className="rounded-3xl bg-black px-3 languageSelection" onChange={(e) => props.setLanguage(e.target.value)}>
                            {languages.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskBar;