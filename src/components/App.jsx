import React, { Component } from 'react';
import './styles/App.css';
import Header from './Header';
import Hero from './Hero';
import Works from './Works';
import About from './about';
import Form from './Form';
import Articles from './Aricles';
import Footer from './Footer';

function App() {
  return(
    <div>
      <Header />
      <Hero />
      <Works  section="Projects" />
      <Articles  section="Articles" />
      <About />
      <Form />
      <Footer />
    </div>
  )
}

export default App;



