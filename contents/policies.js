// For Privacy Policy, Return Policy, and Terms of Service

// Copies the current URL of the browser
function copyURL() {
    var url = window.location.href; 
    var tempInput = document.createElement("input"); 
    document.body.appendChild(tempInput);
    tempInput.setAttribute("value", url); 
    tempInput.select(); 
    document.execCommand("copy"); 
    document.body.removeChild(tempInput); 
    
    var copiedNotif = document.getElementById("link-copied-notif");
    copiedNotif.style.opacity = 1; 

    setTimeout(function() {
      copiedNotif.style.opacity = 0; 
    }, 2000);
}

// Go to top
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > window.innerHeight * 0.5 && window.scrollY < document.documentElement.scrollHeight - window.innerHeight * 1.5) {
      document.querySelector(".go-up").style.display = "flex";
  } else {
      document.querySelector(".go-up").style.display = "none";
  }
}

function goToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
