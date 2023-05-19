//Object Method
const raju = {
  firstName: "Raju",
  lastName: "Shorif",
  job: 'Teacher',//string value
  birthYear: 1991,
  friend:['Friend', 'Peter', 'Steven'],//array value
hasDriversLicense: true,// boolen value
calcAge: function () {
  this.age = 2037 - this.birthYear;
  return this.age;
},//function value(property of raju expression)

//challenge
//"Raju is a 23-year old teacher, and he has a driver's licnse"
getSummary: function() {

 return  `${this.firstName} is a ${this.calcAge()} -year old ${this.birthYear.job}, and he has ${this.hasDriversLicense ? 'a' : 'not'} driver's license.`
}
};
console.log( raju.calcAge(1991)); 
console.log(raju.getSummary()); 