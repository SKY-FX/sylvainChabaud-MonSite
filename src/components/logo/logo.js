import React, { Component } from 'react'
import logoJpg from '../../logo.jpg';
import { withRouter } from 'react-router'
import { CSSTransition } from "react-transition-group"

class logo extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            whereTogo : '',
            clicktoggle : false
        }
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

    onLogoClick = () => {  
    
        let background = document.querySelector(".background");
        let imgDark = document.querySelector(".imgDark");

        background.style.transition = "all 1s ease-in-out";
        imgDark.style.transition = "all 1.5s ease-in-out";
        
        background.style.opacity = ".5";
        imgDark.style.opacity = "1";

        var currentURL = this.props.history.location.pathname;
        if (currentURL==="/" || currentURL==="/contact" || currentURL==="/portefolio") 
        {
            this.props.onLogoClick('ABOUT');
            this.setState({ whereTogo : 'ABOUT' });

            background.style.backgroundColor = "black";
            // background.style.opacity = ".5";
            imgDark.style.backgroundColor = "rgba(255,255,255,.2)";
            imgDark.style.transform = "translateY(-35vh) scale(0.5) rotate(225deg)";
        } 
        if (currentURL==="/aboutMe") 
        {
            this.props.onLogoClick('ACCUEIL');
            this.setState({ whereTogo : 'ACCUEIL' });

            background.style.backgroundColor = "white";
            imgDark.style.backgroundColor = "rgba(0,0,0,.2)";
            imgDark.style.transform = "translateY(0vh) scale(1) rotate(0deg)";
        }

        this.setState({ clicktoggle : !this.state.clicktoggle })
    }

    render() {
        console.log("LOGO : ", this.state.whereTogo);

        var urlToGo = "/";
        if ( this.state.whereTogo === 'ABOUT') { urlToGo = '/aboutMe' }
        

        return (
            <CSSTransition appear in={this.state.clicktoggle} timeout={{ enter: 2000, exit: 2000 }} onEntered={ () => this.props.history.push(urlToGo) } onExited={ () => this.props.history.push(urlToGo)} >
                <div className="imgDark" onClick={ this.onLogoClick } onMouseMove={ this.onLogoMoove } onMouseLeave={ this.onLogoLeave }>
                    <img src={logoJpg} className="logoClass" alt="logo_sylvain_chabaud" />
                </div>
            </CSSTransition>
        )
    }
}

export default withRouter(logo);
