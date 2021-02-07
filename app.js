const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user_routes");
const project = require("./routes/project_routes");
const team = require("./routes/team_routes");
const InitiateMongoServer = require("./config/db");
var mongoose = require('mongoose')
const cors = require("cors");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT 
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);
/**
 * Router Middleware
 * Router - /project/*
 * Method - *
 */
app.use("/project", project);
/**
 * Router Middleware
 * Router - /team/*
 * Method - *
 */
app.use("/team", team);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});