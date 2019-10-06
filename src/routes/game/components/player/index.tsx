import { Component, h } from "preact";
import { ILine } from "../Line";
import * as style from "./style.css";
import { IPlayerData } from "../../../../assets/db/players";
import { Colors } from "../../../../components/color-picker";

interface IProps {
    data: IPlayer;
}

interface IState {
}

export interface IPlayer {
    id?: any;
    color: number;
    goals: number;
    firstname?: string;
    lastname?: string;
    displayname?: string;
    line?: ILine;
    number?: string;
}

export default class Player extends Component<IProps, IState> {
    public static get Empty(): IPlayer { return { id: -1, firstname: "?", lastname: "?", number: "?", goals: 0, color: 0 } };

    public onSelect(e: MouseEvent) {
        const match = this.props.data.line!.match;
        match.playerListEventArgs = {
            event: e,
            selected: this.props.data,
        };
        match.update();
    }

    public render(props: IProps, state: IState) {
        const data = props.data;
        const goals = data.goals! > 0 ? (<div class={style.goals}>{data.goals}</div>) : ("");
        return (
            <div class={[style.player].join(" ")} style={{ background: Colors[data.color] }} onClick={this.onSelect.bind(this)} id={data.id}>
                {/* <img class={style.image} src="assets/img/tshirt.png" alt="player" /> */}
                <div class={style.number}>{data.number}</div>
                <div class={style.text}>{data.displayname}</div>
                {goals}
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
            color: 0,
            goals: 0,
            number: source.nr || "?",
            firstname: source.firstname || "?",
            lastname: source.lastname,
            displayname: source.firstname + " " + source.lastname
        };

        return target ? { ...result, ...target } : result;
    }
}