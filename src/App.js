import React from 'react';
import './App.css';
import Header from './Header/Header'
import Main from './Main/Main'
import Projects from './Projects/Projects'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Header />
      <Main />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </HashRouter>
  );
}

export default App;
