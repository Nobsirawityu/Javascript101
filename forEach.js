const people = [
    {name:'Susy', ages:25, position:'developer'},
    {name:'Tarzan', ages:18, position:'developer'},
    {name:'Tony', ages:22, position:'tech lead'},
    {name:'Henry', ages:35, position:'designer'},
    {name:'Maggy', ages:22, position:'developer'}
];

const person = people.forEach(function(p){
    p.name = p.name.toUpperCase();
    return console.log(p.ages >= 20 ? p.name : p.position);
})
