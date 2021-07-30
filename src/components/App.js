import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ResetCSS } from "../css/ResetCss.js";
import Header from "./Header.js";
import Main from "./Main";

export default function App() {
    return (
        <BrowserRouter>
            <ResetCSS />
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
