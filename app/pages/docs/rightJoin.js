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

export default () => {

    return <>
        <h1>Right Join</h1>
        <p>With this method you can get all rows from the right table, even if there are no matches in the left table</p>
        <Code lang="javascript" text="selectQuery.rightJoin(table: string) : nextDatabase.Join" />

        <h2 id="example">Example</h2>
        <Code lang="javascript" text="database.select('users').rightJoin('groups');" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="SELECT * FROM 'users' RIGHT JOIN 'groups';" />

        <DocsExtra asJoin={true} onJoin={true} usingJoin={true} execute={true} />

        <DocsLinks back={{ title: "Left Join Query", link: "left-join" }}
            forward={{ title: "Where Query", link: "where" }} />
    </>

}