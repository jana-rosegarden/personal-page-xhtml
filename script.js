const openMobileNav = document.getElementById("hamburger-icon");
const closeMobileNav = document.getElementById("nav-close-btn");
const mobileSidenav = document.getElementById("mobile-sidenav");

const impressumHeader = document.getElementById("impressum-header")
const impressumDiv = document.getElementById("impressum")



const links = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

const visualLinks = document.getElementsByClassName("visual-a");

const form = document.getElementById('kontact-form-wrapper');
const thankYouMessage = document.getElementById('thank-you-message');


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

//Impressum div anzeigen lassen

if (impressumHeader) {
  impressumHeader.addEventListener("click", function(){
    impressumDiv.style.display = "block";
  }); 

  impressumDiv.addEventListener("click", function(){
    impressumDiv.style.display = "none";
  });
}
