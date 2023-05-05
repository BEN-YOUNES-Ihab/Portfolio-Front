import React from 'react';
import './App.css';
import Nav from './components/Navbar';
import Header from './components/Header';
import Education from './components/Education'
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chat from './components/Chat';
function App() {

  return (
    <>
      <Nav />
      <Header />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Chat />
    </>
  );
}

export default App;
