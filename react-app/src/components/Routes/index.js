import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from "../Home";
import MessageList from "../MessageList"

export const Routes= () =>{
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact> 
                <Home/>
            </Route>
            <Route path="/messagelist/:messagelistId?" component={MessageList}>
                {/* <MessageList/> */}
            </Route>
            <Route path="/404">
                <h6>404 NOT FOUND</h6>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}