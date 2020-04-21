import React from 'react'
import { Route } from 'react-router-dom'
import DocsContent from '../components/docsContent'
import GettingStarted from './docs/gettingStarted'
import MySQLUsage from './docs/mysqlUsage'
import PostgreSQLUsage from './docs/postgresqlUsage'

export default ({ docsHeader }) => {

    return <DocsContent docsHeader={docsHeader}>
        <Route path="/docs/getting-started" component={GettingStarted} />
        <Route path="/docs/mysql-usage" component={MySQLUsage} />
        <Route path="/docs/postgresql-usage" component={PostgreSQLUsage} />
    </DocsContent>

}