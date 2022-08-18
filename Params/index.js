const express = require("express")
const app = express();
const port = 3000;
// learning about req.params() that allows us to work with url that are passed to the route.

// syntax
app.get('/sanchit/:cars', (req, res) => {
    const {cars} = req.params;
    res.send(`Browsing Sanchit's ${cars}`)
})

app.get('/sanchit/:cars/:gradgeId', (req, res) => {
    const {cars, gradgeId} = req.params;
    res.send(`Browsing Sanchit's ${cars} with Gradge Id of ${gradgeId}`)
})

app.listen(port, () => {
    console.log("listining to the port 3000")
})