import React, {useEffect} from "react";

import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';

const Main = () => {
    useEffect(() => {
        document.title = "Arthur Borges Portifólio"
      })
   return(
    <>
        <About />
        <Projects />
        <Skills />
    </>
        
   );
}

export default Main;