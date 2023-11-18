import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthApp from './components/AuthApp';
import Header from "./components/Header";
import MarketingApp from './components/MarketingApp';

const createClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={createClassName}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/auth" component={AuthApp} />
                        <Route path="/" component={MarketingApp} exact />
                    </Switch>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}
