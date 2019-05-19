import { Component, h } from "preact";
import * as style from "./style.css";

interface IProps {
    options: IColorPickerOptions;
}

interface IState {
}

export interface IColorPickerOptions {
    onClick(color: string): void;
}

export default class ColorPicker extends Component<IProps, IState>  {
    public render(props: IProps, state: IState) {
        const colors = [
            "#808080",
            // "#e0e2e4",
            // "#c6bcb6",
            // "#96897f",
            // "#625750",
            "#845b41",
            "#484f4f"
        ].Select(s => <li style={{ background: s }} onClick={props.options.onClick.bind(this, s)}></li >);

        return (<ul class={style.colorPicker}>{colors}</ul>);
    }
}
