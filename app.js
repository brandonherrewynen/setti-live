// index.js

/**
 * Required External Modules
 */
const express = require('express')
const path = require("path");
const favicon = require('serve-favicon');

/**
 * App Variables
*/
const app = express()
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "index/views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(__dirname + '/index/public/images/icon.ico'));

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
res.render("index", { title: "Home" });
});

/**
 * Server Activation
 */
app.listen(port, () => {
console.log(`setti-live listening at http://localhost:${port}`)
})



