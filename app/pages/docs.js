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