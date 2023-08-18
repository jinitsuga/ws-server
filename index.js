const express = require("express");
const unsubsRouter = require("./controllers/unsubs");
const calendarRouter = require("./controllers/calendar");
const dotenv = require("dotenv").config();
const { google } = require("googleapis");

const app = express();

const port = 3000;

const auth2Client = new google.auth.OAuth2(
  process.env.client_id,
  process.env.client_secret,
  process.env.redirect_uri
);

// console.log(auth2Client);

const authUrl = auth2Client.generateAuthUrl({
  access_type: "online",
});


console.log(authUrl);

app.get("/", (req, res) => {
  res.status(200).send("hey world");
});

app.use("/api/", unsubsRouter);
app.use("/api/", calendarRouter);

app.listen(port, () => console.log("listening on port 3000..."));
