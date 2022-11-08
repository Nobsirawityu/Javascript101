const udemy = 'Udemy';
const letters = [...udemy]; 
console.log(letters);
const boys = ['john', 'peter', 'bob'];
const girls = ['lisa', 'susan', 'anna'];
const bestFriend = 'arnold';

const friends = [...boys, ...girls, bestFriend];
console.log(friends);

//reference
// const newFriends = friends;
// newFriends[0] = 'karina';

const newFriends = ['karina', ...friends];
console.log(newFriends);
