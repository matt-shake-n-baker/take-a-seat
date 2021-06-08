const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const port = process.env.PORT || 3000;
const { db } = require('./db')


// some good ol' logging middleware
app.use(morgan("dev"));

// serving up some sweet static files
app.use(express.static(path.join(__dirname, "../public")));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mounting api
// app.use("/api", require("./api"));

app.use('/graphql', require("./graphql/schemas"));

// serve up index.html if api route doesn't match
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

const init = async () => {
    try {
        await db.sync({force:true});
        
        app.listen(port, function(){
            console.log('listening on port ', port)
        })
    } catch (error) {
        console.log('uh oh-> ', error)
    }
}
init()

