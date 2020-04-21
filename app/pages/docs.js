import React from 'react'
import { Route } from 'react-router-dom'
import DocsContent from '../components/docsContent'
import WhatIs from './docs/whatIs'
import GettingStarted from './docs/gettingStarted'
import MySQLUsage from './docs/mysqlUsage'
import PostgreSQLUsage from './docs/postgresqlUsage'
import Queries from './docs/queries'
import Insert from './docs/insert'
import Delete from './docs/delete'
import Select from './docs/select'
import Update from './docs/update'
import Limit from './docs/limit'
import AddColumns from './docs/addColumns'
import Create from './docs/create'
import Drop from './docs/drop'
import DropColumns from './docs/dropColumns'
import Truncate from './docs/truncate'
import Joins from './docs/joins'
import Join from './docs/join'
import InnerJoin from './docs/innerJoin'
import LeftJoin from './docs/leftJoin'
import RightJoin from './docs/rightJoin'
import Where from './docs/where'

export default ({ docsHeader }) => {

    return <DocsContent docsHeader={docsHeader}>
        <Route path="/docs/what-is" component={WhatIs} />
        <Route path="/docs/getting-started" component={GettingStarted} />
        <Route path="/docs/mysql-usage" component={MySQLUsage} />
        <Route path="/docs/postgresql-usage" component={PostgreSQLUsage} />

        <Route path="/docs/queries" component={Queries} />
        <Route path="/docs/insert" component={Insert} />
        <Route path="/docs/delete" component={Delete} />
        <Route path="/docs/select" component={Select} />
        <Route path="/docs/update" component={Update} />
        <Route path="/docs/limit" component={Limit} />

        <Route path="/docs/add-columns" component={AddColumns} />
        <Route path="/docs/create" component={Create} />
        <Route path="/docs/drop" component={Drop} />
        <Route path="/docs/drop-columns" component={DropColumns} />
        <Route path="/docs/truncate" component={Truncate} />

        <Route path="/docs/joins" component={Joins} />
        <Route path="/docs/join" component={Join} />
        <Route path="/docs/inner-join" component={InnerJoin} />
        <Route path="/docs/left-join" component={LeftJoin} />
        <Route path="/docs/right-join" component={RightJoin} />
        <Route path="/docs/where" component={Where} />
    </DocsContent>

}