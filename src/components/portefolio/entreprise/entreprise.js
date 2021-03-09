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
                        <span><u>Projets WEB</u></span>
                        <br/><br/>
                        Réalisation de sites internet, plugins WordPress, application Web 
                        <br/><br/>
                        Environnement technique : React-js, Node-js, javascript, php, SQL, html/CSS, données serveur, API, Architecture MVC-JSON, BootStrap, WordPress, Git, Unix, langage C
                        <br/><br/>
                        Librairie : Axios, Formik, Yup, React-helmet, React-iFrame, React-player, React-scroll, React-transition-group, React-router-dom
                        <br/><br/>
                        
                        <li>Développement et maintenance du code de génération des factures de téléphones clients Web pour le compte d'Orange Grand Public (TMA Editique)</li>
                        <br/>
                        <li>Développement de plugin WordPress (shortCode, Action) - WooCommerce pour BFG COMMUNICATION</li>
                        
                        <br/>
                        <li>Création de Site internet eCommerce / vitrine</li>
                        <ul>
                            <li>Contenu administratif et publique</li>
                            <li>Gestions des eMails et messagerie interne</li> 
                            <li>Formulaire et Paiement sécurisé en ligne</li>
                            <li>Gestion des ventes et de la facturation</li>
                            <li>Gestions des annonces pour la vente (créer, mofidier, supprimer, visualiser)</li>
                            <li>Moteur de recherche du site</li>
                            <li>Référencement naturel - conseils pour le référencement par contenu et mots clés</li>
                            <li>Responsive Design (site adapaté à tous types de tailles d'écrans)</li>
                            <li>Mise en ligne et maintenance</li>
                        </ul>

                        <br/><br/><br/>

                        <span><u>Projet SIROCO</u></span>
                        <br/><br/>
                        Application TIAMP de gestion des clients - COLAS
                        <br/><br/>
                        Environnement technique : Javascript, SQL, html/CSS, shell Unix, données serveur, Git, SVN, Confluence, JIRA, Squash
                        <br/><br/>
                        - Réalisations :
                        <br/>
                        <ul>
                            <li>Prise en compte de la demande client</li>
                            <li>Estimation de la charge de travail</li>
                            <li>Ecriture des spécifications</li>
                            <li>Développement-corrections et validation du code  (non-régression) de l'application de gestion</li>
                        </ul>

                        <br/><br/><br/>

                        <span><u>Projet C130 RMS</u></span>
                        <br/><br/>
                        Système de management des radios de communication et de surveillance de l’avion C130 Fr.
                        <br/><br/>
                        Environnement technique : Visual C++, Rhapsody, tortoise SVN, Doors, Papeete Doc, Asset, Desk; ARINC429, DO178B
                        <br/><br/>
                        - Partition militaire
                        <ul>
                            <li>Ecriture des exigences SRS et MMI client sous « Doors ».</li>
                            <li>Création de SRS avec « Papeete Doc ».</li>
                            <li>Gestion de projet sous « Tortoise SVN ».</li>
                        </ul>

                        - Equipement radio VUHF
                        <ul>
                            <li>Etude, conception et modélisation UML sous Rhapsody.</li>
                            <li>Génération de code C auto avec MIA.</li>
                            <li>Développement en C orienté objet des exigences SRS sous « Visual C++ », de la radio VUHF.</li>
                        </ul>
                    
                        <br/><br/><br/>

                        <span><u>Projet BRETBOW</u></span>
                        <br/><br/>
                        Réalisé à l'Ecole Nationale Supérieur de Chimie, de Biologie et de Physique de Bordeaux (ENSCPB).
                        <br/><br/>
                        Le projet consiste à développer une Interface logicielle pour les biologistes en laboratoire.
                        <br/>
                        Cette IHM devra communiquer avec un spectromètre. Ce dernier acquiert l'intensité de la lumière émise par des cellules photo-luminescente.
                        <br/>
                        L'interface, récupère les données issues du spectromètre, les traite et les affiche à l'écran.
                        <br/><br/>
                        Environnement technique : Laboratoire de chimie, cellule biologique et de synthèse, dosage, système embarqué temps/réel, LabView IHM, électronique
                        <br/><br/>
                        - Réalisations :
                        <ul>
                            <li>Développement d’une IHM Labview, permettant la visualisation de spectre et jusqu’à 5 signaux de BRET en temps réel fonction du temps et de la température et ceux-ci jusqu’à 4 puits.</li>
                            <li>Plusieurs modes de fonctionnement sont prévus pour l’IHM. Mise en place de la communication avec les capteurs (température et spectro). Enregistrement des données en temps réel.</li>
                            <li>Communication avec le client et les partenaires de l’école ENSCBP et du laboratoire IMS – Talence.</li>
                        </ul>
                    
                        <br/><br/><br/>

                        <span><u>Projet RAFALE F3R</u></span>
                        <br/><br/>
                        Performance de carte de traitement de données de l'avion de chasse Rafale F3R
                        <br/><br/>
                        Environnement technique : Unix, Windows, système embarqué temps/réel, langage C, script Perl, ALG studio, TUDI
                        <br/><br/>
                        - Réalisations :
                        <ul>
                            <li>Prise de connaissance du système cockpit RAFALE.</li>
                            <li>Codage en C pour la simulation 100 pistes du RAFALE F3R sur le CTM (Collimateur Tête Moyenne).</li>
                            <li>Ecriture d’un script Perl pour le portage des scénarii (.scn) vers header (.h).</li>
                            <li>Mise en place d’un scénario de performance pour la simulation 100 pistes.</li>
                            <li>Intégration et validation du code de la carte TDO (Traitement de donnée outil).</li>
                            <li>Ecriture des notes d’utilisations de l’environnement RAFALE (ALG STUDIO, TUDI).</li>
                            <li>Ecriture de :
                                <ul>
                                    <li>SDP (Plan de Développement Logiciel)</li>
                                    <li>SCMP (Plan de Gestion de Configuration Logiciel)</li>
                                    <li>CIDL (Configuration Index Document) + Note d’ajustement</li>
                                </ul>
                            </li>
                        </ul>
                    
                        <br/><br/><br/>

                        <span><u>Projet OMEGA</u></span>
                        <br/><br/>
                        Détection d’obstacles appliquée aux drones
                        <br/><br/>
                        Environnement technique : Windows, système embarqué temps/réel, langage C, support de Thèses
                        <br/><br/>
                        - Réalisations :
                        <ul>
                            <li>Etat de l’art</li>
                            <li>Développement en C de la méthode ORM (Obstacle Restriction Method - thèse de Javier Minguez).</li>
                            <li>Développement en C de l’environnement du drone aux cours du temps.</li>
                            <li>Test de performance.</li>
                            <li>Etude sur la portabilité Hardware embarqué.</li>
                            <li>Gestion documentaire.</li>
                        </ul>
                    
                        <br/><br/><br/>

                        <span><u>Projets LABVIEW</u></span>
                        <br/><br/>
                        Interface Homme Machine (IHM) pour SAFRAN - EDF - KIMO
                        <br/><br/>
                        Environnement technique : Windows, Git, SVN, système embarqué temps/réel, LabView, Electronique
                        <br/><br/>
                        - Réalisations :
                        <br/><br/>
                        IHM - Passerelle UDP - Avion F6X
                        <ul>
                            <li>Thread, protocole UDP, encodage/décodage de donnée, enregistrement de donnée en sortie.</li>
                            <li>Outil de génération de fichier de configuration et de cluster automatique.</li>
                            <li>Ecriture de documentation de qualification, note de fonctionnement.</li>
                            <li>Génération package exécutable/Installeur</li>
                            <li>Relation Client, validation sur site client, outil TeamViewer</li>
                        </ul>
                        
                        IHM - Analyseur de signaux analogiques et commande par synoptique (DYANA)
                        <ul>
                            <li>Acquisition/traitement/Affichage et enregistrement des données TDMS.</li>
                            <li>Protocole de communication UDP avec le bas niveau Temps Réel et FPGA.</li>
                            <li>Communication avec les modules d’acquisition COMPACT RIO et SBRIO.</li>
                            <li>Création des synoptiques des chaînes de traitement de signal</li>
                            <li>Application paramétrable</li>
                        </ul>

                        IHM - Simulateur et traitement de signal
                        <ul>
                            <li>Refonte de l’architecture logicielle.</li>
                            <li>Ajout de synoptique pour l’aide au traitement de signal.</li>
                            <li>Ajout de module fonction de transfert.</li>
                            <li>Création de générateur de fonctions (rampe,…).</li>
                            <li>Gestion des données par fichier TDMS</li>
                        </ul>
                    </h3>

                    <button className="buttonScrollClass" onClick={ () => this.ScrollFunction() }>RETOUR<br/>Haut de page</button>

                </div>
            </div>
        )
    }
}
