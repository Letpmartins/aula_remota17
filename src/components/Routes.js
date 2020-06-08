import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from '../pages/home'
import Contato from '../pages/contato'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            {/* <Route path="/" exact component={Home} /> */}
            <Route path="/home" exact component={Home} />
            <Route path="/contato" component={Contato} />
        </Switch>
        </BrowserRouter>
    );
}