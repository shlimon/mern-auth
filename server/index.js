const express = require("express");

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(PORT, () => {
  console.log(`SERVER STARTED AT ${PORT}`);
});
