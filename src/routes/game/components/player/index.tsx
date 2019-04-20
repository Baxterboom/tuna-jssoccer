import { Component, h } from "preact";
import * as style from "./style.css";

interface IProps {
    data: IPlayer;
    class?: string;
}

interface IState {
}

export interface IPlayer {
    id: any;
    name: string;
}

export default class Player extends Component<IProps, IState> {

    public render(props: IProps, state: IState) {
        return (
            <div class={[style.player, props.class].join(" ")} id={props.data.id}>
                <img class={style.image} src="assets/img/player-female.svg" alt="player" />
                <div class={style.text}>{props.data.name}</div>
            </div>
        );
    }
}
