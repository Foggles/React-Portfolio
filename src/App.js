// * Created by Jack Fogarty

// Importing React, React-Router and CSS
import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Importing components for use in Switch
import About from "./components/About";
import Project from "./components/Project";

// Declaring and defining the App() function, which returns the React Web App
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {/* Each component (About or Project) has numerous props that feed into the components function parameter */}
          <About myPicture="https://res.cloudinary.com/denkxexyj/image/upload/v1661280243/museum1_bqcpj4.jpg"
            myName="Jack Fogarty"
            firstParagraph="G'Day, I'm Jack. I'm a twenty year old guy from Perth, WA but I am currently living in the UK. "
            secondParagraph="I'm an avid gamer, particularly of Grand Strategy Games. I've also recently started collecting vinyl
          records in a wide range of genres. When it comes to music I have an ecclectic music
          taste, and enjoy music from practically any genre. However I would describe myself a metalhead,
          since heavy metal is my favourite genre overall. You can find my current top six albums below,
          and if you click on the album art the album will open in Spotify."/>
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
            firstImageText="Homepage of Varanus. Displaying the games logo, along with three (albeit not great) guides." secondImageText="The character screen, where a user can create new characters, delete characters, and play as characters." thirdImageText="The combat screen, the enemy is at the top and the player's is at the bottom, where their abilities are."
            summaryText="Project 3 - Varanus is a small web game wheere a user can create a character, and fight against a simple AI opponent."
            deploymentLink="https://varanus-project3.herokuapp.com/" repositoryLink="https://github.com/Foggles/Project-3" />
        </Route>
        <Route exact path="/readme_generator">
          <Project text="Readme Generator" firstImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240145/RG_1_ueqi3j.png"
            secondImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240145/RG_2_o0vgsc.png" thirdImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240145/RG_3_tolhcq.png"
            firstImageText="Screenshot showing the complete list of questions asked by the program to the user." secondImageText="Screenshot showing the JSON data of the created README." thirdImageText="Screenshot showing the created README."
            summaryText="With this program, the user can generate a full README.md file for their project just by entering information when prompted. It also generates a license.md file for the project to display the license that it operates under."
            repositoryLink="https://github.com/Foggles/Jack-s-README-Generator" />
        </Route>
        <Route exact path="/password_generator">
          <Project text="Password Generator" firstImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240137/PG_1_ckrfnd.png"
            secondImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240137/PG_2_h8gmxq.png" thirdImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240137/PG_3_ncy5mm.png"
            firstImageText="Screenshot showing the creation screen. With no options selected." secondImageText="Screenshot showing all options selected." thirdImageText="Screenshot showing a generated password with all options selected."
            summaryText="This program can be used to create a custom password, with user customisability for what the password will be comprised of."
            deploymentLink="https://foggles.github.io/Jack-s-Password-Generator/" repositoryLink="https://github.com/Foggles/Jack-s-Password-Generator" />
        </Route>
        <Route exact path="/team_profile_generator">
          <Project text="Team Profile Generator" firstImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240153/tg_1_agkpuv.png"
            secondImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240153/tg_2_enll58.png" thirdImage="https://res.cloudinary.com/denkxexyj/image/upload/v1621240153/tg_3_l56yxh.png"
            firstImageText="Screenshot showing the questions asked by the program to the user for the first employee, the Manager. As well as the JSON result." secondImageText="Screenshot showing the creation of an Engineer employee, as well as the JSON result." thirdImageText="Screenshot showing the index.html result of the program."
            summaryText="A program a user can use to create a list of employees in their team."
            repositoryLink="https://github.com/Foggles/Jack-s-Team-Profile-Generator" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

// Exporting the return of the App() function
export default App;
