(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{234:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(27),o=t(29),c=t(28),m=t(11);a.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Drop Columns"),l.a.createElement("p",null,"With this method you can delete one or more columns of a table in your database"),l.a.createElement(r.a,{lang:"javascript",text:"database.dropColumns(table: string) : nextDatabase.DropColumns"}),l.a.createElement("p",null,l.a.createElement("b",null,"IMPORTANT")," To run the query you must use",l.a.createElement(m.b,{to:"/docs/queries/execute"},"Execute")," method"),l.a.createElement("h2",{id:"single"},"Single drop columns"),l.a.createElement("p",null,"Drop one column of a table"),l.a.createElement(r.a,{lang:"javascript",text:"database.dropColumns(table: string).column(column: string) : nextDatabase.DropColumns"}),l.a.createElement("h3",null,"Example"),l.a.createElement(r.a,{lang:"javascript",text:"database.dropColumns('users').dropColumns('id');"}),l.a.createElement("p",null,"It is equivalent to"),l.a.createElement(r.a,{lang:"sql",text:"ALTER TABLE 'users' DROP COLUMN 'id';"}),l.a.createElement("h2",{id:"multiple"},"Multiple drop columns"),l.a.createElement("p",null,"Drop two or more columns of a table"),l.a.createElement(r.a,{lang:"javascript",text:"database.dropColumns(table: string).columns(columns: string[]) : nextDatabase.DropColumns"}),l.a.createElement("h3",null,"Example"),l.a.createElement(r.a,{lang:"javascript",text:"database.dropColumns('users').columns([ 'id', 'username' ]);"}),l.a.createElement("p",null,"It is equivalent to"),l.a.createElement(r.a,{lang:"sql",text:"ALTER TABLE 'users' DROP COLUMN 'id', DROP COLUMN 'username';"}),l.a.createElement(o.a,{execute:!0}),l.a.createElement(c.a,{back:{title:"Drop Table",link:"drop-table"},forward:{title:"Truncate Query",link:"truncate"}}))}},27:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(30),o=t.n(r);a.a=function(e){return l.a.createElement("div",{className:"next-database-code ".concat(e.noMargin?"no-margin":"")},e.title&&l.a.createElement("div",{className:"code-header"},l.a.createElement("span",null,e.title),e.lang&&l.a.createElement("div",{className:"header-language"},e.lang)),l.a.createElement(o.a,{language:"language-".concat(e.lang)},e.text))}},28:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(11);a.a=function(e){var a=e.back,t=e.forward;return l.a.createElement("div",{className:"docs-links"},a&&l.a.createElement(r.b,{to:"/docs/".concat(a.link)},l.a.createElement("img",{src:"/assets/images/icons/back-arrow.svg",alt:a.title,className:"left"}),a.title),t&&l.a.createElement(r.b,{to:"/docs/".concat(t.link)},t.title,l.a.createElement("img",{src:"/assets/images/icons/forward-arrow.svg",alt:t.title,className:"right"})))}},29:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(11);a.a=function(e){var a=e.asJoin,t=e.onJoin,n=e.usingJoin,o=e.limit,c=e.where,m=e.execute;return l.a.createElement(l.a.Fragment,null,a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"as"},"As"),l.a.createElement("p",null,"Readt the",l.a.createElement(r.b,{to:"/docs/joins/as"},"Expert Overview")," for more information")),t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"on"},"On"),l.a.createElement("p",null,"Readt the",l.a.createElement(r.b,{to:"/docs/joins/on"},"Expert Overview")," for more information")),n&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"using"},"As"),l.a.createElement("p",null,"Readt the",l.a.createElement(r.b,{to:"/docs/joins/using"},"Expert Overview")," for more information")),o&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"limit"},"Limit"),l.a.createElement("p",null,"Read the",l.a.createElement(r.b,{to:"/docs/limit"},"Limit")," docs for more information")),c&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"where"},"Where"),l.a.createElement("p",null,"Read the",l.a.createElement(r.b,{to:"/docs/where"},"Where")," docs for more information")),m&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"execute"},"Execute"),l.a.createElement("p",null,"Read the",l.a.createElement(r.b,{to:"/docs/queries/execute"},"Queries Overview")," for more information")))}}}]);