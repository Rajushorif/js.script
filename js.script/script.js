// Task 1: Create objects for mark Miller and john Smith
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

    
