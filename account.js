const moment = require("moment");

class Account {
  #amount;
  #account_id;
  constructor(name, amount, account_id) {
    this.name = name;
    this.#amount = amount;
    this.#account_id = account_id;
  }

  checkBalance() {
    console.log(`Your current balance : $ ${this.#amount}`);
  }

  withdrawMoney(sum) {
    if (this.#amount > sum) {
      this.#amount -= sum;
      console.log(
        `$ ${sum} withdrawn from your account and left $ ${this.#amount}`
      );
    } else {
      console.log("Your balance is not enough");
    }
  }
  makeDeposit(mon) {
    this.#amount += mon;
    console.log(
      `$ ${mon} added to the balance. Your current balance :  $ ${this.#amount}`
    );
  }
  giveDetails() {
    console.log(
      `Hello ${this.name}, your balance accounts for $ ${this.#amount}`
    );
    console.log(`Your account num is ${this.#account_id}`);
  }
  static tellAboutClass() {
    console.log("This class helps to create bank accounts");
  }
  static tellTheTime() {
    console.log(`Current time: ${moment().format("HH:MM:SS")}`);
  }
}

module.exports = Account;
