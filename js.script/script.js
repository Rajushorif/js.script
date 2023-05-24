// // Task 1: Create objects for mark Miller and john Smith
// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
// }
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.68,
// }
// //Task 2: Create calcBMI Method for each object
// mark.calcBMI = function() {
//     this.bmi= this.mass / (this.height * this.height);
//     return this.bmi;
// };
// john.calcBMI = function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return  this.bmi;
// };
// //Task 3: compare BMIs and log the result
// const markBMI = mark.calcBMI()
// const JohnBMI = john.calcBMI()
// if(markBMI > JohnBMI){
//     console.log(
//         `${mark.fullName}'s BMI ${markBMI} is higher than ${john.fullName}'s ${JohnBMI})!`
//     );
// } else if (JohnBMI > markBMI) {
//     console.log(`${john.fullName}'s BMI ${JohnBMI} is higher than ${mark.fullName}'s (${markBMI})`
//     );
// } else{
//     console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${markBMI})!`);    
// }


// challenge #4

const calcTip = function (bill){
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]; // bill array
tips = []; // empty array
totals = []; 
for (let i = 0; i < bills.length; i++){
  const tip = calcTip(bills[i]);
}; // for loop
tips.push(tip);
totals.push(tips + bill[i]);