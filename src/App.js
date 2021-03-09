import React, { Component } from 'react'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import { withRouter } from 'react-router'

import './App.css';
import "./containers/modal.css"

import AccueilBackground from "./components/accueilBackground"
import Logo from "./components/logo/logo"

import Menu from "./containers/menu/menu"
import Contact from "./containers/contact/contact"
import AboutMe from "./containers/aboutMe/aboutMe"
import Portefolio from "./containers/portefolio/portefolio"


window.onmousemove = function(e){
  let element = document.getElementsByClassName('el-Style');   
  let moved = (e.clientX/window.innerWidth);
  let elementsLength = element.length;  
  for (var i = 0 ; i < elementsLength ; i++) 
  {  
      element[i].style.opacity = moved; 
      element[i].style.transition = "all 1s ease-in-out";    
  }
 
};

// function addLoad_DF_ObjetDefilant(func) 
// {
// 	if (window.addEventListener)
// 		{
// 			window.addEventListener("load", func, false);
// 		}
// 	else if (document.addEventListener)
// 		{
// 			document.addEventListener("load", func, false);
// 		}
// 	else if (window.attachEvent)
// 		{
// 			window.attachEvent("onload", func);
// 		}
// }


// function DF_ObjetDefilant(id,id_dim,mode,sens,vit,pos,b_esp,pause)
// {
// 	this.DF_ObjetParam = typeof this.DF_ObjetParam == 'undefined' ? new Array() : this.DF_ObjetParam;	
// 	this.DF_ObjetParam[id] = typeof this.DF_ObjetParam[id] == 'undefined' ? new Array() : this.DF_ObjetParam[id];	
			
// 	if(typeof this.DF_ObjetParam[id]['id_defile'] == 'undefined') {Set_param (id,id_dim,mode,sens,vit,pos,b_esp,pause);}
// 	else
// 	if (this.DF_ObjetParam[id]['dim_defilant'] > 0)
// 	{
// 		if (this.DF_ObjetParam[id]['mode'] == 'r') {Boucle_ar(id);} else {Boucle_cont(id);}
	 
// 		this.DF_ObjetParam[id]['Timer'] = setTimeout(function(){DF_ObjetDefilant(id)},this.DF_ObjetParam[id]['delaicrnt']);	
// 	}
	


// 	function Set_param (id,id_dim,mode,sens,vit,pos,b_esp,pause) 
// 	{	
// 		var id_d = null;
// 		var id_c = null;
// 		var id_cc = null;
		
		
// 		if(!(id_d = document.getElementById(id))) {id_d = null;} else if(!(id_c = id_d.parentNode)) {id_c = null;}
// 		else if(!(id_cc = id_c.parentNode)) {id_cc = null;};
		
// 		if(id_c != null && id_cc != null && id_d != null)
// 		{
// 		function is_all_ws ( nod )
// 			{
// 			  // Use ECMA-262 Edition 3 String and RegExp features
// 			  return !(/[^\t\n\r ]/.test(nod.data));
// 			}
			
			
// 		function is_ignorable ( nod )
// 			{
// 			  return (nod.nodeType == 8) || // A comment node
// 					 ( (nod.nodeType == 3) && is_all_ws(nod) ); // a text node, all ws
// 			}


// 		function trim_debut (myString)
// 			{
// 				return myString.replace(/^\s+/g,'')
// 			} 
		
		
// 		function trim_fin (myString)
// 			{
// 				return myString.replace(/\s+$/g,'')
// 			} 
		
											
// 		// Nettoyage mise en page html Mozilla Chrome...
// 		if (id_d != null) 
// 			{
// 				while (id_d.hasChildNodes() && is_ignorable(id_d.lastChild)) {id_d.removeChild(id_d.lastChild);}
// 				while (id_d.hasChildNodes() && is_ignorable(id_d.firstChild)) {id_d.removeChild(id_d.firstChild);}
// 			}	
// 		}
		
// 		if(id_c != null && id_cc != null && id_d != null && id_d.hasChildNodes())
// 			{
// 				this.DF_ObjetParam[id]['instance'] = typeof this.DF_ObjetParam[id]['instance'] == 'undefined' ? function () {DF_ObjetDefilant(id,id_dim,mode,sens,vit,pos,b_esp,pause);} : this.DF_ObjetParam[id]['instance'];
				
