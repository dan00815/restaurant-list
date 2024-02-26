# 美食網

---

一個使用 Node.js + Express.js 搭配 Handlebars 作為 template engine 的美食網站，可以在應用程式中查看各間餐廳的資訊

## Features - 產品功能

---

1. 在首頁查看各家餐廳及其類別、評分、圖片
2. 點選有興趣的餐廳可以查看更多資訊，包含類別、餐廳地址(附上 google map)、電話及店家詳細介紹
3. 於首頁處能依照以下關鍵字的種類搜尋餐廳

- 餐廳名稱
- 餐廳類別
- 地址
- 店家詳細介紹的內容

## Installing - 專案安裝

1. 打開終端機(terminal)，clone 該專案至本機電腦

```
git clone https://github.com/dan00815/restaurant-list.git
```

2. 打開 terminal 到存放此專案的資料夾

```
cd restaurant-list
```

3.安裝 npm 套件，在 terminal 中輸入 npm install

```
npm install
```

4.執行專案

```
npm run start
```

終端機顯示`server is listening on port 3000`代表啟動完成，請至[http://localhost:3000](http://localhost:3000)開始使用應用程式

## Screen Photo 專案畫面

## ![home](https://github.com/dan00815/restaurant-list/blob/main/public/img/home.jpg)

## ![search](https://github.com/dan00815/restaurant-list/blob/main/public/img/search.jpg)

## ![page](https://github.com/dan00815/restaurant-list/blob/main/public/img/page.jpg)

## Tools 使用工具

- Express - 4.18.2
- Handlerbars - 7.1.2
