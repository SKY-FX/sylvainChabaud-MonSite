import React, { Component } from 'react'

export default class chess extends Component {

    handleClick = () => {
        this.props.ClickOnButton()
    }

    render() {
        return (
            <div className="success">
                <h1 style={{color:"red"}} >Oups ! </h1>
                <h4>
                    <br />
                    Tu n'as pas trouvé le mot !
                    {/* <br/>
                    Tu perds 1 level... */}
                </h4>
                <br />
                <input type="button" value="Recommence" onClick={this.handleClick}></input>
            </div>
        )
    }
}