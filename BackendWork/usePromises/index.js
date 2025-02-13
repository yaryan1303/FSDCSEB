const {readFileAsync}=require("./FileOperation");
readFileAsync()
.then((data)=>{
  console.log(data);
});