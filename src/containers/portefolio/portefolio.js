import React, { Component, Fragment } from 'react'
import { CSSTransition } from "react-transition-group"

import OldPaperGallery from "../../components/portefolio/oldPaperGallery/oldPaperGallery"
import Pendu from "../../components/portefolio/pendu/pendu"
import Pong from "../../components/portefolio/pong/pong"
import Skills from "../../components/portefolio/skills/skills"
import Design from "../../components/portefolio/design/design"
import Arduino from "../../components/portefolio/arduino/arduino"
import Fractal from "../../components/portefolio/fractal/fractal"
import Entreprise from "../../components/portefolio/entreprise/entreprise"


export default class portefolio extends Component {

    constructor (props)
    {
        super(props);

        // var 
        this.state = {
            itemPortefolioSelected : ''
        }        
    }

    
    componentDidMount()
    {
        let portefolioContentsClass = document.querySelector(".portefolioContentsClass");
        let portfolioItems = document.querySelector(".portfolioItems");
        let imgDark = document.querySelector(".imgDark");
    
        let positionLogo = - window.innerWidth/2 + portfolioItems.offsetWidth/2;
        // portefolioContentsClass.style.width = window.innerWidth - portfolioItems.offsetWidth + 'px';
        imgDark.style.transform = "translateX(" + positionLogo + "px) translateY(25vh) scale(0.7) rotate(135deg)";
    
        imgDark.style.opacity = "1";
        imgDark.style.backgroundColor = "rgba(120,120,120,.5)";
        
        imgDark.style.transition = "all 2s ease-in-out";
    
    }

    itemPortefolioClick = (event) => {
        let cible = event.currentTarget.id;
        
        this.setState({
          itemPortefolioSelected : cible
        });
        
    }

    afterEffectFunction = () => 
    {
        this.props.history.push("/about");
    }

    render() {

        var effectLauncher = this.props.onPortefolio;
        console.log("MENU : ", effectLauncher);

        return (
            <div className="portefolioPage">

                <CSSTransition classNames='portefolioContainer' appear in={effectLauncher} timeout={{ enter: 0, exit: 2000}} onExited={ this.afterEffectFunction }>
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
                </CSSTransition>

                <CSSTransition classNames='portefolioContainer' appear in={effectLauncher} timeout={{ enter: 0, exit: 2000}} onExited={ this.afterEffectFunction }>
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
                </CSSTransition>

                

            </div>
        )
    }
}
