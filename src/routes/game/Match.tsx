import { ILine } from "./components/Line";
import Player, { IPlayer } from "./components/Player";
import { IPlayerListEventArgs } from "./components/player-list";
import { ITeam } from "./components/Scoreboard/components/team";
import Data from "../../assets/db/players";

export default class Match {

  public home: ITeam = { id: 0, name: "ÄFF", score: 0 };
  public guest: ITeam = { id: 0, name: "GUEST", score: 0 };
  public playerListEventArgs: IPlayerListEventArgs = {};
  public lines: ILine[] = [];

  constructor(public update: () => void) {
    // const l = "111:0;222:0,333:0;444:0,555:1,666:0;777:2";
    // console.log(l);
    // this.lines = Match.lineup(l, this);
    // console.log(this.lines)
    //console.log(this.toString());
  }

  public toString() {
    const lines: string[] = [];
    this.lines.ForEach(l => {
      const players = l.players.Select(p => `${p.id}:${p.goals || 0}`).join(",");
      lines.push(players);
    });

    return lines.join(";")
  }

  public print() {
    const lines: string[] = [];

    this.lines.ForEach(l => {
      const players = l.players.Select(p => {
        const goals = p.goals > 0 ? ` (${p.goals || 0})` : ``;
        return `${p.displayname}${goals}`;
      }).join(", ");
      lines.push(players);
    });

    return lines.Select((s, i) => {
      if (i == 1) return `G: ${s}`;
      if (i == 2) return `D: ${s}`;
      return (i == lines.length - 1) ? `O: ${s}` : `M: ${s}`;
    })
    .Insert(`${this.home.name}: ${this.home.score} - ${this.guest.name}: ${this.guest.score}`, 0)
    .join("\n")
  }

  // tslint:disable-next-line: member-ordering
  public lineup(lineup: string, match: Match): ILine[] {
    const data = Data.Players();
    const lines = lineup.split(";").Select<ILine>(l => {
      const line: ILine = { match, players: [] };
      const players = l.split(",").Select<IPlayer>(p => {
        const meta = p.split(":");
        const goals = parseInt(meta[1] || "0");
        const player = data.FirstOrDefault(f => f.id === meta[0]) || Player.Empty;
        return Player.Map(player, { goals, line });
      });

      line.players.AddRange(players);
      return line;
    });

    return lines;
  }
}