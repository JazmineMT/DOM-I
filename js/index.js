const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br/> Is <br/> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let mainIMG = document.getElementById("cta-img");
mainIMG.setAttribute('src', siteContent["cta"]["img-src"])

let middleIMG = document.getElementById("middle-img");
middleIMG.setAttribute('src', siteContent["main-content"]["middle-img-src"])




const theNav = document.querySelector('nav')
const childrenOfNav = theNav.children


const greenLinks = document.querySelector('a')
for (i=0; i< greenLinks.length; i++){
    greenLinks.style.color = 'green'; 
  }




let firstLink = childrenOfNav[0]
firstLink.textContent = siteContent["nav"]["nav-item-1"];

firstLink.style.color = 'green'

let secondLink = childrenOfNav[1]
secondLink.textContent = siteContent["nav"]["nav-item-2"];

secondLink.style.color = 'green'


let thirdLink = childrenOfNav[2]
thirdLink.textContent = siteContent["nav"]["nav-item-3"];

thirdLink.style.color = 'green'

let fourthLink = childrenOfNav[3]
fourthLink.textContent = siteContent["nav"]["nav-item-4"];

fourthLink.style.color = 'green'

let fifthLink = childrenOfNav[4]
fifthLink.textContent = siteContent["nav"]["nav-item-5"];

fifthLink.style.color = 'green'

let sixthLink = childrenOfNav[5]
sixthLink.textContent = siteContent["nav"]["nav-item-6"];


sixthLink.style.color = 'green'







let  firstTitle = document.querySelector('h1');
firstTitle.innerHTML = siteContent["cta"]["h1"];



let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];



const allH4s = document.querySelectorAll('h4');


let firstH4 = allH4s[0]
firstH4.textContent = siteContent ["main-content"]["features-h4"];
let secondH4 = allH4s[1]
secondH4.textContent = siteContent["main-content"]["about-h4"];
let thirdH4 = allH4s[2]
thirdH4.textContent = siteContent["main-content"]["services-h4"];
let fourthH4 = allH4s[3]
fourthH4.textContent = siteContent["main-content"]["product-h4"];
let fifththH4 = allH4s[4]
fifththH4.textContent = siteContent["main-content"]["vision-h4"];


let topContentP = document.querySelector('.top-content .text-content:nth-of-type(1) p');
topContentP.textContent = siteContent["main-content"]["features-content"]
let topContentP2 = document.querySelector('.top-content  .text-content:nth-of-type(2) p');
topContentP2.textContent = siteContent["main-content"]["about-content"]


let bottomContentP1 = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
bottomContentP1.textContent = siteContent["main-content"]["services-content"]
let bottomContentP2 = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
bottomContentP2.textContent = siteContent["main-content"]["product-content"]
let bottomContentP3 = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
bottomContentP3.textContent = siteContent["main-content"]["vision-content"]



let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent["contact"]["contact-h4"]


let contactP = document.querySelector(' .contact p:nth-of-type(1)');
contactP.textContent = siteContent["contact"]["address"];
let contactP2 = document.querySelector(' .contact p:nth-of-type(2)');
contactP2.textContent = siteContent["contact"]["phone"];
let contactP3 = document.querySelector(' .contact p:nth-of-type(3)');
contactP3.textContent = siteContent["contact"]["email"];




let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];