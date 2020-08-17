import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/elements/Main";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
