const fs = require("fs"); //Core modules

// const random = Math.random(); // core variable

// setInterval(() => {
//   console.log("Hello");
// }, 1000);

fs.readFile("sample.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log("Fayl malumoti =>", data);
});
