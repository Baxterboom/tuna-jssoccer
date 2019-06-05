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
    goals?: number;
}

export default class Player extends Component<IProps, IState> {
    public static get Empty(): IPlayer { return { id: -1, firstname: "?", lastname: "?", number: "?" } };

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
                <div class={style.text}>{props.data.displayname}</div>
            </div>
        );
    }

    public static Map(source: IPlayerData, target?: IPlayer): IPlayer {
        function hash(s: string) {
            let hash = 0;
            if (s.length == 0) return hash;
            for (let i = 0; i < s.length; i++) {
                const char = s.charCodeAt(i); hash = ((hash << 5) - hash) + char; hash = hash & hash; // Convert to 32bit integer
            }
            return hash;
        }

        function guid(): any {
            const seg = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            return (seg() + seg() + "-" + seg() + "-4" + seg().substr(0, 3) + "-" + seg() + "-" + seg() + seg() + seg()).toLowerCase();
        }

        source.id = source.id || hash([source.nr || "?", source.firstname || "?", source.lastname || "?",].join("#")).toString();
        if (source.id == "59286199") source.id = guid();

        const result: IPlayer = {
            id: source.id,
            number: source.nr || "?",
            firstname: source.firstname || "?",
            lastname: source.lastname,
            displayname: source.firstname + " " + source.lastname
        };

        return target ? { ...result, ...target } : result;
    }
}