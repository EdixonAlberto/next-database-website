import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderMobile from './headerMobile'

export default ({ docsHeader }) => {

    function getActive (page) {
        return document.location.pathname === page
    }

    const [menuActive, setMenuActive] = useState(false)

    return <div className="next-database-header">
        <h1 className="header-title">
            <img src="/assets/images/icons/database.svg" alt="next-database" />
            next-database
        </h1>
        <div className="header-toggle" onClick={() => setMenuActive(!menuActive)}>
            <img src="/assets/images/icons/menu.svg" alt="" />
        </div>
        <HeaderMobile active={menuActive} docsHeader={docsHeader} setActive={setMenuActive} />
        <ul className={`header-nav ${menuActive ? 'active' : ''}`}>
            <li className={getActive('/') ? 'active' : ''}><Link to="/">
                Home
            </Link></li>
            <li className={getActive('/docs/getting-started') ? 'active' : ''}><Link to="/docs/getting-started">
                Getting started
            </Link></li>
            <li className={getActive('/docs/what-is') ? 'active' : ''}><Link to="/docs/what-is">
                Docs
            </Link></li>
            <li><a href="https://www.npmjs.com/package/next-database">
                View on NPM
            </a></li>
        </ul>
    </div>

}