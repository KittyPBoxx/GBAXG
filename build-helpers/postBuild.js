const fs = require("fs");

// Pull the data from the file.
fs.readFile("./build/build-index.html", 'utf-8', function (err, data) {

  if (err) {
    return console.log(err);
  }


  // Replace the data in the file.
  fs.writeFile("./build/index.html", data, () => {});
  fs.unlinkSync("./dist/build-index.html");
  fs.unlinkSync("./build/build-index.html");
});