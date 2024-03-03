var nizNavigacioniMeniHref = [
	"index.html",
	"about.html",
	"games.html",
	"tranner.html",
	"contact.html",
	"dokumentacija.pdf",
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

/* Kontakt */
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

/* FACTORY ELEMENATA: */ /* Dinamicko kreiranje i pravljenje elemenata stranice About */

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
function appendChildToParent(parent, child) {
	return parent.appendChild(child);
}

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
