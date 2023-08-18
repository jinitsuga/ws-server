const express = require("express");
const unsubsRouter = require("./controllers/unsubs");
const calendarRouter = require("./controllers/calendar");
const dotenv = require("dotenv").config();
const { google } = require("googleapis");

const sheets = google.sheets("v4");

const key = require("./key.json");

const app = express();

const port = 3000;

const auth2Client = new google.auth.OAuth2(
  process.env.client_id,
  process.env.client_secret,
  process.env.redirect_uri
);

const auth = new google.auth.GoogleAuth({
  credentials: key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

// const authUrl = auth2Client.generateAuthUrl({
//   access_type: "online",
// });

// console.log(auth);

app.use("/api/", unsubsRouter);
app.use("/api/", unsubsRouter);

app.listen(port, () => console.log("listening on port 3000..."));
