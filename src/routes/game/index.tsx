import { Component, h } from "preact";
import Line, { ILine } from "./components/Line";
import { IPlayer } from "./components/Player";
import PlayerList from "./components/player-list";
import Scoreboard from "./components/Scoreboard";
import Match from "./match";
import * as style from "./style.css";
import Data from "../../assets/db/players";
import dragula from "dragula";

interface IProps {
    lineup: string;
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
    }

    public componentDidMount() {
        this.randomizeLineUp(this.props.lineup.split(","));
    }

    public componentDidUpdate() {
        var containers = [].slice.call(document.getElementsByClassName("players")) as Element[];

        dragula(containers).destroy();
        //@ts-ignore: copySortSource missing from typings
        dragula(containers, {
            copySortSource: true
        });
    }

    public render(props: IProps, state: IState) {
        const lines = state.match.lines.map((f, i) => (<Line key={i} data={f} />));
        return (
            <div class={[style.main].join(" ")}>
                {/* <Scoreboard match={state.match} /> */}
                <div class={[style.pitch].join(" ")}>{lines}</div>
                <PlayerList match={state.match} />
                <img class={style.reload}
                    src="assets/img/refresh_48px.svg"
                    onClick={this.randomizeLineUp.bind(this, props.lineup.split(","))}
                    title="New line up" />
            </div>
        );
    }

    private randomizeLineUp(lineup: any[]) {
        this.state.match.lines.Clear();
        const players = Data.Players();

        lineup.ForEach(f => {
            let playerCount = parseInt(f);
            if (playerCount > players.length) playerCount = players.length;
            const line: ILine = {
                match: this.state.match,
                players: new Array<IPlayer>(playerCount)
            };

            line.players.ForEach((f, i) => {
                const index = Math.floor(Math.random() * players.length);
                const player = players[index];
                players.Remove(player);
                line.players[i] = {
                    id: player.firstname + " " + player.lastname || index.toString(),
                    name: player.firstname + " " + player.lastname || index.toString(),
                    number: parseInt(player.nr || "0"),
                    line
                };
            });

            this.state.match.lines.Add(line);
        });

        this.setState(this.state);
    }
}
