import { Component, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";
import { createHashHistory } from "history";

import Home from "../routes/home";
import Profile from "../routes/profile";
import Header from "./header";
import Game from "../routes/game";


if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

export default class App extends Component {
    public currentUrl?: string;
    public handleRoute = (e: RouterOnChangeArgs) => {
        this.currentUrl = e.url;
    };

    public render() {
        return (
            <div id="app">
                <Header />
                <Router onChange={this.handleRoute} history={createHashHistory()}>
                    <Route path="/" component={Home} />
                    <Route path="/game/" component={Game} lineup="1, 2, 3, 1" />
                    <Route path="/game/:lineup" component={Game} />
                    <Route path="/profile/" component={Profile} user="me" />
                    <Route path="/profile/:user" component={Profile} />
                </Router>
            </div>
        );
    }
}
