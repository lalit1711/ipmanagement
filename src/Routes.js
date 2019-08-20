import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Ip from './ip';

export function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact render={props => <App {...props} />} />
            <Route path="/login" render={props => <App {...props} />} />
            <Route path="/ip" render={props => <Ip {...props} />} />
        </BrowserRouter>
    )
}

export default Routes;