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
            summaryText="Project One allowed the user to search the public NASA Image Database for nearly whatever they want. It also gives the user the option to save images for later viewing."
            deploymentLink="https://foggles.github.io/Web-Developer-s-Guide-to-the-Galaxy/" repositoryLink="https://github.com/Foggles/Web-Developer-s-Guide-to-the-Galaxyv" />
        </Route>
        <Route exact path="/project2">
          <Project text="Project 2 - Together We Can" firstImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621057835/project2_1_hicozq.png"
            secondImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621057834/project2_3_chqdib.png" thirdImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621057834/project2_2_evtrb0.png"
            firstImageText="Screenshot of Registration page, showing how the user can sign up as either a volunteer or customer." secondImageText="Screenshot of the Volunteer page, where the user receives tickets from customers." thirdImageText="Screenshot of Customer page, where the user can make tickets asking for help for either an Essential or Social Service."
            summaryText="Project Two is a web application that allows users to register as either a customer or volunteer. With customers making service requests and the volunteers fulfilling them. Specifically designed to help elderly citizens and those with disabilities."
            deploymentLink="https://backend-warriors-project-2.herokuapp.com/login" repositoryLink="https://github.com/Foggles/Project-2" />
        </Route>
        <Route exact path="/project3">
          <Project text="Project 3 - Varanus" firstImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240131/p3_1_caunq0.png"
            secondImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240130/p3_2_dzkjsg.png" thirdImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240131/p3_3_o3uabn.png"
            firstImageText="" secondImageText="" thirdImageText=""
            summaryText=""
            repositoryLink="https://github.com/Foggles/Project-3" />
        </Route>
        <Route exact path="/readme_generator">
          <Project text="Readme Generator" firstImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240145/RG_1_ueqi3j.png"
            secondImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240145/RG_2_o0vgsc.png" thirdImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240145/RG_3_tolhcq.png"
            firstImageText="" secondImageText="" thirdImageText=""
            summaryText="With this program, the user can generate a full README.md file for their project just by entering information when prompted. It also generates a license.md file for the project to display the license that it operates under."
            repositoryLink="https://github.com/Foggles/Jack-s-README-Generator" />
        </Route>
        <Route exact path="/password_generator">
          <Project text="Password Generator" firstImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240137/PG_1_ckrfnd.png"
            secondImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240137/PG_2_h8gmxq.png" thirdImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240137/PG_3_ncy5mm.png"
            firstImageText="" secondImageText="" thirdImageText=""
            summaryText=""
            deploymentLink="https://foggles.github.io/Jack-s-Password-Generator/" repositoryLink="https://github.com/Foggles/Jack-s-Password-Generator" />
        </Route>
        <Route exact path="/team_profile_generator">
          <Project text="Team Profile Generator" firstImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240153/tg_1_agkpuv.png"
            secondImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240153/tg_2_enll58.png" thirdImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240153/tg_3_l56yxh.png"
            firstImageText="" secondImageText="" thirdImageText=""
            summaryText=""
            repositoryLink="https://github.com/Foggles/Jack-s-Team-Profile-Generator" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
