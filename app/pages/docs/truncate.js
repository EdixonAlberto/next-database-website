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
        <h1>Truncate</h1>
        <p>With this method you can empty a table in your database</p>
        <Code lang="javascript" text="database.truncate(table: string) : nextDatabase.Query" />
        <p><b>IMPORTANT</b> To run the query you must use<Link to="/docs/queries/execute">Execute</Link> method</p>

        <h2 id="example">Example</h2>
        <Code lang="javascript" text="database.truncate('users');" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="TRUNCATE TABLE 'users';" />

        <DocsExtra execute={true} />

        <DocsLinks back={{ title: "Drop Columns", link: 'drop-columns' }}
            forward={{ title: "Expert Overview", link: 'joins' }} />
    </>

}