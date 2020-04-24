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
        <h1>Where</h1>
        <p>With this method you can filter the data of a query</p>
        <Code lang="javascript" text="query.where(where: string, params: any[]|string|number) : nextDatabase.Query" />
        <p>
            <b>NOTE</b> The where only can be used with<Link to="/docs/delete">Delete</Link>,
            <Link to="/docs/select">Select</Link> and<Link to="/docs/update">Update</Link>
        </p>

        <h2 id="delete">Example with Delete</h2>
        <Code lang="javascript" text="database.delete('users').where('id = ?', 1);" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="DELETE FROM 'users' WHERE 'id' = 1;" />

        <h2 id="select">Example with Select</h2>
        <Code lang="javascript" text="database.select('users').where('username LIKE ?', 'next%');" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="SELECT * FROM 'users' WHERE 'username' LIKE 'next%';" />

        <h2 id="update">Example with Update</h2>
        <Code lang="javascript" text={
            "database.update('users').fields({\r\n" +
            "   username: 'nextDatabase',\r\n" +
            "   email: 'nextdatabase@example.com'\r\n" +
            "}).where('id < ?', 10);"
        } />
        <p>It is equivalent to</p>
        <Code lang="sql" text="UPDATE 'users' SET 'username' = 'nextDatabase', email = 'nextdatabase@example.com' WHERE 'id' < 10;" />

        <DocsLinks back={{ title: "Right Join", link: "right-join" }} />
    </>

}