var nizNavigacioniMeniHref = [
	"index.html",
	"about.html",
	"games.html",
	"tranner.html",
	"contact.html",
	"dokumentacija_2.pdf",
];
var nizNavigacioniMeniTekst = [
	"Početna",
	"O autoru",
	"Sportovi",
	"Treneri",
	"Kontakt",
	"Dokumentacija",
];
nizKontaktFooterText = [
 	"Pozovite +01 1234567890",
 	"boban.matovic.93.20@ict.edu.rs",
];
nizKontaktFooterSrc = ["images/call.png", "images/mall.png"];
nizKontaktFooterAlt = ["Slika telefona", "Slika email-a"];

/* FACTORY ELEMENATA: */
function elementsFactory(tag, classes, idAttr = "", innerHTML = false) {
	let tmpElement = document.createElement(tag);

	if (Array.isArray(classes)) {
		tmpElement.classList.add(...classes);
	} else if (classes) {
		tmpElement.classList.add(classes);
	}

	if (idAttr) {
		tmpElement.setAttribute("id", idAttr);
	}

	tmpElement.innerHTML = innerHTML ? innerHTML : "";
	return tmpElement;
}
/* Nasledjivanje Elemenata */
function appendChildToParent(parent, child) {
	return parent.appendChild(child);
}

var navigacioniMeniHTML = document.querySelector("#mySidepanel");

var ispisNavigacioniMeni = `<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>`;
for (let i = 0; i < nizNavigacioniMeniHref.length; i++) {
	ispisNavigacioniMeni += `
    <a href="${nizNavigacioniMeniHref[i]}">${nizNavigacioniMeniTekst[i]}</a>"
    `;
}

navigacioniMeniHTML.innerHTML = ispisNavigacioniMeni;

/************** START Header ****************/

// Kreiranje header elementa preko HTML-a
const header = document.querySelector('header');

// Kreiranje div taga sa klasom "head-top" korišćenjem funkcije elementsFactory
const headTopDiv = elementsFactory('div', 'head-top');
appendChildToParent(header, headTopDiv);

// Kreiranje div taga sa klasom "container-fluid" korišćenjem funkcije elementsFactory
const containerFluidDiv = elementsFactory('div', 'container-fluid');
appendChildToParent(headTopDiv, containerFluidDiv);

// Kreiranje div taga sa klasom "row d_flex" korišćenjem funkcije elementsFactory
const rowDiv = elementsFactory('div', ['row', 'd_flex']);
appendChildToParent(containerFluidDiv, rowDiv);

// Kreiranje div taga sa klasom "col-sm-3" korišćenjem funkcije elementsFactory
const colSm3Div = elementsFactory('div', 'col-sm-3');
appendChildToParent(rowDiv, colSm3Div);

// Kreiranje div taga sa klasom "logo" korišćenjem funkcije elementsFactory
const logoDiv = elementsFactory('div', 'logo');
appendChildToParent(colSm3Div, logoDiv);

// Kreiranje linka unutar div taga "logo" korišćenjem funkcije elementsFactory
const logoLink = elementsFactory('a');
logoLink.href = 'index.html';
appendChildToParent(logoDiv, logoLink);

// Kreiranje slike unutar linka korišćenjem funkcije elementsFactory
const logoImage = elementsFactory('img');
logoImage.src = 'images/logo.png';
logoImage.alt = 'Logo';
appendChildToParent(logoLink, logoImage);

// Kreiranje div taga sa klasom "col-sm-9" korišćenjem funkcije elementsFactory
const colSm9Div = elementsFactory('div', 'col-sm-9');
appendChildToParent(rowDiv, colSm9Div);

// Kreiranje liste korišćenjem funkcije elementsFactory
const emailList = elementsFactory('ul', ['email', 'text_align_right']);
appendChildToParent(colSm9Div, emailList);

// Kreiranje prvog stavka liste korišćenjem funkcije elementsFactory
const emailListItem1 = elementsFactory('li');
const emailLink1 = elementsFactory('a');
emailLink1.href = 'Javascript:void(0)';
const emailIcon1 = elementsFactory('i', ['fa', 'fa-user']);
appendChildToParent(emailLink1, emailIcon1);
appendChildToParent(emailListItem1, emailLink1);
appendChildToParent(emailList, emailListItem1);

// Kreiranje drugog stavka liste korišćenjem funkcije elementsFactory
const emailListItem2 = elementsFactory('li');
const emailLink2 = elementsFactory('a');
emailLink2.href = 'Javascript:void(0)';
const emailIcon2 = elementsFactory('i', ['fa', 'fa-search']);
appendChildToParent(emailLink2, emailIcon2);
appendChildToParent(emailListItem2, emailLink2);
appendChildToParent(emailList, emailListItem2);

