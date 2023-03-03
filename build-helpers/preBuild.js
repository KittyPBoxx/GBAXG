const fs = require("fs");

// Pull the data from the file.
fs.readFile("./dist/index.html", 'utf-8', function (err, data) {

  if (err) {
    return console.log(err);
  }

  data = data.replace("user_scripts/Compression/lzutf8.min.js", "https://cdn.jsdelivr.net/npm/lzutf8/build/production/lzutf8.min.js");

  // Replace the data in the file.
  fs.writeFile("./dist/build-index.html", data, () => {});
});