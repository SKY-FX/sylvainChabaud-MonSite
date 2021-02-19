import React, { Component } from 'react'

export default class oldPaperGallery extends Component {
    render() {
        return (
            <div className="oldPaperGalleryClass">
                <h2>
                    OLD PAPER GALLERY
                </h2>
                <iframe
                    className="iframeOldPaperGalleryClass"
                    title="PortFolio"
                    src="https://www.oldpapergallery.com"
                    scrolling="yes"
                ></iframe>
            </div>
        )
    }
}