// 				this.DF_ObjetParam[id]['sens_ini'] = typeof sens != 'undefined' && (sens == 'g' || sens == 'd' || sens == 'h' || sens == 'b') ? sens : 'g';
	
// 				this.DF_ObjetParam[id]['sens_horizontal'] = this.DF_ObjetParam[id]['sens_ini'] == 'g' || this.DF_ObjetParam[id]['sens_ini'] == 'd' ? true : false;	
				
// 				id_cc.style.overflow = "hidden";
				
// 				id_c.style.visibility = "hidden";
// 				id_c.style.position = "relative";
// 				id_c.style.overflow = "hidden";
				
							
// 				id_d.style.position = "absolute";
// 				id_d.style.width = "auto";
// 				id_d.style.height = "auto";
				
				
// 				// Nettoyage espaces vides en début de défilant pour le mode horizontal
// 				var elem = id_d.firstChild;	
				
// 				if (elem.nodeType == 3 && this.DF_ObjetParam[id]['sens_horizontal']) 
// 					{
//             var trimm_debut = trim_debut(elem.nodeValue);
// 						var noeud_debut = document.createTextNode(trimm_debut); 
// 						id_d.replaceChild(noeud_debut, id_d.firstChild);
// 					}
		 
// 				// Nettoyage espaces vides en fin de défilant
// 				elem = id_d.lastChild;	
				
// 				if (elem.nodeType == 3) 
// 					{
// 						var noeud_fin = document.createTextNode(this.trim_fin(elem.nodeValue)); 
// 						id_d.replaceChild(noeud_fin, id_d.lastChild);
// 					}
				
				
// 				var div_defile = id_d.cloneNode(true);
				
// 				var espace_insecable = document.createTextNode("\u00a0"); 
				
// 				// Ajoute un espace insécable "\u00a0" si 'BR' est en fin de défilant pour le mode vertical (pour ie)
// 				if(!this.DF_ObjetParam[id]['sens_horizontal'] && div_defile.lastChild.nodeName == 'BR') 
// 				{
// 					div_defile.appendChild(espace_insecable);
// 				}
	
				
// 				var c = document.createElement("div");
// 				c.style.height = "100%";
				
// 				var nb_noeud = id_c.childNodes.length;
				
				
// 				// Dimensions du cadre
// 				for (var i = 0; i < nb_noeud ; i++) {id_c.removeChild(id_c.firstChild);}
// 				id_c.appendChild(c);
				
// 				this.DF_ObjetParam[id]['hauteur_cadre'] = c.offsetHeight;
// 				this.DF_ObjetParam[id]['largeur_cadre'] = c.offsetWidth;
// 				id_c.removeChild(id_c.firstChild);
// 				id_c.appendChild(div_defile);			
					
// 				this.DF_ObjetParam[id]['id_defile'] = document.getElementById(id);
				
				
// 				// Dimensions du défilant	
// 				var id_dim = typeof id_dim == 'undefined' || this.trim_debut(id_dim) == '' || id_dim == 'auto' ? 'auto' :  parseInt(id_dim);
				
// 				if(this.DF_ObjetParam[id]['sens_horizontal']) 
// 					{
// 						this.DF_ObjetParam[id]['id_defile'].style.height = this.DF_ObjetParam[id]['hauteur_cadre']+'px';
												
// 						this.DF_ObjetParam[id]['largeur_def'] = id_dim == 'auto' ? undefined : id_dim;
						
// 						if (typeof this.DF_ObjetParam[id]['largeur_def'] == 'undefined')
// 						{
// 							id_c.style.width = '1000000px';//largeur maxi de calcul
							
// 							this.DF_ObjetParam[id]['largeur_def'] = this.DF_ObjetParam[id]['id_defile'].offsetWidth;
							
// 							id_c.style.width = 'auto';
// 						}
						
// 						this.DF_ObjetParam[id]['id_defile'].style.width = this.DF_ObjetParam[id]['largeur_def']+'px';
						
// 					}
// 					else 
// 					{
// 						this.DF_ObjetParam[id]['id_defile'].style.width = this.DF_ObjetParam[id]['largeur_cadre']+'px';
						
// 						this.DF_ObjetParam[id]['hauteur_def'] = id_dim == 'auto' ? this.DF_ObjetParam[id]['id_defile'].offsetHeight : id_dim;
						
