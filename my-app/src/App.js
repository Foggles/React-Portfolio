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
          <Project text="Project 1- A Web Developer's Guide to the Galaxy" firstImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621057825/project1_1_rwf3bi.png"
            secondImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621057823/project1_2_fifznz.png" thirdImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621057822/project1_3_v3hiw7.png"
            firstImageText="Screenshot of the APOD, along with the searchbar." secondImageText="Screenshot showing the results of searching for Saturn" thirdImageText="Screenshot showing the modal containing an enlarged image and caption. With ability ot save image to gallery."
            summaryText="Project One allowed the user to search the public NASA Image Database for nearly whatever they want. It also gives the user the option to save images for later viewing." />
        </Route>
        <Route exact path="/project2">
          <Project text="Project 2 - Together We Can" firstImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621057835/project2_1_hicozq.png"
            secondImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621057834/project2_3_chqdib.png" thirdImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621057834/project2_2_evtrb0.png"
            firstImageText="" secondImageText="" thirdImageText=""
            summaryText="Project Two is a web application that allows users to register as either a customer or volunteer. With customers making service requests and the volunteers fulfilling them. Specifically designed to help elderly citizens and those with disabilities." />
        </Route>
        <Route exact path="/project3">
          <Project text="Project 3 - Varanus" fileName="project3" />
        </Route>
        <Route exact path="/readme_generator">
          <Project text="Readme Generator" fileName="readmegen" />
        </Route>
        <Route exact path="/password_generator">
          <Project text="Password Generator" fileName="passgen" />
        </Route>
        <Route exact path="/team_profile_generator">
          <Project text="Team Profile Generator" fileName="teamgen" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
