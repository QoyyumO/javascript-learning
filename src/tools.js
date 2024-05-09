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
export default logger; 