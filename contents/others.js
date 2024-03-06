// For copying the current URL

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