import React, {Component} from 'react'

import Lettre from "../components/lettre"

export default class alphabet extends Component {

    state = {
        tabAlpha : [
            "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"        ]
    }

    selectedLettre = ( (lettre) => {
        this.props.lettreSel(lettre);
    })
       
    render() {
        
        const tab = this.state.tabAlpha;
    
        return (
            <div className="alphabet">
                {tab.map( lettre => (
                    <Lettre key={lettre} Unelettre={lettre} handleLettre={ () => this.selectedLettre(lettre) } />
                 ))}
              
            </div>
        )

        
    }
}