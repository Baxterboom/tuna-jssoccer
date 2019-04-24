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
        const players = Data.PlayerData
            .Where(w => w.group == "Spelare")
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
        let styles: any = {};

        if (!args.event) return (<ul />);

        // styles = this.placement(args.event);
        classes.push(style.playerListShow);

        const items = state.players.map(m => (<li onClick={this.onSelectPlayer.bind(this, m)}>{m.name}</li>));
        const selected = props.match.lines.SelectMany(s => s.players);

        return (
            <ul class={classes.join(" ")} style={styles}>
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

    private placement(target: MouseEvent) {
        if (!target) { return {}; }

        return {
            top: target.clientY - 20,
            left: target.clientX - 10
        }
    }
}
