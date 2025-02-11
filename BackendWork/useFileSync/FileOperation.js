const fs = require("fs");

function dataWrite() {
  try {
    fs.writeFileSync("data.txt", "Hello World");
    console.log("Data written successfully");
  } catch (err) {
    console.log(err);
  }
}

function dataRead() {
  try {
    const rf = fs.readFileSync("data.txt", "utf-8");
    console.log(rf);
    console.log("Data read successfully");
  } catch (err) {
    console.log(err);
  }
}

function dataAppend() {

fs.appendFileSync("data.txt", "This is new next in data file)");
}

function unlink(){
fs.unlinkSync("data.txt");
console.log("File deleted successfully")
}


module.exports = { dataWrite, dataRead ,dataAppend,unlink};
