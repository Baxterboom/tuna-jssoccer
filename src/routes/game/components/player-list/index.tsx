import { Component, h } from "preact";
import Match from "../../match";
import Player, { IPlayer } from "../Player";
import * as style from "./style.css";
import ColorPicker from "../../../../components/color-picker";
import { OutsideClickHander } from "../../../../components/components";
import Data from "../../../../assets/db/players";

interface IProps {
    match: Match;
}

interface IState {
    players: IPlayer[];
}

export interface IPlayerListEventArgs {
    event?: MouseEvent;
    selected?: IPlayer;
}

export default class PlayerList extends Component<IProps, IState> {
    private element!: Element;

    public state: IState = {
        players: []
    }

    public componentWillMount() {
        const players = Data.Players()
            .Select(s => Player.Map(s))
            .OrderBy(o => o.displayname)
        this.state.players.AddRange(players);
    }

    public render(props: IProps, state: IState) {
        const args = props.match.playerListEventArgs;
        const classes = [style.playerList];

        if (!args.event) return (<ul class={classes.join(" ")} />);

        classes.push(style.show);
        OutsideClickHander(() => this.element, this.close.bind(this));

        const selected = props.match.lines.SelectMany(s => s.players);
        const name = (args.selected!.number || "?") + " # " + (args.selected!.displayname || "?");
        const items = state.players.map(m => {
            const playerClasses = selected.Any(a => a.id == m.id) ? style.selected : "";
            return (
                <li class={playerClasses} onClick={this.onSelectPlayer.bind(this, m)}>
                    <span>{m.displayname}</span>
                </li>);
        });

        return (
            <ul class={classes.join(" ")} ref={r => this.element = r}>
                <li class={style.player}>
                    <div class={style.playerName}>
                        <input type="text" placeholder="Enter name" value={name} onChange={this.setText.bind(this)} />
                        <button onClick={this.onRemoveSelectPlayer.bind(this)}>Remove</button>
                    </div>
                    <div class={style.playerGoals}>
                        <span>Score: {args.selected!.goals || 0}</span>
                        <button onClick={this.score.bind(this, args.selected!, -1)}>-</button>
                        <button onClick={this.score.bind(this, args.selected!, +1)}>+</button>
                    </div>
                </li>
                <li class={style.playerColor}><ColorPicker options={{ onClick: this.setColor.bind(this) }} /></li>
                {items}
            </ul>
        );
    }

    private score(player: IPlayer, step: number) {
        if (step < 0 && player.goals == 0) return;
        player.goals! += step;
        this.props.match.update();
    }

    private close() {
        this.props.match.playerListEventArgs = {};
        this.props.match.update();
    }

    private setText(e: any) {
        //@ts-ignore
        const values = e.target.value.split(" # ") as string[];
        const args = this.props.match.playerListEventArgs;
        args.selected!.number = values.length < 2 ? "" : values.FirstOrDefault();
        args.selected!.displayname = values.LastOrDefault();
        this.props.match.update();
    };

    private setColor(color: number) {
        const args = this.props.match.playerListEventArgs;
        args.selected!.color = color;
        this.props.match.update();
        this.close();
        console.log(args.selected);
    }

    private onSelectPlayer(player: IPlayer) {
        const args = this.props.match.playerListEventArgs;
        const selected = args.selected;
        if (!selected || !selected.line) { return; }

        const line = player.line = selected.line;
        const index = line.players.indexOf(selected);
        line.players[index] = { ...player };
        this.close();
    }

    private onRemoveSelectPlayer() {
        const args = this.props.match.playerListEventArgs;
        const selected = args.selected;
        if (!selected || !selected.line) { return; }

        selected.line.players.Remove(selected);
        this.close();
    }
}