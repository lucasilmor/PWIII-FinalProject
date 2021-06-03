import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../src/pages/home';
import Update from '../src/pages/update';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/update/:id" exact component={Update}/>
            </Switch>
        </BrowserRouter>
    )
}