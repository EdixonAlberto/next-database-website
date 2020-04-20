/**
 * Copyright (c) Daniel Solarte Chaverra
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * @format
 */

import React from 'react'

export default () => {
    return <div className="danielsolarte-error-page">
        <div className="title danielsolarte-animation" animation-name="fadeInUp" style={{ animationDelay: '.5s' }}>
            Error
        </div>
        <div className="type danielsolarte-animation" animation-name="zoomIn">
            404
        </div>
        <div className="subtitle danielsolarte-animation" animation-name="fadeInDown" style={{ animationDelay: '.25s' }}>
            Page not found
        </div>
        <div className="message danielsolarte-animation" animation-name="fadeIn" style={{ animationDelay: '.5s' }}>
            <a href="https://www.danielsolartech.com/">Click here</a> to go to the principal page
        </div>
    </div>
}