import React, {useEffect} from "react";

import Header from '../../components/Header'
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';

const Main = () => {
    useEffect(() => {
        document.title = "Arthur Borges Portifólio"
      })
   return(
    <>
        <Header />
        <About />
        <Projects />
        <Skills />
    </>
        
   );
}

export default Main;