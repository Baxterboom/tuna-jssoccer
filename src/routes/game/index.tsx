import { Component, h } from "preact";
import Line, { ILine } from "./components/Line";
import Player, { IPlayer } from "./components/Player";
import PlayerList from "./components/player-list";
import Scoreboard from "./components/Scoreboard";
import Match from "./match";
import * as style from "./style.css";
import Data from "../../assets/db/players";
import dragula, { Drake } from "dragula";
import { route } from "preact-router";

interface IProps {
    lineup: string;
}

interface IState extends IGame {
}

export interface IGame {
    match: Match;
}

export default class Game extends Component<IProps, IState> {
    public drake!: Drake;

    public state: IState = {
        match: new Match(this.update.bind(this))
    }

    public update() {
        this.setState(this.state, () => {
            route(`/game/${this.state.match.toString()}`);
        });
    }

    public componentWillMount() {
        const match = this.state.match;
        match.lines = match.lineup(this.props.lineup, match);
    }

    public componentDidUpdate() {
        if (this.drake) this.drake.destroy();
        const containers = [].slice.call(document.querySelectorAll(".players")) as Element[];

        //@ts-ignore: copySortSource missing from typings
        this.drake = dragula(containers, {
            copySortSource: true,
        });

        this.drake.on("drop", (element: Element, target: Element, source: Element, sibling: Element) => {
            const player = $(element).prop("_component").props.data as IPlayer;
            const lineTo = $(target).closest(".line").prop("_component").props.data as ILine;
            const lineFrom = $(source).closest(".line").prop("_component").props.data as ILine;

            lineFrom.players.Remove(player);
            lineTo.players.Insert(player, $(sibling).index() - 1 || 0);
            player.line = lineTo;
        });
    }

    public componentWillUnmount() {
        if (this.drake) this.drake.destroy();
    }

    public render(props: IProps, state: IState) {
        const lines = state.match.lines.map((f, i) => (<Line key={i} data={f} />));
        return (
            <div class={[style.main].join(" ")}>
                {/* <Scoreboard match={state.match} /> */}
                <div id="print-sheet" class={style.printSheet}>{this.state.match.print()}</div>
                <div class={[style.pitch].join(" ")}>{lines}</div>
                <PlayerList match={state.match} />
                <img class={style.btnReload}
                    src="assets/img/refresh_48px.svg"
                    onClick={this.randomizeLineUp.bind(this)}
                    title="New line up" />
                <img class={style.btnPrint}
                    src="assets/img/print.svg"
                    onClick={this.print.bind(this)}
                    title="Print" />
            </div>
        );
    }

    private print() {
        $("#print-sheet").toggle();
    }

    private randomizeLineUp() {
        this.state.match.lines.Clear();
        const players = Data.Players();

        this.props.lineup.split(";").ForEach(f => {
            let playerCount = f.split(",").Select(s => s[1]).Count();
            if (playerCount > players.length) playerCount = players.length;
            const line: ILine = {
                match: this.state.match,
                players: new Array<IPlayer>(playerCount)
            };

            line.players.ForEach((f, i) => {
                const index = Math.floor(Math.random() * players.length);
                const player = players[index];
                players.Remove(player);
                line.players[i] = Player.Map(player, { line });
            });

            this.state.match.lines.Add(line);
        });

        this.update();
    }
}
