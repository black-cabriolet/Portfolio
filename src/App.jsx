import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Resume from './containers/resume';
import NavBar from "./components/navBar";
import './App.scss'
import ReactParticles from "./components/particles/index.jsx";

function App() {
    const location = useLocation();
    console.log(location);

    const renderParticlesJsInHomePage = location.pathname === "/";

  return (
    <>
        <div className="App">
            {renderParticlesJsInHomePage && (
                <ReactParticles id={"particles"}/>
            )}

            <NavBar className="navbar"/>

            {/* Main Routes */}
            <div className="App__main-page-content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                </Routes>
            </div>

        </div>

    </>
  )
}

export default App
