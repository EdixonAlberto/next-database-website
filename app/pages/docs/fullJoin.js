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
        <h1>Full Join</h1>
        <p>With this method you can get the rows when there is a match in one of the tables</p>
        <Code lang="javascript" text="selectQuery.fullJoin(table: string) : nextDatabase.Join" />

        <h2 id="example">Example</h2>
        <Code lang="javascript" text="database.select('users').fullJoin('groups');" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="SELECT * FROM 'users' FULL JOIN 'groups';" />

        <DocsExtra asJoin={true} onJoin={true} usingJoin={true} execute={true} />

        <DocsLinks back={{ title: "Join Query", link: "join" }}
            forward={{ title: "Left Join Query", link: "left-join" }} />
    </>

}