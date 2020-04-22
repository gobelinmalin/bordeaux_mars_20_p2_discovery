import React from "react";
import { Route, Switch } from "react-router-dom";

 
import Home from "./components/Home";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/quiz/:id" component={Quiz} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
