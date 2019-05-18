import { Component, h } from "preact";
import ActionMenu, { IActionMenuOptions } from "../../../../components/action-menu";
import Match from "../../match";
import Player, { IPlayer } from "../Player";
import * as style from "./style.css";

interface IProps {
  data: ILine;
}

interface IState {
  actionMenu: IActionMenuOptions;
}

export interface ILine {
  match: Match;
  players: IPlayer[];
}

export default class Line extends Component<IProps, IState> {

  public readonly state: IState = {
    actionMenu: {
      title: "A title",
      items: []
    }
  }

  public componentWillMount() {
    this.state.actionMenu.items.AddRange([
      { text: "Add player", onClick: this.addPlayer.bind(this, undefined) },
      { text: "Add line", onClick: this.addLine.bind(this) },
      { text: "Remove line", onClick: this.removeLine.bind(this) }
    ]);
  }

  public addPlayer(player?: IPlayer) {
    this.props.data.players.Add(player || { ...Player.Empty, ...{ line: this.props.data } });
    this.setState(this.state);
  }

  public removePlayer(player: IPlayer) {
    this.props.data.players.Remove(player);
    this.setState(this.state);
  }

  public addLine() {
    const match = this.props.data.match;
    const line: ILine = { players: [], match };
    line.players.push({ ...Player.Empty, line });
    match.lines.Insert(line, match.lines.indexOf(this.props.data) + 1);
    match.update();
  }

  public removeLine() {
    const match = this.props.data.match;
    match.lines.Remove(this.props.data);
    match.update();
  }

  public render(props: IProps, state: IState) {
    let count = 0;
    const players = props.data.players.map(f => <Player key={count++} data={f} />);
    return (
      <div class={style.line}>
        <ActionMenu options={state.actionMenu} />
        <div class={["players", style.players].join(" ")}>{players}</div>
      </div>);
  }
}