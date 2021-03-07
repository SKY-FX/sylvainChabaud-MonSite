import React, { Component } from 'react'

import myPenduCode from '../../../ressources/pendu.zip'
import '../portefolio.css'

import LePendu from './leJeu'



export default class pendu extends Component {

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
        return (
            <div className="penduClass" id="scrollInto">
                <h2>LE JEU DU PENDU</h2>

                <div className="PenduTextClass">

                    <h3>
                        Devines toutes les lettres du mot à l'aide de l'alphabet !<br/><br/>
                        A chaque fois que tu trouvera une lettre, elle s'affichera et disparaitra de l'alphabet.<br/>
                        Dans le cas contraire, tu progressera vers le pendu !<br/>
                        Bonne chance...
                    </h3>

                    {/* <div className="iframePenduClass"> */}
                        <LePendu />
                    {/* </div> */}
                   
                    <h3>
                        Lors de mon appritissage dans le Web, je réalisais des petits jeux en React.
                        Le jeu du "pendu" en est un exemple !
                        <br/><br/>
                        Tu peux télécharger le code <a href={myPenduCode}>ici</a> !
                    </h3>

                    <br /><br />
                    <button className="buttonScrollClass" onClick={ () => this.ScrollFunction() }>RETOUR<br/>Haut de page</button>

                </div>
            </div>
        )
    }
}
