/**
 * Copyright (c) Daniel Solarte Chaverra
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * @format
 */

import React from 'react'
import { Link } from 'react-router-dom'
import Code from '../../components/code'
import DocsLinks from '../../components/docsLinks'

export default () => {

    return <>
        <h1>Queries Overview</h1>
        <p>
            The queries in <b>next-database</b> are very easy to do. You only need know how to usage SQL and then can do it,
            but if you do not know about SQL, here a little introduction
        </p>
        <p>
            The queries are simple, just choose one between<Link to="/docs/insert">Insert</Link>,<Link to="/docs/delete">Delete</Link>,
            <Link to="/docs/select">Select</Link> or<Link to="/docs/update">Update</Link>
        </p>
        
        <h2 id="execute">Execute</h2>
        <p>Execute is used for run any query</p>
        <Code lang="javascript" text="query.execute() : Promise<any>" />

        <h3>Example</h3>
        <Code lang="javascript" text="database.select('users').execute();" />

        <DocsLinks back={{ title: "Using with PostgreSQL", link: "postgresql-usage" }}
            forward={{ title: "Insert Query", link: "insert" }} />
    </>

}