import React from 'react'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Projets from '../../components/Projets'
import Skills from '../../components/Skills'

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Skills />
            <Projets />
            <Contact /> 
            <Footer /> 
        </div>
    );
};

export default Home; 