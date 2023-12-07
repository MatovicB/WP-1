

var nizNavigacioniMeniHref = ["index.html","about.html","games.html","tranner.html","contact.html"];
var nizNavigacioniMeniTekst = ["Pocetna2","O nama","Utakmice","Treneri","Kontakt"];

var navigacioniMeniHTML = document.querySelector("#mySidepanel");


var ispisNavigacioniMeni = `<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>`;
for(let i = 0;i<nizNavigacioniMeniHref.length;i++){
    ispisNavigacioniMeni +=`
    <a href="${nizNavigacioniMeniHref[i]}">${nizNavigacioniMeniTekst[i]}</a>"
    `
}
// console.log(ispisNavigacioniMeni); // Provera

navigacioniMeniHTML.innerHTML = ispisNavigacioniMeni;



/* Ispis sportova  */
let nizSportSlikaSrc = ["images/sport1.png","images/sport2.png","images/sport3.png"];
let nizSportSlikaAlt = ["Slika Jiu-Jitse","Slika Atletike","Slika Fudbala"];
let nizSportNaslov = ["Jiu-jitsa","Atletika","Fudbal"];
let nizSportTekst = ["Ovo je tekst sporta 1","Ovo je tekst sporta 2","Ovo je tekst sporta 3"];

let tagZaIspisSporta = document.getElementById("ispisSport");

for(let i =0 ;i<nizSportNaslov.length;i++){

    let divTagColBoot = document.createElement("div");
    divTagColBoot.setAttribute("class",i==1?"col-md-6":"col-md-3");

    let divTagSportMain = document.createElement("div");
    divTagSportMain.setAttribute("class","sports_main text_align_center");

    let  tagFigureSport = document.createElement("figure");

    let tagImgSport = document.createElement("img");
    tagImgSport.setAttribute("src",`${nizSportSlikaSrc[i]}`);
    tagImgSport.setAttribute("alt",`${nizSportSlikaAlt[i]}`);
    tagImgSport.setAttribute("class",i==1?"dorder":"");

    let divTagSportTekst = document.createElement("div");
    divTagSportTekst.setAttribute("class","sports_text");

    let tagH3Sport = document.createElement("h3");
    tagH3Sport.setAttribute("class",i==1?"dark3":"");
    let sadrzajtagH3Sport = document.createTextNode(`${nizSportNaslov[i]}`);
    tagH3Sport.appendChild(sadrzajtagH3Sport);

    let tagPSport = document.createElement("p");
    let sadrzajtagPSport = document.createTextNode(`${nizSportTekst[i]}`);
    tagPSport.appendChild(sadrzajtagPSport);

    let tagASport = document.createElement("a");
    tagASport.setAttribute("class","read_more");
    tagASport.setAttribute("href","Javascript:void(0)");
    let sadrzajtagASport = document.createTextNode("Read more");
    tagASport.appendChild(sadrzajtagASport);



    divTagSportTekst.appendChild(tagH3Sport);
    divTagSportTekst.appendChild(tagPSport);
    divTagSportTekst.appendChild(tagASport);
    tagFigureSport.appendChild(tagImgSport);
    tagFigureSport.appendChild(divTagSportTekst);
    divTagSportMain.appendChild(tagFigureSport);
    divTagColBoot.appendChild(divTagSportMain);
    tagZaIspisSporta.appendChild(divTagColBoot);
}


/* Ispis drustvenih mreza */

let nizFontIkonicaDrustveneMreze = ["fa fa-facebook-f","fa fa-twitter","fa fa-linkedin","fa fa-instagram","fa fa-youtube-play"];

let ispisDrustveneMreze = ""

for(let i = 0;i<nizFontIkonicaDrustveneMreze.length;i++){
    ispisDrustveneMreze += `<li>
    <a href="Javascript:void(0)">
        <i class = "${nizFontIkonicaDrustveneMreze[i]}"></i></a>
    `;
}
ispisDrustveneMreze += "</li>"

let sviElementiKlaseSocialElements =document.getElementsByClassName("social_icon");

for (let i =0 ;i<sviElementiKlaseSocialElements.length;i++){
    sviElementiKlaseSocialElements[i].innerHTML = ispisDrustveneMreze;
}

/* Ispis navigacionog menija u Footer-u */

let  tagzaIspisNavMeniFooter= document.getElementById("ispis_nav_footer");
let ispisNavigacioniMeniFooter = "<ul>";

for(let i = 0; i <nizNavigacioniMeniTekst.length;i++){
    ispisNavigacioniMeniFooter += `
    <li><a href= "${nizNavigacioniMeniHref[i]}">${nizNavigacioniMeniTekst[i]}</a></li>
    `;
}
ispisNavigacioniMeniFooter += "</ul>";

tagzaIspisNavMeniFooter.innerHTML = ispisNavigacioniMeniFooter;


/* Dinamicko Pravljenje i ispis Footer sekcije */

function elementsFactory(tag, classAttr, idAttr='', innerHTML=false){
    let tmpElement;
    tmpElement = document.createElement(tag)
    if(classAttr){
        tmpElement.classList.add(classAttr)
    }
    if(idAttr){
        tmpElement.setAttribute('id'. idAttr)
    }
    tmpElement.innerHTML = innerHTML ? innerHTML : ''
    return tmpElement
}

function appendChildToParent(parent, child){
    return parent.appendChild(child)
}


let divTagFooter = elementsFactory('div', 'footer')
let divTagContainer = document.createElement("div");
divTagContainer.setAttribute("class","container");
let divTagRow = document.createElement("div");
divTagRow.setAttribute("class","row");
let divTagColFooter = document.createElement("div");
divTagColFooter.setAttribute("class","col-md-8 offset-md-2");
let divTagColFooter2 = document.createElement("div");
divTagColFooter2.setAttribute("class","col-md-8 offset-md-2");

let tagH3Footer = document.createElement("h3");
let sadrzajTagH3Footer = document.createTextNode("Follow Us");
tagH3Footer.appendChild(sadrzajTagH3Footer);

let tagUlSocialFooter = document.createElement("ul");
tagUlSocialFooter.setAttribute("class","social_icon text_align_center");

let divTagContaFooter = document.createElement("div");
divTagContaFooter.setAttribute("class","conta text_align_center");

let tagUlContaFooter = document.createElement("ul");
tagUlContaFooter.setAttribute("id","ispis_kontakt_footer");

nizKontaktFooterText = ["Call +01 1234567890","demo@gmail.com"];
nizKontaktFooterSrc = ["images/call.png","images/mall.png"];
nizKontaktFooterAlt = ["Slika telefona","Slika email-a"];

let ispisKontaktFooter = "";
for(let i =0 ; i< nizKontaktFooterText.length;i++){
 ispisKontaktFooter += `<li>
 <a href = "Javascript:void(0)"><img src = "${nizKontaktFooterSrc[i]}"
 alt ="${nizKontaktFooterAlt[i]}"/>${nizKontaktFooterText[i]}</a></li>
 `;
}
tagUlContaFooter.innerHTML = ispisKontaktFooter;


divTagContaFooter.appendChild(tagUlContaFooter);
divTagColFooter.appendChild(tagH3Footer);
divTagColFooter.appendChild(tagUlSocialFooter);
divTagColFooter.appendChild(divTagContaFooter);
divTagRow.appendChild(divTagColFooter);
divTagRow.appendChild(divTagColFooter2);
divTagContainer.appendChild(divTagRow);
divTagFooter.appendChild(divTagContainer);





console.log(divTagFooter);