// 						this.DF_ObjetParam[id]['id_defile'].style.height = this.DF_ObjetParam[id]['hauteur_def']+'px';
// 					}



// 				this.DF_ObjetParam[id]['dim_cadre'] = this.DF_ObjetParam[id]['sens_horizontal'] ? this.DF_ObjetParam[id]['largeur_cadre'] : this.DF_ObjetParam[id]['hauteur_cadre'];
				
// 				this.DF_ObjetParam[id]['dim_defilant'] = this.DF_ObjetParam[id]['sens_horizontal'] ? this.DF_ObjetParam[id]['largeur_def'] : this.DF_ObjetParam[id]['hauteur_def'];
				
	
// 				this.DF_ObjetParam[id]['mode'] = typeof mode != 'undefined' && (mode == 'r' || mode == 'b') ? mode : 'b';
							
// 				this.DF_ObjetParam[id]['vitesse'] = typeof vit != 'undefined' && parseInt(vit) > 0 ? parseInt(vit) : 20;
			
// 				this.DF_ObjetParam[id]['psinit'] = typeof pos != 'undefined' && parseFloat(pos) > 0 ? parseFloat(pos) : 0;
				
// 				this.DF_ObjetParam[id]['b_esp'] = typeof b_esp != 'undefined' && parseFloat(b_esp) > 0 ? parseFloat(b_esp) : 0;		
				
// 				this.DF_ObjetParam[id]['pause'] = typeof pause != 'undefined' && parseInt(pause) > 0 ? parseInt(pause) : 0;
							
		
// 				this.DF_ObjetParam[id]['b_esp'] = this.DF_ObjetParam[id]['b_esp'] < 0  || this.DF_ObjetParam[id]['b_esp'] > 100 || this.DF_ObjetParam[id]['mode'] == 'r' ? 0 : Math.ceil(this.DF_ObjetParam[id]['b_esp'] * this.DF_ObjetParam[id]['dim_cadre']/100);
				
			
// 				this.DF_ObjetParam[id]['psinit'] = this.DF_ObjetParam[id]['psinit'] == 100 || this.DF_ObjetParam[id]['psinit'] < 0 || this.DF_ObjetParam[id]['psinit'] > 100 ? this.DF_ObjetParam[id]['dim_cadre'] : Math.ceil(this.DF_ObjetParam[id]['psinit']*this.DF_ObjetParam[id]['dim_cadre']/100);		
				
				
// 				this.DF_ObjetParam[id]['psinit'] = (this.DF_ObjetParam[id]['dim_cadre'] > this.DF_ObjetParam[id]['dim_defilant'] &&  this.DF_ObjetParam[id]['psinit'] == 0 ) ? this.DF_ObjetParam[id]['dim_cadre'] - this.DF_ObjetParam[id]['dim_defilant'] : this.DF_ObjetParam[id]['psinit'];
				
				
// 				this.DF_ObjetParam[id]['pscrnt'] = this.DF_ObjetParam[id]['psinit'];
				
// 				this.DF_ObjetParam[id]['sens'] = 1;
			
// 				this.DF_ObjetParam[id]['p_retour'] = this.DF_ObjetParam[id]['dim_defilant'] >= this.DF_ObjetParam[id]['dim_cadre'] ? this.DF_ObjetParam[id]['dim_defilant'] - this.DF_ObjetParam[id]['dim_cadre'] : 0;
				
// 				this.DF_ObjetParam[id]['dim_defilant'] += this.DF_ObjetParam[id]['b_esp'];														
			
// 				this.DF_ObjetParam[id]['p_retour'] = this.DF_ObjetParam[id]['mode'] == 'b' ? this.DF_ObjetParam[id]['dim_defilant'] : this.DF_ObjetParam[id]['p_retour'];
				
			
// 				if (this.DF_ObjetParam[id]['mode'] == 'r' && this.DF_ObjetParam[id]['dim_defilant'] == this.DF_ObjetParam[id]['dim_cadre'] && this.DF_ObjetParam[id]['psinit'] == 0) {this.DF_ObjetParam[id]['dim_defilant'] = 0;}
			
// 				if (this.DF_ObjetParam[id]['dim_defilant'] > 0 && this.DF_ObjetParam[id]['mode'] == 'b') {Ajout_clone(id);}
				
				
// 				id_cc.style.overflow = "visible";
// 				id_c.style.visibility = "visible";	
				
			
// 				this.DF_ObjetParam[id]['instance']();	
// 		}
// 	}


	
// 	function Ajout_clone(id) 
// 	{	   	
// 		var div_contenu = document.createElement("div");
		
