import { Component, h } from "preact";
import * as style from "./style.css";

interface Props { }

interface State { }

export default class Home extends Component<Props, State> {
    public render() {
        return (
            <div class={style.home}>
                <h1>Home</h1>
                <p>This is the Home component.</p>
            </div>
        );
    }
}
