import React, { Component } from 'react'
import Iframe from 'react-iframe'

import myPongCode from '../../../ressources/pong.zip'

import '../portefolio.css'


export default class pong extends Component {

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
        const url = "https://www.sylvain-chabaud.fr/html_site/pong";
        return (
            <div className="pongclass" id="scrollInto">
                <h2>LE JEU DU PONG</h2>

                <div className="PongTextClass">

                    <h3>
                        Il te suffit de déplacer la souris dans l'espace réservé au jeu du Pong, pour que le curseur du Pong se déplace !
                        <br/>
                        La balle s'accélère tous les 5 coups !
                        <br/>
                        Bonne partie...
                    </h3>

                    <Iframe url={url}
                        className="iframePongClass"
                        scrolling="yes"
                    />

                    <h3>
                        Lors de mon appritissage dans le Web, je réalisais des petits jeux en HTML.
                        Le pong en est un exemple où j'utilisais' seulement le HTML, CSS et JavaScript (sans canvas) !
                        <br/><br/>
                        Tu peux télécharger le code <a href={myPongCode}>ici</a> !
                    </h3>

                    <br /><br />
                    <button className="buttonScrollClass" onClick={ () => this.ScrollFunction() }>RETOUR<br/>Haut de page</button>

                </div>
            </div>
        )
    }
}