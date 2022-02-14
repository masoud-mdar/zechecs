const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();

const apiRoutes = require("./router/router");
const myDB = require("./db/connection");

app.use(express.json());
app.use(cors({origin: "*"}));

app.get("/", (req, res) => {
    res.send("Hello From the server");
})

myDB(async (client) => {
    const myDataBase = await client.db("zechecs").collection("mycollection");

    apiRoutes(app, myDataBase);

    //404 Not Found Middleware
    app.use(function(req, res, next) {
        res.status(404)
        .type('text')
        .send('Not Found');
    });


}).catch(e =>{
    console.log("Unable to connect to DB: " + e)
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})