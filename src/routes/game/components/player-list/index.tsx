import { Component, h } from "preact";
import Match from "../../match";
import { IPlayer } from "../Player";
import * as style from "./style.css";
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
    public state: IState = {
        players: []
    }

    public componentWillMount() {
        const players = Data.Players()
            .Select(s => {
                const player: IPlayer = {
                    id: s.firstname + " " + s.lastname,
                    name: s.firstname + " " + s.lastname,
                    number: parseInt(s.nr || "0")
                };
                return player;
            }).OrderBy(o => o.name)
        this.state.players.AddRange(players);
    }

    public render(props: IProps, state: IState) {
        const args = props.match.playerListEventArgs;
        const classes = [style.playerList];

        if (!args.event) return (<ul />);

        classes.push(style.show);

        const selected = props.match.lines.SelectMany(s => s.players);
        const items = state.players.map(m => {
            const playerClasses = selected.Any(a => a.id == m.id) ? style.selected : "";
            return (<li class={playerClasses} onClick={this.onSelectPlayer.bind(this, m)}>{m.name}</li>);
        });

        return (
            <ul class={classes.join(" ")}>
                <li onClick={this.onRemoveSelectPlayer.bind(this)}>Remove - {args.selected!.name}</li>
                {items}
            </ul>
        );
    }

    private close() {
        this.props.match.playerListEventArgs = {};
        this.props.match.update();
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
