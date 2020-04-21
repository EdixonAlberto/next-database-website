import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return <>
        <h2 id="limit">Limit</h2>
        <p>Read the<Link to="/docs/limit">Limit</Link> docs for more information.</p>

        <h2 id="where">Where</h2>
        <p>Read the<Link to="/docs/where">Where</Link> docs for more information.</p>

        <h2 id="execute">Execute</h2>
        <p>Read the<Link to="/docs/queries/execute">Queries Overview</Link> docs for more information.</p>
    </>
}