import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/project1">
          <Project text="Project1"/>
        </Route>
        <Route exact path="/project2">
          <Project text="Project2"/>
        </Route>
        <Route exact path="/project3">
          <Project text="Project3 - WIP"/>
        </Route>
        <Route exact path="/readme_generator">
          <Project text="Readme Generator"/>
        </Route>
        <Route exact path="/password_generator">
          <Project text="Password Generator"/>
        </Route>
        <Route exact path="/team_profile_generator">
          <Project text="Team Profile Generator"/>
        </Route>
        <Route exact path="/">
          <Project />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
