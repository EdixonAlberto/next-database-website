/**
 * Copyright (c) Daniel Solarte Chaverra
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * @format
 */

import React from 'react'
import Header from '../components/header'

export default ({ docsHeader }) => {
    return (<div className="next-database-home-page">
        <Header docsHeader={docsHeader} />
    </div>)
}