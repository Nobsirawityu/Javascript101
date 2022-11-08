const person = {
    name: 'Nobnab',
    job: 'Develper'
};

const newperson = {...person, city:'America', name:'Peter'};
console.log(newperson);

const listPerson = [
    {
        name: 'NobNab',
        job: 'Developer'
    },
    {
        name: 'tony',
        job: 'Artist'
    }
];
const date = '2022-11-01T00:00:00.000+00:00';
const arr = date.split('-');
const day = arr[2].substring(0,2);
let someList = [];
const d = new Date(`${arr[0]}-${arr[1]}-${day}`);
console.log(d);
listPerson.forEach((e) => {
    const newE = {...e, date: d.toLocaleDateString("en-US")};
    someList.push(newE);
});

console.log(someList);