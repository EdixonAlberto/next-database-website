(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{223:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(27),c=t(28);a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Using with MySQL"),r.a.createElement(s.a,{title:"index.js",lang:"javascript",noMargin:!0,text:"const nextDatabase = require('next-database');\r\n\r\nconst database = new nextDatabase({\r\n   type: 'mysql',\r\n   host: 'localhost',\r\n   port: 3306,\r\n   user: 'root',\r\n   password: ''\r\n   database: 'next-database',\r\n   ssl: false\r\n});\r\n\r\ntry {\r\n   database.connect();\r\n   console.log('MySQL connected!');\r\n}\r\ncatch (error) {\r\n   console.error(error);\r\n}"}),r.a.createElement(c.a,{back:{title:"Getting Started",link:"getting-started"},forward:{title:"Using with PostgreSQL",link:"postgresql-usage"}}))}},27:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(30),c=t.n(s);a.a=function(e){return r.a.createElement("div",{className:"next-database-code ".concat(e.noMargin?"no-margin":"")},e.title&&r.a.createElement("div",{className:"code-header"},r.a.createElement("span",null,e.title),e.lang&&r.a.createElement("div",{className:"header-language"},e.lang)),r.a.createElement(c.a,{language:"language-".concat(e.lang)},e.text))}},28:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(11);a.a=function(e){var a=e.back,t=e.forward;return r.a.createElement("div",{className:"docs-links"},a&&r.a.createElement(s.b,{to:"/docs/".concat(a.link)},r.a.createElement("img",{src:"/assets/images/icons/back-arrow.svg",alt:a.title,className:"left"}),a.title),t&&r.a.createElement(s.b,{to:"/docs/".concat(t.link)},t.title,r.a.createElement("img",{src:"/assets/images/icons/forward-arrow.svg",alt:t.title,className:"right"})))}}}]);