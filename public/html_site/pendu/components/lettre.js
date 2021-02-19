import React, { Component } from 'react'

export default class lettre extends Component {

    state = {
        lettre : this.props.Unelettre,
        checked : 0
    }

    HandleClick = () => {
        if (!this.state.checked) 
        {
            this.props.handleLettre();
            this.setState({
                lettre : "-",
                checked : 1
            });
        } 
    }

    render() {
        return (
            <div className="lettre" onClick={this.HandleClick} >
                {this.state.lettre}
            </div>
        )
    }
}

