import React from 'react'
import { Link } from 'react-router-dom'

export default ({ asJoin, onJoin, usingJoin, limit, where, execute }) => {
    return <>
        {asJoin && <>
            <h2 id="as">As</h2>
            <p>Read the<Link to="/docs/joins/as">Expert Overview</Link> for more information</p>
        </>}

        {onJoin && <>
            <h2 id="on">On</h2>
            <p>Read the<Link to="/docs/joins/on">Expert Overview</Link> for more information</p>
        </>}

        {usingJoin && <>
            <h2 id="using">Using</h2>
            <p>Read the<Link to="/docs/joins/using">Expert Overview</Link> for more information</p>
        </>}

        {limit && <>
            <h2 id="limit">Limit</h2>
            <p>Read the<Link to="/docs/limit">Limit</Link> docs for more information</p>
        </>}

        {where && <>
            <h2 id="where">Where</h2>
            <p>Read the<Link to="/docs/where">Where</Link> docs for more information</p>
        </>}

        {execute && <>
            <h2 id="execute">Execute</h2>
            <p>Read the<Link to="/docs/queries/execute">Queries Overview</Link> for more information</p>
        </>}
    </>
}