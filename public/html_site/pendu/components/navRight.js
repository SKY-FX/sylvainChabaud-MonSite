import React, { Component } from 'react'

import nom_0 from "../images/0.png"
import nom_1 from "../images/1.png"
import nom_2 from "../images/2.png"
import nom_3 from "../images/3.png"
import nom_4 from "../images/4.png"
import nom_5 from "../images/5.png"
import nom_6 from "../images/6.png"
import nom_7 from "../images/7.png"
import nom_8 from "../images/8.png"

const tabNom = [
    nom_0,
    nom_1,
    nom_2,
    nom_3,
    nom_4,
    nom_5,
    nom_6,
    nom_7,
    nom_8
];

export default class navRight extends Component {

    render() {
        const indice = (this.props.nbFalse);
        const nom = tabNom[indice];
        // console.log("NAV RIGHT",indice);
        
        return (
            <div className="navRight" style={{  
                backgroundImage: `url(${nom})`,
                // backgroundPosition: 'center',
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat'
              }} >

            </div>
        )
    }
}

    

  