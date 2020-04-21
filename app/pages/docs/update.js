import React from 'react'
import Code from '../../components/code'
import DocsExtra from '../../components/docsExtra'
import DocsLinks from '../../components/docsLinks'

export default () => {

    return <>
        <h1>Update</h1>
        <p>
            With this method you can update the data of a table in your database
        </p>
        <Code lang="javascript" text="database.update(table: string) : nextDatabase.Update" />

        <h2 id="fields">Fields</h2>
        <p>
            Update the columns of a table.
        </p>
        <Code lang="javascript" text={
            "database.update('users').fields({\r\n" +
            "   username: 'nextDatabase',\r\n" +
            "   email: 'nextdatabase@example.com'\r\n" +
            "});"
        } />
        <p>
            It is equivalent to
        </p>
        <Code lang="sql" text="UPDATE users SET username = 'nextDatabase', email = 'nextdatabase@example.com'" />

        <DocsExtra />

        <DocsLinks back={{ title: "Select Query", link: "select" }} forward={{ title: "Limit", link: "limit" }} />
    </>

}