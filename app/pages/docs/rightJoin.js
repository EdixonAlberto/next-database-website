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
        <p>
            With this method you 
        </p>

        <DocsExtra asJoin={true} onJoin={true} usingJoin={true} />

        <DocsLinks back={{ title: "Left Join Query", link: "left-join" }}
            forward={{ title: "Where Query", link: "where" }} />
    </>

}