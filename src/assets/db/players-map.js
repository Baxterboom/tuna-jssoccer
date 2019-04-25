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

const content = `
export interface IPlayerData { ${type} }
export default class Data { 
  public static readonly Coaches = ${data}.Where(w => w.group != "Spelare");
  public static readonly Players = ${data}.Where(w => w.group == "Spelare");
}`;

const fs = require('fs');
fs.writeFile("players.tsx", content, function (err) {
  if (err) return console.log(err);
  console.log("The file was saved!");
});