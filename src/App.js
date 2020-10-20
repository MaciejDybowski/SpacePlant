import React, { useState } from 'react';
import './style/main.scss';
import Nav from './components/Nav'
import Section1 from './components/Section1';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Section1/>
      <Footer/>
    </div>
  );
}

export default App;
