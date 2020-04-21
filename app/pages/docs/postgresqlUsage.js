import React from 'react'
import Code from '../../components/code'
import DocsLinks from '../../components/docsLinks'

export default () => {
    return <>
        <h1>Using with PostgreSQL</h1>
        <Code title="index.js" lang="javascript" noMargin={true} text={
            "const nextDatabase = require('next-database');\r\n\r\n" +
            "const database = new nextDatabase({\r\n" +
            "   type: 'postgres',\r\n" +
            "   host: 'localhost',\r\n" +
            "   port: 5432,\r\n" +
            "   user: 'postgres',\r\n" +
            "   password: '',\r\n" +
            "   database: 'next-database',\r\n" +
            "   ssl: false\r\n" +
            "});\r\n\r\n" +
            "try {\r\n" +
            "   await database.connect();\r\n" +
            "   console.log('PostgreSQL connected!');\r\n" +
            "}\r\n" +
            "catch (error) {\r\n" +
            "   console.error(error);\r\n" +
            "}"
        } />
        
        <DocsLinks back={{ title: 'Using with MySQL', link: 'mysql-usage' }}
            forward={{ title: 'Queries', link: 'queries' }} />
    </>
}