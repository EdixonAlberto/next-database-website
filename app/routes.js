import React from 'react'

const home = React.lazy(() => import('./pages/home')),
    whatIs = React.lazy(() => import('./pages/docs/whatIs')),
    gettingStarted = React.lazy(() => import('./pages/docs/gettingStarted')),
    mysqlUsage = React.lazy(() => import('./pages/docs/mysqlUsage')),
    postgresqlUsage = React.lazy(() => import('./pages/docs/postgresqlUsage')),
    queries = React.lazy(() => import('./pages/docs/queries')),
    insert = React.lazy(() => import('./pages/docs/insert')),
    _delete = React.lazy(() => import('./pages/docs/delete')),
    select = React.lazy(() => import('./pages/docs/select')),
    update = React.lazy(() => import('./pages/docs/update')),
    limit = React.lazy(() => import('./pages/docs/limit')),
    addColumns = React.lazy(() => import('./pages/docs/addColumns')),
    createTable = React.lazy(() => import('./pages/docs/createTable')),
    dropTable = React.lazy(() => import('./pages/docs/dropTable')),
    dropColumns = React.lazy(() => import('./pages/docs/dropColumns')),
    truncate = React.lazy(() => import('./pages/docs/truncate')),
    joins = React.lazy(() => import('./pages/docs/joins')),
    join = React.lazy(() => import('./pages/docs/join')),
    fullJoin = React.lazy(() => import('./pages/docs/fullJoin')),
    innerJoin = React.lazy(() => import('./pages/docs/innerJoin')),
    leftJoin = React.lazy(() => import('./pages/docs/leftJoin')),
    rightJoin = React.lazy(() => import('./pages/docs/rightJoin')),
    where = React.lazy(() => import('./pages/docs/where'))

export default {
    overview: [
        {
            link: "/",
            title: "Home",
            component: home,
            onlyMobile: true
        },
        {
            link: "/docs/what-is",
            title: "What is next-database?",
            component: whatIs
        },
        {
            link: "/docs/getting-started",
            title: "Getting Started",
            component: gettingStarted
        },
        {
            link: "/docs/mysql-usage",
            title: "Using with MySQL",
            component: mysqlUsage
        },
        {
            link: "/docs/postgresql-usage",
            title: "Usign with PostgreSQL",
            component: postgresqlUsage
        }
    ],
    Queries: [
        {
            link: "/docs/queries",
            title: "Overview",
            component: queries
        },
        {
            link: "/docs/insert",
            title: "Insert",
            component: insert
        },
        {
            link: "/docs/delete",
            title: "Delete",
            component: _delete
        },
        {
            link: "/docs/select",
            title: "Select",
            component: select
        },
        {
            link: "/docs/update",
            title: "Update",
            component: update
        },
        {
            link: "/docs/limit",
            title: "Limit",
            component: limit
        }
    ],
    Advanced: [
        {
            link: "/docs/add-columns",
            title: "Add Columns",
            component: addColumns
        },
        {
            link: "/docs/create-table",
            title: "Create Table",
            component: createTable
        },
        {
            link: "/docs/drop-table",
            title: "Drop Table",
            component: dropTable
        },
        {
            link: "/docs/drop-columns",
            title: "Drop Columns",
            component: dropColumns
        },
        {
            link: "/docs/truncate",
            title: "Truncate",
            component: truncate
        }
    ],
    Expert: [
        {
            link: "/docs/joins",
            title: "Overview",
            component: joins
        },
        {
            link: "/docs/join",
            title: "Join",
            component: join
        },
        {
            link: "/docs/full-join",
            title: "Full Join",
            component: fullJoin
        },
        {
            link: "/docs/inner-join",
            title: "Inner Join",
            component: innerJoin
        },
        {
            link: "/docs/left-join",
            title: "Left Join",
            component: leftJoin
        },
        {
            link: "/docs/right-join",
            title: "Right Join",
            component: rightJoin
        },
        {
            link: "/docs/where",
            title: "Where",
            component: where
        }
    ]
}