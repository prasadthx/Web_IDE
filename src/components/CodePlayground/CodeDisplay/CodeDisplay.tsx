import Prism from 'prismjs';
import React, {useEffect} from 'react';
import './CodeDisplay.css';
//import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import {Twilight, Dark, Okaidia, Coy} from './themes'



export const CodeDisplay = (props : any) => {

    useEffect( () => {
            Prism.highlightAll();
        }
    )

    useEffect(()=>{
        console.log(`Theme Set To ${props.theme}`)
        changeTheme(props.theme);
        let element = document.getElementsByClassName("themeStyle")[0];
        console.log(element);
    }, [props.theme]);

    useEffect(() => {
        console.log(`Language Set To ${props.language}`)
    }, [props.language])
    return(
        <div className="w-full h-full">
            <pre className="w-full h-full z-2 highlighter">
                <code className={`language-javaScript`}>{props.code}</code>
            </pre>
        </div>
    );
}

const changeTheme = (theme: string) => {
    switch (theme) {
        case "Twilight":
            if (!document.getElementsByClassName("themeStyle")[0]){
                let themeStyle = document.createElement("style");
                themeStyle.classList.add("themeStyle");
                themeStyle.innerHTML = Twilight;
                document.head.appendChild(themeStyle);
                return;
            }
            else
                return replaceTheme(Twilight);


        case "Dark":
            return replaceTheme(Dark);

        case "Coy":
            return replaceTheme(Coy);

        case "Okaidia":
            return replaceTheme(Okaidia)
    }
}
let prismStyles = [];

const replaceTheme = (theme: any) => {
    let themeStyle = document.getElementsByClassName("themeStyle")[0];
    themeStyle.innerHTML = theme;
}

