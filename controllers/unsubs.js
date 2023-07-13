const unsubsRouter = require("express").Router();

unsubsRouter.get("/unsubscribe", (req, res) => {
  res.status(200).send("You've been unsubscribed from Wedding Salon");
  // Process person's email and add it to the spreadsheet
});

module.exports = unsubsRouter;
