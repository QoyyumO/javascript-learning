//console.log("Now testing EcmaScript")
import logger, {appName, dummyFunction, dummyFunction2,genericFunction,multiplier1} from './tools.js';

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