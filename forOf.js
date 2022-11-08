const fruits = ['apple', 'orange', 'banana', 'peace'];
const longName = 'John Smith Pepper III';
let shortName = '';

for(const letter of longName){
    // console.log(letter);
    if(letter == ' '){
        continue;
    }
    else{
        shortName += letter;
    }
}

for(const fruit of fruits){
    if(fruit == 'banana'){
        continue;
    }
    console.log(fruit);
}