// Kreiranje trećeg stavka liste korišćenjem funkcije elementsFactory
const emailListItem3 = elementsFactory('li');
const menuButton = elementsFactory('button', 'openbtn');
menuButton.setAttribute('onclick', 'openNav()');
const menuButtonImage = elementsFactory('img');
menuButtonImage.src = 'images/menu_btn.png';
menuButtonImage.alt = 'Menu Button';
appendChildToParent(menuButton, menuButtonImage);
appendChildToParent(emailListItem3, menuButton);
appendChildToParent(emailList, emailListItem3);

/************** END Header ****************/


/* Dinamicko Pravljenje i ispis Footer sekcije */

let tagZaIspisFooter = document.querySelector('footer');

let divTagFooter = document.createElement("div");
divTagFooter.setAttribute("class", "footer");
let divTagContainer = document.createElement("div");
divTagContainer.setAttribute("class", "container");
let divTagRow = document.createElement("div");
divTagRow.setAttribute("class", "row");
let divTagColFooter = document.createElement("div");
divTagColFooter.setAttribute("class", "col-md-8 offset-md-2");
let divTagColFooter2 = document.createElement("div");
divTagColFooter2.setAttribute("class", "col-md-8 offset-md-2");

let tagH3Footer = document.createElement("h3");
let sadrzajTagH3Footer = document.createTextNode("Zapratite nas");
tagH3Footer.appendChild(sadrzajTagH3Footer);

let tagUlSocialFooter = document.createElement("ul");
tagUlSocialFooter.setAttribute("class", "social_icon text_align_center");

let divTagContaFooter = document.createElement("div");
divTagContaFooter.setAttribute("class", "conta text_align_center");

let tagUlContaFooter = document.createElement("ul");
tagUlContaFooter.setAttribute("id", "ispis_kontakt_footer");




let btnProvera = document.getElementById("btnProvera") || null;

let ispisKontaktFooter = "";
for (let i = 0; i < nizKontaktFooterText.length; i++) {
	ispisKontaktFooter += `<li>
 <a href = "Javascript:void(0)"><img src = "${nizKontaktFooterSrc[i]}"
 alt ="${nizKontaktFooterAlt[i]}"/>${nizKontaktFooterText[i]}</a></li>
 `;
}
tagUlContaFooter.innerHTML = ispisKontaktFooter;

let divTagColMenu = document.createElement("div");
divTagColMenu.setAttribute("class", "menu_bottom text_align_center");
divTagColMenu.setAttribute("id", "ispis_nav_footer");

divTagColFooter2.appendChild(divTagColMenu);

let divTagCopyrightFooter = document.createElement("div");
divTagCopyrightFooter.setAttribute("class", "copyright text_align_center");
let divTagContainer2 = document.createElement("div");
divTagContainer2.setAttribute("class", "container");
let divTagRow2 = document.createElement("div");
divTagRow2.setAttribute("class", "row");
let divTagColBoot2 = document.createElement("div");
divTagColBoot2.setAttribute("class", "col-md-8 offset-md-2");
let tagPFooter = document.createElement("p");
let sadrzajtagPFooter = document.createTextNode("© 2023 All Rights Reserved.");
tagPFooter.appendChild(sadrzajtagPFooter);
let tagAFooter = document.createElement("a");
let sadrzajtagAFooter = document.createTextNode("Boban Matovic 93/20");

tagAFooter.appendChild(sadrzajtagAFooter);
tagPFooter.appendChild(tagAFooter);
divTagColBoot2.appendChild(tagPFooter);
divTagRow2.appendChild(divTagColBoot2);
divTagContainer2.appendChild(divTagRow2);
divTagCopyrightFooter.appendChild(divTagContainer2);

divTagContaFooter.appendChild(tagUlContaFooter);
divTagColFooter.appendChild(tagH3Footer);
divTagColFooter.appendChild(tagUlSocialFooter);
divTagColFooter.appendChild(divTagContaFooter);
divTagRow.appendChild(divTagColFooter);
divTagRow.appendChild(divTagColFooter2);
divTagContainer.appendChild(divTagRow);
divTagFooter.appendChild(divTagContainer);
divTagFooter.appendChild(divTagCopyrightFooter);

tagZaIspisFooter.appendChild(divTagFooter);

/* Ispis drustvenih mreza */

let nizFontIkonicaDrustveneMreze = [
	"fa fa-facebook-f",
	"fa fa-twitter",
	"fa fa-linkedin",
	"fa fa-instagram",
	"fa fa-youtube-play",
];

let ispisDrustveneMreze = "";

