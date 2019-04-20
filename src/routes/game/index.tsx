import * as style from "./style.css";
import * as button from "./components/Button/style.css";
import { Component, h } from "preact";
import Line, { ILine } from "./components/Line";
import { IMatch, Match } from "./Match";
import Scoreboard from "./components/Scoreboard";
import { IPlayer } from "./components/Player";

interface IProps {
}

interface IState extends IGame {
}

export interface IGame {
    lines: ILine[];
    match: IMatch;
}

export default class Game extends Component<IProps, IState> {
    public state: IState = {
        lines: [],
        match: new Match()
    }

    constructor() {
        super();
        this.state.lines = this.state.match.home.lines;
        this.setupDefaults();
    }

    public addLine() {
        this.setState({
            lines: this.state.lines.Add({ players: [] })
        });
    }

    public removeLine(line: ILine) {
        this.setState({
            lines: this.state.lines.Remove(line)
        });
    }

    public addPlayer(line: ILine) {
        line.players.Add({ id: 0, name: "New" });
        this.setState(this.state);
    }

    public render(props: IProps, state: IState) {
        const lines = state.lines.map(f =>
            <div class={style.line}>
                <button class={[button.normal].join(" ")} onClick={this.removeLine.bind(this, f)} title="Remove line">-</button>
                <Line data={f}></Line>
                <button class={[button.normal].join(" ")} onClick={this.addPlayer.bind(this, f)} title="Add Player">+</button>
            </div>);

        return (
            <div class={[style.main].join(" ")}>
                <Scoreboard match={state.match} />
                <button class={[style.btnRight].join(" ")} onClick={this.addLine.bind(this)} title="Add line">+</button>
                <button class={[style.btnLeft].join(" ")} onClick={this.removeLine.bind(this, state.lines.LastOrDefault())} title="Remove line">-</button>
                <div class={[style.pitch].join(" ")}>
                    {lines}
                </div>
            </div >
        );
    }

    private setupDefaults() {
        const emptyPlayer: IPlayer = { id: 0, name: "new" };
        this.state.lines.Add({ players: [{ ...emptyPlayer }] });
        this.state.lines.Add({ players: [{ ...emptyPlayer }, { ...emptyPlayer }] });
        this.state.lines.Add({ players: [{ ...emptyPlayer }, { ...emptyPlayer }, { ...emptyPlayer }] });
        this.state.lines.Add({ players: [{ ...emptyPlayer }] });
    }
}
