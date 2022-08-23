// Check If There's Local Storage Colors Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));

    // Remove Class Active From All Color Item
    document.querySelectorAll(".color-list li").forEach(element => {
        element.classList.remove("active");

        // Add Active Class on Element With data-Colors === Local Storage
        if (element.dataset.color === mainColors) {

            // Add Class Active
            element.classList.add("active");
        }
    });
}

// Random Background Option
let backgroundOption = true;

// Varabule To Control Background Interval
let backgroundInterval;

// Check If There's Local Storage Background Option
let backgroundLocalStorage = localStorage.getItem("background_option");

// Check If There's Local Storage Background Option
if (backgroundLocalStorage !== null) {
 
    if (backgroundLocalStorage === true) {

        backgroundOption = true;
    } else {

        backgroundOption = false;
    }
    // Remove Class Active From All Color Item
    document.querySelectorAll(".random-bg span").forEach(element => {

        element.classList.remove("active");
    });

    // Add Active Class on Element With data-background === Local Storage
    if (backgroundLocalStorage ==='true') {
        document.querySelector(".random-bg .yes").classList.add("active");
    } else {
        document.querySelector(".random-bg .no").classList.add("active");
    }
}

// Toggle Spin Class In Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function() {
    // Toggle Class Fa-spin Rotation On Self
    this.classList.toggle(".fa-spin");

    // Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
};

//Switch Color
const colorLi = document.querySelectorAll(".color-list li");

// Loop On All List Items
colorLi.forEach(li => {

    // Click On Every List Items
    li.addEventListener("click", (e) => {

        // Set Color on Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        // Set Color on Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        handleActive(e);

    });
});

// Switch Random Backgronud Options
const randomBg = document.querySelectorAll(".random-bg span");

// Loop on All Spans
randomBg.forEach(span => {

    // Click On Every List Items
    span.addEventListener("click", (e) => {

        // Remove Active Class From All childrens
        handleActive(e);

        // Check Background True
        if (e.target.dataset.background === "yes") {

            backgroundOption = true;

            randomizeImgs();

            localStorage.setItem("background_option", true);
        } else {
            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background_option", false);
        }
    });
});


// Select Landing Page
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

// Function Randomzie Imgs
function randomizeImgs() {
    //
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {

            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
        
            // Change Background Image URL
            landingPage.style.backgroundImage = 'url("img/'+ imgsArray[randomNumber] +'")';
        },5000);
    }
}
randomizeImgs();

// Selecta Skills Seletor
let ourSkills = document.querySelector(".our-skills");

window.onscroll = function() {
    // Selecta Skills of Set Top
    let skillOfsetTop = ourSkills.offsetTop;
    // Skills Outer Height
    let skillOuterHeight = ourSkills.offsetHeight;
    // Window Height
    let windowHeight = this.innerHeight;
    // Window Scroll Top
    let windowScrollTop = this.pageYOffset;

    //
    if (windowScrollTop > (skillOfsetTop + skillOuterHeight - windowHeight)) {
        // Selecta All Skills Class
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }

};

// Selecter Our Gallery
let ourGallery = document.querySelectorAll(".our-gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {
        
        // Creatre Overlay Element
        let overlay = document.createElement("div");
        
        // Add class To Overlay
        overlay.className='popup-overlay';

        // Append Overlay To The Body
        document.body.appendChild(overlay);

        // Creata The Popup Box
        let popupBox = document.createElement("div");

        // Add Class To The Popup Box
        popupBox.className = 'popup-box';

        /////////////////////////////////////////////////

        // 
        if (img.alt !== null) {

            // Create Heading
            let imgHeading = document.createElement("h3");

            // Create text nfor Heading
            let imgText = document.createTextNode(img.alt);

            // Append The Text to heading 
            imgHeading.appendChild(imgText);

            // Append The Heading to the popup Box
            popupBox.appendChild(imgHeading);

        }

        //////////////////////////////////////////////
        // Creata Image Source
        let popupImage = document.createElement("img");

        // Set image Source
        popupImage.src = img.src;

        // Add Image To Popup Box
        popupBox.appendChild(popupImage);

        // Append The Popup Box To Body
        document.body.appendChild(popupBox);        
        
        ///////////////////////////////////////////////
        // Create the Close span
        let closeButton = document.createElement("span");

        // Creae the Close Button Text
        let closeButtonText = document.createTextNode("X");

        // Append Text to Close Buttom
        closeButton.appendChild(closeButtonText);

        // Add Class To Close Button
        closeButton.className = 'close-button';

        // Add close Button to the Popup Box
        popupBox.appendChild(closeButton);
    });
});

// Close Popup
document.addEventListener("click", function (e) {
    if (e.target.className == 'close-button') {

        // Remove The Current Popup
        e.target.parentNode.remove();

        // Remove Overlay
        document.querySelector(".popup-overlay").remove();
    }
})

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullets");

const allLinks = document.querySelectorAll(".links a");

function scrolltoSomeware (elements) {
    elements.forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
scrolltoSomeware(allBullets);
scrolltoSomeware(allLinks);

// Bullets Localstroge
let bulletsSpsn = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletsLocalItem = localStorage.getItem("bullets_option");

if(bulletsLocalItem !== null) {

    bulletsSpsn.forEach(span => {

        span.classList.remove("active");

    });

    if(bulletsLocalItem === 'block') {

        bulletsContainer.style.display = 'block';

        document.querySelector(".bullets-option .yes").classList.add("active");

    } else {

        bulletsContainer.style.display = 'none';

        document.querySelector(".bullets-option .no").classList.add("active");

    }
}

bulletsSpsn.forEach(span => {
    span.addEventListener("click", (e) => {

        if(span.dataset.display === 'show') {

            bulletsContainer.style.display = 'block';

            localStorage.setItem("bullets_option", 'block');

        } else {

            bulletsContainer.style.display = 'none';

            localStorage.setItem("bullets_option", 'block');

        }
        handleActive(e);
    });
});

// Handle Active State
function handleActive (ev) {
    
        // Remove Active Class From All childrens
        ev.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });

        // Add Active Class on Self
        ev.target.classList.add("active");
}

// Reset Button

document.querySelector(".reset-options").onclick = function () {
   // localStorage.clear();
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");
    window.location.reload();
};

//Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
    // Stop Propagation
    e.stopPropagation();
    // Toggle Class "menu-active" on Button
    this.classList.toggle("menu-active");
    // Toggle Class "open" on Links
    tLinks.classList.toggle("open");
};

// Click anywhare Outside Menu & Toggle Button
document.addEventListener("click", (e) => {
    if(e.target !== toggleBtn && e.target !== tLinks) {
        // Chek If Menu Is Open
        if(tLinks.classList.contains("open")) {
            // Toggle Class "menu-active" on Button
          toggleBtn.classList.toggle("menu-active");
          // Toggle Class "open" on Links
            tLinks.classList.toggle("open");
        }
    }
});

// STOP Propagation on Menu
tLinks.onclick = function(e) {

    e.stopPropagation();
}