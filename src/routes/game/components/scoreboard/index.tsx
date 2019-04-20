import { Component, h } from "preact";
import * as style from "./style.css";
import { IMatch } from "../../Match";
import Team from "./components/team";

interface IProps {
    match: IMatch;
}

interface IState {
}

export default class Scoreboard extends Component<IProps, IState> {

    public render(props: IProps, state: IState) {
        return (
            <div class={[style.main].join(" ")}>
                <Team data={props.match.home} />
                <Team data={props.match.guest} />
                <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'></link>
            </div>
        );
    }
}
