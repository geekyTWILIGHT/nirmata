function enterWebsite() {
    let loadingPage = document.getElementById("load_page");
    loadingPage.style.display = 'none';
}

setTimeout(enterWebsite, 4000);

function moveToLandingPage() {
    window.location.href = "index.html";
}

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
