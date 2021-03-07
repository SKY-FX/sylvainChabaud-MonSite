import React, { Component } from 'react'

import logoThales from '../../../ressources/logo-thales.jpg'
import logoKimo from '../../../ressources/logo-kimo.jpg'
import logoOrange from '../../../ressources/logo-orange.jpg'
import logoSafran from '../../../ressources/logo-safran.jpg'
import logoEdf from '../../../ressources/logo-edf.jpg'
import logoLabri from '../../../ressources/logo-labri.jpg'

import '../portefolio.css'

export default class entreprise extends Component {

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
            
            <div className="entrepriseClass" id="scrollInto">
                <h2>EXPERIENCE ENTREPRISE</h2>
                <h3>Cycle projet, Agilité, gestion de conf., traçabilité...</h3>
                    
                

                <div className="entrepriseTextClass">

                    <h3>Les entreprises avec lesquelles j'ai travaillé :</h3>
                    <div className="logosExpClass">
                        <img className="logoExperienceClass" src={logoThales} alt="logo Thales"></img>
                        <img className="logoExperienceClass" src={logoKimo} alt="logo Kimo"></img>
                        <img className="logoExperienceClass" src={logoOrange} alt="logo Orange"></img>
                        <img className="logoExperienceClass" src={logoSafran} alt="logo Safran"></img>
                        <img className="logoExperienceClass" src={logoEdf} alt="logo Edf"></img>
                        <img className="logoExperienceClass" src={logoLabri} alt="logo Edf"></img>
                    </div>    


                    <h3>
                        <span><u>Projet C130 RMS</u></span>
                        <br/><br/>
                        Système de management des radios de communication et de surveillance de l’avion C130 Fr.
                        <br/><br/>
                        Environnement technique : Visual C++, Rhapsody 7.1, tortoise SVN, Doors 7.1, Papeete Doc, Asset 5.5, Desk 6.2; ARINC429, DO178B
                        <br/><br/>
                        - Partition RMS militaire
                        <ul>
                            <li>Ecriture des exigences SRS et MMI client sous « Doors ».</li>
                            <li>Création de SRS avec « Papeete Doc ».</li>
                            <li>Gestion de projet sous « Tortoise SVN ».</li>
                        </ul>

                        - Equipement VUHF de la Partition RMS militaire
                        <ul>
                            <li>Etude, conception et modélisation UML sous Rhapsody.</li>
                            <li>Génération de code auto avec MIA.</li>
                            <li>Développement en C orienté objet des exigences SRS sous « Visual C++ », de la radio VUHF.</li>
                        </ul>

                        - Partition FDS et RMS civil et militaire : (HF, VHF, ATC/TCAS, DME)
                        <ul>
                            <li>Rédaction des procédures de test IVV sous ASSET.</li>
                            <li>Mise au point des procédures de tests sous DESK/ASSET.</li>
                            <li>Sampling IVV-FDS / Checklists / RP.</li>
                        </ul>
                    
                    </h3>

                    <br /><br />
                    <button className="buttonScrollClass" onClick={ () => this.ScrollFunction() }>RETOUR<br/>Haut de page</button>

                </div>
            </div>
        )
    }
}
