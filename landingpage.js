// Browser Loader disppear
// function enterWebsite() {
//     let loadingPage = document.getElementById("load_page");
//     loadingPage.style.display = 'none';
// }

// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(enterWebsite, 4000);
// });

function enterWebsite() {
    let loadingPage = document.getElementById("load_page");
    loadingPage.style.display = 'none';
    document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", function() {
    const initialLoadDuration = 4000;
    const subsequentLoadDuration = 1000;

    setTimeout(enterWebsite, initialLoadDuration);

    // Adjusting the duration for subsequent loads
    let subsequentLoadTimeout = initialLoadDuration;
    let isFirstLoad = true;
    function subsequentLoad() {
        if (isFirstLoad) {
            isFirstLoad = false;
            subsequentLoadTimeout = subsequentLoadDuration;
        }
        enterWebsite();
    }

    setTimeout(subsequentLoad, subsequentLoadTimeout);
});

// Goes to the Landing Page
function moveToLandingPage() {
    window.location.href = "index.html";
}

// Copied the current URL of the browser
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

// Change body height until certain time is reached
// document.body.style.overflow = "hidden";

// setTimeout(function() {
//     document.body.style.overflow = "auto";
// }, 4000); 

// Scroll to top when restart button of browser is clicked
function scrollToTop() {
    window.scrollTo(0, 0);
}

window.addEventListener("beforeunload", function() {
    scrollToTop(); 
});
