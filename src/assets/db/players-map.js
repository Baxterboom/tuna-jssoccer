//run: node players-map.js

var map = {
  "ÅR": "year",
  "FÖRNAMN": "firstname",
  "EFTERNAMN": "lastname",
  "GRUPPKOPPLING": "group",
  "FOTO": "photo",
  "TRÖJNR": "nr",
  "TRÖJSTLK": "size",
  "NOT": "note",
  "STATUS": "status"
}

var data = JSON.stringify(require('./players.json'));
var type = "";

for (var key in map) {
  type += `${map[key]}: string;`;
  data = data.replace(new RegExp(`"${key}":`, "g"), `"${map[key]}":`);
}

console.log(`export interface IPlayerData { ${type} }`);
console.log(`export default class Data { public static readonly PlayerData = `, data, `;}`);