// alert("Clique sur START pour commencer à jouer !"
//         + "Bonne chance !");

let h1s = document.getElementsByTagName('p');
h1s[0].innerHTML = 0;

function pxTOvh(value) 
{
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var result = (100*value)/y;
    // document.getElementById("result_px_vh").innerHTML = result;  // affichage du résultat (facultatif)
    return result;
}

function pxTOvw(value) 
{
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var result = (100*value)/x;
    // document.getElementById("result_px_vw").innerHTML = result;  // affichage du résultat (facultatif)
    return result;
}

function vwTOpx(value) {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;
  
    var result = (x*value)/100;
    return result;
  }
  
function vhTOpx(value) {
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

var result = (y*value)/100;
return result;
}

function MoveBarre( evt )
{
    evt = !evt ? event : evt

    var Mouse_X = evt.clientX;   

    // Largeur de la fenetre
    let maxWidth = window.innerWidth;

    // Normalise
    let bareWidth = document.getElementById("barre").offsetWidth;
    let valueNormeX = 100 * (Mouse_X- bareWidth/2)/maxWidth;

    // calcul le déplacement de la barre
    let value = 0;
    if ( (Mouse_X <= maxWidth-bareWidth/2) && (Mouse_X >= bareWidth/2) )
    {
        value = valueNormeX + "vw";
    }
    else if (Mouse_X > maxWidth-bareWidth/2)
    {
        value = maxWidth-bareWidth;
        value += "px";
    }
    else if (Mouse_X < (bareWidth-bareWidth/2))
    {
        value = 0;
    }

    // assigne le déplacement de la barre
    document.getElementById("barre").style.left = value;

    let footerHeight = document.getElementById("footer").clientHeight;
    document.getElementById("barre").style.height = footerHeight + "px";

    // console.log(footerHeight);   
}

let incx = 1;
let incy = 1;
let incX = incx;
let incY = incy;
let stateValid = 0;
let Nb_Bump = 0;
let NbLevel=0;

let BeginTime;

let _moveFct;

function MoveBille (evt)
{
    document.getElementById("bille").style.left = 0 + "vw";
    document.getElementById("bille").style.top = 0 + "vh";
    BeginTime = Date.now();

    incx = 1;incy = 1;
    Nb_Bump = 0;
    h1s[0].innerHTML = 0;
    NbLevel=0;

    _moveFct = setInterval(Move, 5);
}



function Move() 
{
    document.getElementById("main").innerHTML = new Date().toLocaleTimeString();
    document.getElementById("barre").innerHTML = Nb_Bump;

    let billeSizeX =  document.getElementById("bille").offsetWidth;//Math.round(pxTOvw(document.getElementById("bille").offsetWidth));
    let billeSizeY =  document.getElementById("bille").offsetHeight;//Math.round(pxTOvh(document.getElementById("bille").offsetHeight));
    let headerSize =  document.getElementById("header").offsetHeight;
    let footerSize =  document.getElementById("footer").offsetHeight;
    
    // Lit et incrémente la position 
    let obj = document.getElementById("bille").style;
    let elementLeft = obj.left;
    let elementTop = obj.top;

    let valueLeft = parseFloat(elementLeft, 10);
    let valueTop = parseFloat(elementTop, 10);

    if (valueLeft >= (window.innerWidth-billeSizeX)) // A DROITE
    {
        if (stateValid==0)
        {
            stateValid = 1;
            incX = -incx; incY = incy;
        }
        else if (stateValid==3)
        {
            stateValid = 2;
            incX = -incx; incY = -incy;
        }
    }
    else if (valueTop >= (window.innerHeight-billeSizeY-footerSize)) // EN BAS
    {
        let bareWidth = document.getElementById("barre").offsetWidth;
        let bareLeftPos = document.getElementById("barre").offsetLeft;
        let bareRightPos = bareLeftPos + bareWidth;
        let billeCenterX = valueLeft + billeSizeX/2;

        document.getElementById("barre").style.borderTopColor="green";
        document.getElementById("barre").style.color="green";
        setTimeout(function() { document.getElementById("barre").style.borderTopColor="black"; }, 500);
        setTimeout(function() { document.getElementById("barre").style.color="black"; }, 500);

        
        if ((billeCenterX>=bareLeftPos) && (billeCenterX<=bareRightPos))
        {

            if (billeCenterX < (bareLeftPos + bareWidth/4)) {incx+=0.2;}
            else if (billeCenterX >= (bareRightPos - bareWidth/4)) {incx+=0.2;}
            else {incx-=0.1;}

            if (stateValid==1)
            {
                stateValid = 2;
                incX = -incx; incY = -incy;
            }
            else if (stateValid==0)
            {
                stateValid = 3;
                incX = incx; incY = -incy;
            }
            Nb_Bump++;

            if (Nb_Bump%5 == 0) 
            {
                NbLevel++;
                h1s[0].innerHTML = NbLevel;
                incx=incx+.5;incy=incy+.5;
                document.getElementById("barre").style.borderColor="red";
                document.getElementById("barre").style.backgroundColor = "red";
                h1s[0].style.color = "red";
                setTimeout(function() { document.getElementById("barre").style.borderColor="black"; }, 500);
                setTimeout(function() { document.getElementById("barre").style.backgroundColor="blanchedalmond"; }, 500);
                setTimeout(function() { h1s[0].style.color = "green"; }, 500);
                
            }
        }
        else
        {
            let EndTime = Date.now();
            let GameTime = (EndTime-BeginTime)/1000;
            clearInterval(_moveFct);

            
            incx--;
            alert("Tu as sauver la balle " + Nb_Bump + " fois en " + GameTime + " secondes !"
            + "\nLe niveau " + NbLevel + " est trop dur pour toi ?"
            + "\nTu fera mieux au prochain coup :-)"
            + "\n"
            + "\nCliquez à nouveau pour recommencer à jouer !");

            valueLeft = 0;
            valueTop = 0;
            Nb_Bump = 0;
            incx=1;incy=1;incX=1;incY=1;
            h1s[0].innerHTML = 0;
            NbLevel=0;

            BeginTime = Date.now();
            document.getElementById("barre").innerHTML = Nb_Bump;

            // console.log(GameTime);
        }
    }
    else if (valueLeft <= 0) // A GAUCHE
    {
        if (stateValid==2)
        {
            stateValid = 3;
            incX = incx; incY = -incy;
        }
        else if (stateValid==1)
        {
            stateValid = 0;
            incX = incx; incY = incy;
        }
    }
    else if (valueTop <= headerSize) // EN HAUT
    {
        document.getElementById("header").style.borderBottomColor="green";
        setTimeout(function() { document.getElementById("header").style.borderBottomColor="black"; }, 500);
        
        if (stateValid==2)
        {
            stateValid = 1;
            incX = -incx; incY = incy;
        }
        else if (stateValid==3)
        {
            stateValid = 0;
            incX = incx; incY = incy;
        }
    }

    valueLeft = valueLeft + incX;
    let valueLeftVw = valueLeft + "px";
    obj.left = valueLeftVw;

    valueTop = valueTop + incY;
    let valueTopVh = valueTop + "px";
    obj.top = valueTopVh;
    
    
    // console.log(billeCenterX);
}

function LevelInc ()
{
    h1s[0].innerHTML = incx;
    incx=incx+1;incy=incy+1;
}

var backBille = document.getElementById("start");
backBille.addEventListener('click',MoveBille,false);

h1s[0].addEventListener('click',LevelInc,false);

document.addEventListener('mousemove',MoveBarre,false);



