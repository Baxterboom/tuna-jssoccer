//use http://beautifytools.com/excel-to-json-converter.php to convert sportadmin xls to json
//run: node players-map.js

var map = {
  "MedlemsNr": "id",
  "ÅR": "year",
  "Förnamn": "firstname",
  "Efternamn": "lastname",
  "Gruppkoppling": "group",
  "TröjNr": "nr",
  "NOT": "note",
  "Status": "status"
}

var data = JSON.stringify(require('./players.json'));
var type = "";

for (var key in map) {
  type += `${map[key]}?: string;`;
  data = data.replace(/"\s*"\s*:\s*"\s*",?/g, ``)
    .replace(new RegExp(`"${key}":`, "g"), `${map[key]}:`);
}

const content = `
export interface IPlayerData { ${type} }
//@ts-ignore
export const EmptyPlayerData = Object.freeze<IPlayerData>({});
export default class Data { 
  //@ts-ignore
  public static readonly All = () : IPlayerData[] => ${data};
  public static readonly Coaches = () => Data.All().Where(w => w.group != "Spelare");
  public static readonly Players = () => Data.All().Where(w => w.group == "Spelare");
}`;

const fs = require('fs');
fs.writeFile("./src/assets/db/players.tsx", content, function (err) {
  if (err) return console.log(err);
  console.log("The file was saved!");
});