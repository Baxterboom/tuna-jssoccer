import { Component, h } from "preact";
import * as style from "./style.css";

export default class ColorPicker extends Component {
    public render() {
        const colors = [
            "#808080",
            "#e0e2e4",
            "#c6bcb6",
            "#96897f",
            "#625750",
            "#484f4f"
        ].Select(s => <li style={{ background: s }}></li>);

        return (<ul class={style.colorPicker}>{colors}</ul>);
    }
}
