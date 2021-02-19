let body = document.body;
body.addEventListener('mousemove', move_docFct);

let element = document.getElementsByClassName('el-Style');

let logo = document.querySelector("logoClass");
// logo.addEventListener('mouseover', over_logoFct);
// logo.addEventListener('mouseleave', leave_logoFct);

let main = document.getElementsByClassName("main");
// main.addEventListener('mouseover', over_logoFct);
// console.log("RENDU : ", main)

function move_docFct (e)
{
    let moved = (e.clientX/window.innerWidth)/2 ;
    let elementsLength = element.length;  
    for (var i = 0 ; i < elementsLength ; i++) 
    {  
        element[i].style.opacity = moved;      
    }
}

function over_logoFct ()
{
    // logo.style.opacity = 0;
    // logo.style.transition = "opacity 1s";

    // main.style.backgroundColor = "black";
    // main.style.transition = "background-color 2s";
    
    for (let ind=0;ind<element.length;ind++)
    {
        element[ind].style.opacity = 1;
        element[ind].style.transition = "opacity 1s";
    }

    main[0].style.backgroundColor = "black";
}

function leave_logoFct ()
{
    logo.style.opacity = 1;
    logo.style.transition = "opacity 3s";

    main.style.backgroundColor = "bisque";
    main.style.transition = "background-color 4s";

    for (let ind=0;ind<element.length;ind++)
    {
        element[ind].style.opacity = .1;
        element[ind].style.transition = "opacity 1s";
    }

    // textAbout.style.color = "transparent";
    // textAbout.style.transition = "color .5s";    

    // body.addEventListener('wheel', clickFct);
}