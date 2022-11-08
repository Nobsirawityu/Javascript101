const name = 'peter';
const ages = 25;
const sentence = "Hey it's " + name + " and he is " + ages + " years old.";

const sen = bulk(name, ages);
function bulk(name, age){
    return new Promise((resolve, reject) => {
        try{
            resolve(`Hey it's ${name} nad he is ${age} years old`);
        }catch{
            reject('Error occur');
        }
    })
}
console.log(sen);
sen.then((taco)=>{
    console.log(taco);
}).catch((error) => {
    console.log(error);
})