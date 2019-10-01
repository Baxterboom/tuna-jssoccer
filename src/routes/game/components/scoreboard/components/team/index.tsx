import { Component, h } from "preact";
import * as style from "./style.css";
import { ILine } from "../../../Line";

interface IProps {
    data: ITeam;
}

interface IState {
}

export interface ITeam {
    id: any;
    name: string;
    score: number;
}

export default class Team extends Component<IProps, IState> {

    public set(team: ITeam, step: number) {
        const score = team.score + step;
        if (score < 0) return;
        team.score = score;
        this.setState(this.state);
    }

    public render(props: IProps, state: IState) {
        return (
            <div class={style.main}>
                <div>{props.data.name.toUpperCase()}: {props.data.score}</div>
                <div>
                    <button class={[].join(" ")} onClick={this.set.bind(this, props.data, +1)} title="increase score">+</button>
                    <button class={[].join(" ")} onClick={this.set.bind(this, props.data, -1)} title="decrease score">-</button>
                </div>
            </div>
        );
    }
}
