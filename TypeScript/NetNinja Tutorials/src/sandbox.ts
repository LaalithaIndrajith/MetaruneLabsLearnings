/* 
    Compiling Typescript
*/

const character = 'Aaron';

console.log(character);

const inputEls = document.querySelectorAll('input');

console.log(inputEls);

inputEls.forEach(inputEl => {
    console.log(inputEl);
})


/* 
    Basic Types in Typescript
*/

const economicReliefAllowance = 0.2;
let basicSalary:number;
let afterERASalary:number;
let totalSalary:number;

basicSalary = 150000;
afterERASalary = basicSalary * (1 + economicReliefAllowance);

console.log(`Your total salary after ERA is -> ${afterERASalary}`);

//Set the return type of the function
let overTimeCal = (basicSalary:number, rosterPattern:number, otHours:number, otType:number):number => {

    let perHourRate:number;
    perHourRate = basicSalary / (rosterPattern * 8);

    return (otHours * otType * perHourRate);
}
totalSalary = afterERASalary + overTimeCal(basicSalary, 23, 16, 2);
console.log(`Your salary Overtime allowances is -> ${overTimeCal(basicSalary, 23, 16, 2)}`);
console.log(`Your total Salary is -> ${totalSalary.toFixed(2)}`);

/* 
    Explicit Types
*/
let employeeNum: number;
let employeeID: string;
let isPermanent: boolean;

// Arrays
let monthlyIndividualIssueCountsArr : number[] = [];

for(let i = 0; i < 12; i++){
    let monthlyIssueCount: number = Math.floor(Math.random()*(50) + 5);
    monthlyIndividualIssueCountsArr.push(monthlyIssueCount);
}

console.log(monthlyIndividualIssueCountsArr);

//Tuple
let person:[number,string] = [120058.52, 'Software Engineer'];

console.log(person[0].toFixed(1));
console.log(person[1].toUpperCase());

//Enum
enum Size {ExtraSmall = 'xs', Small = 's', Medium = 'm', Large = 'l', ExtraLarge = 'xl'}
let tshirtSize : Size = Size.ExtraLarge;
console.log(`Your T-Shirt size is ${(tshirtSize.toUpperCase())}`);

//Objects
let employee: {
    organization: string,
    designation: string,
    team: string,
};

