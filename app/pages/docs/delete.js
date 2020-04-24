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
        <h1>Delete</h1>
        <p>With this method you can delete all data or specific data of a table in your database</p>
        <Code lang="javascript" text="database.delete(table: string) : nextDatabase.Delete" />
        <p><b>IMPORTANT</b> To run the query you must use<Link to="/docs/queries/execute">Execute</Link> method</p>

        <h2 id="example">Example</h2>
        <Code lang="javascript" text="database.delete('users');" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="DELETE FROM 'users';" />

        <DocsExtra limit={true} where={true} execute={true} />

        <DocsLinks back={{ title: "Insert Query", link: "insert" }} forward={{ title: "Select Query", link: "select" }} />
    </>

}