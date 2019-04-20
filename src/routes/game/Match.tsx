import { ITeam } from "../team";

export interface IMatch {
  home: ITeam;
  guest: ITeam;
}

export class Match implements IMatch {
  public home = { id: 0, name: "home", score: 0, lines: [] };
  public guest = { id: 0, name: "guest", score: 0, lines: [] };
}