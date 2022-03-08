import React, {useState} from 'react'
import './App.css';
import Header from './components/header'
import Home from './components/home'
import Menu from './components/Menu'
import HeaderBlock from './components/HeaderBlock';
import HeaderBlock1 from './components/HeaderBlock1';
import HeaderBlock2 from './components/HeaderBlock2.js';
import HeaderBlock3 from './components/HeaderBlock3';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Item from './components/item'


import LandScapePic from './images/landscapePic.jpg'



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
  <Router>     
  <div className="App">
    <HeaderBlock IsMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    {isMenuOpen && <Menu />}
    <HeaderBlock1 />
    <HeaderBlock2 />
    <HeaderBlock3 />
  </div>
  </Router>
  )
}

export default App;
