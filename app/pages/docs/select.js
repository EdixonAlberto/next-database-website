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
import DocsExtra from '../../components/docsExtra'
import DocsLinks from '../../components/docsLinks'

export default () => {

    return <>
        <h1>Select</h1>
        <p>With this method you can select all data or specific data of a table in your database</p>
        <Code lang="javascript" text="database.select(table: string) : nextDatabase.Select" />
        <p><b>IMPORTANT</b> To run the query you must use<Link to="/docs/queries/execute">Execute</Link> method</p>

        <h2 id="distinct">Distinct select</h2>
        <p>The distinct select is used to return only distinct (different) values</p>
        <Code lang="javascript" text="database.select(table: string).distinct(column: string) : nextDatabase.Select" />
        <Code lang="javascript" text="database.select(table: string).distinct(columns: string[]) : nextDatabase.Select" />

        <h3>Example</h3>
        <Code lang="javascript" text={
            "// With one column\r\n" +
            "database.select('users').distinct('id');\r\n\r\n" +
            "// With two or more columns\r\n" +
            "database.select('users').distinct([ 'id', 'username' ]);"
        } />

        <h2 id="all">All select</h2>
        <p>Select all columns of a data table</p>
        <Code lang="javascript" text="database.select('users');" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="SELECT * FROM 'users';" />

        <h2 id="single">Single select</h2>
        <p>Select a single column of a data table</p>
        <Code lang="javascript" text="database.select('users').column('id');" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="SELECT 'id' FROM 'users';" />

        <h2 id="multiple">Multiple select</h2>
        <p>Select multiple columns of a data table</p>
        <Code lang="javascript" text="database.select('users').columns([ 'id', 'username' ]);" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="SELECT 'id', 'username' FROM 'users';" />

        <h2 id="order-by">Order by</h2>
        <p>Order by is used to sort the result-set in ascending or descending order</p>
        <Code lang="javascript" text="database.select('users').orderBy('id DESC');" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="SELECT * FROM 'users' ORDER BY 'id' DESC;" />

        <h2 id="join">Using joins</h2>
        <p>Read the<Link to="/docs/joins">Expert Overview</Link> docs for more information</p>

        <DocsExtra limit={true} where={true} execute={true} />

        <DocsLinks back={{ title: "Delete Query", link: "delete" }} forward={{ title: "Update Query", link: "update" }} />
    </>

}