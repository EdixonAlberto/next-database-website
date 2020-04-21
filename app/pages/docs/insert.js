import React from 'react'
import Code from '../../components/code'
import { Link } from 'react-router-dom'
import DocsLinks from '../../components/docsLinks'

export default () => {
    return <>
        <h1>Insert</h1>
        <p>
            With this method you can insert new records to a table in your database.
        </p>
        <Code lang="javascript" text="database.insert(table: string) : nextDatabase.Insert" />

        <h2 id="single">Single insert</h2>
        <p>
            Insert a new record to a table
        </p>
        <Code lang="javascript" text={
            "database.insert('users').fields({\r\n" +
            "   username: 'nextDatabase',\r\n" +
            "   email: 'nextdatabase@example.com'\r\n" +
            "});"
        } />
        <p>
            It is equivalent to
        </p>
        <Code lang="sql" text="INSERT INTO 'users' ('username', 'email') VALUES ('nextDatabase', 'nextdatabase@example.com');" />

        <h2 id="multiple">Multiple insert</h2>
        <p>
            Insert multiple records to a table
        </p>
        <Code lang="javascript" text={
            "database.insert('users').multiple(\r\n" +
            "   [ 'username', 'email' ],\r\n" +
            "   [\r\n" +
            "       [ 'nextDatabase', 'nextdatabase@example.com' ],\r\n" +
            "       [ 'nextDatabase1', 'nextdatabase1@example.com' ],\r\n" +
            "   ]\r\n" +
            ");"
        } />
        <p>
            It is equivalent to
        </p>
        <Code lang="sql" text={
            "INSERT INTO 'users' ('username', 'email') VALUES\r\n" +
            "   ('nextDatabase', 'nextdatabase@example.com'),\r\n" +
            "   ('nextDatabase1', 'nextdatabase1@example.com');"
        } />

        <h2 id="execute">Execute</h2>
        <p>
            Read the<Link to="/docs/queries/execute">Queries Overview</Link> docs for more information.
        </p>

        <DocsLinks back={{ title: "Queries Overview", link: "queries" }}
            forward={{ title: "Delete Query", link: "delete" }} />
    </>
}