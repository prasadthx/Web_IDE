import Prism from 'prismjs';
import 'prismjs/themes/prism-dark.css';
import React, {useEffect} from 'react';
import './CodeDisplay.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export const CodeDisplay = ({code} : any) => {
    useEffect( () => {
            Prism.highlightAll()
        }
    )
    return(
        <div className="w-full h-full">
            <pre className="w-full h-full z-2 highlighter">
                <code className={`language-javascript`}>{code}</code>
            </pre>
        </div>
    );
}
