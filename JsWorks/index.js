// console.log("Hello World");
// let a = 12;
// let b = "12";

// console.log(typeof b);

// let today = new Date();
// console.log(today);

// if (a == b) {
//   console.log("Welcome");
// }

// if (a === b) {
//   console.log("Welcome again");
// } else {
//   console.log("Welcome to ===");
// }

// let an = "aryan";
// let bn = "yadav";

// let res = `Hi my first name is ${an} and lastname ${bn}`;
// console.log(res);

// const student = [
//   {
//     name: "Amit",
//     course: "B.Tech",
//     college: "ABES EC",
//   },
//   {
//     name: "aryan yadav",
//     course: "B.Tech",
//     college: "ABES EC",
//   },
// ];

// // console.log(`${student.name} ${student['course']} ${student.college}`);

// // let {name,course}=student;
// // console.log(name,course);

// // student['name']="aryan"
// console.log(student[1].college, student[1].name);

// function greeting(msg = "Everyone") {
//   console.log(`Hello ${msg}`);
// }

// greeting("aryan");
// greeting();

// let sum = (a, b) => a + b;

// console.log(sum(4, 5));

// let su = (...args) => {
//   return args.reduce((total, num) => total + num, 0);
// };

// console.log(su(2, 3, 4, 5, 6, 67, 77, 77, 34, 333, 333, 33, 333, 333));

// function cCompiler() {
//   console.log("C Compiler");
// }

// function JCompiler() {
//   return "Java Compiler";
// }

// function SelectLangauge(lan) {
//   let data;
//   if (lan == "java") {
//     function cCompiler() {
//       return "C Compiler";
//     }
//     data=cCompiler();
//   }
//   if (lan = "c") {
//     function JCompiler() {
//       return "Java Compiler";
//     }
//     data=JCompiler();
//   }

//   return data;
// }

// console.log(SelectLangauge('java'));
// // SelectLangauge();
// const l =document.querySelector(".parent");
// console.log(l);
// // l.innerText='Hello world how are you all';

// const h=document.createElement("h3");
// console.log(h);
// h.style.backgroundColor="blue";
// h.style.fontSize='33px';
// h.innerText="ABES Enginerring College";

// l.appendChild(h);

// const img=document.createElement("img");
// img.src="img/img1.jpg";
// img.setAttribute("height","200px");
// img.setAttribute("width","200px");

// l.remove(img);

// l.appendChild(img);

// const b=document.querySelector(".btn");

// console.log(b);
//  function getData()
//  {
//     l.innerHTML="<h1>hi this is btn data</h1>";
//  }

//  b.addEventListener("click",getData);

//  const promise=new Promise((resolve,reject)=>{
//     let a=15;
//     if(a>10)
//     {
//       resolve("Accepted");
//     }
//     else{
//       reject("Not Accepted");
//     }


//  })

//  promise.then((msg)=>{
//   console.log(msg);
//  })
//  .catch((error)=>{
//   console.log("error");
//  })

//  const promise2=new Promise((resolve,reject)=>{
  
//     resolve({name:"aryan",prof:"student"});


// })

// promise2.then((msg)=>{
//   console.log(msg.name);
//  })
//  .catch((error)=>{
//   console.log("error");
//  })

const response=fetch("https://dummyjson.com/products");

response.then((msg)=>{
    console.log(msg);
   })
   .catch((error)=>{
    console.log("error");
   })

