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

const econimicReliefAllowance = 0.2;
let basicSalary:number;
let afterERASalary:number;
let totalSalary:number;

basicSalary = 150000;
afterERASalary = basicSalary * (1 + econimicReliefAllowance);

console.log(`Your total salary after ERA is -> ${afterERASalary}`);

let overTimeCal = (basicSalary:number, rosterPattern:number, otHours:number, otType:number) => {

    let perHourRate:number;
    perHourRate = basicSalary / (rosterPattern * 8);

    return (otHours * otType * perHourRate).toFixed(2);
}

console.log(`Your salary Overtime allowances is -> ${overTimeCal(basicSalary, 23, 16, 2)}`);
