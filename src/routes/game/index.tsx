import { Component, h } from "preact";
import * as button from "./components/Button/style.css";
import Line, { ILine } from "./components/Line";
import Player, { IPlayer } from "./components/Player";
import PlayerList from "./components/player-list";
import Scoreboard from "./components/Scoreboard";
import Match from "./match";
import * as style from "./style.css";

interface IProps {
}

interface IState extends IGame {
}

export interface IGame {
    match: Match;
}

export default class Game extends Component<IProps, IState> {
    public state: IState = {
        match: new Match(() => this.setState(this.state))
    }

    constructor() {
        super();
        this.state.match.lines = this.state.match.home.lines;
        this.setupDefaults();
    }

    public addLine() {
        const line: ILine = { players: [], match: this.state.match };
        line.players.push({ ...Player.Empty, line });
        this.state.match.lines.Add(line)
        this.setState(this.state);
    }

    public removeLine(line: ILine) {
        this.state.match.lines.Remove(line);
        this.setState(this.state);
    }

    public addPlayer(line: ILine) {
        line.players.Add({ ...Player.Empty, line });
        this.setState(this.state);
    }

    public render(props: IProps, state: IState) {
        const lines = state.match.lines.map(f => (<Line data={f} />));

        return (
            <div class={[style.main].join(" ")}>
                {/* <Scoreboard match={state.match} /> */}
                <div class={[style.pitch].join(" ")}>{lines}</div>
                <PlayerList match={state.match} />
            </div>
        );
    }

    private setupDefaults() {
        const createLine = (countPlayers: number) => {
            const line: ILine = {
                match: this.state.match,
                players: new Array<IPlayer>(countPlayers)
            };

            line.players.ForEach((f, i) => {
                line.players[i] = { ...Player.Empty, line };
            });

            return line;
        };

        this.state.match.lines.AddRange([
            createLine(1),
            createLine(2),
            createLine(3),
            createLine(1)]);
    }
}
