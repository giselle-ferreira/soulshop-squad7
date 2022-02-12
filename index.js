require("dotenv/config");
require("./database");

const express = require("express");
const exprhbs = require("express-handlebars");
const handlebars = require("handlebars") // 

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exprhbs.engine());
app.set("view engine", "handlebars");


// ----
// const moment = require('moment'); 
// moment().format();

// handlebars.registerHelper('dateFormat', function (date, options) {
//     const formatToUse = (arguments[1] && arguments[1].hash && arguments[1].hash.format) || "DD/MM/YYYY"
//     return moment(date).format(formatToUse);
// });
// ----


const routes = require("./routes");
app.use(routes);

app.listen(3000);
