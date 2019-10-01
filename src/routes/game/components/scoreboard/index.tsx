import { Component, h } from "preact";
import Match from "../../match";
import Team from "./components/team";
import * as style from "./style.css";
import Timer from "../../../../components/timer";

interface IProps {
    match: Match;
}

interface IState {
}

export default class Scoreboard extends Component<IProps, IState> {
    public render(props: IProps, state: IState) {
        return (
            <div class={[style.scoreboard].join(" ")}>
                <Team data={props.match.home} />
                <Timer ticks={25 * 1000 * 60}></Timer>
                <Team data={props.match.guest} />
            </div>
        );
    }
}
