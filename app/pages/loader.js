import React from 'react'

export default () => {
    return <div className="next-database-loader">
        <div className="loader-spinner">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="loader-text next-database-animation" animation-name="pulse"
            animation-infinite="">
            Loading...
        </div>
    </div>
}