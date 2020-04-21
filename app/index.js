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
import Loader from './pages/loader'
import Error404 from './pages/error404'
import docsHeader from './routes'

const Home = React.lazy(() => import('./pages/home')),
    Docs = React.lazy(() => import('./pages/docs'))

ReactDOM.render(<React.Suspense fallback={<Loader />}>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact children={<Home docsHeader={docsHeader} />} />
            <Route path="/docs" render={({ match }) => <Docs docsHeader={docsHeader} match={match} />} />
            <Route path="*" component={Error404} />
        </Switch>
    </BrowserRouter>
</React.Suspense>, document.getElementById('app'))