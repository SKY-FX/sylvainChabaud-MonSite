import React from "react";
import axios from "axios";

import { useFormik } from "formik";
import * as Yup from "yup";

import "./formikYupForm.css"

export default function FormikYupForm() {
  
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      message: ""
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(2, "Mininum 2 caractères")
        .max(15, "Maximum 15 caractères")
        .required("Requis !"),
      email: Yup.string()
        .email("Format de l'email invalide")
        .required("Requis !"),
      message: Yup.string()
        .min(8, "Minimum 8 caractères")
        .max(500, "Maximum 500 caractères")
        .required("Requis !"),
    }),
    onSubmit: values => {
        // alert(JSON.stringify(values, null, 2));
        

        var url = "/API/sendEmail.php"; 
        // const url = "http://monsite/monAppReact/sylvain_chabaud/src/components/API/sendEmail.php";
        
        const message = values.message;
        const clientEmail = values.email;
        const clientName = values.full_name;

        var formData = new FormData();
        formData.append('message', message);
        formData.append('clientEmail', clientEmail);
        formData.append('clientName', clientName);

        // Fait appel à l'API PHP
        axios({
            method: 'post',
            url: url,
            data: formData
        })

        // Renvoie le résultat de la recherche ( objet de tableau ) au parent
        .then(response => {
            const result = response.data;
            console.log("RESULT REPONDRE", result);

            let formikClass = document.querySelector(".contactFormClass");
            formikClass.style.opacity = "0";
            formikClass.style.zIndex = "-1";
            formikClass.style.transition = "all 1s ease-in-out";
    
            let sendEmailOk = document.querySelector(".sendEmailOk");
            sendEmailOk.style.opacity = "1";
            sendEmailOk.style.zIndex = "990";
            sendEmailOk.style.transition = "all 1s 1s ease-in-out";

            let imgDark = document.querySelector(".imgDark");
            imgDark.style.transform = "translateX(0vw) translateY(0) scale(0.7) rotate(45deg)";
            imgDark.style.transition = "all 1.5s 1s ease-in-out";
      
        })

        // Affiche l'erreur
        .catch(error => {
            console.log(error);
        }); 

        // this.props.onForm();

       
    }
  });

  

  return (
    <div className="contactFormClass">
      
      <div className="emailLabelClass">
        Dites-moi en plus sur votre projet !<br/><br/>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            name="full_name"
            value={formik.values.full_name}
            onChange={formik.handleChange}
            placeholder="Votre prénom-nom"
          />
          {formik.errors.full_name && formik.touched.full_name && (
            <p>{formik.errors.full_name}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Votre email"
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div>
            <textarea 
                type="text"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                placeholder="Votre message"
            />
            {formik.errors.message && formik.touched.message && (
                <p>{formik.errors.message}</p>
            )}
        </div>
        <div>
          <button type="submit">Envoyez l'email</button>
        </div>
      </form>
    </div>
  );
}
