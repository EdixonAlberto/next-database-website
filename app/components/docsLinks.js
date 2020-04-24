import React from 'react'
import { Link } from 'react-router-dom'

export default ({ back, forward }) => {
    return <div className="docs-links">
        {back && <Link to={`/docs/${back.link}`}>
            <img src="/assets/images/icons/back-arrow.svg" alt={back.title} className="left" />
            {back.title}
        </Link>}
        {forward && <Link to={`/docs/${forward.link}`}>
            {forward.title}
            <img src="/assets/images/icons/forward-arrow.svg" alt={forward.title} className="right" />
        </Link>}
    </div>
}