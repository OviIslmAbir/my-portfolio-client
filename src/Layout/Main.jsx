import React from 'react';
import Navbar from '../Shared/Navbar';
import Home from '../Pages/Home/Home/Home';
import Contact from '../Pages/Contact/Contact';
import About from '../Pages/About/About';
import Skills from '../Pages/Skills/Skills';
import Portfolio from '../Pages/portfolio/portfolio';

const Main = () => {
    return (
        // style={{backgroundColor:"#160F30", height:"1000px", color:"white"}}
        <div className='body' >
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Portfolio></Portfolio>
            {/* <Contact></Contact> */}
        </div>
    );
};

export default Main;