for (let i = 0; i < nizFontIkonicaDrustveneMreze.length; i++) {
	ispisDrustveneMreze += `<li>
    <a href="Javascript:void(0)">
        <i class = "${nizFontIkonicaDrustveneMreze[i]}"></i></a>
    `;
}
ispisDrustveneMreze += "</li>";

let sviElementiKlaseSocialElements =
	document.getElementsByClassName("social_icon");

for (let i = 0; i < sviElementiKlaseSocialElements.length; i++) {
	sviElementiKlaseSocialElements[i].innerHTML = ispisDrustveneMreze;
}

/* Ispis navigacionog menija u Footer-u */

let tagzaIspisNavMeniFooter = document.getElementById("ispis_nav_footer");
let ispisNavigacioniMeniFooter = "<ul>";

for (let i = 0; i < nizNavigacioniMeniTekst.length; i++) {
	ispisNavigacioniMeniFooter += `
    <li><a href= "${nizNavigacioniMeniHref[i]}">${nizNavigacioniMeniTekst[i]}</a></li>
    `;
}
ispisNavigacioniMeniFooter += "</ul>";

tagzaIspisNavMeniFooter.innerHTML = ispisNavigacioniMeniFooter;


/* Dinamicko kreiranje i pravljenje elemenata stranice About */

let divClassContainer = elementsFactory("div", "container");
let divClassRow = elementsFactory("div", "row");
let divClassCol12 = elementsFactory("div", "col-md-12");
let divCLassTitlePage = elementsFactory("div", [
	"titlepage",
	"text_align_center",
]);
let tagH2About = elementsFactory("h2", "", "", "O autoru");
let divClassCol5 = elementsFactory("div", "col-md-5");
let divClassAboutImg = elementsFactory("div", "about_img");
let tagFigureAbout = elementsFactory("figure");
let tagImgAbout = elementsFactory("img", ["img_responsive", "rounded"]);
tagImgAbout.setAttribute("src", "images/about_me.jpg");
tagImgAbout.setAttribute("alt", "Slika autora");

let divClassCol7 = elementsFactory("div", [
	"col-md-7",
	"d_flex",
	"flex-column",
	"justify-content-center",
	"text_align_center",
]);
let tagH1About = elementsFactory("h1", "", "", "Boban Matovic 93/20");
let tagPAbout = elementsFactory("p", "", "", "Student: ");
let tagStrong = elementsFactory(
	"strong",
	"",
	"",
	"AKADEMIJE TEHNIČKO-UMETNIČKIH STRUKOVNIH STUDIJA BEOGRAD"
);

appendChildToParent(tagPAbout, tagStrong);

appendChildToParent(divClassCol7, tagH1About);
appendChildToParent(divClassCol7, tagPAbout);

appendChildToParent(tagFigureAbout, tagImgAbout);
appendChildToParent(divClassAboutImg, tagFigureAbout);
appendChildToParent(divClassCol5, divClassAboutImg);
appendChildToParent(divCLassTitlePage, tagH2About);
appendChildToParent(divClassCol12, divCLassTitlePage);
appendChildToParent(divClassRow, divClassCol12);
appendChildToParent(divClassRow, divClassCol5);
appendChildToParent(divClassRow, divClassCol7);
appendChildToParent(divClassContainer, divClassRow);

if (document.getElementById("ispisAbout")) {
	document.getElementById("ispisAbout").appendChild(divClassContainer);
} else "";

/* START ABOUT CLUB */
const aboutClubDiv = document.querySelector('.about_club');

const containerDivAboutClub = elementsFactory('div', 'container');

const rowDiv1AboutClub = elementsFactory('div', 'row');

const colMd12Div1AboutClub = elementsFactory('div', 'col-md-12');

const titlepageDivAboutClub = elementsFactory('div', ['titlepage', 'text_align_center']);

const h2TagAboutClub = elementsFactory('h2', 'mt-5', null, 'O našem klubu');

const pTagAboutClub = elementsFactory('p', null, null, 'Pogledajte kratki video zapis o našem klubu, kako bi se bolje upoznali');

const colMd12Div2AboutClub = elementsFactory('div', 'col-md-12');

const aboutImgDivAboutClub = elementsFactory('div', 'about_img');

const figureTagAboutClub = document.createElement('figure');

const imgTagAboutClub = elementsFactory('img', 'img_responsive');
imgTagAboutClub.src = 'images/about_img.png';
imgTagAboutClub.alt = 'O nama slika';

const aboBtnDiv = elementsFactory('div', 'abo_btn');

const aTagAboutClub = document.createElement('a');
aTagAboutClub.href = 'Javascript:void(0)';

