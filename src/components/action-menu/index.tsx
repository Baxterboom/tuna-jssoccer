import { Component, h } from "preact";
import * as style from "./style.css";
import { OutsideClickHander } from "../components";

interface IProps {
    options: IActionMenuOptions;
}

interface IState {
    show: boolean;
}

export interface IActionMenuOptions<T = any> {
    title?: string;
    items: Array<IActionMenuItem<T>>;
}

export interface IActionMenuItem<T = any> {
    text: string;
    data?: T;
    onClick?(event: MouseEvent, item: IActionMenuItem): void;
}

export default class ActionMenu extends Component<IProps, IState>{
    private element!: HTMLElement;

    public close() {
        this.setState({ show: false });
    }

    public toggle() {
        this.setState({ show: !this.state.show });
    }

    public callback(e: MouseEvent, item: IActionMenuItem) {
        if (item.onClick) item.onClick(e, item);
        this.close();
    }

    public isOverflowing() {
        return this.element.scrollHeight > this.element.clientHeight || this.element.scrollWidth > this.element.clientWidth;
    }

    public render(props: IProps, state: IState) {
        const items = JSLinq(props.options.items).Select(f => (<li onClick={e => this.callback(e, f)}>{f.text}</li>));
        const itemsClasses = [style.items];

        if (state.show) {
            itemsClasses.push(style.show);
            OutsideClickHander(() => this.element, this.close.bind(this));
        }

        return (
            <div class={style.actionMenu} ref={r => this.element = r}>
                <div class={style.button} onClick={this.toggle.bind(this)} />
                <ul class={itemsClasses.join(" ")}>{items}</ul>
            </div>
        );
    }
}
