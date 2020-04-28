import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";
import AboutUs from "./components/AboutUs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/AboutUs" component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
