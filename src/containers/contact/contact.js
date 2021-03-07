import React, { Component } from 'react'
import FormikYupForm from "../../components/formikYupForm/formikYupForm"
import { Helmet } from "react-helmet"

import { CSSTransition } from "react-transition-group"


export default class contact extends Component {

    render() {

        var doItForm = this.props.onContact;
        // console.log("CONTACT", doItForm);

        

        if (!this.props.onContact)
        {
            let sendEmailOk = document.querySelector(".sendEmailOk");

            if (sendEmailOk)
            {
                sendEmailOk.style.opacity = "0";
                // sendEmailOk.style.zIndex = "990";
                sendEmailOk.style.transition = "all 1s ease-in-out";
            }
        }

        return (
            
            <div className="contactPageClass">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Contact - devis - message - projet développeur Web - Sylvain Chabaud</title>
                    <link rel="canonical" href="https://sylvain-chabaud.fr/contact" />
                </Helmet>

                <div className="TransparentDivClass">
                    <h1>Envoyez un message - Sylvain Chabaud</h1>
                    <h2>Si vous souhaitez un devis pour votre futur site internet, ou pour un besoin en entreprise, n'hésitez pas à me laisser un message !</h2>
                </div>

                <CSSTransition classNames='contact_form' mountOnEnter unmountOnExit appear in={doItForm} timeout={{ enter: 0, exit: 1000}} onExited={ () => this.props.history.push("/AboutMe") }>
                    <FormikYupForm />
                </CSSTransition>
                    
                <div className="sendEmailOk">
                    <h4>Votre message a bien été envoyé !</h4>
                </div>
            </div>
        )
    }
}

