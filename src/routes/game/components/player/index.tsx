import { Component, h } from "preact";
import { ILine } from "../Line";
import * as style from "./style.css";
import { IPlayerData, EmptyPlayerData } from "../../../../assets/db/players";

interface IProps {
    data: IPlayer;
}

interface IState {
}

export interface IPlayer {
    id?: any;
    firstname?: string;
    lastname?: string;
    displayname?: string;
    line?: ILine;
    color?: string;
    number?: string;
}

export default class Player extends Component<IProps, IState> {
    //@ts-ignore
    public static readonly Empty = Object.freeze<IPlayer>({ id: 0, firstname: "?" });

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
            <div class={[style.player].join(" ")} style={{ background: props.data.color }} onClick={this.onSelect.bind(this)} id={props.data.id}>
                {/* <img class={style.image} src="assets/img/tshirt.png" alt="player" /> */}
                <div class={style.number}>{props.data.number}</div>
                <div class={style.text}>{this.shortName(props.data)}</div>
            </div>
        );
    }

    public static Map(source: IPlayerData, target?: IPlayer): IPlayer {
        const result: IPlayer = {
            id: [source.nr || "?", source.firstname || "?", source.lastname || "?",].join("#"),
            number: source.nr || "?",
            firstname: source.firstname || "?",
            lastname: source.lastname,
            displayname: source.firstname + " " + source.lastname
        };

        return target ? { ...result, ...target } : result;
    }

    private shortName(player: IPlayer) {
        const last = player.lastname || "";
        return `${player.firstname} ${last.charAt(0)}`
    }
}
