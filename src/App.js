import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Project from './Project';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;