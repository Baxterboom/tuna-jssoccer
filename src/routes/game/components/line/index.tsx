import { Component, h } from "preact";
import * as style from "./style.css";
import Player, { IPlayer } from "../Player";
import Match from "../../match";

interface IProps {
    data: ILine;
}

interface IState {
}

export interface ILine {
    match: Match;
    players: IPlayer[];
}

export default class Line extends Component<IProps, IState> {
    public addPlayer(player?: IPlayer) {
        this.props.data.players.Add(player || { ...Player.Empty, ...{ line: this.props.data } });
        this.setState(this.state);
    }

    public removePlayer(player: IPlayer) {
        this.props.data.players.Remove(player);
        this.setState(this.state);
    }

    public render(props: IProps, state: IState) {
        const players = props.data.players.map(f => <li><Player data={f} /></li>);
        return (<ul class={style.line}>{players}</ul>);
    }
}