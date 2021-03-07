// Détecter lorsqu'on scroll
window.onscroll = function() { sticky() };

function sticky()
{
    // Récupérer les éléments
    let header = document.getElementById("sticky-header");
    let offsetMenu = header.offsetTop;
    let hauteurMenu = header.offsetHeight;
    let hauteur = offsetMenu + hauteurMenu;

    let section = document.querySelector(".header-services");
    let hauteurSection = section.offsetTop;

    // console.log(hauteurSection);
    // console.log(window.scrollY);

    if (window.innerWidth>=800)
    {
        if (window.pageYOffset > offsetMenu)
        {
            header.classList.add("sticky");
            
            // window.scroll(0,hauteurSection);
        }
        
        if (window.pageYOffset < hauteurSection)
        {
            header.classList.remove("sticky");
        }
    }
    else
    {
        if (window.pageYOffset > 0)
        {
            header.classList.add("sticky");
            
            // window.scroll(0,hauteurSection);
        }
    }
}