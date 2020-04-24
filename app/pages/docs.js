/**
 * Copyright (c) Daniel Solarte Chaverra
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * @format
 */

import React from 'react'
import { Route } from 'react-router-dom'
import DocsContent from '../components/docsContent'

export default ({ docsHeader }) => {

    return <DocsContent docsHeader={docsHeader}>
        {Object.keys(docsHeader).map(page =>
            docsHeader[page].map(Subpage => !Subpage.onlyMobile &&
                <Route path={Subpage.link} render={() => <Subpage.component />} key={Subpage.title.toLowerCase()} />)
        )}
    </DocsContent>

}