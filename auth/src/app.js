import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import React from "react";
import { Router, Switch } from 'react-router-dom';

const generateClassName = createGenerateClassName({
    productPrefix: 'au'
})

export default (props) => {
    const { history } = props;

    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}