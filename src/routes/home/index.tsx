import { Component, h } from "preact";
import * as style from "./style.css";
import Scoreboard from "../game/components/Scoreboard";
import Match from "../game/match";
import Timer from "../../components/timer";

interface IProps { }

interface IState {
    match: Match;
}

export default class Home extends Component<IProps, IState> {
    public state: IState = {
        match: new Match(() => this.setState(this.state))
    }

    public render(props: IProps, state: IState) {
        return (
            <ul class={style.home}>
                <fieldset>
                    <legend>Lineup</legend>
                    <li><a href="/game/0:0;0:0,0:0;0:0,0:0,0:0;0:0">7 players</a></li>
                    <li><a href="/game/0:0;0:0,0:0,0:0;0:0,0:0,0:0,0:0;0:0">9 players</a></li>
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
