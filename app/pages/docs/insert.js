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
import DocsExtra from '../../components/docsExtra'
import DocsLinks from '../../components/docsLinks'
import { Link } from 'react-router-dom'

export default () => {
    return <>
        <h1>Insert</h1>
        <p>With this method you can insert new records to a table in your database</p>
        <Code lang="javascript" text="database.insert(table: string) : nextDatabase.Insert" />
        <p><b>IMPORTANT</b> To run the query you must use<Link to="/docs/queries/execute">Execute</Link> method</p>

        <h2 id="single">Single insert</h2>
        <p>Insert a new record to a table</p>
        <Code lang="javascript" text={
            "database.insert('users').fields({\r\n" +
            "   username: 'nextDatabase',\r\n" +
            "   email: 'nextdatabase@example.com'\r\n" +
            "});"
        } />
        <p>It is equivalent to</p>
        <Code lang="sql" text="INSERT INTO 'users' ('username', 'email') VALUES ('nextDatabase', 'nextdatabase@example.com');" />

        <h2 id="multiple">Multiple insert</h2>
        <p>Insert multiple records to a table</p>
        <Code lang="javascript" text={
            "database.insert('users').multiple(\r\n" +
            "   [ 'username', 'email' ],\r\n" +
            "   [\r\n" +
            "       [ 'nextDatabase', 'nextdatabase@example.com' ],\r\n" +
            "       [ 'nextDatabase1', 'nextdatabase1@example.com' ],\r\n" +
            "   ]\r\n" +
            ");"
        } />
        <p>It is equivalent to</p>
        <Code lang="sql" text={
            "INSERT INTO 'users' ('username', 'email') VALUES\r\n" +
            "   ('nextDatabase', 'nextdatabase@example.com'),\r\n" +
            "   ('nextDatabase1', 'nextdatabase1@example.com');"
        } />

        <DocsExtra execute={true} />

        <DocsLinks back={{ title: "Queries Overview", link: "queries" }}
            forward={{ title: "Delete Query", link: "delete" }} />
    </>
}