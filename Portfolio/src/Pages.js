import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Project from './Project';
import Achievements from './Achievements';
import Footer from './Footer';

function Pages() {
    return (
        <>
           <Navbar />
           <div id="hero"><Hero /></div>
           <div id="about-me"><AboutMe /></div>
           <div id="project"><Project /></div>
           <div id="achievements"><Achievements /></div>
           <Footer />
        </>
    );
}

export default Pages;
