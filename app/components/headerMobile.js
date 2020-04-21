import React from 'react'
import { Link } from 'react-router-dom'

export default ({ active, docsHeader }) => {

    function getActive (page) {
        return document.location.pathname === page
    }

    return <ul className={`header-mobile ${active ? 'active' : ''}`}>
        <li>
            <ul>
                {Object.keys(docsHeader).map(title => <li key={`docs_${title.toLowerCase()}`}>
                    <span>{title}</span>

                    {docsHeader[title].length && <ul>
                        {docsHeader[title].map(subpage => <li className={getActive(subpage.link) ? 'active' : ''}
                            key={`docs_${subpage.title.toLowerCase()}`}><Link to={subpage.link}>
                            {subpage.title}
                        </Link></li>)}
                    </ul>}
                </li>)}
            </ul>
        </li>
        <li><a href="https://www.npmjs.com/package/next-database">
            View on NPM
        </a></li>
    </ul>

}