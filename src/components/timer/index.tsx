import { Component, h } from "preact";
import * as style from "./style.css";

interface IProps {
    ticks: number;
}

interface IState {
    timer: number;
    ticks: number;
}

export default class Timer extends Component<IProps, IState>  {

    constructor() {
        super();
        this.setState({
            timer: 0
        });
    }

    public componentDidMount() {
        this.reset();
    }

    public componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    public set(ticks: number) {
        const result = this.state.ticks || this.props.ticks;
        this.setState({
            ticks: result + ticks
        });
    }

    public toggle() {
        if (this.state.timer > 0) {
            clearInterval(this.state.timer);
            return this.setState({ timer: 0 });
        }

        const timer = setInterval(() =>
            this.setState({ timer, ticks: this.state.ticks - 1000 }), 1000);
    }

    public reset() {
        this.setState({
            timer: 0,
            ticks: this.props.ticks
        });
    }

    public render(props: IProps, state: IState) {
        const time = new Date(0, 0, 0, 0, 0, 0, state.ticks).toTimeString().match(/(^[^\s]+)\s/);
        return (<div class={style.timer}>
            <div>
                <span>{time![0]}</span>
            </div>
            <div>
                <button onClick={this.toggle.bind(this)} title="toggle">{this.state.timer < 1 ? "Start" : "Pause"}</button>
                <button onClick={this.set.bind(this, 15000)} title="increase">+</button>
                <button onClick={this.set.bind(this, -15000)} title="decrease">-</button>
            </div>
        </div>);
    }
}
