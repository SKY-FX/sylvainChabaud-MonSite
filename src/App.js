import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import logo from './logo.jpg';
import './App.css';

import AccueilBackground from "./components/accueilBackground"
import FormikYupForm from "./components/formikYupForm/formikYupForm"

import OldPaperGallery from "./components/portefolio/oldPaperGallery/oldPaperGallery"
import Pendu from "./components/portefolio/pendu/pendu"
import Pong from "./components/portefolio/pong/pong"
import Skills from "./components/portefolio/skills/skills"
import Design from "./components/portefolio/design/design"
import Arduino from "./components/portefolio/arduino/arduino"
import Fractal from "./components/portefolio/fractal/fractal"
import Entreprise from "./components/portefolio/entreprise/entreprise"



window.onmousemove = function(e){
  let element = document.getElementsByClassName('el-Style');   
  let moved = (e.clientX/window.innerWidth);
  let elementsLength = element.length;  
  for (var i = 0 ; i < elementsLength ; i++) 
  {  
      element[i].style.opacity = moved;   
  }

  // console.log("ICI", e.clientX);
};



export default class App extends Component {
  state = {
    onLogoBool : false,
    onPortFolioClickBool : false,
    onSkillsClick : false,
    portFolioSelected : 0,
    logo : logo,
    itemPortefolioSelected : ''  
  };

  onLogoClick = () => {  
    
    let background = document.querySelector(".background");
    let textAbout = document.querySelector('.aboutClass');
    let imgDark = document.querySelector(".imgDark");
    let portfolioClass = document.querySelector(".portfolioClass");
    let devisClass = document.querySelector(".devisClass");
    let portefolioContentsClass = document.querySelector(".portefolioContentsClass");
    let portfolioItems = document.querySelector(".portfolioItems");
    let formikClass = document.querySelector(".formikClass");
    let sendEmailOk = document.querySelector(".sendEmailOk");
    let ContactRaccClass = document.querySelector(".ContactRaccClass");

    portefolioContentsClass.style.opacity = "0";
    portefolioContentsClass.style.zIndex = "-1";

    portfolioItems.style.opacity = "0"
    portfolioItems.style.zIndex = "-1";

    if (!this.state.onLogoBool) 
    {
      this.setState({
        onPortFolioClickBool:false
      });

      background.style.backgroundColor = "black";
      background.style.opacity = ".3";

      ContactRaccClass.style.zIndex = "990";
      ContactRaccClass.style.opacity = 1;

      textAbout.style.zIndex = "990";
      textAbout.style.color = "black";
      textAbout.style.opacity = "1";

      imgDark.style.opacity = ".5";
      imgDark.style.backgroundColor = "rgba(255,255,255,.5)";
      imgDark.style.transform = "translateY(-35vh) scale(0.5) rotate(225deg)";
      
      portfolioClass.style.zIndex = "-1";
      portfolioClass.style.display = "initial";
      portfolioClass.style.transform = "translateX(60vw) scale(0)";
      portfolioClass.style.opacity = "0";

      devisClass.style.zIndex = "-1";
      devisClass.style.display = "initial";
      devisClass.style.transform = "translateX(60vh) scale(0)";
      devisClass.style.opacity = "0";

      formikClass.style.opacity = "0";
      formikClass.style.zIndex = "-1";

      sendEmailOk.style.opacity = "0";
      sendEmailOk.style.zIndex = "-1";
     
      this.setState({ logo : logo, onLogoBool:true });
      textAbout.style.transition = "all 2s 1s ease-in-out";
      imgDark.style.transition = "all 1s 0.75s ease-in-out";
      portfolioClass.style.transition = "all 1s 0.25s ease-in-out";
      devisClass.style.transition = "all 1s ease-in-out";
      portefolioContentsClass.style.transition = "all 1s ease-in-out";
      portfolioItems.style.transition = "all 1s ease-in-out";
      formikClass.style.transition = "all 1s ease-in-out";
      sendEmailOk.style.transition = "all 1s ease-in-out";
      ContactRaccClass.style.transition = "all 3s ease-in-out";
    }
    else 
    {
      sendEmailOk.style.zIndex = "-1";
      sendEmailOk.style.opacity = 0;

      formikClass.style.zIndex = "-1";
      formikClass.style.opacity = 0;

      ContactRaccClass.style.zIndex = "-1";
      ContactRaccClass.style.opacity = 0;

      background.style.backgroundColor = "white";
      background.style.opacity = ".5";
      
      textAbout.style.color = "transparent";
      textAbout.style.opacity = "0";
      // textAbout.style.display = "none";
      
      imgDark.style.opacity = "1";
      imgDark.style.backgroundColor = "rgba(0,0,0,.6)";
      imgDark.style.transform = "translateY(0vh) scale(1) rotate(0deg)";
      
      portfolioClass.style.zIndex = "990";
      portfolioClass.style.transform = "translateX(0vw) scale(1)";
      portfolioClass.style.opacity = "1";
      
      devisClass.style.zIndex = "990";
      devisClass.style.transform = "translateX(0vw) scale(1)";
      devisClass.style.opacity = "1";
      
      this.setState({ logo : logo, onLogoBool:false });
      textAbout.style.transition = "all 1s ease-in-out";
      imgDark.style.transition = "all 1s 0.5s ease-in-out";
      portfolioClass.style.transition = "all 1s 1s ease-in-out";
      devisClass.style.transition = "all 1s .7s ease-in-out";
      ContactRaccClass.style.transition = "all 1s ease-in-out";
      formikClass.style.transition = "all 1s ease-in-out";
      sendEmailOk.style.transition = "all 1s ease-in-out";
    }

    background.style.transition = "all 1s ease-in-out";
  }

