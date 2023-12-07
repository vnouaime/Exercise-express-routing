const express = require('express');
const functions = require('./functions')
const ExpressError = require('./expressError')

const app = express();

app.use(express.json());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/mean', function (req, res, next) {
    /*
    If there is no query string for nums or number is invalid, custom error class is thrown. 
    Otherwise, returns json object of operation and mean. 
    */

    try {
        if (req.query.nums === undefined) {
            throw new ExpressError("Please include numbers", 400)
        }

        let arrayNums = (req.query.nums).split(',')
        let mean = functions.mean(arrayNums)

        if (mean.isValid === false) {
            throw new ExpressError(`${mean.num} is not a valid number.`, 400)
        } else {
            return res.json({ operation: 'mean', value: mean });
        } 
    } catch (e) {
        next(e)
    }
})

app.get('/median', function (req, res, next) {
    /*
    If there is no query string for nums or number is invalid, custom error class is thrown. 
    Otherwise, returns json object of operation and median. 
    */

    try {
        if (req.query.nums === undefined) {
            throw new ExpressError("Please include numbers", 400)
        }
        let arrayNums = (req.query.nums).split(',')
        let median = functions.median(arrayNums)

        if (median.isValid === false) {
            throw new ExpressError(`${median.num} is not a valid number.`, 400)
        } else {
            return res.json({ operation: 'median', value: median })
        } 
    } catch (e) {
        next(e)
    }
})

app.get('/mode', function (req, res, next) {
    /* 
    If there is no query string for nums or number is invalid, custom error class is thrown. 
    Otherwise, returns json object of operation and mode.
    */

    try {
        if (req.query.nums === undefined) {
            throw new ExpressError("Please include numbers", 400)
        }

        let arrayNums  = (req.query.nums).split(',')
        let mode = functions.mode(arrayNums)
    
        if (mode.isValid === false) {
            throw new ExpressError(`${mode.num} is not a valid number.`, 400)
        } else {
            return res.json({ operation: 'mode', value: mode })
        }
    } catch (e) {
        next(e)
    } 
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404) 
    next(e)
})

app.use((error, req, res, next) => {
    let status = error.status || 500
    let message = error.msg 

    return res.status(status).json({
        error: {message, status}
    })
})

app.listen(3000, function () {
  console.log('App on port 3000');
})

