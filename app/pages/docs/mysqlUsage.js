import React from 'react'
import Code from '../../components/code'
import DocsLinks from '../../components/docsLinks'

export default () => {
    return <>
        <h1>Using with MySQL</h1>
        <Code title="index.js" lang="javascript" noMargin={true} text={
            "const nextDatabase = require('next-database');\r\n\r\n" +
            "const database = new nextDatabase({\r\n" +
            "   type: 'mysql',\r\n" +
            "   host: 'localhost',\r\n" +
            "   port: 3306,\r\n" +
            "   user: 'root',\r\n" +
            "   password: ''\r\n" +
            "   database: 'next-database',\r\n" +
            "   ssl: false\r\n" +
            "});\r\n\r\n" +
            "try {\r\n" +
            "   database.connect();\r\n" +
            "   console.log('MySQL connected!');\r\n" +
            "}\r\n" +
            "catch (error) {\r\n" +
            "   console.error(error);\r\n" +
            "}"
        } />
        
        <DocsLinks back={{ title: 'Getting Started', link: 'getting-started' }}
            forward={{ title: 'Using with PostgreSQL', link: 'postgresql-usage' }} />
    </>
}