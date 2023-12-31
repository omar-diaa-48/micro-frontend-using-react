import { createBrowserHistory, createMemoryHistory } from 'history'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate)
    }

    ReactDOM.render(<App history={history} />, el)

    return {
        onParentNavigate({ pathname: nextPathname }) {
            history.push(nextPathname);
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root')

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() })
    }
}

export { mount }

