import { IPlayerListEventArgs } from "./components/player-list";
import { ITeam } from "./components/Scoreboard/components/team";

export default class Match {
  public home: ITeam = { id: 0, name: "home", score: 0, lines: [] };
  public guest: ITeam = { id: 0, name: "guest", score: 0, lines: [] };
  public playerListEventArgs: IPlayerListEventArgs = {};

  constructor(public update: () => void) { }
}