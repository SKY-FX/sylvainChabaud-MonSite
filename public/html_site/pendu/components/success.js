import React, { Component } from 'react'

export default class success extends Component {

    handleClick = () => {
        this.props.ClickOnButton()
    }

    render() {
        return (
            <div className="success" >
                <h1 style={{color:"green"}} >Bien joué ! </h1>
                <h4>
                    <br />
                    Tu as trouvé le mot "{this.props.word}" !
                    <br />
                    tu gagne 1 level...
                </h4>
                <br />
                <input type="button" value="Mot suivant" onClick={this.handleClick}></input>
            </div>
        )
    }
}