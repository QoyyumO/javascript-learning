//console.log("Now testing EcmaScript")
import logger, {Person,appName, dummyFunction, dummyFunction2,genericFunction,multiplier1} from './tools.js';

logger ("I am logging using tools module");

logger('Welcome! The application name is "'+ appName + '". \n\
There is a function that returns "' + dummyFunction()+ '"')

logger(`Welcome! The application name is "${appName}". 
There is a function that returns "${dummyFunction()}".`);

logger(`Welcome! The application name is "${appName}". There is a function 
that returns "${dummyFunction2()}".` );

logger(genericFunction()); 

try{ 
    logger(multiplier1 (2,3,4)); //This will output 24 on the browser 
}catch(error){ 
    logger(error.message); 
} 

let person1 = new Person("Abdul-Qoyyum Oyadeyi", "Oyadeyi", "Male",1.84); 
let person2 = new Person("Mary", "Joseph", "Female", undefined); 
log(`Person 1 is ${person1.firstName} whose height is ${person1.height}. Person 2 is ${person2.firstName} whose 
height is ${person2.height}`); 