//store data available for operations

var a; //Declare variable named a. 
a = 10; //Assign the integer value of 10 to variable a. 
b = 11; //Create variable b and assign a value to it. No previous declaration statement. 
var c = 12; //Declare variable c and assign it the value of 12 in one statement. 

console.log(a); //Print the content of variable a 
console.log(b); //Print the content of variable b 
console.log(c); //Print the content of variable c

//Arithmetic Operators

a = 10; //Assign variable a the value of 10 
b = 20; //Assign variable b the value of 20 
c = a + b; //Add value in a and b and put the result in variable c. 
console.log(c); //This should print out 30 
console.log(b - a); //Subtract a value from b value; displays 10 in console. 
console.log(b/a); //Divide b value by git a value; displays 2 in console. 
console.log(a*b); //Multiply a value by b value; displays 200 in console. 
console.log(b%a); //Divide b value by a value and return remainder; displays 0 in console. 
console.log(a**2); //a value raised to power 2; displays 100 in console. 
a++; //Increment a value. 
console.log(a); //Displays 11 in console. 
b--; //Increment b value. 
console.log(b); //Displays 19 in console. 

//String Operators

firstName = "Abdul-Qoyyum"; 
lastName = "Oyadeyi"; 
fullName = firstName + " " + lastName; //Concatenate firstName, whitespace and lastName 
console.log(fullName); //This should output the full name Abdul-Qoyyum Oyadeyi. 

//Comparison Operators

a = 10; 
a < 11; //Returns true 
console.log(a < 11); //Displays true in console 
var test = a > 20; //Declares a variable named test and gives it the value of false. 
console.log(test); //Displays false in console 
a >= 10; //Returns true 
a <= 20; //Returns true 
a == 10; //Returns true 
a === "10"; //Returns false because a holds an integer value of 10 and not string value "10"

//Logical Operators

a = 1; 
b = 2; 
console.log(a < 3 && b < 3); //Prints true as both a and b contain values that are less than 3. 
console.log(a > 3 && b < 3); //Prints false as the first condition (a > 3) is not true. 
console.log(a > 3 || b < 3); //Prints true as at least one condition (b < 3) is true. 
console.log(!(a < 3)); //Prints false as condition (NOT a < 3) is false. 
console.log(!(a < 3) || !(b > 3)); //Prints true as one of the conditions (NOT b > 3) is true.

//Ternary (conditional) operations

var age = 17; 
var adult = (age > 20)? "Yes" : "No"; 
console.log(adult); //This should display the string "No" 

//Bitwise operations 
5 << 1; //Equivalent of 5 * 2 
5 <<2; //Equivalent of 5 * 4 
5 <<3; //Equivalent of 5 * 8 
40 >> 1; //Equivalent of 40 / 2 
40 >>2; //Equivalent of 40 / 4 
40 >>3; //Equivalent of 40 / 8 

a= 5
console.log(a<<1)

//typeof operator
typeof  "Abdul-Qoyyum Oyadeyi";  //Returns the value "string" 
typeof false;  //Returns the value "boolean" 
typeof (10 + 10);  //Returns the value "number" 
typeof 33;  //Returns the value "number" 

// Making decisions
//If-else statements
var minimumVotingAge = 18; 
var age = 17; 
if (age < minimumVotingAge){ 
console.log("Not eligible to vote"); 
}else{ 
console.log("Eligible to vote"); 
} 