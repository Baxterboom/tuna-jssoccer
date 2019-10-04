import { Component, h } from "preact";
import * as style from "./style.css";
import Scoreboard from "../game/components/Scoreboard";
import Match from "../game/match";
import Timer from "../../components/timer";
import { seedEncode } from "../../components/components";

interface IProps { }

interface IState {
    match: Match;
}

const empty = JSON.stringify(null);
const players = new Array<string>(4);

players.ForEach((item, index) => {
    players[index] = empty;
});

const p7 = seedEncode([
    players.slice(0, 1).join("|"),
    players.slice(0, 2).join("|"),
    players.slice(0, 3).join("|"),
    players.slice(0, 1).join("|")
].join(";"));

const p9 = seedEncode([
    players.slice(0, 1).join("|"),
    players.slice(0, 3).join("|"),
    players.slice(0, 3).join("|"),
    players.slice(0, 2).join("|")
].join(";"));

export default class Home extends Component<IProps, IState> {
    public state: IState = {
        match: new Match(() => this.setState(this.state))
    }

    public render(props: IProps, state: IState) {
        return (
            <ul class={style.home}>
                <fieldset>
                    <legend>Lineup</legend>
                    <li><a href={"/game/" + p7}>7 players </a></li>
                    <li><a href={"/game/" + p9}>9 players</a></li>
                </fieldset>
                <fieldset>
                    <legend>Demo</legend>
                    <Scoreboard match={state.match} />
                    <Timer ticks={25 * 1000 * 60}></Timer>
                </fieldset>
            </ul>
        );
    }
}
