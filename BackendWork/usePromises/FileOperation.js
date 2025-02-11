const promise=require("fs").promises;
const data=promise.writeFile("data.txt","Hello World ");
data.then(()=>{
  console.log("File created successfully");
}).catch((err)=>{
  console.log(err);
})
console.log(data);