  onLogoMoove = () => {
    let logoClass = document.querySelector(".logoClass");
    logoClass.style.border = "5px solid black";
    logoClass.style.transition = "all 0.5s linear";
  }

  onLogoLeave = () => {
    let logoClass = document.querySelector(".logoClass");
    logoClass.style.border = "5px solid white";
    logoClass.style.transition = "all 0.5s linear";
  }

  onAboutMoove = (e) => {
    let textAbout = document.querySelector('.aboutClass');
    let background = document.querySelector(".background");

    let XwindowCenter = window.innerWidth/2;
    let diffX = e.clientX - XwindowCenter;
    let x = background.offsetWidth;
    let postionX = (XwindowCenter-diffX/8) - x/2;    

    let YwindowCenter = window.innerHeight/2;
    let diffY = e.clientY - YwindowCenter;
    let y = background.offsetHeight;
    let postionY = (YwindowCenter-diffY/8) - y/2;  

    textAbout.style.transform = "translateX(" + postionX + "px) translateY(" + postionY + "px)";
  
    textAbout.style.transition = "all .5s linear";
  }
  onAboutLeave = () => {
    let textAbout = document.querySelector('.aboutClass');
    textAbout.style.transform = "translateX(" + 0 + "px) translateY(" + 0 + "px)";
  }

  onPortFolioMoove = (e) => {;
    let portfolioClass = document.querySelector('.portfolioClass'); 
    let Height =  portfolioClass.offsetHeight;
    let width =  portfolioClass.offsetWidth;
    let postionX = e.clientX-width/2;
    let postionY = e.clientY-Height/2;
    // console.log("postionX",postionX);

    portfolioClass.style.transform = "translateX(" + postionX + "px) translateY(" + postionY + "px) scale(0.5)" ;
    portfolioClass.style.transition = "all 1s ease-out";
    portfolioClass.style.color = "bisque";
    portfolioClass.style.opacity = ".3";
    portfolioClass.style.cursor = 'pointer';

    if (this.state.onPortFolioClickBool)
    {
      portfolioClass.style.opacity = "0";
      portfolioClass.style.cursor = 'default';
    }
  }
  onPortFolioLeave = () => {
    let portfolioClass = document.querySelector('.portfolioClass');
    portfolioClass.style.transform = "translateX(" + 0 + "px) translateY(" + 0 + "px)";
    portfolioClass.style.transition = "all 1s ease-in-out";
    portfolioClass.style.cursor = 'auto';
    portfolioClass.style.opacity = "1";
    portfolioClass.style.color = "white";
    
    if (this.state.onPortFolioClickBool)
    {
      portfolioClass.style.opacity = "0";
    }
  }

