const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json({ limit: "50mb" }));
app.use("/", routes);
//MongoDB connection
const mongoose = require('mongoose');
const mongoURL ="mongodb+srv://jibril:TBjoshua23@cluster0.qfs3j.mongodb.net/moviedb?retryWrites=true&w=majority";
mongoose.connect(mongoURL, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
const port = 3000;

app.listen(port,()=>console.log("Server listening on " +port))
