import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Progress from './components/Progress';

const MarketingAppLazy = lazy(() => import('./components/MarketingApp'))
const AuthAppLazy = lazy(() => import('./components/AuthApp'))
const DashboardAppLazy = lazy(() => import('./components/DashboardApp'))

const createClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={createClassName}>
                <div>
                    <Header />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth" component={AuthAppLazy} />
                            <Route path="/dashboard" component={DashboardAppLazy} />
                            <Route path="/" component={MarketingAppLazy} exact />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}
