import React from 'react'
import { Link } from 'react-router-dom'
import Code from '../../components/code'

export default () => {

    return <>
        <h1>Queries</h1>
        <p>
            The queries in <b>next-database</b> are very easy to do. You only need know how to usage SQL and then can do it,
            but if you do not know about SQL, here a little introduction.
        </p>
        <p>
            The queries are simple, just choose one between<Link to="/docs/insert">Insert</Link>,<Link to="/docs/delete">Delete</Link>,
            <Link to="/docs/select">Select</Link> or<Link to="/docs/update">Update</Link>.
        </p>
        <p>
            
        </p>
    </>

}