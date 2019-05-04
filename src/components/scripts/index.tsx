import { Component, h } from "preact";

export default class Scripts extends Component {
    public render() {
        return (
            <div>
                <script src="https://cdn.jsdelivr.net/npm/tuna-jslinq@1.0.5/dist/tuna-JSLinq.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/dragula/3.7.2/dragula.min.css"></script>
            </div>
        );
    }
}
