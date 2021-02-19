import React, { Component } from 'react'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'

import './App.css';
import "./containers/contact/modal.css"

import AccueilBackground from "./components/accueilBackground"
import Logo from "./components/logo/logo"

import Menu from "./containers/menu/menu"
import Contact from "./containers/contact/contact"
import AboutMe from "./containers/aboutMe/aboutMe"
import Portefolio from "./containers/portefolio/portefolio"


window.onmousemove = function(e){
  let element = document.getElementsByClassName('el-Style');   
  let moved = (e.clientX/window.innerWidth);
  let elementsLength = element.length;  
  for (var i = 0 ; i < elementsLength ; i++) 
  {  
      element[i].style.opacity = moved;   
  }
};




class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      menuOn : true,
      contactOn : false,
      aboutOn : false,
      portefolioOn : false
    }

  }

  componentDidMount()
  {
    window.addEventListener('resize', this.onResizeWindow);
  }

  onResizeWindow = () => {
    let portefolioContentsClass = document.querySelector(".portefolioContentsClass");
    let portfolioItems = document.querySelector(".portfolioItems");
    let imgDark = document.querySelector(".imgDark");
  
    
    if (portefolioContentsClass && portfolioItems) 
    {
      let positionLogo = - window.innerWidth/2 + portfolioItems.offsetWidth/2;
      // portefolioContentsClass.style.width = window.innerWidth - portfolioItems.offsetWidth + 'px';
      imgDark.style.transform = "translateX(" + positionLogo + "px) translateY(25vh) scale(0.7) rotate(135deg)";
    }
  }

  componentsReturn = (label) => {
    console.log("LABEL", label);

    if (label === 'CONTACT')
    {
      this.setState({
        menuOn : false,
        contactOn : true,
        aboutOn : false,
        portefolioOn : false
      })
    }

    if (label === 'ABOUT')
    {
      this.setState({
        menuOn : false,
        contactOn : false,
        aboutOn : true,
        portefolioOn : false
      })
    }

    if (label === 'ACCUEIL')
    {
      this.setState({
        menuOn : true,
        contactOn : false,
        aboutOn : false,
        portefolioOn : false
      })
    }

    if (label === 'PORTEFOLIO')
    {
      this.setState({
        menuOn : false,
        contactOn : false,
        aboutOn : false,
        portefolioOn : true
      })
    }
  }

  render() {

    return (
    <div className="appClass">

 <div className="En_constructionClass">
        <h1 style={{zIndex:"990", color:"red"}}>Site en construction</h1>
      </div>


      <Router>
 
        <Logo onLogoClick={this.componentsReturn} />

        <Switch>
          {/* Page de menu' */}
          <Route exact path='/' render={ (props) => (
              <Menu {...props} onMenu={this.state.menuOn} onMenuClick={this.componentsReturn} /> 
            )} 
          />

          {/* Page aboutMe' */}
          <Route exact path='/aboutMe' render={ (props) => (
              <AboutMe {...props} onAbout={this.state.aboutOn} onAboutClick={this.componentsReturn}/> 
            )} 
          />

          {/* Page contact' */}
          <Route exact path='/contact' render={ (props) => (
              <Contact {...props} onContact={this.state.contactOn} onContactMe={this.componentsReturn} /> 
            )} 
          />

          {/* Page portefolio' */}
          <Route exact path='/portefolio' render={ (props) => (
              <Portefolio {...props} onPortefolio={this.state.portefolioOn} onPrtefolioMe={this.componentsReturn} /> 
            )} 
          />

          

        </Switch>
      </Router> 

      {/* * TJS AFFICHES */ }
      {/* ************************************ */}
      <div className = "background">
        <AccueilBackground />
      </div> 

      <div className="infoTextLogo">
        <h5>Clique sur le logo pour continuer</h5>
      </div>

      <div className = "aboutMyLife">
        <span className="defile">
          ReactJS, Javascript, HTML, CSS, PHP, SQL, SERVEUR, BASE DE DONNEE, INFORMATIQUE, TRAITEMENT DE SIGNAL, LANGAGE C, GITHUB, MATLAB, LABVIEW, EAGLE ELECTRONIQUE
        </span>
      </div>
    </div>
    )
  }
}

export default App;