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
import DocsLinks from '../../components/docsLinks'
import { Link } from 'react-router-dom'

export default () => {

    return <>
        <h1>Expert Overview</h1>
        <p>
            The Joins are used to combine rows from two or more tables, based on a related column between them
        </p>

        <h2 id="as">As</h2>
        <p>With this method you can set a custom alias to the database to join</p>
        <Code lang="javascript" text="joinQuery.as(table: string) : nextDatabase.Join" />

        <h3>Example</h3>
        <Code lang="javascript" text="database.select('users').innerJoin('groups').as('ug');" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="SELECT * FROM 'users' INNER JOIN 'groups' AS 'ug';" />

        <h2 id="on">On</h2>
        <p>This method is similar to<Link to="/docs/where">Where</Link>, but it effects is on the join</p>
        <Code lang="javascript" text="joinQuery.on(on: string) : nextDatabase.Join" />

        <h3>Example</h3>
        <Code lang="javascript" text="database.select('users').innerJoin('groups').on('groups.owner_id = users.id');" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="SELECT * FROM 'users' INNER JOIN 'groups' ON groups.owner_id = users.id;" />

        <h2 id="using">Using</h2>
        <p></p>

        <DocsLinks back={{ title: "Truncate Query", link: "truncate" }}
            forward={{ title: "Join Query", link: "join" }} />
    </>

}