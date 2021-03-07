import React, { Component } from 'react'
import ReactPlayer from 'react-player/lazy'
import Iframe from 'react-iframe'

import myPdf from '../../../ressources/INSTRUMENT-DE-MUSIQUE-ELECTRONIQUE-EXPRESSIF.pdf'
import '../portefolio.css'

export default class arduino extends Component {

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
        const largeurVideo = "400px";
        return (
            <div className="arduinoClass" id="scrollInto">
                <h2>RECHERCHE ET DEVELOPPEMENT</h2>
                <h3>Expression musicale</h3>
                
                <div className="arduinoTextClass">
                    <h3>
                        Dans le but de développer de nouveaux concepts d’interaction entre l’homme et la musique, 
                        j'utiliserai ici le terme « expressif », il est sujet d’une interaction dites naturels du musicien avec
                        l’instrument de musique. La qualité même d’un musicien est de pouvoir exprimer au travers de son
                        instrument sa propre sensibilité.
                    </h3>

                    <ReactPlayer 
                        url='https://www.youtube.com/watch?v=TMSe5JF3Ctk' 
                        width={largeurVideo}
                    />

                    <h3>
                        La majorité des instruments de musique acoustique permettent de manière intrinsèque de jouer sur des 
                        variations sonores. On peut parler de variation d’intensité de fréquence ou encore de granularité dans un domaine physique, 
                        mais on peut aussi respectivement parler de trémolo, vibrato et de timbre dans un domaine musical.
                    </h3>

                    <ReactPlayer 
                        url='https://www.youtube.com/watch?v=16-OJo9yJNI' 
                        width={largeurVideo}
                    />

                    <h3>
                        Si l‘on prend l’exemple d’un violoniste, il pourra aisément exprimer les deux premières variations (trémolo et vibrato) donnant à
                        la musique une forme de complément à son harmonie et une forme d’expression au musicien.
                    </h3>

                    <ReactPlayer 
                        url='https://www.youtube.com/watch?v=L-4ejRCSoWg' 
                        width={largeurVideo}
                    />

                    <h3>
                        Il est important de comprendre que lorsque le musicien attaque l’instrument il y met une intensité,
                        ce que j’appelle la vélocité ; c’est la force avec laquelle le musicien joue les notes. Après avoir
                        déclenché cette note le musicien peut alors soit relâcher la note soit continuer à moduler cette
                        même note. <br/><br/>
                        C’est aussi ce qu’on peut appeler en informatique musicale « aftertouch ». C’est alors
                        que la ARP prend ici tout son sens d’instrument de musique expressif.
                    </h3>

                    <ReactPlayer 
                        url='https://www.youtube.com/watch?v=dyTagRp8mcs&t=13s' 
                        width={largeurVideo}
                    />

                    <h3>
                        Ci-dessous, le dossier complet au format PDF du projet "Instrument de musique électronique expressif"    
                    </h3>

                    <Iframe url={myPdf}
                        className="iframePDFClass"
                        scrolling="yes"
                    />

                    <br /><br />
                    <button className="buttonScrollClass" onClick={ () => this.ScrollFunction() }>RETOUR<br/>Haut de page</button>
                    
                </div>      
            </div>
        )
    }
}
