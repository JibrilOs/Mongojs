const express = require("express");
const app = express();
const routes = require("./routes");
require("dotenv").config();

app.use(express.json({ limit: "50mb" }));
app.use("/", routes);
//MongoDB connection
const mongoose = require('mongoose');
const mongoURL = `mongodb+srv://jibril:${process.env.password}@cluster0.qfs3j.mongodb.net/moviedb?retryWrites=true&w=majority`;
mongoose.connect(`${mongoURL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
const port = 3000;

app.listen(port,()=>console.log("Server listening on " +port))
