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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Error404 from './pages/error404'

ReactDOM.render(<Router>
    <Switch>
        <Route path="/" exact children={<Home />} />
        <Route path="*" children={<Error404 />} />
    </Switch>
</Router>, document.getElementById('app'))