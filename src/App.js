import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './component/About';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Services from './component/Services';
import Team from './component/Team';
import withClickTracker from './Hoc';
import component from './component/component';
import Modal from './Portal';


function App() {
    const MyComponenetwithTracker = withClickTracker(component);
    return (
        <>

            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>


            <MyComponenetwithTracker/>
            <Modal>
                <p>Contenu de la modal</p>
            </Modal>
        </>
    );
}

export default App;
