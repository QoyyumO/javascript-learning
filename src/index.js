//console.log("Now testing EcmaScript")
import logger, {User,Person,appName, dummyFunction, dummyFunction2,
    genericFunction,multiplier1,CustomMath,genericFunction4} from './tools.js';

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
person1.firstName = "peter"; //here we have deliberately used lowercase for first letter 
person2.firstName = "maria"; //here we have deliberately used lowercase for first letter 
logger(`Person 1 is ${person1.getFirstName()} whose height is ${person1.height}. Person 2 is ${person2.getFirstName()} whose height is ${person2.height}`); //using getFirstName() to get firstName.  

logger(CustomMath.sqrt(400)); 
let user1 = new User("myusername","mypassword","Abdul-Qoyyum","Oyadeyi","Male",undefined); 
logger(`The username of ${user1.firstName} is ${user1.username}`)

//Promises for asynchronous programming 

new Promise((resolve, reject) => { 
    setTimeout(()=>{ 
    resolve("Timeout is over"); //send out a success feedback with data using resolve 
    }, 1000) //set timeout for 1000ms i.e. 1second. 
    }).then((data) => { 
    logger(`${data}`);//This should output "Timeout is over" 
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement. 
    logger(`${error}`); 
}); 

let user2 = new User("myusername","mypassword","Abdul-Qoyyum","Oyadeyi","Male",undefined); 
logger(`The username of ${user2.firstName} is ${user2.username}`)

//2
new Promise((resolve, reject) => { 
    setTimeout(()=>{ 
        reject("Timeout is over but I am upset. You should not have invoked a timeout\
         in the first place. Hence I am sending a <i>reject</i> instead of a <i>resolve</i>!"); //send out a reject feedback 
        }, 1000) 
    }).then((data) => { 
        logger(`${data}`);//This should output "Timeout is over" if resolve("Timeout is over") is invoked 
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement. 
        logger(`Error message received: ${error}`); 
    }) 

let user3 = new User("myusername","mypassword","Abdul-Qoyyum","Oyadeyi","Male",undefined); 
logger(`The username of ${user3.firstName} is ${user3.username}`) 

//3

new Promise((resolve, reject) => { 
    setTimeout(()=>{ 
        reject("Timeout is over but I am upset. You should not have invoked a timeout in the first place. Hence I am sending a <em>reject</em> instead of a <em>resolve</em>!"); 
        //send out a reject feedback 
        }, 1000) 
    }).then((data) => { 
        logger(`${data}`);//This should output "Timeout is over" 
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement. 
        logger(`Error message received: ${error}`); 
    }).then(() =>{ 
        logger(`This function is executed after success or failure is returned`) 
    }); 

    let url = 'https://jsonplaceholder.typicode.com/users/1'; //Get data for a user with id 1 
fetch(url) 
    .then(response => response.json()) //convert data returned to json 
    .then(data => logger(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email}`)) //use the json data 
    .catch(error => logger(`Error: ${error}`));

    logger(genericFunction4(4,3,6,9,10,23,56.93));

    //Async or Await
    //Define the function that will return new Promise that wraps the asynchronous call to setTimeout() 
const promiseAwareTimeout = (milliseconds=1000) => { /*The function expects milliseconds to be passed.
If not passed, milliseconds parameter defaults to 1000 */
        return new Promise((resolve, reject) => { 
            setTimeout(()=>{ 
                resolve(`Timeout of ${milliseconds} milliseconds is over`); //send out a success feedback with data using resolve 
            }, milliseconds) //set timeout for passed milliseconds. Defaults to 1000 
        }); 
}
    //define a function that uses our Promise executor 
    const usePromiseAwareTimeout = async (milliseconds) => { 
        logger('About to call timeout') 
        try{ 
            logger(await promiseAwareTimeout(milliseconds)); 
        }catch(error){ 
            logger(error); 
        } 
    }; 
    //call the async function. 
    usePromiseAwareTimeout(3000);


    // async/await using an existing Promise aware function fetch().
    let usersUrl = 'https://jsonplaceholder.typicode.com/users/'; 
const getUserById = async (userId) => { //user id parameter is expected 
    let url = usersUrl + userId; //get the specific url for the user to fetch 
    const response = await fetch(url); //make a call to the asynchronous fetch() 
    const data = await response.json(); //make a call to the asynchronous conversion to json. 
    logger (data.name); //log the feedback. 
} 
getUserById(2); //This should display 'Ervin Howell' on the browser.

//Async/await with try…catch 

let usersUrl1 = 'https://jsonplaceholder.typicode.com/users/'; 
const getUserById1 = async (userId) => { 
    let url = usersUrl + userId; 
    try{ 
        const response = await fetch(url); 
        const data = await response.json(); 
        /* 
        The if statement below is to ensure that errors like URL not found (ie Error 404) is caught. 
        fetch() unfortunately does not send a Promise.reject() in such a case. 
        So here, we are throwing exception if HTTP response status is  
        outside the OK range (the 2xx range are OK), so that it can be caught. 
         */ 
        if (response.status >= 200 && response.status < 300){ 
            log(data.name); //do whatever you want with the data. You can even pass to other functions to do some work on it 
        }else{ 
            throw Error(response.status);//make sure that the error is not ignored by the catch() statement below. 
        } 
         
    }catch(error){ 
        log(`Error: ${error}`); 
    } 
} 
//Asunc / Await with promise.all

let usersUrl3 = 'https://jsonplaceholder.typicode.com/users/'; 
const getUserById3 = async (userId) => { 
    let url = usersUrl + userId; 
    try{ 
        const response = await fetch(url); 
        const data = await response.json(); 
        /* 
        The if statement below is to ensure that errors like URL not found (ie Error 404) is caught. 
        fetch() unfortunately does not send a Promise.reject() in such a case. 
        So here, we are throwing exception if HTTP response status is  
        outside the OK range (the 2xx range are OK), so that it can be caught. 
         */ 
        if (response.status >= 200 && response.status < 300){ 
            return data; 
            //log(data.name); //do whatever you want with the data. You can even pass to other functions to do some work on it 
        }else{ 
            throw Error(response.status);//make sure that the error is not ignored by the catch() statement below. 
        } 
         
    }catch(error){ 
        //log(`Error: ${error}`);//do whatever you want to deal with error 
        return error; 
    } 
} 
Promise.all([getUserById(0),getUserById(2),getUserById(3)]) //getUserById() is deliberately passed Id of 0 in the first case to provoke Error: 404. 
.then((data) => { 
    logger(`User1 = ${data[0].name=='Error'?data[0]:data[0].name}; User2 = ${data[1].name}; User3 = $
 {data[2].name}`);//display data from array 
}) 

//Iterators/Generators

function* waitList(list){ 
    for(let person of list){ 
        yield person; //create yield point for each item on the list 
    } 
    //return; terminates a generator at any point. It does not have to be used at all. It can be used between yield statements if the developer wants the rest of the yield to be ignored. 
} 
let myWaitList = waitList(['Peter','Mary','John']); //call waitList 
//Prepare the output. 
let output = `The first yielded value is: ${myWaitList.next().value} <br/> 
    Here is what is returned in the next call: ${myWaitList.next().value} <br/> 
    Hopefully we still have room for a next call. Here is the return: ${myWaitList.next().value} <br/> 
    What if we call again when there is no more value to yield. Here is what we get: ${myWaitList.next().value}` 
log(output); 