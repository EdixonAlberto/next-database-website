/**
 * Copyright (c) Daniel Solarte Chaverra
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * @format
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Error404 from './pages/error404'
import Home from './pages/home'
import Docs from './pages/docs'

const docsHeader = {
    overview: [
        { link: "/", title: "Home", onlyMobile: true },
        { link: "/docs/what-is", title: "What is next-database?" },
        { link: "/docs/getting-started", title: "Getting Started" },
        { link: "/docs/mysql-usage", title: "Using with MySQL" },
        { link: "/docs/postgresql-usage", title: "Usign with PostgreSQL" }
    ],
    Queries: [
        { link: "/docs/queries", title: "Overview" },
        { link: "/docs/insert", title: "Insert" },
        { link: "/docs/delete", title: "Delete" },
        { link: "/docs/select", title: "select" },
        { link: "/docs/update", title: "Update" },
        { link: "/docs/limit", title: "Limit" }
    ],
    Advanced: [
        { link: "/docs/add-columns", title: "Add Columns" },
        { link: "/docs/create", title: "Create Table" },
        { link: "/docs/drop", title: "Drop" },
        { link: "/docs/drop-columns", title: "Drop Columns" },
        { link: "/docs/truncate", title: "Truncate" }
    ],
    Expert: [
        { link: "/docs/expert", title: "Overview" },
        { link: "/docs/join", title: "Join" },
        { link: "/docs/inner-join", title: "Inner Join" },
        { link: "/docs/left-join", title: "Left Join" },
        { link: "/docs/right-join", title: "Right Join" },
        { link: "/docs/where", title: "Where" }
    ]
}

ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route path="/" exact children={<Home docsHeader={docsHeader} />} />
        <Route path="/docs" render={({ match }) => <Docs docsHeader={docsHeader} match={match} />} />
        <Route path="*" component={Error404} />
    </Switch>
</BrowserRouter>, document.getElementById('app'))