const imgBtnTagAboutClub = elementsFactory('img');
imgBtnTagAboutClub.src = 'images/about_btn.png';
imgBtnTagAboutClub.alt = 'Btn slika';


appendChildToParent(containerDivAboutClub, rowDiv1AboutClub);
appendChildToParent(rowDiv1AboutClub, colMd12Div1AboutClub);
appendChildToParent(colMd12Div1AboutClub, titlepageDivAboutClub);
appendChildToParent(titlepageDivAboutClub, h2TagAboutClub);
appendChildToParent(titlepageDivAboutClub, pTagAboutClub);
appendChildToParent(rowDiv1AboutClub, colMd12Div2AboutClub);
appendChildToParent(colMd12Div2AboutClub, aboutImgDivAboutClub);
appendChildToParent(aboutImgDivAboutClub, figureTagAboutClub);
appendChildToParent(figureTagAboutClub, imgTagAboutClub);
appendChildToParent(aboutImgDivAboutClub, aboBtnDiv);
appendChildToParent(aboBtnDiv, aTagAboutClub);
appendChildToParent(aTagAboutClub, imgBtnTagAboutClub);

if(aboutClubDiv){
appendChildToParent(aboutClubDiv, containerDivAboutClub);
}

/*END ABOUT CLUB */


/* START Trannir */

// Selektovanje elementa sa klasom "trannir"
const trannirDiv = elementsFactory('div', 'trannir');

// Kreiranje div taga sa klasom "container"
const containerDiv = elementsFactory('div', 'container');

// Kreiranje div taga sa klasom "row"
const rowDiv1 = elementsFactory('div', 'row');

// Kreiranje div taga sa klasom "col-md-12"
const colMd12Div = elementsFactory('div', 'col-md-12');

// Kreiranje div taga sa klasom "titlepage text_align_center"
const titlepageDiv = elementsFactory('div',['titlepage', 'text_align_center']);

// Kreiranje h2 taga sa sadržajem "Treneri kluba"
const h2Tag = elementsFactory('h2', null, null, 'Treneri kluba');

// Kreiranje p taga sa sadržajem "Upoznajte neke od trenera"
const pTag = elementsFactory('p', null, null, 'Upoznajte neke od trenera');

// Spajanje elemenata
appendChildToParent(titlepageDiv, h2Tag);
appendChildToParent(titlepageDiv, pTag);
appendChildToParent(colMd12Div, titlepageDiv);
appendChildToParent(rowDiv1, colMd12Div);
appendChildToParent(containerDiv, rowDiv1);
appendChildToParent(trannirDiv, containerDiv);

// Kreiranje div taga sa klasom "row d_flex"
const rowDiv2 = elementsFactory('div', ['row', 'd_flex']);

// Kreiranje div taga sa klasom "col-lg-10 offset-lg-1 col-md-12"
const colLg10Div = elementsFactory('div', ['col-lg-10', 'offset-lg-1', 'col-md-12']);

// Kreiranje div taga sa id-jem "testimo" i klasom "carousel slide our_trannir" i data atributom "data-ride"
const testimoDiv = elementsFactory('div', ['carousel', 'slide', 'our_trannir']);
testimoDiv.setAttribute('id', 'testimo');
testimoDiv.setAttribute('data-ride', 'carousel');

// Kreiranje ol taga sa klasom "carousel-indicators"
const olTag = elementsFactory('ol', 'carousel-indicators');

// Kreiranje 3 li taga sa data atributom "data-target" i "data-slide-to"
for (let i = 0; i < 3; i++) {
    const liTag = elementsFactory('li');
    liTag.setAttribute('data-target', '#testimo');
    liTag.setAttribute('data-slide-to', i);
    if (i === 0) {
        liTag.classList.add('active');
    }
    appendChildToParent(olTag, liTag);
}

// Kreiranje div taga sa klasom "carousel-inner"
const carouselInnerDiv = elementsFactory('div', 'carousel-inner');

