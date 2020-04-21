import React from 'react'
import Highlight from 'react-highlight.js'

export default (props) => {

    return <div className={`next-database-code ${props.noMargin ? 'no-margin' : ''}`}>
        {props.title && <div className="code-header">
            <span>{props.title}</span>
            {props.lang && <div className="header-language">{props.lang}</div>}
        </div>}
        <Highlight language={`language-${props.lang}`}>
            {props.text}
        </Highlight>
    </div>

}