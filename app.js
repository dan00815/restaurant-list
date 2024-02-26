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
  const keyword = req.query.keyword?.trim().toLowerCase(); //string

  const searchResult = keyword
    ? restaurant.filter((item) =>
        Object.keys(item).some((keyproperty) => {
          if (
            keyproperty === "name" ||
            keyproperty === "category" ||
            keyproperty === "location" ||
            keyproperty === "description"
          ) {
            // console.log(item[keyproperty]);
            return item[keyproperty].toLowerCase().includes(keyword);
          }
          return false;
        })
      )
    : restaurant;
  //關鍵字搜尋，希望用戶可以從除了店名以外的地方搜尋到，但又希望就實際體驗來看，只能從點進去的頁面中所見的資訊(名字、類別、地址、詳細介紹)這些文字中搜尋

  //找不到搜尋結果
  if (!searchResult.length) {
    res.render("search-failed", { keyword });
    return;
  }

  res.render("index", { restaurant: searchResult, keyword });
});

app.get("/restaurants/:id", (req, res) => {
  const id = req.params.id; //string
  const selectedRestaurant = restaurant.find((item) => item.id === +id);
  res.render("selectedPage", { selectedRestaurant });
});

app.listen(port, () => console.log("server is listening on port 3000"));
