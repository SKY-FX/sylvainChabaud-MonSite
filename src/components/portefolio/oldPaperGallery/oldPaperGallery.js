import React, { Component } from 'react'
import Iframe from 'react-iframe'

import '../portefolio.css'

export default class oldPaperGallery extends Component {

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
        const url = "https://www.oldpapergallery.com";
        return (
            <div className="oldPaperGalleryClass" id="scrollInto">
                <h2>CREATION DE SITE</h2>
                <a href="https://www.oldpapergallery.com" target="blank"><h3>https://www.oldpapergallery.com</h3></a> 

                <div className="oldPaperTextClass">
                
                    <h3>
                        je vous fais suivre les spécifications du site que j'ai réalisé en REACT JS est déployé fin 2020 pour OLD PAPER GALLERY.
                    </h3>

                    <Iframe url={url}
                        className="iframeOldPaperGalleryClass"
                        scrolling="yes"
                    />

                    <h3>
                        Spécifications développées :
                    </h3>
                    <h4>
                        Présentation des annonces à vendre (manuscrits, lettres autographes, documents anciens...) :
                        <ul>
                            <li>Possibilité de faire une recherche dans dans toute la boutique ou de filtrer par type de document</li>
                            <li>Possibilité à l'utilisateur de visualiser l'annonce (annonce complète)</li>
                            <li>Possibilité à l'utilisateur d'acheter l'annonce (PayPal, chèque ou virement bancaire)</li>
                        </ul>

                        Possibilité à l'utilisateur de créer un compte et de s'y connecter pour accéder à son espace privé personnalisé :
                        <ul>
                            <li>(GESTION MESSAGERIE) :  Envoyer/supprimer des messages au vendeur).</li>
                        </ul>

                        Possibilité d'administrer le site pour mon client dans le but de :
                        <ul>
                            <li>(GESTION ANNONCES) : Visualiser/ajouter/modifier ou supprimer des annonces.</li>
                            <li>(GESTION MESSAGERIE) : Répondre/supprimer des messages privés ou envoie de NewsLetter à tous les abonnés.</li>
                            <li>(GESTION VENTES) : Paiement en attente/annonces Vendues + création automatique de facture.</li>
                        </ul>

                        <br/>
                        Tous les messages échangés entre le vendeur et l'acheteur via la messagerie interne au site est aussi envoyé sur la boite perso de l'utilisateur (gmail, hotmail, ...)
                        <br/><br/>
                        Le site est "Responsive" pour 4 formats d'écran (trés grand écran, grand écran, tablette et smartPhone).
                        <br/>
                        Le site est développé pour répondre aux exigences SEO naturel ainsi que pour sa présentation sur les réseaux sociaux.
                        <br/><br/>
                        Une version de ce site entièrement en HTML et CSS ont été réalisé comme maquette. Pour des raisons de maintenabilité et de compatibilité j'ai porté tout le code en ReactJS.
                        <br/><br/>
                        Outils utilisés : HTML, CSS, PHP, React Js, React Router, React Helmet, Axios, PhpMailer, Filezilla.
                    </h4>

                    <br /><br />
                    <button className="buttonScrollClass" onClick={ () => this.ScrollFunction() }>RETOUR<br/>Haut de page</button>

                </div>
            </div>
        )
    }
}
