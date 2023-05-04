//const fs = require("fs"); //Core modules

// const random = Math.random(); // core variable

// setInterval(() => {
//   console.log("Hello");
// }, 1000);

// fs.readFile("sample.txt", "utf8", function (err, data) {
//   if (err) throw err;
//   console.log("Fayl malumoti =>", data);
// });

// // externel
// const moment = require("moment");

// const time = moment().format("HH:mm:ss");
// console.log(time);
// const Account = require("./account");

// const myAccount = new Account("Sam", 500000, 4571302458);
// console.log(myAccount);
// myAccount.checkBalance();
// Account.tellTheTime();
// Account.tellAboutClass();
// myAccount.withdrawMoney(45000);
// myAccount.giveDetails();
// myAccount.makeDeposit(200000);
// myAccount.withdrawMoney(700000);

const express = require("express");
const app = express();

const http = require("http");

//1. init

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 session

//3

app.set("views", "views");
app.set("view engine", "ejs");

//4

app.get("/hello", function (req, res) {
  res.end("<h1>Hello World!</h1>");
});
app.get("/gift", function (req, res) {
  res.end("<h1>Gifts Page</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log("The server is running successfully on port ", PORT);
});
