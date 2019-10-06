import { Component, h } from "preact";
import * as style from "./style.css";

export const Colors = [
    "#808080",
    // "#e0e2e4",
    // "#c6bcb6",
    // "#96897f",
    // "#625750",
    "#845b41",
    "#484f4f"
];

interface IProps {
    options: IColorPickerOptions;
}

interface IState {
}

export interface IColorPickerOptions {
    onClick(color: number): void;
}

export default class ColorPicker extends Component<IProps, IState>  {
    public render(props: IProps, state: IState) {
        const colors = Colors.Select((s, i) => <li style={{ background: s }} onClick={props.options.onClick.bind(this, i)}></li >);
        return (<ul class={style.colorPicker}>{colors}</ul>);
    }
}
