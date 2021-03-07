import React, { Component } from 'react'

export default class skills extends Component {

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
            <div className="skillsClass" id="scrollInto">
                <h2>
                    MES COMPETENCES
                </h2>

                <br /><br />
                <button className="buttonScrollClass" onClick={ () => this.ScrollFunction() }>RETOUR<br/>Haut de page</button>
            </div>
        )
    }
}
