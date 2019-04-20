import { Component, h } from "preact";
import { Link } from "preact-router/match";
import * as style from "./style.css";

export default class Scripts extends Component {
    public render() {
        return (
            <script src="https://cdn.jsdelivr.net/npm/tuna-jslinq@1.0.5/dist/tuna-JSLinq.js"></script>
        );
    }
}
