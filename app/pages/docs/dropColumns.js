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
        <h1>Drop Columns</h1>
        <p>With this method you can delete one or more columns of a table in your database</p>
        <Code lang="javascript" text="database.dropColumns(table: string) : nextDatabase.DropColumns" />
        <p><b>IMPORTANT</b> To run the query you must use<Link to="/docs/queries/execute">Execute</Link> method</p>

        <h2 id="single">Single drop columns</h2>
        <p>Drop one column of a table</p>
        <Code lang="javascript" text="database.dropColumns(table: string).column(column: string) : nextDatabase.DropColumns" />

        <h3>Example</h3>
        <Code lang="javascript" text="database.dropColumns('users').dropColumns('id');" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="ALTER TABLE 'users' DROP COLUMN 'id';" />

        <h2 id="multiple">Multiple drop columns</h2>
        <p>Drop two or more columns of a table</p>
        <Code lang="javascript" text="database.dropColumns(table: string).columns(columns: string[]) : nextDatabase.DropColumns" />

        <h3>Example</h3>
        <Code lang="javascript" text="database.dropColumns('users').columns([ 'id', 'username' ]);" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="ALTER TABLE 'users' DROP COLUMN 'id', DROP COLUMN 'username';" />

        <DocsExtra execute={true} />

        <DocsLinks back={{ title: "Drop Table", link: "drop-table" }}
            forward={{ title: "Truncate Query", link: "truncate" }} />
    </>

}