  onDevisMoove = (e) => {
    let devisClass = document.querySelector('.devisClass');  
    let Height =  devisClass.offsetHeight;
    let width =  devisClass.offsetWidth;
    let postionX = e.clientX-width/2;
    let postionY = e.clientY-Height/2 - 80;

    devisClass.style.transform = "translateX(" + postionX + "px) translateY(" + postionY + "px) scale(0.5)";
    devisClass.style.transition = "all 1s ease-out";
    devisClass.style.color = "bisque";
    devisClass.style.opacity = ".3";
    devisClass.style.cursor = 'pointer';

    if (this.state.onPortFolioClickBool)
    {
      devisClass.style.opacity = "0";
      devisClass.style.cursor = 'default';
    }
  }
  onDevisLeave = () => {
    let devisClass = document.querySelector('.devisClass');
    devisClass.style.transform = "translateX(" + 0 + "px) translateY(" + 0 + "px)";
    devisClass.style.transition = "all 1s ease-in-out";
    // devisClass.style.right = "0";
    devisClass.style.color = "white";
    devisClass.style.opacity = "1";
    devisClass.style.cursor = 'auto';

    if (this.state.onPortFolioClickBool)
    {
      devisClass.style.opacity = "0";
    }
  }

  onResizeWindow = () => {
    let portefolioContentsClass = document.querySelector(".portefolioContentsClass");
    let portfolioItems = document.querySelector(".portfolioItems");
    let imgDark = document.querySelector(".imgDark");

    let positionLogo = - window.innerWidth/2 + portfolioItems.offsetWidth/2;
    portefolioContentsClass.style.width = window.innerWidth - portfolioItems.offsetWidth + 'px';
    imgDark.style.transform = "translateX(" + positionLogo + "px) translateY(0) scale(0.3) rotate(135deg)";
  }

  onPortFolioClick = () => {
    
    let background = document.querySelector(".background");
    let portfolioClass = document.querySelector('.portfolioClass');
    let devisClass = document.querySelector('.devisClass');
    let imgDark = document.querySelector(".imgDark");
    let portefolioContentsClass = document.querySelector(".portefolioContentsClass");
    let portfolioItems = document.querySelector(".portfolioItems");

    window.addEventListener('resize', this.onResizeWindow);
    let positionLogo = - window.innerWidth/2 + portfolioItems.offsetWidth/2;

    portfolioClass.style.opacity = "0";
    devisClass.style.opacity = "0";

    imgDark.style.opacity = "1";
    imgDark.style.backgroundColor = "rgba(120,120,120,.5)";
    imgDark.style.transform = "translateX(" + positionLogo + "px) translateY(20vh) scale(0.5) rotate(135deg)";
      
    background.style.backgroundColor = "black";
    background.style.opacity = "1";

    portefolioContentsClass.style.opacity = "1";
    portefolioContentsClass.style.zIndex = "990";
    portefolioContentsClass.style.width = window.innerWidth - portfolioItems.offsetWidth + 'px';

    portfolioItems.style.opacity = "1"
    portfolioItems.style.zIndex = "990";

    background.style.transition = "all 1s 1.25s ease-in-out";
    portfolioClass.style.transition = "all 1s ease-in-out";
    devisClass.style.transition = "all 1s ease-in-out";
    portefolioContentsClass.style.transition = "all 1s 1.25s ease-in-out";
    portfolioItems.style.transition = "all 1s 1s ease-in-out";

    this.setState({
      onPortFolioClickBool : true,
      portFolioSelected : 0
    });
  }

