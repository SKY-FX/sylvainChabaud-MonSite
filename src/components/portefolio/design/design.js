import React, { Component } from 'react'
import Iframe from 'react-iframe'

export default class design extends Component {
    componentDidMount()
    {
        var elmnt = document.getElementById("scrollInto");
        elmnt.scrollIntoView();
    }
    
    ScrollFunction = () => 
    {
        var elmnt = document.getElementById("scrollInto");
        elmnt.scrollIntoView({behavior: "smooth"});
    }

    render() {
        const urlCircleMenu = "https://www.sylvain-chabaud.fr/html_site/circleMenu";
        const urlSiteExemple = "https://www.sylvain-chabaud.fr/html_site/skyFxSite";
        
        return (
            <div className="designClass" id="scrollInto">
                <h2>"CIRCLE MENU"</h2>
                <h3>Exemples - Effet CSS</h3>
                
                <div className="DesignTextClass">
                    
                    <h3>Je te présente ici un menu circulaire réalisé en CSS.
                        Passe la souris sur le symbole du menu ci dessous ! 
                        <br/>Si tu veux la version plein écran,
                        <a href={urlCircleMenu} target="blank"><h3> Jette un coup d'oeil ici !</h3></a> 
                    </h3>
                    <Iframe url={urlCircleMenu}
                        className="iframeDesignClass"
                        scrolling="yes"
                    />

                    <h3>Le site ci-dessous présente différent challenge en CSS. 
                        C'est un bon exercice pour ceux qui débutent en conception de site internet.
                        En effet, les sujets comme le défilement d'images, le menu fixe, les re-directions, script Javascript ainsi que les effects CSS sont de la partie !
                        <br />
                        <br /><br />
                        <a href={urlSiteExemple} target="blank"><h3>Ballade toi sur le site pour essayer...</h3></a> 
                    
                    </h3>

                    {/* <Iframe url={urlSiteExemple}
                        className="iframeDesignClass"
                        scrolling="yes"
                    /> */}

                    <br /><br />
                    <button className="buttonScrollClass" onClick={ () => this.ScrollFunction() }>RETOUR<br/>Haut de page</button>
                </div>
            </div>
        )
    }
}
