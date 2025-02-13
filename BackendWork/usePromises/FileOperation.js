const promise = require("fs").promises;
const data = promise.writeFile("data.txt", "Hello World ");
data
  .then(() => {
    console.log("File created successfully");
  })
  .catch((err) => {
    console.log(err);
  });
console.log(data);

function readFileAsync() {
  return promise.readFile("data.txt", { encoding: "utf-8" });
}
readFileAsync()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = { readFileAsync };
