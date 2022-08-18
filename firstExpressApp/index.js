// importing express.

const express = require("express");
// defining express function to a variable.
const app = express();
// adding a port to run the server.
const port = 3000;
//Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
// app.use()
app.use(function handeler(){
    console.log("reloded the")
})
//Binds and listens for connections on the specified host and port. app.listen()
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})