// 		var nb_noeud = this.DF_ObjetParam[id]['id_defile'].childNodes.length;
		
// 		for (var i = 0; i < nb_noeud ; i++) 
// 			{				   
// 				div_contenu.appendChild(this.DF_ObjetParam[id]['id_defile'].firstChild.cloneNode(true));
// 				this.DF_ObjetParam[id]['id_defile'].removeChild(this.DF_ObjetParam[id]['id_defile'].firstChild);
// 			}
			
// 		if (this.DF_ObjetParam[id]['b_esp'] > 0)
// 		{
// 			if (this.DF_ObjetParam[id]['sens_horizontal'])
// 				{
// 					this.DF_ObjetParam[id]['sens_ini'] == 'g' ? div_contenu.style.paddingRight = this.DF_ObjetParam[id]['b_esp']+'px' : div_contenu.style.paddingLeft = this.DF_ObjetParam[id]['b_esp']+'px';		
// 				}
// 				else 
// 				{
// 					this.DF_ObjetParam[id]['sens_ini'] == 'h' ? div_contenu.style.paddingBottom = this.DF_ObjetParam[id]['b_esp']+'px' : div_contenu.style.paddingTop = this.DF_ObjetParam[id]['b_esp']+'px';					
// 				}
// 		}
		
// 		if (this.DF_ObjetParam[id]['sens_horizontal']) {div_contenu.style.display = "inline";};					
			   
// 		this.DF_ObjetParam[id]['id_defile'].appendChild(div_contenu.cloneNode(true));
				
// 		var nb_clone = Math.ceil(this.DF_ObjetParam[id]['dim_cadre']/(this.DF_ObjetParam[id]['dim_defilant']));
		
// 		if (this.DF_ObjetParam[id]['sens_horizontal']) 
// 			{
// 			   this.DF_ObjetParam[id]['id_defile'].style.width = ((nb_clone+1) * this.DF_ObjetParam[id]['dim_defilant'])+'px';
// 			}
// 			else
// 			{
// 			   this.DF_ObjetParam[id]['id_defile'].style.height = ((nb_clone+1) * this.DF_ObjetParam[id]['dim_defilant'])+'px';
// 			}
			
// 		for (var j = 0; j < nb_clone ; j++)
// 			{
// 				this.DF_ObjetParam[id]['id_defile'].appendChild(this.DF_ObjetParam[id]['id_defile'].firstChild.cloneNode(true));    
// 			}
// 	}



// 	function Boucle_cont(id)
// 	{
// 		this.DF_ObjetParam[id]['delaicrnt'] = this.DF_ObjetParam[id]['vitesse'];
// 		this.DF_ObjetParam[id]['inverse'] = 1;
	
// 		if(this.DF_ObjetParam[id]['pscrnt'] == - this.DF_ObjetParam[id]['p_retour'])	
// 				{					
// 					this.DF_ObjetParam[id]['id_defile'].appendChild(this.DF_ObjetParam[id]['id_defile'].firstChild.cloneNode(true));  
// 					this.DF_ObjetParam[id]['id_defile'].removeChild(this.DF_ObjetParam[id]['id_defile'].firstChild); 
					 
// 					this.DF_ObjetParam[id]['inverse'] = -1;		
// 					this.DF_ObjetParam[id]['pscrnt'] = 0;
// 					this.DF_ObjetParam[id]['sens'] = -1;		
// 				}		
// 				else
// 				{
// 					if(this.DF_ObjetParam[id]['pscrnt'] == this.DF_ObjetParam[id]['psinit'])
// 						{
// 							this.DF_ObjetParam[id]['sens'] *= -1;
// 							this.DF_ObjetParam[id]['delaicrnt'] = this.DF_ObjetParam[id]['pause']; 
// 						}
// 				}
				
// 			if (this.DF_ObjetParam[id]['sens_horizontal'])
// 				{
// 					this.DF_ObjetParam[id]['sens_ini'] == 'g' ? this.DF_ObjetParam[id]['id_defile'].style.left = this.DF_ObjetParam[id]['pscrnt']+"px" : this.DF_ObjetParam[id]['id_defile'].style.right = this.DF_ObjetParam[id]['pscrnt']+"px" ;
// 				}
// 				else
// 				{
// 					this.DF_ObjetParam[id]['sens_ini'] == 'h' ? this.DF_ObjetParam[id]['id_defile'].style.top = this.DF_ObjetParam[id]['pscrnt']+"px" : this.DF_ObjetParam[id]['id_defile'].style.bottom = this.DF_ObjetParam[id]['pscrnt']+"px" ;
// 				}
			 
