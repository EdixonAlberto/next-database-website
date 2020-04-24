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
        <h1>Left Join</h1>
        <p>With this method you can get all rows from the left table, even if there are no matches in the right table</p>
        <Code lang="javascript" text="selectQuery.leftJoin(table: string) : nextDatabase.Join" />

        <h2>Example</h2>
        <Code lang="javascript" text="database.select('users').leftJoin('groups');" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="SELECT * FROM 'users' LEFT JOIN 'groups';" />

        <DocsExtra asJoin={true} onJoin={true} usingJoin={true} execute={true} />

        <DocsLinks back={{ title: "Full Join Query", link: "full-join" }}
            forward={{ title: "Right Join Query", link: "right-join" }} />
    </>

}