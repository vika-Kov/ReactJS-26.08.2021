import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home } from "../Home";
import Chats from "../Chats";
import { Profile, ThemedProfile } from "../Profile";
import { News } from "../News";

export const Routes = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Link to="/chats" className="active">CHATS</Link>
      </div>
      <div className="main">
        <Link to="/profile" className="active">PROFILE</Link>
      </div>
      <div className="main">
        <Link to="/news" className="active">NEWS</Link>
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/profile" exact>
          <ThemedProfile theme={null} />
        </Route>
        <Route path="/chats/:chatId?" component={Chats}>
          {/* <Chats /> */}
        </Route>
        <Route path="/news" component={News}/>
        <Route>
          <h4>404</h4>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
