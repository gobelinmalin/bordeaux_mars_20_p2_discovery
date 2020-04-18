import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Quiz" component={Quiz} />
      </Switch>
    </div>
  );
}

export default App;
