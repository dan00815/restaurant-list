const express = require("express");
const app = express();
const port = 3000;
const { engine } = require("express-handlebars");

//middleware
app.use(express.static("public"));
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.redirect("/restaurant");
});
app.get("/restaurant", (req, res) => {
  res.render("index");
});

app.listen(port, () => console.log("server is listening on port 3000"));
