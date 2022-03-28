import React from "react";
import Slider from "../welcome/Slider";
import Welcome from "../welcome/Welcome";
import HowCanWeHelp from "../welcome/HowCanWeHelp";
import Footer from "../Footer";
import Contact from "../welcome/Contact";


function Home() {
    return (
        <div>
          <br/><br/><br/>
          <Slider /> 
           <Welcome/>
           <HowCanWeHelp/>
           <Contact/>
           <Footer/>
        </div>
 

  );
}

export default Home;
