import React from "react";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Login from "./components/Login/Login";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/Sign-up">
          <Login />
        </Route>
        <Route path="/About">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
