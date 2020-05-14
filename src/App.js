import React from "react";
import { Route, Switch } from "react-router-dom";

 
import Home from "./components/Home";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";
import AboutUs from "./components/AboutUs";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Destination from "./components/Destination"

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/destination/:id" component={Destination} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
