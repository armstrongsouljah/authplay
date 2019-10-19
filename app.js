const express = require('express');
const app = express()
const passport = require('passport')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.listen(8081, () => {
    console.log('server running')
})