function sum(num1,num2){
  return num1+num2;
}

const multiplication = (num1,num2) => num1*num2;

const division = (num1,num2) => num1/num2;

const obj={
  sum:sum,
  multiplication:multiplication,
  division:division

}

module.exports=obj;