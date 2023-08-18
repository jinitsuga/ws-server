const calendarRouter = require("express").Router();

let callsList = "hotel 123, Jenni Parseghian";

calendarRouter.get("/check-calls", (req, res) => {
  res
    .status(200)
    .send(`a call with these clients happened in the last month: ${callsList}`);
});

module.exports = calendarRouter;
