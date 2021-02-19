import React, { Component, Fragment } from 'react'
import { CSSTransition } from "react-transition-group"

import "../contact/modal.css"

export default class menu extends Component {

    constructor (props)
    {
        super(props);

        // var 
        this.state = {
            onPortFolioClickBool : false,
            onDevisClickBool : false
        }        
    }

    onDevisMoove = (e) => {
        // let devisClass = document.querySelector('.devisClass');  
        // let Height =  devisClass.offsetHeight;
        // let width =  devisClass.offsetWidth;
        // let postionX = e.clientX-width/2;
        // let postionY = e.clientY-Height/2 - 80;
    
        // devisClass.style.transform = "translateX(" + postionX + "px) translateY(" + postionY + "px) scale(0.7)";
        // devisClass.style.transition = "all 1s ease-out";
        // devisClass.style.color = "bisque";
        // devisClass.style.opacity = ".3";
        // devisClass.style.cursor = 'pointer';
    }

    onDevisLeave = () => {
        // let devisClass = document.querySelector('.devisClass');
        // devisClass.style.transform = "translateX(" + 0 + "px) translateY(" + 0 + "px)";
        // devisClass.style.transition = "all 1s ease-in-out";
        // // devisClass.style.right = "0";
        // devisClass.style.color = "white";
        // devisClass.style.opacity = "1";
        // devisClass.style.cursor = 'auto';
    }

    onDevisClick = () => {
        let imgDark = document.querySelector(".imgDark");
        let background = document.querySelector('.background');
        
        background.style.backgroundColor = "white";
    
        imgDark.style.opacity = "1";
        imgDark.style.backgroundColor = "rgba(0,0,0,.5)";
        if (window.innerWidth>800) imgDark.style.transform = "translateX(40vw) translateY(0) scale(0.5) rotate(135deg)";
        else imgDark.style.transform = "translateX(0) translateY(-40vh) scale(0.5) rotate(135deg)";
        imgDark.style.transition = "all 1s ease-in-out";
    
        this.props.onMenuClick('CONTACT');

        this.setState({
            onDevisClickBool : true
        });
    }



    onPortFolioMoove = (e) => {;
        // let portfolioClass = document.querySelector('.portfolioClass'); 
        // let Height =  portfolioClass.offsetHeight;
        // let width =  portfolioClass.offsetWidth;
        // let postionX = e.clientX-width/2;
        // let postionY = e.clientY-Height/2;
        // // console.log("postionX",postionX);
    
        // portfolioClass.style.transform = "translateX(" + postionX + "px) translateY(" + postionY + "px) scale(0.7)" ;
        // portfolioClass.style.transition = "all 1s ease-out";
        // portfolioClass.style.color = "bisque";
        // portfolioClass.style.opacity = ".3";
        // portfolioClass.style.cursor = 'pointer';
    }

    onPortFolioLeave = () => {
        // let portfolioClass = document.querySelector('.portfolioClass');
        // portfolioClass.style.transform = "translateX(" + 0 + "px) translateY(" + 0 + "px)";
        // portfolioClass.style.transition = "all 1s ease-in-out";
        // portfolioClass.style.cursor = 'auto';
        // portfolioClass.style.opacity = "1";
        // portfolioClass.style.color = "white";
    }

    
    onPortFolioClick = () => {
        let background = document.querySelector(".background");
        let imgDark = document.querySelector(".imgDark");

        background.style.backgroundColor = "black";
        background.style.opacity = "1";

        background.style.transition = "all 1s 1.25s ease-in-out";
        imgDark.style.transition = "all 1s ease-in-out";

        this.props.onMenuClick('PORTEFOLIO');

        this.setState({
            onPortFolioClickBool : true
        });
    }

    afterEffectFunction = () => 
    {
        if (this.state.onDevisClickBool) this.props.history.push("/contact");
        if (this.state.onPortFolioClickBool) this.props.history.push("/portefolio");
    }

    render() {
    
        var effectLauncher = this.props.onMenu;
        console.log("MENU : ", effectLauncher);

        return (
            <Fragment>

                <CSSTransition classNames='portefolio' mountOnEnter unmountOnExit appear in={effectLauncher} timeout={{ enter: 0, exit: 2000}} >
                    <div className="portfolioClass" onMouseMove={ this.onPortFolioMoove } onMouseLeave={ this.onPortFolioLeave } onClick={ this.onPortFolioClick } >
                        <h4>VISITEZ MON PORTEFOLIO</h4>
                    </div>                    
                </CSSTransition>

                <CSSTransition classNames='devis' mountOnEnter unmountOnExit appear in={effectLauncher} timeout={{ enter: 0, exit: 1000}} onExited={ this.afterEffectFunction }>
                    <div className="devisClass" onMouseMove={ this.onDevisMoove } onMouseLeave={ this.onDevisLeave } onClick={ this.onDevisClick } >
                        <h4>CONTACTEZ-MOI</h4>
                    </div>                    
                </CSSTransition>
                
            </Fragment>
        )
    }
}