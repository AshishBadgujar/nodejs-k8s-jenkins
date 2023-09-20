const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    console.log("hello world")
    return res.send("Hello world");
})

app.listen(PORT, (err) => {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})