var express = require('express')
var app = express()

const host = "localhost";
const port = 3000;

app.use(express.static('./static'));


app.listen(port, host, () => {
    console.log('reached the end');
})