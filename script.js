import {projektArr} from "./projekt.js";

const openMobileNav = document.getElementById("hamburger-icon");
const closeMobileNav = document.getElementById("nav-close-btn");
const mobileSidenav = document.getElementById("mobile-sidenav");

const impressumHeader = document.getElementById("impressum-header")
const impressumDiv = document.getElementById("impressum")

const datenschutzHeader = document.getElementById("datenschutz-header")
const datenschutzDiv = document.getElementById("datenschutz-div")

const links = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

const visualLinks = document.getElementsByClassName("visual-a");

const form = document.getElementById('kontact-form-wrapper');
const thankYouMessage = document.getElementById('thank-you-message');

const projektWrapper = document.getElementById("projekt-wrapper")


let projektEl = []

/*Color Divs in About me Seite */

const aboutColorDivCont = document.getElementById("about-color-div-container")


const colorDiv1 = document.getElementById("1")
const colorDiv2 = document.getElementById("2")
const colorDiv3 = document.getElementById("3")
const colorDiv4 = document.getElementById("4")



if (openMobileNav && mobileSidenav) {
    openMobileNav.addEventListener("click", function () {
      mobileSidenav.classList.add("open");
    });
  }
  
  if (closeMobileNav && mobileSidenav) {
    closeMobileNav.addEventListener("click", function () {
      mobileSidenav.classList.remove("open");
    });
  }

/*Aktuelle Link markieren */
links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
      link.classList.add("active-link");
    }
  });

/*Visuelle Links auf Mobilgeräten markieren */

if (visualLinks) {
  for (let link of visualLinks) {
    const linkPage = link.getAttribute("href");
    if(linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
      link.classList.add("visual-nav-active-link");
    }
  };
}

  // Sanfter Seitenübergang

  document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', function(e) {
      const url = this.getAttribute('href');
  
      // Verhindere das direkte Laden
      if (!url.startsWith('#') && !url.startsWith('mailto:') && !url.startsWith('javascript:')) {
        e.preventDefault();
  
        // Seiteninhalt ausblenden
        document.body.style.transition = 'opacity 0.4s';
        document.body.style.opacity = 0;
  
        // Lade die Seite nach der Animation
        setTimeout(() => {
          window.location.href = url;
        }, 400);
      }
    });
  });

  //Dankemessage auf Kontaktseite 
  if (form) { 
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdkgvbjq", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        form.style.display = "none";
        thankYouMessage.style.display = "block";
      } else {
        alert("Es gab ein Problem beim Absenden des Formulars.");
      }
    } catch (error) {
      alert("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
    }
  });
};

//Impressum und datenschutz div anzeigen lassen

if (impressumHeader) {
  impressumHeader.addEventListener("click", function(){
    impressumDiv.style.display = "block";
  }); 

  impressumDiv.addEventListener("click", function(){
    impressumDiv.style.display = "none";
  });
}

if (datenschutzHeader) {
  datenschutzHeader.addEventListener("click", function(){
    datenschutzDiv.style.display = "block";
  }); 

 datenschutzDiv.addEventListener("click", function(){
    datenschutzDiv.style.display = "none";
  });
}



/* projekt-div Template 

<h2 id="projekt-header" > Guess Word Game</h2>
                <h3 id="projekt-subheader">Ein kleines Spiel: beantworte die Frage und gewinn. Kennst du das Wort nicht? Errate! Du hast dafür 6 Versuche</h3>
                <a href="https://resplendent-pixie-553bac.netlify.app" id="projekt-link-btn">zum Projekt</a>
                <a href="https://resplendent-pixie-553bac.netlify.app" id="projekt-img-a"><img src="images/projekts-img/game.png" alt="Das Bild zeigt die erste Seite eines Web-Projekts" id="projekt-img"></a>
                <div id="projekt-icon-div">
                  <img src="images/projekts-img/HTML.png" alt="">
                  <img src="images/projekts-img/CSS.png" alt="">
                  <img src="images/projekts-img/JS.png" alt="">
                  <img src="images/projekts-img/REACT.png" alt="">
                  <img src="images/projekts-img/Figma.png" alt="">
                </div>

 */


projektEl = projektArr.map(item =>{
  return(
  `
        <h2 class="projekt-header" > ${item.name}</h2>
        <h3 class="projekt-subheader">${item.description}</h3>
        <a href="${item.link}" class="projekt-link-btn">zum Projekt</a>
        <a href="${item.link}" class="projekt-img-a"><img src="${item.image}" alt="Das Bild zeigt die erste Seite eines Web-Projekts" class="projekt-img"></a>
        <div class="projekt-icon-div">
          ${item.icons.map(icon =>{
            return(
              `<img src="${icon}" alt="">`
            )
          }).join(" ")}
        </div>
    
    `
  )
})



if (projektWrapper) {
  projektWrapper.innerHTML = projektEl
}

/* Color Divs Hide and Showt*/

/*
if(colorDiv0 || colorDiv1 || colorDiv2 || colorDiv3){
  colorDiv0.addEventListener("click", function(){

    document.getElementsByClassName("about-color-p")[0].style.display === "none" ? 
    document.getElementsByClassName("about-color-p")[0].style.display = "block" : 
    document.getElementsByClassName("about-color-p")[0].style.display = "none"

    
  })
} */

  const coloredDivArr = [colorDiv1, colorDiv2, colorDiv3, colorDiv4]
  

 if(coloredDivArr){
  
  coloredDivArr.map(item => {
     
    if(item) { 

    return ( item.addEventListener("click", function(e){
      //console.log(e.target.parentNode.id)
      //console.log(document.getElementsByClassName("about-color-p")[e.target.parentNode.id])
      if( document.getElementsByClassName("about-color-p")[e.target.parentNode.id - 1].style.display === "none") {
        document.getElementsByClassName("about-color-p")[e.target.parentNode.id - 1].style.display = "block"
      } else { document.getElementsByClassName("about-color-p")[e.target.parentNode.id - 1].style.display = "none"}
      
    }))

    }
    
  })

 }