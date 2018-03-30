const fs = require('fs');

const dataString = fs.readFileSync('data.json');
const data = JSON.parse(dataString);

// console.log(data);

console.log('Best players (skilled min. 90):');
const bestPlayers = data.filter(player => player.skill >= 90);
console.log(bestPlayers.map(player => player.name));

console.log('All players summary:');
const playersIndex = data.map(player => `${player.name} is a ${player.role} skilled ${player.skill}`);
console.log(playersIndex);

const totalPlayersSkill = data.reduce((total, player) => total + player.skill, 0);
console.log('All players total value:', totalPlayersSkill);
console.log('Average skill:', totalPlayersSkill / data.length);

const totalPolishPlayersSkill = data
  .filter(player => player.country === 'Poland')
  .reduce((sum, player) => sum + player.skill, 0);
const polishPlayers = data.filter(player => player.country === 'Poland');
console.log('Average Polish team skill:', totalPolishPlayersSkill / polishPlayers.length);
