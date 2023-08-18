const unsubsRouter = require("express").Router();
const { google } = require("googleapis");

const sheets = google.sheets("v4");

const key = require("./../key.json");

const auth = new google.auth.GoogleAuth({
  credentials: key,
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

console.log(key);
async function readSheet() {
  const client = await auth.getClient();

  const response = await sheets.spreadsheets.values.get({
    auth: client,
    spreadsheetId: "1oC8yPfq2_fWU7FV0q3PadSunM0uQ3iQFs-GJZnpHoqg",
    range: "Lista de apps!A1:A5",
  });

  const rows = response.data.values;

  console.log(rows);
}
unsubsRouter.get("/unsubscribe", (req, res) => {
  res.status(200).send("You've been unsubscribed from Wedding Salon");
  // Process person's email and add it to the spreadsheet
});
unsubsRouter.get("/readsheet", async (req, res) => {
  try {
    await readSheet();
  } catch (err) {
    console.log(err);
  }

  res.status(200).send("sheet data logged");
});

module.exports = unsubsRouter;
