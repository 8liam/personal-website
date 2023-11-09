import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import About from '../sections/about';
import Contact from '../sections/contact';
import Education from '../sections/education';
import Skills from '../sections/skills';
import Intro from '../sections/intro';
import Projects from '../sections/projects';
export default function Main() {
    
    return (
        <>
            <div id="content">
                <Navigation />
                <Intro />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
