console.log("Hello World");
let a = 12;
let b = "12";

console.log(typeof b);

let today = new Date();
console.log(today);

if (a == b) {
  console.log("Welcome");
}

if (a === b) {
  console.log("Welcome again");
} else {
  console.log("Welcome to ===");
}

let an = "aryan";
let bn = "yadav";

let res = `Hi my first name is ${an} and lastname ${bn}`;
console.log(res);

const student = [
  {
    name: "Amit",
    course: "B.Tech",
    college: "ABES EC",
  },
  {
    name: "aryan yadav",
    course: "B.Tech",
    college: "ABES EC",
  },
];

// console.log(`${student.name} ${student['course']} ${student.college}`);

// let {name,course}=student;
// console.log(name,course);

// student['name']="aryan"
console.log(student[1].college, student[1].name);

function greeting(msg = "Everyone") {
  console.log(`Hello ${msg}`);
}

greeting("aryan");
greeting();

let sum = (a, b) => a + b;

console.log(sum(4, 5));

let su = (...args) => {
  return args.reduce((total, num) => total + num, 0);
};

console.log(su(2, 3, 4, 5, 6, 67, 77, 77, 34, 333, 333, 33, 333, 333));

function cCompiler() {
  console.log("C Compiler");
}

function JCompiler() {
  return "Java Compiler";
}

function SelectLangauge(lan) {
  let data;
  if (lan == "java") {
    function cCompiler() {
      return "C Compiler";
    }
    data=cCompiler();
  }
  if (lan = "c") {
    function JCompiler() {
      return "Java Compiler";
    }
    data=JCompiler();
  }

  return data;
}

console.log(SelectLangauge('java'));
// SelectLangauge();
