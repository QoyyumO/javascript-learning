const logger = output => {
    console.log(output)
}
export const appName = "ES6 Review";
export var dummyFunction = () => { 
    return "I am a dummy function"; 
}
export const dummyFunction2 = () => { 
    let feedback = "I am a dummy function"; //mutable variable
     feedback = "I am still a dummy function";//value changed
     return feedback; 
}

export const genericFunction = () => { 
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements 
    let [firstLang, secondLang, ...otherLanguages] = languages; //otherLanguages will be equal to ['Java', 'C#', 'C++'] 
    return `First language is ${firstLang} and the second is ${secondLang}. The rest are ${otherLanguages}` 
}

export const multiplier = (a, b=1) => { 
    //This function multiplies any two numbers 
    //if only one argument is sent as argument when function is called, b will default to 1. 
    return (a * b); 
} 
export const multiplier1= (...numbers) =>{ 
    var product = 1; 
    if (numbers.length < 2){ 
        throw new Error("Illegal arguments counts. Arguments must be greater than 1") 
    }
    for(let number of numbers){ 
        product = product * number; 
    } 
    return product; 
} 

const toTitleCase = (str) => { 
    str.toLowerCase();//first set the whole string to lowercase in case 
    return str.substring(0,0) + str[0].toUpperCase() + str.substring(1);//replace the first character with its uppercase 
} 
export class Person{ 
    constructor(firstName, lastName, gender, height){ 
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.gender = gender; 
        this.height = height 
    } 
    getFirstName(){ 
        return toTitleCase(this.firstName) 
    } 
}; 
//static methods 
export class CustomMath{ 
    static sqrt(a){ 
    return Math.sqrt(a); 
    } 
    static pow(a,b){ 
        return Math.pow(a,b); 
    } 
} 
export class User extends Person{ 
    constructor(username, password, firstName, lastName, gender, height){ 
        super(firstName, lastName, gender, height); 
        this.username = username; 
        this.password = password; 
    } 
} 

export const genericFunction4 = (m, c, ...x) => { 
    //This function returns an array of {x,y} objects for all the x arguments passed. 
    //Map the array of x into an array of {x,y} object, with the y value calculated each time. 
    let coordinates = x.map((x) => { 
        return {'x': x, 'y' : (m*x) + c}; 
    }) 
    //loop through our array of {x,y} and prepare the output string to be returned. We can do this with the forEach() method of array object or use the for…of loop introduced in ES6 as shown below 
    let output = 'The (x,y) values are as follows: ' 
    for (let coordinate of coordinates){ 
        let xy = `(${coordinate.x},${coordinate.y})`  
        output+=xy; 
    } 
   //Previous style…(Going forward, we shall only be using the new for…of loop in such scenario) 
   //coordinates.forEach((coordinate)=>{ 
   //     let xy = `(${coordinate.x},${coordinate.y})`; 
   //     output+=xy; 
    //}) 
    return output; 
} 
export default logger;