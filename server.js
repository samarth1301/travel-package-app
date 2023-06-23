const express = require('express');
const path = require("path")
const dbConfig = require("./db");


//routes

const usersRoute = require("./routes/usersRoute");


const app = express()


app.use(express.json())



app.use("/api/users", usersRoute);



app.use(express.static(path.join(__dirname, './frontend/build')));
app.get('*', function(_, res){
    res.sendFile(
        path.join(__dirname, './frontend/build/index.html'),
        function(err) {
            res.status(500).send(err);
        }
    );
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Node server Started Using nodemon on port: ", port));