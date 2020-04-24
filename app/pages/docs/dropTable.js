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
        <h1>Drop Table</h1>
        <p>With this method you can delete an existing table in your database</p>
        <Code lang="javascript" text="database.drop(table: string) : nextDatabase.Query" />
        <p><b>IMPORTANT</b> To run the query you must use<Link to="/docs/queries/execute">Execute</Link> method</p>

        <h2 id="example">Example</h2>
        <Code lang="javascript" text="database.drop('users');" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="DROP TABLE IF EXISTS 'users';" />

        <DocsExtra execute={true} />

        <DocsLinks back={{ title: "Create Table", link: "create-table" }}
            forward={{ title: "Drop Columns", link: "drop-columns" }} />
    </>

}