  onDevisClick = () => {
    let portfolioClass = document.querySelector('.portfolioClass');
    let devisClass = document.querySelector('.devisClass');
    let imgDark = document.querySelector(".imgDark");
    let formikClass = document.querySelector(".formikClass");
    let textAbout = document.querySelector('.aboutClass');
    let background = document.querySelector('.background');
    let ContactRaccClass = document.querySelector(".ContactRaccClass");

    background.style.backgroundColor = "white";

    ContactRaccClass.style.opacity = "0";
    ContactRaccClass.style.zIndex = "-1";

    textAbout.style.opacity = "0";
    textAbout.style.zIndex = "-1";

    portfolioClass.style.opacity = "0";
    portfolioClass.style.zIndex = "-1";

    devisClass.style.opacity = "0";
    devisClass.style.zIndex = "-1";

    formikClass.style.opacity = "1";
    formikClass.style.zIndex = "990";

    imgDark.style.opacity = "1";
    imgDark.style.backgroundColor = "rgba(0,0,0,.5)";
    imgDark.style.transform = "translateX(40vw) translateY(0) scale(0.5) rotate(135deg)";
      
    formikClass.style.transition = "all 1.5s 1s ease-in-out";
    devisClass.style.transition = "all 1s ease-in-out";
    portfolioClass.style.transition = "all 1s ease-in-out";
    imgDark.style.transition = "all 1s ease-in-out";
    ContactRaccClass.style.transition = "all 1s ease-in-out";

    this.setState({
      onPortFolioClickBool : true
    });
  }

  itemPortefolioClick = (event) => {
    let cible = event.currentTarget.id;
    
    this.setState({
      itemPortefolioSelected : cible
    });
    // console.log("CURRENT",event.currentTarget.id);
    
  }


