/**
 * Copyright (c) Daniel Solarte Chaverra
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * @format
 */

import dotenv from 'dotenv'
import Express from 'express'
import path from 'path'
import fs from 'fs'
import nodeSass from 'node-sass'

// Initialize the dotenv
dotenv.config()

// Initialize the express server
const app = Express()

// Paths
const publicPath = path.join(__dirname, '../public')
const scssPath = path.join(__dirname, './scss')

// Static files
app.use('/assets', Express.static(publicPath + '/assets'))

// Route
app.get('*', (req, res) => {
    if (process.env.NODE_ENV == 'development') {
        try {
            const input = scssPath + '/general.scss', inputPath = fs.statSync(input)
            if (!inputPath.isFile())
                throw 'The input file does not exist'

            const output = publicPath + '/assets/stylesheets/style.min.css', outputPath = fs.statSync(output)
            if (!outputPath.isFile())
                throw 'The output file does not exist'

            const result = nodeSass.renderSync({
                file: input,
                outputStyle: 'compressed',
                sourceMap: false
            })

            fs.writeFileSync(output, result.css)
        } catch (error) {
            return res.send(`An error was ocurred with SASS: ${error}`)
        }
    }

    res.sendFile(publicPath + '/index.html')
})

// listen app
const port: number = Number(process.env.PORT) || 443
app.listen(port)
console.log(`Server initialize on :${port}`)