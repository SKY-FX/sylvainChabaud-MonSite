import React, { Fragment, Component } from 'react'
import { CSSTransition } from "react-transition-group"

import "../contact/modal.css"

export default class aboutMe extends Component {

    constructor (props)
    {
        super(props);

        // var 
        this.state = {
            onContactClickBool : false,
            onMount:false,
            propsValue:false
        }        
    }

    componentDidMount()
    {
        this.setState({
            onMount : true,
            propsValue : this.props.onAbout
        })
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

    goToDevis = () => {
        
        let background = document.querySelector(".background");
        let imgDark = document.querySelector(".imgDark");

        background.style.transition = "all 1s ease-in-out";
        imgDark.style.transition = "all 1s 0.5s ease-in-out";

        background.style.backgroundColor = "black";
        background.style.opacity = ".2";

        imgDark.style.opacity = "1";
        imgDark.style.backgroundColor = "rgba(0,0,0,.5)";
        // console.log('WINDOW', window.innerWidth);
        if (window.innerWidth>800) imgDark.style.transform = "translateX(40vw) translateY(0) scale(0.5) rotate(135deg)";
        else imgDark.style.transform = "translateX(0) translateY(-40vh) scale(0.5) rotate(135deg)";
        
        this.props.onAboutClick('CONTACT');
        this.setState({
            onContactClickBool : true
        });
    }

    afterEffectFunction = () => {
        if (this.state.onContactClickBool) this.props.history.push("/contact");
    }

    render() {
        

        var doIt = this.props.onAbout;
        // if (this.state.onMount && doIt!==this.state.propsValue) doIt = this.state.onMount;
        console.log("ABOUT ME 1 :", doIt);
        console.log("ABOUT ME 2 :", this.state.propsValue);
        console.log("ABOUT ME 3 :", this.state.onMount);

        return (
            <Fragment>
                <CSSTransition classNames='aboutMe' mountOnEnter unmountOnExit appear in={doIt} timeout={{ enter: 0, exit: 2000 }} >
                    <div className = "aboutClass" onMouseMove={ this.onAboutMoove } onMouseLeave={ this.onAboutLeave }>
                        <h2>Sylvain Chabaud</h2><br/><br/><br/>
                        <h1><b>DEVELOPPEUR INFORMATIQUE</b></h1>
                        <br/><br/>
                        <h3>Site internet - Animation - Effet<br/>IHM - Informatique Industrielle</h3>
                        <br/><br/>
                        <h3>sylvain-chabaud@hotmail.com</h3><br/>
                        <h3>+33 6 80 35 94 17</h3>
                    </div>
                </CSSTransition>
                
                <CSSTransition classNames='Contact_Racc' mountOnEnter unmountOnExit appear in={doIt} timeout={{ enter: 0, exit: 2000 }} onExited={ this.afterEffectFunction } >
                    <div className="ContactRaccClass" onClick={ this.goToDevis }>
                        Si vous souhaitez un devis pour votre futur site internet,
                        ou pour un besoin en entreprise,<br/>
                        n'hésitez pas à me laisser un <b>message</b> !
                    </div>
                </CSSTransition>

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

            </Fragment>
        )
    }
}
