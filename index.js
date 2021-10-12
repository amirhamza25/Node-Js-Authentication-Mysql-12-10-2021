const express = require("express");
var morgan = require('morgan');
const app = express();
const cors = require("cors");

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({
  extended: true
})) // for parsing application/x-www-form-urlencoded
require('dotenv').config()
app.use(morgan('common'));
app.use(cors());
const db = require("./models");
const router = require("./router/router");
app.get("/", (req, res) => {
  res.send("hello");
})

app.use(router);

const Port = "4000";


db.sequelize.sync().then(() => {
  app.listen(Port, () => {
    console.log("Server running on port 4000");
  });
});