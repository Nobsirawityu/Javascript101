const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
const newObject = names.reduce((allname, name) => {
    if(name in allname){
        allname[name]++;
    }
    else{
        allname[name] = 1;
    }
    return allname;
}, {});

console.log('Hello world');

console.log(newObject);
