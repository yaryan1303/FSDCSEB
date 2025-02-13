const { write } = require("fs");

const promise = require("fs").promises;
async function dataCopy() {
  const data = await promise.readFile("studentdata.json", "utf-8");
  await promise.writeFile("updateddata.json", data);
  console.log("Data copied successfully)");
}
module.exports = dataCopy;
