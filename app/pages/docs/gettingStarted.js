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
import DocsLinks from '../../components/docsLinks'

export default () => {

    return <>
        <h1>Getting Started</h1>
        <p>
            In this page you learn to install <b>next-database</b> and a little introduction to it. First, you need have 
            <a href="https://nodejs.org/en/" target="_blank">Node.js</a> in your computer and then run the following command:
        </p>
        <Code lang="sh" text="$ npm i next-database" />

        <h2>How to use</h2>
        <p>First, create a new file called <span>index.js</span> and put the next lines in it</p>
        <Code lang="javascript" title="index.js" text={"const nextDatabase = require('next-database');\r\n\r\n" +
            "// Making a connection to MySQL\r\n" +
            "const database = new nextDatabase({\r\n" +
            "    type: 'mysql',\r\n" +
            "    host: 'localhost',\r\n" +
            "    port: 3306,\r\n" +
            "    user: 'root',\r\n" +
            "    password: '',\r\n" +
            "    database: 'next-database'\r\n" +
            "});"} />

        <DocsLinks back={{ title: 'What is next-database?', link: 'what-is' }}
            forward={{ title: 'Using with MySQL', link: 'mysql-usage' }} />
    </>

}