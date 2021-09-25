import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/Sign-up">
        <Login />
      </Route>
    </div>
  );
}

export default App;
