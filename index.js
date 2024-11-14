setTimeout(()=>{
    document.getElementById("loadscreen").style.display="none";

    document.getElementById("maincontent").style.display="block";


},1500);

function toggleMenu(){
    const menu=document.getElementById("dropdown-menu");
    const hamburger=document.querySelector(".bar_menu");

    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
}