const unsubsRouter = require("express").Router();
const { google } = require("googleapis");

const sheets = google.sheets("v4");

const key = require("./../key.json");

const auth = new google.auth.GoogleAuth({
  credentials: key,
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

console.log(key);

async function writeEmail(email) {
  const client = await auth.getClient();

  const response = await sheets.spreadsheets.values.append({
    auth: client,
    spreadsheetId: "1oC8yPfq2_fWU7FV0q3PadSunM0uQ3iQFs-GJZnpHoqg",
    range: "Lista de apps!B1:D",
    valueInputOption: "RAW",
    requestBody: {
      range: "Lista de apps!B1:D",
      majorDimension: "COLUMNS",
      values: [["date"], [email]],
    },
  });
}
unsubsRouter.get("/unsubscribe", (req, res) => {
  res.status(200).send("You've been unsubscribed from Wedding Salon");
  // Process person's email and add it to the spreadsheet
});
unsubsRouter.get("/readsheet", async (req, res) => {
  res.status(200).send("sheet data logged");
});

unsubsRouter.get("/add", async (req, res) => {
  console.log(req.query.email);
  await writeEmail(req.query.email);
  res.status(200).send("you were unsubbed");
});

module.exports = unsubsRouter;
