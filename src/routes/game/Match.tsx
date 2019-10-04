import { ILine } from "./components/Line";
import Player, { IPlayer } from "./components/Player";
import { IPlayerListEventArgs } from "./components/player-list";
import { ITeam } from "./components/Scoreboard/components/team";
import Data from "../../assets/db/players";
import { ForEach, seedDecode, seedEncode } from "../../components/components";

export type IPlayerSeed = Pick<IPlayer, "id" | "goals" | "color">;

export default class Match {

    public static PlayerSeed = Object.freeze<IPlayerSeed>({ id: null, goals: 0, color: "" });

    public home: ITeam = { id: 0, name: "ÄFF", score: 0 };
    public guest: ITeam = { id: 0, name: "OTHER", score: 0 };
    public playerListEventArgs: IPlayerListEventArgs = {};
    public lines: ILine[] = [];

    constructor(public update: () => void) { }

    public toString() {
        const lines: string[] = [];
        this.lines.ForEach(l => {
            const players = l.players.Select(p => {
                const seed: IPlayerSeed = { ...Match.PlayerSeed };

                ForEach(seed, (value, name) => {
                    seed[name] = p[name] || value;
                });

                return JSON.stringify(seed);
            }).join("|");
            lines.push(players);
        });

        return seedEncode(lines.join(";"));
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
        const lines = seedDecode(lineup).split(";").Select<ILine>(l => {
            const line: ILine = { match, players: [] };
            const players = l.split("|").Select(p => {
                const seed: IPlayerSeed = JSON.parse(p || "null") || { ...Match.PlayerSeed };
                const player = data.FirstOrDefault(f => f.id === seed.id) || Player.Empty;
                return Player.Map(player, { ...{ goals: 0, line }, ...seed });
            });

            line.players.AddRange(players);
            return line;
        });

        return lines;
    }
}