// Kreiranje 3 div taga sa klasom "carousel-item" i sadržajem
for (let i = 0; i < 3; i++) {
    const carouselItemDiv = elementsFactory('div', 'carousel-item');
    if (i === 0) {
        carouselItemDiv.classList.add('active');
    }

    const containerDiv = elementsFactory('div', 'container');
    const carouselCaptionDiv = elementsFactory('div',['carousel-caption', 'posi_in']);
    const trannirTextDiv = elementsFactory('div', 'trannir_text');

    const imageSrc = ['images/trenerZoran.jpg', 'images/trenerSinisa.jpg', 'images/clint.jpg'];
    const treneri = ['Zoran Nikolić', 'Siniša Batinić', 'Stojan Savić'];
    const sports = ['Trener Atletike', 'Trener fudbala', 'Trener Jiu-jitse'];

    const imageTag = elementsFactory('img');
    imageTag.src = imageSrc[i];
    imageTag.alt = `Trener ${treneri[i]}`;

    const h3Tag = elementsFactory('h3', null, null, treneri[i]);
    const spanTag = elementsFactory('span', null, null, sports[i]);
    const ulTag = elementsFactory('ul', ['social_icon', 'text_align_center']);

    appendChildToParent(trannirTextDiv, imageTag);
    appendChildToParent(trannirTextDiv, h3Tag);
    appendChildToParent(trannirTextDiv, spanTag);
    appendChildToParent(trannirTextDiv, ulTag);
    appendChildToParent(carouselCaptionDiv, trannirTextDiv);
    appendChildToParent(containerDiv, carouselCaptionDiv);
    appendChildToParent(carouselItemDiv, containerDiv);
    appendChildToParent(carouselInnerDiv, carouselItemDiv);
}

// Kreiranje a tagova sa klasom "carousel-control-prev" i "carousel-control-next"
const prevLink = elementsFactory('a', 'carousel-control-prev');
prevLink.href = '#testimo';
prevLink.role = 'button';
prevLink.setAttribute('data-slide', 'prev');
prevLink.innerHTML = '<i class="fa fa-angle-left" aria-hidden="true"></i><span class="sr-only">Previous</span>';

const nextLink = elementsFactory('a', 'carousel-control-next');
nextLink.href = '#testimo';
nextLink.role = 'button';
nextLink.setAttribute('data-slide', 'next');
nextLink.innerHTML = '<i class="fa fa-angle-right" aria-hidden="true"></i><span class="sr-only">Next</span>';

// Spajanje elemenata
appendChildToParent(testimoDiv, olTag);
appendChildToParent(testimoDiv, carouselInnerDiv);
appendChildToParent(testimoDiv, prevLink);
appendChildToParent(testimoDiv, nextLink);
appendChildToParent(colLg10Div, testimoDiv);
appendChildToParent(rowDiv2, colLg10Div);
appendChildToParent(containerDiv, rowDiv2);
appendChildToParent(trannirDiv, containerDiv);

var proveraTrainer =document.querySelector('.trannir_content');

if(proveraTrainer){
appendChildToParent(proveraTrainer, trannirDiv);
}



/* START Section Our_Club */

// Kreiranje div taga sa klasom "our_club"
const ourClubDiv = elementsFactory('div', 'our_club');

// Kreiranje div taga sa klasom "container"
const containerDivOurClub = elementsFactory('div', 'container');

// Kreiranje div taga sa klasom "row"
const rowDiv1OurClub = elementsFactory('div', 'row');

// Kreiranje div taga sa klasom "col-md-10 offset-md-1"
const colMd10DivOurClub = elementsFactory('div',['col-md-10','offset-md-1']);

// Kreiranje div taga sa klasom "titlepage text_align_center"
const titlepageDivOurClub = elementsFactory('div',['titlepage','text_align_center']);

// Kreiranje h2 taga sa sadržajem "Učlanite se u naš klub"
const h2TagOurClub = elementsFactory('h2', null, null, 'Učlanite se u naš klub');

// Kreiranje p taga sa sadržajem "Postanite član našek kluba, i pridružite se stotinama zadovoljnjih članova."
const pTagOurClub = elementsFactory('p', null, null, 'Postanite član našek kluba, i pridružite se stotinama zadovoljnjih članova.');

// Kreiranje div taga sa klasom "col-md-12"
const colMd12DivOurClub = elementsFactory('div', 'col-md-12');

// Kreiranje div taga sa klasom "club_btn"
const clubBtnDiv = elementsFactory('div', 'club_btn');

// Kreiranje 3 a taga sa klasom "read_more" i različitim tekstom
for (let i = 0; i < 3; i++) {
    const aTagOurClub = elementsFactory('a', 'read_more', null, ['Stupite u kontakt', 'Mapa', 'Učlanite se sada'][i]);
    aTagOurClub.href = 'Javascript:void(0)';
    appendChildToParent(clubBtnDiv, aTagOurClub);
}

// Spajanje elemenata
appendChildToParent(titlepageDivOurClub, h2TagOurClub);
appendChildToParent(titlepageDivOurClub, pTagOurClub);
appendChildToParent(colMd10DivOurClub, titlepageDivOurClub);
appendChildToParent(rowDiv1OurClub, colMd10DivOurClub);
appendChildToParent(rowDiv1OurClub, colMd12DivOurClub);
appendChildToParent(colMd12DivOurClub, clubBtnDiv);
appendChildToParent(containerDivOurClub, rowDiv1OurClub);
appendChildToParent(ourClubDiv, containerDivOurClub);

