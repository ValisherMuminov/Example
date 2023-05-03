// Module Package lar 3xil

// 1 Module Package CORE

// setTimeout(function () {
//     console.log("ishga tushdi");
// }, 1000);

// let number = 0;
// setInterval(function () {
//     console.log("hisob", number);
//     number++;
// }, 1000);

// const fs = require('fs');
// const data = fs.readFileSync('./input.txt', 'utf8');
// console.log(data);

// console.log("===================");

// fs.writeFileSync("./input.txt", `${data} \n\t\t\t by Belli`);
// const new_data = fs.readFileSync("./input.txt", "utf8");
// console.log(new_data);

// 2 Module Package EXTERNAL
//const moment = require('moment');
//const time = moment().format();
//const time = moment().format('YYYY-MM-DD');
//console.log(time);

// const moment = require('moment');
// setInterval(() => {
//    const time = moment().format();
//    console.log(time);
// }, 5000);

// const inquirer = require("inquirer");
// inquirer
//   //.createPromptModule([])
//   .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting?" }])
//   .then((answer) => {
//     console.log("man kiritgan raqam qiymati:", answer.raqam);
//   })
//   .catch((err) => console.log(err))

// const validator = require("validator");
// //const test = validator.isEmail("foo@bar.com"); true
// const test = validator.isEmail("foobar.com"); false
// console.log("test:", test);

// const { v4: uuidv4 } = require("uuid");
// const random = uuidv4();
// console.log("random:", random);

// const chalk = require("chalk");
// const log = console.log;
// log(chalk.blue("Hello") + random + chalk.red("end"));

// 3 Module Package FILE
// const calculate = require('./hisob.js');
// const natija = calculate.kopaytirish(80, 20);
// console.log("natija:", natija);
// console.log("====================");
// const natija1 = calculate.qoshish(80, 20);
// console.log("natija:", natija1);
// console.log("====================");
// const natija2 = calculate.ayirish(80, 20);
// console.log("natija:", natija2);
// console.log("====================");
// const natija3 = calculate.bolish(80, 20);
// console.log("natija:", natija3);

//console.log(require("module").wrapper);
//->'(function (exports, require, module, __filename, __dirname) { ','\n});' shuyerdan kelyabdi
//console.log(arguments);
      //'C:\\Users\\a\\Desktop\\testt\\node_modules',
      //'C:\\Users\\a\\Desktop\\node_modules',
      //'C:\\Users\\a\\node_modules',
      //'C:\\Users\\node_modules',
      //'C:\\node_modules
const Account = require("./accaunt");
Account.telMeAboutClass();
Account.telMeTime();
const myAccount = new Account('Belli', 200000, 1122330011);
myAccount.giveMeDetails();
myAccount.makeDeposit(1000000);
// Bugatti chiron
//myAccount.withdrawMoney(2000000);
myAccount.withdrawMoney(40000);
myAccount.makeDeposit(2000000);
myAccount.withdrawMoney(3100000);
