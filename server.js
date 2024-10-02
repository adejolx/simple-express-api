require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const personRoute = require("./routes/person.route");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/people", personRoute);

app.get("/", (_req, res) => {
  res.send("Hello world");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  })
  .catch("connection failed");
