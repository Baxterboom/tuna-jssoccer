import { Component, h } from "preact";
import { ILine } from "../Line";
import * as style from "./style.css";

interface IProps {
  data: IPlayer;
}

interface IState {
}

export interface IPlayer {
  id: any;
  name: string;
  line?: ILine;
  number?: number;
}

export default class Player extends Component<IProps, IState> {
  public static readonly Empty = Object.freeze<IPlayer>({ id: 0, name: "?" });

  public onSelect(e: MouseEvent) {
    const match = this.props.data.line!.match;
    match.playerListEventArgs = {
      event: e,
      selected: this.props.data,
    };
    match.update();
  }

  public render(props: IProps, state: IState) {
    return (
      <div class={[style.player].join(" ")} onClick={this.onSelect.bind(this)} id={props.data.id}>
        {/* <img class={style.image} src="assets/img/tshirt.png" alt="player" /> */}
        <div class={style.number}>{props.data.number}</div>
        <div class={style.text}>{props.data.name}</div>
      </div>
    );
  }
}