  render() {

    return (
    <div className="appClass">
 
      {/* <div className="En_constructionClass">
        <h1 style={{zIndex:"990", color:"red"}}>Site en construction</h1>
      </div> */}
      
      <div className = "background">
        <AccueilBackground />
      </div>

      <div className = "formikClass">
        <FormikYupForm />
      </div>

      <div className="sendEmailOk">
        <h4>Votre message a bien été envoyé !</h4>
      </div>

      <div className="infoTextLogo">
        <h5>
          Clique sur le logo pour continuer
        </h5>
      </div>

      <div className="imgDark" onClick={ this.onLogoClick } onMouseMove={ this.onLogoMoove } onMouseLeave={ this.onLogoLeave }>
       <img src={this.state.logo} className="logoClass" alt="logo_sylvain_chabaud" />
      </div>

      <div className = "aboutClass" onMouseMove={ this.onAboutMoove } onMouseLeave={ this.onAboutLeave }>
          <h2>Sylvain Chabaud</h2><br/><br/><br/>
          <h1><b>DEVELOPPEUR INFORMATIQUE</b></h1><br/>
          <h3>Site internet - Animation - Effet<br/>IHM - Informatique Industrielle</h3><br/><br/>
          <br/>
          <h3>sylvain-chabaud@hotmail.com</h3><br/>
          <h3>+33 6 80 35 94 17</h3>
      </div>

      <div className = "aboutMyLife">
        <span className="defile">
          ReactJS, Javascript, HTML, CSS, PHP, SQL, SERVEUR, BASE DE DONNEE, INFORMATIQUE, TRAITEMENT DE SIGNAL, LANGAGE C, GITHUB, MATLAB, LABVIEW, EAGLE ELECTRONIQUE
        </span>
      </div>

      {/* Curieux de nature et passionné de <b>musique</b>, j'ai voulu tout de suite en comprendre les détails. Tant sur le plan musical que mathématiques et physique.
          J'ai eu la chance d'avoir appris l'<b>électronique</b> depuis mon BEP jusqu'à l'école d'ingénieur. C'est grâce à cela que j'ai pu approndir la musique, le son, le <b>signal</b> sous toutes ses formes.
          L'<b>informatique</b> est resté un outil essentiel dans ma formation et lors de mes dix dernières années expériences dans le monde industriel.
          En effet, ma principale fonction a été Ingénieur d'étude et <b>développeur informatique</b>. J'ai beaucoup appris dans cet univers et plus particulièrement celui de l'aéronautique.
          Nous travaillons en équipe avec de <b>fortes contraintes</b>. Les normes aéronautique ainsi que les processus de validation font parti intégralement du quotidien.
          J'ai pratiqué la méthode de travail <b>Agile</b> plus particulièrement sur le développement du CockPit H2020 de Thales. Le <b>cycle en "V"</b> est le socle même de projet aéronautique (ATR42, A350...) pour permettre entr'autre la traçabilité des specifications, du code et des tests.
          J'ai aussi travailler pour des groupes commes EDF, SAFRAN, KIMO pour développer des <b>Interfaces Hommes Machines</b> (IHM) pour des bancs de tests, ou des simulateurs de signaux entre'autre.
          Ces dernières années j'ai enrichi et spécialisé mes compétences en <b>WEB</b> et <b>design IHM</b>. Au vue de la période difficile qui a débuté mars 2020 suite à la <b>crise sanitaire</b>, j'ai pris un virage professionnel.
          C'est pour cela qu'aujourd'hui, je travaille en tant que <b>Freelance</b> et je favorise les projets en <b>REACTJS</b> FRONT END. Je développe aussi en <b>PHP</b> pour les <b>API REST</b> ainsi que le <b>langage SQL</b> pour les bases de données.
          les langages et outils suivant sont aujourd'hui dans mes <b>compétences</b> : langage C, JAVASCRIPT, REACT JS, PHP, SQL, MATLAB, LABVIEW, DESIGN IHM, EAGLE ELECTRONIQUE.
          Si vous souhaitez réaliser un <b>projet</b> et avez besoin d'une <b>expertise</b> pour vous aider à le concevoir, alors je peux vous proposer mes services.
          N'hésitez pas à me laisser un email à la page <b>Contact</b>. */}

      <div className="portfolioClass" onMouseMove={ this.onPortFolioMoove } onMouseLeave={ this.onPortFolioLeave } onClick={ this.onPortFolioClick } >
        <h4>
          VISITEZ MON PORTEFOLIO
        </h4>
      </div>

      <div className="devisClass" onMouseMove={ this.onDevisMoove } onMouseLeave={ this.onDevisLeave } onClick={ this.onDevisClick }>
        <h4>
          CONTACTEZ-MOI
        </h4>       
      </div>

      {/* <iframe
        className="portefolioContentsClass"
        title="PortFolio"
        // src={itemFolio}
        scrolling="yes"
      ></iframe> */}

      <div className="portefolioContentsClass">
        {(() => {
      
          switch (this.state.itemPortefolioSelected) {
            case 'oldPaper' : return ( <OldPaperGallery /> )
            case 'pong' : return ( <Pong /> )
            case 'pendu' : return ( <Pendu /> )
            case 'skills' : return ( <Skills /> )
            case 'design' : return ( <Design /> )
            case 'arduino' : return ( <Arduino /> )
            case 'fractal' : return ( <Fractal /> )
            case 'entreprise' : return ( <Entreprise /> )
            default : return ( <div>Sélectionnez une rebrique dans le menu !</div> )
          }

        })()}
      </div>
      
      <div className="portfolioItems">
        <div className="portfolioItem" id = "oldPaper" onClick={ this.itemPortefolioClick }>OLD PAPER GALLERY</div>
        <div className="portfolioItem" id = "pendu" onClick={ this.itemPortefolioClick }>LE PENDU</div>
        <div className="portfolioItem" id = "pong" onClick={ this.itemPortefolioClick }>LE PONG</div>
        <div className="portfolioItem" id = "skills" onClick={ this.itemPortefolioClick }>MES COMPETENCES</div>
        <div className="portfolioItem" id = "design" onClick={ this.itemPortefolioClick }>EXEMPLE DE DESIGN</div>
        <div className="portfolioItem" id = "arduino" onClick={ this.itemPortefolioClick }>PROJET ARDUINO</div>
        <div className="portfolioItem" id = "fractal" onClick={ this.itemPortefolioClick }>FRACTAL</div>
        <div className="portfolioItem" id = "entreprise" onClick={ this.itemPortefolioClick }>EXPERIENCE ENTREPRISE</div>
      </div>

      <div className="ContactRaccClass" onClick={ this.onDevisClick }>
        Si vous souhaitez un devis pour votre futur site internet,<br/>
        ou pour un besoin en entreprise,<br/>
        n'hésitez pas à me laisser un message !
      </div>
      

      {/* <footer className="footer">
        Myfooter
      </footer> */}
    </div>
    )
  }
}