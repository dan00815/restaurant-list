const express = require("express");
const app = express();
const port = 3000;
const { engine } = require("express-handlebars");
const restaurant = require("./public/json/restaurant.json").results;

//middleware
app.use(express.static("public"));
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.redirect("/restaurants");
});

app.get("/restaurants", (req, res) => {
  res.render("index", { restaurant });
});

app.get("/restaurants/:id", (req, res) => {
  const id = req.params.id; //string
  const selectedRestaurant = restaurant.find((item) => item.id === +id);
  res.render("selectedPage", { selectedRestaurant });
});

app.get("/sss", (req, res) => {
  res.send(restaurant);
});

app.listen(port, () => console.log("server is listening on port 3000"));
