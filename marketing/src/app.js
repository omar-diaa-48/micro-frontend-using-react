import { StylesProvider } from '@material-ui/core';
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
    return (
        <div>
            <StylesProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} ></Route>
                        <Route exact path="/" component={Landing} ></Route>
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
}