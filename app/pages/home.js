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
import Code from '../components/code'
import { Link } from 'react-router-dom'

export default ({ docsHeader }) => {
    return <>
        <Header docsHeader={docsHeader} />
        <div className="next-database-home-page next-database-animation" animation-name="fadeIn">
            <div className="home-information">
                <div className="information-left">
                    <h1 className="next-database-animation" animation-name="fadeInLeft">
                        next-database
                        <span className="next-database-animation" animation-name="fadeInLeft"
                            style={{ animationDelay: '.25s' }}>
                            v1.0.5
                        </span>
                    </h1>
                    <p className="next-database-animation" animation-name="fadeInLeft" style={{ animationDelay: '.25s' }}>
                        With next-database you can make queries to MySQL or PostgreSQL more easy
                    </p>
                    <div className="next-database-animation" animation-name="fadeInLeft" style={{ animationDelay: '.5s' }}>
                        <Code lang="sh" text="$ npm i next-database" noMargin={true} />
                    </div>
                    <Link to="/docs/getting-started" className="next-database-animation" animation-name="fadeInDown"
                        style={{ animationDelay: '1s' }}>
                        Getting Started
                    </Link>
                </div>
                <div className="information-right next-database-animation" animation-name="fadeInRight" animation-fast="">
                    <div className="information-image"></div>
                </div>
            </div>
        </div>
    </>
}