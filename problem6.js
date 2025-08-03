/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var salaryNow = startingSalary;

for ( var year = 1; year <= experience; year++)
{
    salaryNow += salaryNow * 0.05;
}
console.log(salaryNow.toFixed(2));
