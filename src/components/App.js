import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ResetCSS } from "../css/ResetCss.js";
import Header from "./Header";
import UploadExam from "./UploadExam";
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
                <Route path="/upload" exact>
                    <UploadExam />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
