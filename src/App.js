import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "Home";
import Contact from "Contact";
import Quiz from "Quiz";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </div>
  );
}

export default App;
