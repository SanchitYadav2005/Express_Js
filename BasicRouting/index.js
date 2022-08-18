const express = require("express")
const app = express();
const port = 8080;

// creating route for home page.
// we can use any METHOD  on it including get, post, path and many more.
app.get("/", (req, res) => {
    console.log('get request for home page')
    res.send("hello from home page")
})
// creating route for name.
app.get('/sanchit', (req, res) => {
    console.log("get request for name page")
    res.send("Hello form Sanchit")
})

app.listen(port, () => {
    console.log("listening to port 8080")
})