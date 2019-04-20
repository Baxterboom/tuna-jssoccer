import { Component, h } from "preact";
import * as style from "./style.css";
import Player, { IPlayer } from "../Player";

interface IProps {
    data: ILine;
}

interface IState {
}

export interface ILine {
    players: IPlayer[];
}

export default class Line extends Component<IProps, IState> {
    public addPlayer(player?: IPlayer) {
        this.props.data.players.Add(player || { id: 0, name: "new" });
        this.setState(this.state);
    }

    public removePlayer(player: IPlayer) {
        this.props.data.players.Remove(player);
        this.setState(this.state);
    }

    public render(props: IProps, state: IState) {
        const players = props.data.players.map(f => <li onClick={this.removePlayer.bind(this, f)}><Player data={f} /></li>);
        return (<ul class={style.main}>{players}</ul>);
    }
}
