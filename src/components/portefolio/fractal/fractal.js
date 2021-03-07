import React, { Component } from 'react'

import mychaos from '../../../ressources/fractal-chaos.jpg'
import myATMlogo from '../../../ressources/ATM-BUCAREST-LOGO.png'
import myPOLYTECHlogo from '../../../ressources/POLYTECH-LOGO.png'
import myLOGISTICtab from '../../../ressources/fonction-logisitique-tableau.png'
import myBIFFlogistique from '../../../ressources/biffurcation-logistique.png'
import myTMPSFREQlogistique from '../../../ressources/temps-freq-logitique.png'
import myATTRACTlorrentz from '../../../ressources/attracteur-lorrentz.jpg'
import myATTRACTmandelbrot from '../../../ressources/mandelbrot.jpg'
import myATTRACTrossler from '../../../ressources/attracteur-rossler.png'

import myCOURS1 from '../../../ressources/chaos-cours-1.pdf'
import myCOURS2 from '../../../ressources/chaos-cours-2.pdf'
import myCOURS3 from '../../../ressources/chaos-cours-3.pdf'
import myCOURS4 from '../../../ressources/chaos-cours-4.pdf'
import myCOURS5 from '../../../ressources/chaos-cours-5.pdf'


import '../portefolio.css'

export default class fractal extends Component {

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
            <div className="fractalClass" id="scrollInto">
                <h2>LE CHAOS ET LES FRACTALS</h2>
                <h3>Polytechnique Nantes - Académie De Bucarest</h3> 

                <div className="fractalTextClass">
                    <img className="fractalImgClass"
                        src={mychaos}
                        alt="Chaos et Fractal"
                    />

                    <h3>
                        L’Académie Technique Militaire de Roumanie souhaite élaborer un cours intéractif dans le domaine des communications numériques basées chaos. Les étudiants concernés sont des élèves suivant un cursus en Master de pays étranger à la Roumanie. Les enseignants-chercheurs de l’ATM dans ce domaine veulent tout d’abord créer un lien avec certaines universités françaises. Les générateurs, les codages, les modulations ainsi que les différents cryptages basés <b>Chaos</b> sont l’objet de ce cours.
                    </h3>

                    <div className="fractalLogos">
                        <img className="fractalLogosClass"
                            src={myATMlogo}
                            alt="logo ATM BUCAREST"
                        />
                        <br/><br/>
                        <img className="fractalLogosClass"
                            src={myPOLYTECHlogo}
                            alt="logo POLYTECH NANTES"
                        />
                    </div>  

                    <h3>
                        En mathématiques, la fonction logistique est une fonction polynômiale, souvent citée comme exemple de la complexité pouvant surgir de simples équations non-linéaires. Cette fonction fut popularisée par le biologiste Robert May en 1976. Le modèle logistique fut introduit initialement en tant que modèle démographique par Pierre François Verhulst. Il écrit en 1845 dans son ouvrage consacré à ce phénomène : nous donnerons le terme de logistique à cette courbe. L'auteur n'explique pas ce choix mais "logistique" a un lien avec les logarithmes : les deux termes étaient synonymes au XVIIIe siècle et logistikos signifie "calcul" en grec.
                        <br/><br/>
                        On considère l’évolution de la population d’une espèce, en présence de facteurs limitants, en considérant que :
                        <br/>
                        <br/>** l’espèce se reproduit à un taux proportionnel à la population. 
                        <br/>
                        <br/>** elle décroît (famine) à un taux proportionnel à la différence entre une capacité limite de l’environnement et la population. 
                        <br/><br/>
                        La fonction logistique est alors définie par l’équation non-linéaire suivante : 
                        <br/><br/><br/>
                        X(n+1) = a . X(n) . ( 1-X(n) )
                    </h3>

                    <img className="logisticTabClass"
                        src={myLOGISTICtab}
                        alt="Fonction Logistique analyse"
                    /> 

                    <h3>
                        Le paramètre ‘a’ détermine le comportement de la fonction. Analysons le comportement du système en fonction de ce paramètre à l’aide des outils mathématiques utilisés pour les simulations effectuées sous MATLAB.
                        <br/><br/>
                        Le diagramme de bifurcation et l’exposant de Lyapunov sont des outils permettant de très bien refléter les différents régimes de fonctionnement de l’équation logistique en fonction du paramètre ‘a’.
                    </h3>
                    
                    <img className="logisticTabClass"
                        src={myBIFFlogistique}
                        alt="diagramme de biffurcation - logistique"
                    />

                    <h3>
                        ** Tout d’abord nous pouvons observer que pour des valeurs du paramètre 'a' est inférieur à 3, l’attracteur du système est un point. 
                        <br/><br/>
                        ** Ensuite pour des valeurs du paramètre 'a' comprisent entre 3 et 3,57 le point fixe devient instable et l’attracteur devient périodique. 
                        <br/><br/>
                        ** Enfin, nous observons que pour des valeurs du paramètre 'a' comprisent entre 3,57 et 4, l’attracteur n’atteind plus les phases du système périodiquement mais désordonément. Le système atteind alors un régime chaotique et l’attracteur devient un <b>fractal</b>.
                    </h3>

                    <img className="logisticTabClass"
                        src={myTMPSFREQlogistique}
                        alt="Temps-Fréquence - logistique"
                    />


                    <h3>
                        Attracteur de Lorrentz :
                    </h3>

                    <img className="LorrentzClass"
                        src={myATTRACTlorrentz}
                        alt="Attracteur de Lorrentz"
                    />

                    <h3>
                        Attracteur de Mandelbrot :
                    </h3>

                    <img className="LorrentzClass"
                        src={myATTRACTmandelbrot}
                        alt="Attracteur de Mandelbrot"
                    />

                    <h3>
                        Attracteur de Rossler :
                    </h3>

                    <img className="LorrentzClass"
                        src={myATTRACTrossler}
                        alt="Attracteur de Rossler"
                    />

                    <h4>
                        Télécharger les cours :<br/>
                        ** SYSTEMES ET SIGNAUX FACE AU CHAOS **
                    </h4>

                    <a href={myCOURS1} target="_blank">
                        - INTRODUCTION A LA THEORIE DES SYSTEMES DYNAMIQUES CHAOTIQUES
                    </a>
                    <br/>
                    <a href={myCOURS2} target="_blank">
                        - GENERATEURS DE SIGNAUX CHAOTIQUES
                    </a>
                    <br/>
                    <a href={myCOURS3} target="_blank">
                        - LES METHODES DE COMMUNICATIONS DES SIGNAUX CHAOTIQUES
                    </a>

                    <br/>
                    <a href={myCOURS4} target="_blank">
                        - LES METHODES DE SYNCHRONISATIONS DES SYSTEMES DE COMMUNICATION CHAOTIQUE
                    </a>

                    <br/>
                    <a href={myCOURS5} target="_blank">
                        - CRYPTO SYSTEMES BASES CHAOS
                    </a>

                    <br /><br />
                    <button className="buttonScrollClass" onClick={ () => this.ScrollFunction() }>RETOUR<br/>Haut de page</button>
                    
                </div>
            </div>
        )
    }
}
