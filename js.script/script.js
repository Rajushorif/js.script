//Task 1: Create objects for mark Miller and john Smith
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.68,
}
//Task 2: Create calcBMI Method for each object
mark.calcBMI = function() {
    this.bmi= this.mass / (this.height * this.height);
    return this.bmi;
};
john.calcBMI = function() {
    this.bmi = this.mass / (this.height * this.height);
    return  this.bmi;
};
//Task 3: compare BMIs and log the result
const markBMI = mark.calcBMI()
const JohnBMI = john.calcBMI()
if(markBMI > JohnBMI){
    console.log(
        `${mark.fullName}'s BMI ${markBMI} is higher than ${john.fullName}'s ${JohnBMI})!`
    );
} else if (JohnBMI > markBMI) {
    console.log(`${john.fullName}'s BMI ${JohnBMI} is higher than ${mark.fullName}'s (${markBMI})`
    );
} else{
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${markBMI})!`);    
}

// Looping Arrays Breaking and Continuing 
 const rajuArray = [
'Raju',
'Shorif',
2037- 1991,
'teacher',
['Mizan', 'Peter', 'John'],
 ];
 const types = [];
for (let i = 0; i < rajuArray.length; i++) { //looping for the element of rajuArray
    // Reading from rajuArray
    console.log(rajuArray[i],  typeof rajuArray[i]);
    // Filling types array
    // types[i] = typeof rajuArray[i];
    types.push( typeof rajuArray[i]);
}
//  types[0] = 'string';
console.log(types);
const years = [1991, 2007, 2020];
const age = [];
for (let i = 0; i < years.length; i++) {
    age.push(2037 - years[i])
}
console.log(age);

// contines and break 
console.log('--- ONLY STRING---');
for (let i = 0; i < rajuArray.length; i++) {
   if (typeof rajuArray[i] !== 'string') continue; {
    console.log(rajuArray[i], typeof rajuArray[i]);
   }
//    breaks
console.log('---Break with---');
for (let i = 0; i < rajuArray.length; i++) {
   if (typeof rajuArray[i] === 'number') break; {
    console.log(rajuArray[i], typeof rajuArray[i]);
   }
    
}

// Looping backward and Loops in loops
const rajArr = [
    'Raju',
    'Shorif',
    2037- 1991,
    'teacher',
    ['Mizan', 'Peter', 'John'],
     ];
    //  Reverse looping
     for (let i = rajArr.length; i  >= 0 ; i--) {
     console.log(i, rajArr[i]);
      
     };
        //  Loop inside loop
     for (let exercise = 1; exercise >= 3; exercise++) {
        console.log(`-----Starting Exercise ${exercise}-----`);
       
        for (let  rep = 0; rep < 6 ; rep++) {
         console.log(`Exercise: ${exercise}Lifting weight repetation 🏋🏼‍♂️`);
        }
     }
//for loop example for better understand while loop
for (let rep = 0; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
// While loop
let rep = 5; // the number to loop 
while (rep < 6)// condition
 {
    console.log(`Lifting weights repetition ${rep}`);
rep++; //statement 
}

//  challenge #4

const calcTip = function (bill){
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]; // bill array
tips = []; // empty array
totals = []; 
for (let i = 0; i < bills.length; i++){
  const tip = calcTip(bills[i]);
    tips.push(tip);
totals.push(tip + bills[i]);
}
console.log('tips, bill, totals');
}