// 			this.DF_ObjetParam[id]['pscrnt'] += this.DF_ObjetParam[id]['sens']; 
// 	}
	
	
	
// 	function Boucle_ar (id) 
// 	{
// 		this.DF_ObjetParam[id]['delaicrnt'] = this.DF_ObjetParam[id]['vitesse'];
// 		this.DF_ObjetParam[id]['inverse'] = 1;
		
// 		if(this.DF_ObjetParam[id]['pscrnt']  == - this.DF_ObjetParam[id]['p_retour'] || this.DF_ObjetParam[id]['pscrnt'] == this.DF_ObjetParam[id]['psinit'])
// 			{
// 				this.DF_ObjetParam[id]['inverse'] = -1;
// 				this.DF_ObjetParam[id]['delaicrnt'] = this.DF_ObjetParam[id]['pause']; 
// 				this.DF_ObjetParam[id]['sens'] *= -1;
// 			}
			
// 		if (this.DF_ObjetParam[id]['sens_horizontal'])
// 			{		
// 				this.DF_ObjetParam[id]['sens_ini'] == 'g' ? this.DF_ObjetParam[id]['id_defile'].style.left = this.DF_ObjetParam[id]['pscrnt']+"px" : this.DF_ObjetParam[id]['id_defile'].style.right = this.DF_ObjetParam[id]['pscrnt']+"px" ;
// 			}
// 			else
// 			{
// 				this.DF_ObjetParam[id]['sens_ini'] == 'h' ? this.DF_ObjetParam[id]['id_defile'].style.top = this.DF_ObjetParam[id]['pscrnt']+"px" : this.DF_ObjetParam[id]['id_defile'].style.bottom = this.DF_ObjetParam[id]['pscrnt']+"px" ;

// 			}
		
// 		this.DF_ObjetParam[id]['pscrnt'] += this.DF_ObjetParam[id]['sens']; 
// 	}

// }