var ispisOurClubContent = document.querySelector(".our_club_section");
console.log(ourClubDiv);

if(ispisOurClubContent){
appendChildToParent(ispisOurClubContent, ourClubDiv);
}


/* END */ 

/* START SPORTS */

// Pronalazak postojećeg elementa <div class="sports">
const sportsDiv = document.querySelector('.sports');

// Kreiranje div taga sa klasom "container"
const containerDivSports = elementsFactory('div', 'container');

// Kreiranje div taga sa klasom "row"
const rowDivSports = elementsFactory('div', 'row');

// Kreiranje div taga sa klasom "col-md-12"
const colMd12DivSports = elementsFactory('div', 'col-md-12');

// Kreiranje div taga sa klasom "sports_text"
const sportsTextDiv = elementsFactory('div', ['titlepage','text_align_center']);
console.log(sportsTextDiv);

// Kreiranje h2 taga sa sadržajem "Sportovi koje nudimo"
const h2TagSports = elementsFactory('h2', null, null, 'Sportovi koje nudimo');

// Kreiranje p taga sa sadržajem koji opisuje sportove
const pTagSports = elementsFactory('p', null, null, 'Naš klub nudi različite sportske aktivnosti za sve uzraste i nivoe veštine.');

/* Ispis sportova  */
let nizSportSlikaSrc = [
    "images/sport1.png",
    "images/sport2.png",
    "images/sport3.png",
];
let nizSportSlikaAlt = ["Slika Jiu-Jitse", "Slika Atletike", "Slika Fudbala"];
let nizSportNaslov = ["Jiu-jitsa", "Atletika", "Fudbal"];
let nizSportTekst = [
    "Jiu-jitsu, dinamična borilačka veština, naglašava tehniku i taktičko razmišljanje, pružajući praktične veštine odbrane. ",
    "Atletika, sa svojom raznolikošću disciplina, ne samo što poboljšava fizičku kondiciju, već podstiče i razvoj discipline, samopouzdanja i upornosti kod praktikanata. ",
    " Fudbal, najpopularniji globalni sport, ne samo što promoviše fizičku aktivnost i timski duh, već i razvija veštine kao što su brzina, agilnost i sportski duh.",
];

// Pronalazak postojećeg elementa <div id="ispisSport">

const divZaIspisSporta = elementsFactory('div',['row','d_flex'],'ispisSport');

for (let i = 0; i < nizSportNaslov.length; i++) {
    // Kreiranje div taga sa klasom "col-md-3" ili "col-md-6" u zavisnosti od indeksa
    const divTagColBoot = elementsFactory('div', i === 1 ? 'col-md-6' : 'col-md-3');

    // Kreiranje div taga sa klasom "sports_main text_align_center"
    const divTagSportMain = elementsFactory('div',['sports_main','text_align_center']);

    // Kreiranje figure elementa
    const tagFigureSport = elementsFactory('figure');

    // Kreiranje img taga sa odgovarajućim atributima
    const tagImgSport = elementsFactory('img');
    tagImgSport.src = nizSportSlikaSrc[i];
    tagImgSport.alt = nizSportSlikaAlt[i];
    tagImgSport.className = i === 1 ? 'dorder' : '';

    // Kreiranje div taga sa klasom "sports_text"
    const divTagSportTekst = elementsFactory('div', 'sports_text');

    // Kreiranje h3 taga sa sadržajem iz nizaSportNaslov
    const tagH3Sport = elementsFactory('h3', i === 1 ? 'dark3' : '', null, nizSportNaslov[i]);

    // Kreiranje p taga sa sadržajem iz nizaSportTekst
    const tagPSport = elementsFactory('p', null, null, nizSportTekst[i]);

    // Kreiranje a taga sa odgovarajućim atributima
    const tagASport = elementsFactory('a', 'read_more');
    tagASport.href = 'Javascript:void(0)';
    tagASport.appendChild(document.createTextNode('Pročitajte više'));

    // Spajanje elemenata
    appendChildToParent(divTagSportTekst, tagH3Sport);
    appendChildToParent(divTagSportTekst, tagPSport);
    appendChildToParent(divTagSportTekst, tagASport);
    appendChildToParent(tagFigureSport, tagImgSport);
    appendChildToParent(tagFigureSport, divTagSportTekst);
    appendChildToParent(divTagSportMain, tagFigureSport);
    appendChildToParent(divTagColBoot, divTagSportMain);
    appendChildToParent(divZaIspisSporta, divTagColBoot);
}

