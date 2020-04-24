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
        <h1>Join/Inner Join</h1>
        <p>With these methods you can get the rows when there is a match in both tables</p>
        <Code lang="javascript" text="selectQuery.join(table: string) : nextDatabase.Join" />
        <Code lang="javascript" text="selectQuery.innerJoin(table: string) : nextDatabase.Join" />
        <p><b>NOTE</b> Both methods do the same</p>

        <h2 id="join-example">Example with Join</h2>
        <Code lang="javascript" text="database.select('users').join('groups');" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="SELECT * FROM 'users' JOIN 'groups';" />

        <h2 id="inner-join-example">Example with Inner Join</h2>
        <Code lang="javascript" text="database.select('users').innerJoin('groups');" />
        <p>It is equivalent to</p>
        <Code lang="sql" text="SELECT * FROM 'users' INNER JOIN 'groups';" />

        <DocsExtra asJoin={true} onJoin={true} usingJoin={true} execute={true} />

        <DocsLinks back={{ title: "Expert Overview", link: "joins" }}
            forward={{ title: "Full Join Query", link: "full-join" }} />
    </>

}