class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      menuOn : false,
      contactOn : false,
      aboutOn : false,
      portefolioOn : true
    }

  }

 

  onResizeWindow = () => {
    let portefolioContentsClass = document.querySelector(".portefolioContentsClass");
    let portfolioItems = document.querySelector(".portfolioItems");
    let imgDark = document.querySelector(".imgDark");
    let contactPageClass = document.querySelector(".contactPageClass");
    let background = document.querySelector(".background");

    

    
    if (portefolioContentsClass && portfolioItems) 
    {
      let positionLogo = - window.innerWidth/2 + portfolioItems.offsetWidth/2;
    
      if (window.innerWidth>800) imgDark.style.transform = "translateX(" + positionLogo + "px) translateY(20vh) scale(0.7) rotate(135deg)";
      else if (window.innerWidth>500) imgDark.style.transform = "translateX(-40vw) translateY(40vh) scale(0.3) rotate(135deg)";
      else imgDark.style.transform = "translateX(-40vw) translateY(-30vh) scale(0.3) rotate(135deg)";

    }
    else if (contactPageClass)
    {
      imgDark.style.opacity = "1";
      imgDark.style.backgroundColor = "rgba(0,0,0,.5)";
      if (window.innerWidth>800) imgDark.style.transform = "translateX(40vw) translateY(0) scale(0.5) rotate(135deg)";
      else imgDark.style.transform = "translateX(0) translateY(-40vh) scale(0.5) rotate(135deg)";
      imgDark.style.transition = "all 1s ease-in-out";
    }
  }

  componentsReturn = (label) => {
    let imgDark = document.querySelector(".imgDark");
    let background = document.querySelector(".background");

    background.style.opacity = ".5";
    imgDark.style.opacity = "1";

    if (label === 'CONTACT')
    {
      imgDark.style.opacity = "1";
      imgDark.style.backgroundColor = "rgba(0,0,0,.5)";
      if (window.innerWidth>800) imgDark.style.transform = "translateX(40vw) translateY(0) scale(0.5) rotate(135deg)";
      else imgDark.style.transform = "translateX(0) translateY(-40vh) scale(0.5) rotate(135deg)";
      imgDark.style.transition = "all 1s ease-in-out";

      this.setState({
        menuOn : false,
        contactOn : true,
        aboutOn : false,
        portefolioOn : false
      })
    }

    if (label === 'ABOUT')
    {
      background.style.backgroundColor = "black";
      imgDark.style.backgroundColor = "rgba(255,255,255,.2)";
      imgDark.style.transform = "translateY(-35vh) scale(0.5) rotate(225deg)";

      this.setState({
        menuOn : false,
        contactOn : false,
        aboutOn : true,
        portefolioOn : false
      })
    }

    if (label === 'ACCUEIL')
    {
      imgDark.style.backgroundColor = "rgba(0,0,0,.2)";
      imgDark.style.transform = "translateY(0vh) scale(1) rotate(0deg)";

      this.setState({
        menuOn : true,
        contactOn : false,
        aboutOn : false,
        portefolioOn : false
      })
    }

    if (label === 'PORTEFOLIO')
    {
      let background = document.querySelector(".background");
      background.style.backgroundColor = "black";
      background.style.opacity = "1";

      this.setState({
        menuOn : false,
        contactOn : false,
        aboutOn : false,
        portefolioOn : true
      })
    }
  }

  componentDidMount()
  {  
    window.addEventListener('resize', this.onResizeWindow);
    let background = document.querySelector(".background");
    background.style.transition = "backgroundColor 1s 1.25s ease-in-out"; 
    // addLoad_DF_ObjetDefilant(function(){DF_ObjetDefilant('objet_defilant_11','auto','b','g','17','100','10','0')});


    console.log("this.props.history", this.props.history.location)
    var currentURL = this.props.history.location.pathname;
    var tempo = "ACCUEIL";
    if (currentURL === "/aboutMe") tempo = "ABOUT";
    if (currentURL === "/contact") tempo = "CONTACT";
    if (currentURL === "/portefolio") tempo = "PORTEFOLIO";

    // console.log("DID MOUNT", tempo);
    this.componentsReturn(tempo);
  }

  render() {

    return (
    <div className="appClass">

      {/* <div className="En_constructionClass">
        <h1 style={{zIndex:"990", color:"red"}}>Site en construction</h1>
      </div> */}


      <Router>
 
        <Logo onLogoClick={this.componentsReturn} />

        <Switch>
          {/* Page de menu' */}
          <Route exact path='/' render={ (props) => (
              <Menu {...props} onMenu={this.state.menuOn} onMenuClick={this.componentsReturn} /> 
            )} 
          />

          {/* Page aboutMe' */}
          <Route exact path='/aboutMe' render={ (props) => (
              <AboutMe {...props} onAbout={this.state.aboutOn} onAboutClick={this.componentsReturn}/> 
            )} 
          />

          {/* Page contact' */}
          <Route exact path='/contact' render={ (props) => (
              <Contact {...props} onContact={this.state.contactOn} onContactMe={this.componentsReturn} /> 
            )} 
          />

          {/* Page portefolio' */}
          <Route exact path='/portefolio' render={ (props) => (
              <Portefolio {...props} onPortefolio={this.state.portefolioOn} /> 
            )} 
          />

        </Switch>
      </Router> 

      {/* * TJS AFFICHES */ }
      {/* ************************************ */}
      <div className = "background">
        <AccueilBackground />
      </div> 

      {/* <div className="infoTextLogo">
        <h5>Clique sur le logo pour continuer</h5>
      </div> */}

      <div id="cadre_defil_11"> 
        <div id="conteneur_defil_11">
          <div id="objet_defilant_11">
            <h3>ReactJS, Javascript, HTML, CSS, PHP, SQL, SERVEUR, BASE DE DONNEE, INFORMATIQUE, TRAITEMENT DE SIGNAL, LANGAGE C, GITHUB, MATLAB, LABVIEW, EAGLE ELECTRONIQUE, ReactJS, Javascript, HTML, CSS, PHP, SQL, SERVEUR, BASE DE DONNEE, INFORMATIQUE, TRAITEMENT DE SIGNAL, LANGAGE C, GITHUB, MATLAB, LABVIEW, EAGLE ELECTRONIQUE, </h3>
          </div>
        </div>
      </div>

    </div>
    )
  }
}

export default withRouter(App);