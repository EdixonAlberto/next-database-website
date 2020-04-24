/**
 * Copyright (c) Daniel Solarte Chaverra
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * @format
 */

import React from 'react'
import Code from '../../components/code'
import { Link } from 'react-router-dom'
import DocsLinks from '../../components/docsLinks'

export default () => {

    return <>
        <h1>Limit</h1>
        <p>Limit is used to return only a number of records in a query</p>
        <Code lang="javascript" text="query.orderBy(limit: number) : Query" />
        <p>
            <b>NOTE</b> The limit only can be used with<Link to="/docs/delete">Delete</Link>,<Link to="/docs/select">Select</Link> and
            <Link to="/docs/update">Update</Link>
        </p>

        <h2 id="delete">Example with Delete</h2>
        <Code lang="javascript" text="database.delete('users').limit(2);" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="DELETE FROM 'users' LIMIT 2;" />

        <h2 id="select">Example with Select</h2>
        <Code lang="javascript" text="database.select('users').limit(10);" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="SELECT * FROM 'users' LIMIT 10;" />

        <h2 id="update">Example with Update</h2>
        <Code lang="javascript" text={
            "database.update('users').fields({\r\n" +
            "   username: 'nextDatabase',\r\n" +
            "   email: 'nextdatabase@example.com'\r\n" +
            "}).limit(5);"
        } />
        <p>It is equivalent to</p>
        <Code lang="sql" text="UPDATE 'users' SET 'username' = 'nextDatabase', email = 'nextdatabase@example.com' LIMIT 5;" />

        <DocsLinks back={{ title: "Update Query", link: "update" }} forward={{ title: "Add Columns Query", link: "add-columns" }} />
    </>

}