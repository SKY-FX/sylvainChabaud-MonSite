import React, { Component, Fragment } from 'react'
import FormikYupForm from "../../components/formikYupForm/formikYupForm"

import { CSSTransition } from "react-transition-group"

import "./modal.css"


export default class contact extends Component {

    render() {

        var doItForm = this.props.onContact;
        console.log("CONTACT", doItForm);


        if (!this.props.onContact)
        {
            let sendEmailOk = document.querySelector(".sendEmailOk");
            sendEmailOk.style.opacity = "0";
            // sendEmailOk.style.zIndex = "990";
            sendEmailOk.style.transition = "all 1s ease-in-out";
        }

        return (
            
            <div className="contactPageClass">
                <CSSTransition classNames='contact_form' mountOnEnter unmountOnExit appear in={doItForm} timeout={{ enter: 0, exit: 1000}} onExited={ () => this.props.history.push("/AboutMe") }>
                    <FormikYupForm />
                </CSSTransition>
                    
                <div className="sendEmailOk"><h4>Votre message a bien été envoyé !</h4></div>
            </div>
        )
    }
}

