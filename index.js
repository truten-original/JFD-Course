const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0; // присваиваем значение равное 0
                
for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
   const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
   console.log(salaryWithTax, totalJuniorDevelopersSalary) // salaryWithTax считается корректно и возвращает число, а totalJuniorDevelopersSalary возвращает udefined, соответственно число + underfined = NaN
   totalJuniorDevelopersSalary += salaryWithTax;
  
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);