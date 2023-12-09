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

let tagZaIspisSporta = document.getElementById("ispisSport");

for (let i = 0; i < nizSportNaslov.length; i++) {
	let divTagColBoot = document.createElement("div");
	divTagColBoot.setAttribute("class", i == 1 ? "col-md-6" : "col-md-3");

	let divTagSportMain = document.createElement("div");
	divTagSportMain.setAttribute("class", "sports_main text_align_center");

	let tagFigureSport = document.createElement("figure");

	let tagImgSport = document.createElement("img");
	tagImgSport.setAttribute("src", `${nizSportSlikaSrc[i]}`);
	tagImgSport.setAttribute("alt", `${nizSportSlikaAlt[i]}`);
	tagImgSport.setAttribute("class", i == 1 ? "dorder" : "");

	let divTagSportTekst = document.createElement("div");
	divTagSportTekst.setAttribute("class", "sports_text");

	let tagH3Sport = document.createElement("h3");
	tagH3Sport.setAttribute("class", i == 1 ? "dark3" : "");
	let sadrzajtagH3Sport = document.createTextNode(`${nizSportNaslov[i]}`);
	tagH3Sport.appendChild(sadrzajtagH3Sport);

	let tagPSport = document.createElement("p");
	let sadrzajtagPSport = document.createTextNode(`${nizSportTekst[i]}`);
	tagPSport.appendChild(sadrzajtagPSport);

	let tagASport = document.createElement("a");
	tagASport.setAttribute("class", "read_more");
	tagASport.setAttribute("href", "Javascript:void(0)");
	let sadrzajtagASport = document.createTextNode("Pročitajte više");
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
