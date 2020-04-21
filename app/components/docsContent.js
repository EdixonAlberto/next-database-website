import React from 'react'
import Header from './header'
import DocsNavigator from './docsNavigator'

export default (props) => {

    return <div className="next-database-docs-page">
        <Header docsHeader={props.docsHeader} />

        <div className="docs-content">
            <DocsNavigator docsHeader={props.docsHeader} />
            <div className="docs-information">
                {props.children}
            </div>
        </div>
    </div>

}