const express = require("express");
const unsubsRouter = require("./controllers/unsubs");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("hey world");
});

app.use("/api/", unsubsRouter);

app.listen(port, () => console.log("listening on port 3000..."));