// Spajanje elemenata
appendChildToParent(sportsTextDiv, h2TagSports);
appendChildToParent(sportsTextDiv, pTagSports);
appendChildToParent(colMd12DivSports, sportsTextDiv);
appendChildToParent(rowDivSports, colMd12DivSports);
appendChildToParent(containerDivSports, rowDivSports);
appendChildToParent(containerDivSports, divZaIspisSporta);

if(sportsDiv){
appendChildToParent(sportsDiv, containerDivSports);
}

/* END SPORTS */ 


/* START Banner Section */
const bannerMainDiv = document.querySelector('.banner_main');

const containerFluidDivSlider = elementsFactory('div', 'container-fluid');

const rowDivSlider = elementsFactory('div', 'row');

const colMd12DivSlider = elementsFactory('div', 'col-md-12');

const clubDivSlider = elementsFactory('div', 'club');

const figureTagSlider = elementsFactory('figure');

const imgTag1Slider = elementsFactory('img', 'sm_n0');
imgTag1Slider.src = 'images/bbnner.png';
imgTag1Slider.alt = 'banner';

const imgTag2Slider = elementsFactory('img', 'tes_n0');
imgTag2Slider.src = 'images/banner1.jpg';
imgTag2Slider.alt = 'banner2';

appendChildToParent(figureTagSlider, imgTag1Slider);
appendChildToParent(figureTagSlider, imgTag2Slider);

const poaTDivSlider = elementsFactory('div', 'poa_t');

const h1TagSlider = elementsFactory('h1', null, null, 'Yogast Sportski klub');

const pTagSlider = elementsFactory('p', null, null, `Yogast je klub različitih sportova, stvoren kako bi podstakao decu od malena da budu disciplinovana i takmičarski nastrojena.`);

appendChildToParent(poaTDivSlider, h1TagSlider);
appendChildToParent(poaTDivSlider, pTagSlider);
appendChildToParent(clubDivSlider, figureTagSlider);
appendChildToParent(clubDivSlider, poaTDivSlider);
appendChildToParent(colMd12DivSlider, clubDivSlider);
appendChildToParent(rowDivSlider, colMd12DivSlider);
appendChildToParent(containerFluidDivSlider, rowDivSlider);

//Provera da li postoji element na stranici, ako postoji ispisuje content!
if(bannerMainDiv){
appendChildToParent(bannerMainDiv, containerFluidDivSlider);
}

/* END Banner Section */

/* START CONTACT */

const contactDiv = document.querySelector('.contact');

const containerDivContact = elementsFactory('div', 'container');

const rowDiv1Contact = elementsFactory('div', 'row');

const rowDiv2Contact = elementsFactory('div', 'row');

const colMd12Div1Contact = elementsFactory('div', 'col-md-12');

const colMd12Div2Contact = elementsFactory('div', 'col-md-12');

const titlepageDivContact = elementsFactory('div',['titlepage','text_align_center']);

const h2TagContact = elementsFactory('h2', null, null, 'Contact Us');

// Kreiranje form elementa sa atributom id="request" i klasom "main_form"
const formTagContact = elementsFactory('form', 'main_form');
formTagContact.id = 'request';


const rowDivFormContact = elementsFactory('div', 'row');


const colMd12DivForm1Contact = elementsFactory('div', 'col-md-12');

// Kreiranje input elementa sa odgovarajućim atributima
const inputName = elementsFactory('input', 'contactus');
inputName.setAttribute('placeholder', 'Ime i Prezime');
inputName.setAttribute('type', 'text');
inputName.setAttribute('name', 'Your Name');
inputName.id = 'tbImePrezime';

// Kreiranje input elementa sa odgovarajućim atributima
const inputPhone = elementsFactory('input', 'contactus');
inputPhone.setAttribute('placeholder', 'Broj Telefona');
inputPhone.setAttribute('type', 'text');
inputPhone.setAttribute('name', 'Phone number');
inputPhone.id = 'tbBrojTelefona';

// Kreiranje input elementa sa odgovarajućim atributima
const inputEmail = elementsFactory('input', 'contactus');
inputEmail.setAttribute('placeholder', 'Email');
inputEmail.setAttribute('type', 'email');
inputEmail.setAttribute('name', 'Email');
inputEmail.id = 'tbEmail';

// Kreiranje textarea elementa sa odgovarajućim atributima
const textareaTag = elementsFactory('textarea', 'textarea');
textareaTag.setAttribute('placeholder', 'Vaša poruka');
textareaTag.id = 'tbTextArea';
textareaTag.textContent = 'Vaša poruka';

// Kreiranje p elementa sa atributom id="ispisGreske"
const pTagContact = elementsFactory('p');
pTagContact.id = 'ispisGreske';

const inputButton = elementsFactory('input', ['btn','send_btn']);
inputButton.setAttribute('type', 'button');
inputButton.setAttribute('value', 'Posalji');
inputButton.id = 'btnProvera';

