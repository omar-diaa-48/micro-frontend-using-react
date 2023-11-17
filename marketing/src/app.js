import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import React from "react";
import { Route, Router, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    productPrefix: 'ma'
})

export default (props) => {
    const { history } = props;

    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} ></Route>
                        <Route exact path="/" component={Landing} ></Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}