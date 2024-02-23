const express = require("express");
const app = express();
const port = 3000;

//middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/restaurant");
});
app.get("/restaurant", (req, res) => {
  res.send("首頁");
});

app.listen(port, () => console.log("server is listening on port 3000"));
