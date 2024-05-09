//console.log("Now testing EcmaScript")
import logger, {appName, dummyFunction, dummyFunction2,genericFunction} from './tools.js';

logger ("I am logging using tools module");

logger('Welcome! The application name is "'+ appName + '". \n\
There is a function that returns "' + dummyFunction()+ '"')

logger(`Welcome! The application name is "${appName}". 
There is a function that returns "${dummyFunction()}".`);

logger(`Welcome! The application name is "${appName}". There is a function 
that returns "${dummyFunction2()}".` );

logger(genericFunction()); 