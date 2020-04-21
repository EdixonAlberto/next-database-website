import React from 'react'
import Code from '../../components/code'
import DocsExtra from '../../components/docsExtra'
import DocsLinks from '../../components/docsLinks'

export default () => {

    return <>
        <h1>Delete</h1>
        <p>
            With this method you can delete all data or specific data of a table in your database.
        </p>
        <Code lang="javascript" text="database.delete(table: string) : nextDatabase.Delete" />

        <h3>Example</h3>
        <Code lang="javascript" text="database.delete('users');" />
        <p>
            It is equivalent to
        </p>
        <Code lang="sql" text="DELETE FROM 'users';" />

        <DocsExtra />

        <DocsLinks back={{ title: "Insert Query", link: "insert" }} forward={{ title: "Select Query", link: "select" }} />
    </>

}