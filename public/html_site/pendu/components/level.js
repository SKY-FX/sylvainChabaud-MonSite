import React, { Component } from 'react'

export default class level extends Component {
    render() {
        return (
            <div className="level">
                Level <b>{this.props.level}</b>
            </div>
        )
    }
}
