const fs=require('fs');

function dataWrite(){
fs.writeFileSync("data.text","Welcome to NodeJs",()=>{
  console.log("File created successfully");
})
}
function dataRead(){
fs.readFile("data.text","utf-8",(err,data)=>{

  if(err)
  {
    console.log(err);
    return;
  }

  console.log(data);
  console.log("File read successfully");
})
}
function appendfile(){
fs.appendFile("data.text","This is new data)", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Data appended successfully");
})
}

function unlink(){
fs.unlink("data.text",(err)=>{
  if(err)
  {
    console.log(err);
    return;
  }
  console.log("File deleted successfully");
})
}
module.exports={dataWrite,dataRead,appendfile,unlink};

