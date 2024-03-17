document.addEventListener("DOMContentLoaded", function() {
    const phrases = ["HI! Welcome to my Personal Portfolio...", "Go, have a look around!...", "Enjoy your visit..."];
    const typewriterElement = document.getElementById("typewriter");
    const delay = 150;
    const links = document.querySelectorAll('.nav-link'); // Select all nav links
  
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    const typeEffect = setInterval(() => {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }
  
      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
  
      if (phraseIndex === phrases.length && charIndex === 0) {
        clearInterval(typeEffect);
      }
    }, delay);
    
    
});
document.addEventListener("DOMContentLoaded", function() {
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabname){
      for(tablink of tablinks){
          tablink.classList.remove("active-link")
      }
      for(tabcontent of tabcontents){
          tabcontent.classList.remove("active-tab")
      }
      event.currentTarget.classList.add("active-link")
      document.getElementById(tabname).classList.add('active-tab')
  }
  var sidemenu = document.getElementById("sidemenu");
  function openmenu(){
      sidemenu.style.right = "0";
  }
  function closemenu(){
      sidemenu.style.right = "-200";
  }
});
