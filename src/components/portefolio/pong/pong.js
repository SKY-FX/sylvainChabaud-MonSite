import React, { Component } from 'react'

export default class pong extends Component {
    
    render() {
        const url = "/html_Site/pong/index.html";
        return (
            <div className="pongclass">
                <h2>LE JEU DU PONG</h2>
                <iframe
                    className="iframePongClass"
                    title="PortFolio"
                    src={url}
                    scrolling="yes"
                ></iframe>
            </div>
        )
    }
}