appendChildToParent(colMd12DivForm1Contact, inputName);
appendChildToParent(colMd12DivForm1Contact, inputPhone);
appendChildToParent(colMd12DivForm1Contact, inputEmail);

const colMd12DivForm2Contact = elementsFactory('div', 'col-md-12');
appendChildToParent(colMd12DivForm2Contact, textareaTag);
appendChildToParent(colMd12DivForm2Contact, pTagContact);

const colMd12DivForm3Contact = elementsFactory('div', 'col-md-12');
appendChildToParent(colMd12DivForm3Contact,inputButton);

appendChildToParent(rowDivFormContact, colMd12DivForm1Contact);
appendChildToParent(rowDivFormContact, colMd12DivForm2Contact);
appendChildToParent(rowDivFormContact, colMd12DivForm3Contact);
appendChildToParent(formTagContact, rowDivFormContact);
appendChildToParent(titlepageDivContact, h2TagContact);
appendChildToParent(colMd12Div2Contact, titlepageDivContact);
appendChildToParent(colMd12Div2Contact, formTagContact);
appendChildToParent(rowDiv2Contact, colMd12Div1Contact);
appendChildToParent(rowDiv2Contact, colMd12Div2Contact);
appendChildToParent(containerDivContact, rowDiv1Contact);
appendChildToParent(containerDivContact, rowDiv2Contact);

if(contactDiv){
appendChildToParent(contactDiv, containerDivContact);
}

/* START Kontakt provera */
nizElemenataForme = ["tbImePrezime", "tbBrojTelefona", "tbEmail", "tbTextArea"];

function proveriFormu() {
	var imePrezime = document.getElementById("tbImePrezime").value.trim();
	var brojTelefona = document.getElementById("tbBrojTelefona").value.trim();
	var email = document.getElementById("tbEmail").value.trim();
	var tekst = document.getElementById("tbTextArea").value.trim();

	// Provere
	var regexImePrezime = /^[A-Za-zČčĆćŠšĐđŽž\s]+$/;
	if (!regexImePrezime.test(imePrezime)) {
		ispisiGresku("Molimo unesite validno ime i prezime.");
		return;
	}

	var regexBrojTelefona =
		/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{2})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
	if (!regexBrojTelefona.test(brojTelefona)) {
		ispisiGresku("Molimo unesite validan broj telefona (10 cifara).");
		return;
	}

	var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	if (!regexEmail.test(email)) {
		ispisiGresku("Molimo unesite validnu email adresu.");
		return;
	}

	if (tekst === "" || tekst === "Vaša poruka") {
		ispisiGresku("Molimo unesite svoju poruku.");
		return;
	}

	ispisiGresku("Forma je uspešno popunjena.", false);
	prikaziPopup(!greska);
}

if (btnProvera) {
	btnProvera.addEventListener("click", proveriFormu);
}

function ispisiGresku(tekst, greska = true) {
	var paragrafElement = document.querySelector("#ispisGreske");
	paragrafElement.textContent = tekst;
	var imePrezime = document.getElementById("tbImePrezime");
	var brojTelefona = document.getElementById("tbBrojTelefona");
	var email = document.getElementById("tbEmail");
	var tekst = document.getElementById("tbTextArea");
	prikaziPopup(!greska);
	if (greska) {
		paragrafElement.classList.add("greska");
		paragrafElement.classList.add("text-danger");
		imePrezime.classList.add("border-danger");
		brojTelefona.classList.add("border-danger");
		email.classList.add("border-danger");
		tekst.classList.add("border-danger");
	} else {
		paragrafElement.classList.remove("greska");
		imePrezime.classList.remove("border-danger");
		brojTelefona.classList.remove("border-danger");
		email.classList.remove("border-danger");
		tekst.classList.remove("border-danger");

		imePrezime.classList.add("border-success");
		brojTelefona.classList.add("border-success");
		email.classList.add("border-success");
		tekst.classList.add("border-success");
		paragrafElement.classList.remove("text-danger");
		paragrafElement.classList.add("text-success");
	}
}

/* Poop up jQuery */

$("#btnProvera").on("click", proveriFormu);

function prikaziPopup(uspesno) {
	var popup = $("#popup");
	if (uspesno) {
		popup.text("Uspesno!");
		popup.removeClass("bg-danger").addClass("bg-success");
		popup.addClass("text-white");
	} else {
		popup.removeClass("bg-success").addClass("bg-danger");
		popup.text("Neuspesno!");
		popup.addClass("text-white");
	}

	popup.fadeIn(500).delay(2000).fadeOut(500);
}

/* END Kontakt provera*/
