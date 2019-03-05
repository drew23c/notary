import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Info from './components/Info/Info';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Services/>
        <Contact/>
        <Info/>
        <Form/>
        <Footer/>
      </div>
    );
  }
}

export default App;
