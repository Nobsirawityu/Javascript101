const people = [
  { name: "Susy", ages: 25, position: "midfielder" },
  { name: "Tony", ages: 22, position: "attacker" },
  { name: "Henry", ages: 35, position: "defender" },
  { name: "Maggy", ages: 22, position: "goalkeeper" },
];
function addManager(people){
  const manager = people.map(function(p){
    return {name: p.name, ages : p.ages + 20, position: p.position, manager:"Conte"}
  })
  return manager;
}

const manager = addManager(people);
console.log(manager);

let arr = [];

people.forEach(function(p) {
  arr.push(p.name);
});

const hahaha = '555555';

const test = !people[0].Ronaldo;
console.log(test);


