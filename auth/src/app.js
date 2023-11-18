import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import React from "react";
import { Route, Router, Switch } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';

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
                        <Route path="/auth/signin" component={Signin} />
                        <Route path="/auth/signup" component={Signup} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
