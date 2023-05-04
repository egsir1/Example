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
const Account = require("./account");

const myAccount = new Account("Sam", 500000, 4571302458);
console.log(myAccount);
myAccount.checkBalance();
Account.tellTheTime();
Account.tellAboutClass();
myAccount.withdrawMoney(45000);
myAccount.giveDetails();
myAccount.makeDeposit(200000);
myAccount.withdrawMoney(700000);
