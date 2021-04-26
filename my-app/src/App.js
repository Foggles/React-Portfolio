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
          <Project text="Project1- A Web Developer's Guide to the Galaxy" fileName="project1"/>
        </Route>
        <Route exact path="/project2">
          <Project text="Project2" fileName="project2"/>
        </Route>
        <Route exact path="/project3">
          <Project text="Project3 - WIP" fileName="project3"/>
        </Route>
        <Route exact path="/readme_generator">
          <Project text="Readme Generator" fileName="readmegen"/>
        </Route>
        <Route exact path="/password_generator">
          <Project text="Password Generator" fileName="passgen"/>
        </Route>
        <Route exact path="/team_profile_generator">
          <Project text="Team Profile Generator" fileName="teamgen"/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
