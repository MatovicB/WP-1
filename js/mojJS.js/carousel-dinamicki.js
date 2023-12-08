/* Carousel slider  */

let nizCarouselSlikaSrc = [
	"images/sport3.png",
	"images/sport1.png",
	"images/sport2.png",
];
let nizCarouselSlikaAlt = ["Slika 1", "Slika 2", "Slika 3"];

let divCarouselInner = document.createElement("div");
divCarouselInner.setAttribute("class", "carousel-inner");

for (let i = 0; i < nizCarouselSlikaSrc.length; i++) {
	let divCarouselItem = document.createElement("div");
	divCarouselItem.setAttribute(
		"class",
		i == 0 ? "carousel-item active" : "carousel-item"
	);

	let divCarouselContainer = document.createElement("div");
	divCarouselContainer.setAttribute("class", "container-fluid");

	let divCarouselCaption = document.createElement("div");
	divCarouselCaption.setAttribute("class", "carousel-caption relative");

	let divBluid = document.createElement("div");
	divBluid.setAttribute("class", "bluid");

	let divFootImg = document.createElement("div");
	divFootImg.setAttribute("class", "foot_img");

	let tagFigure = document.createElement("figure");

	let tagImg = document.createElement("img");
	tagImg.setAttribute("src", `${nizCarouselSlikaSrc[i]}`);
	tagImg.setAttribute("alt", `${nizCarouselSlikaAlt[i]}`);

	let tagA = document.createElement("a");
	tagA.setAttribute("class", "read_more");
	tagA.setAttribute("href", "Javascript:void(0)");

	let sadrzajtagaA = document.createTextNode("Read More");
	tagA.append(sadrzajtagaA);

	tagFigure.appendChild(tagImg);
	divFootImg.appendChild(tagFigure);
	divBluid.appendChild(divFootImg);
	divBluid.appendChild(tagA);
	divCarouselCaption.appendChild(divBluid);
	divCarouselContainer.appendChild(divCarouselCaption);

	divCarouselItem.appendChild(divCarouselContainer);

	divCarouselInner.appendChild(divCarouselItem);
}

document.querySelector("#myCarousel").appendChild(divCarouselInner);
console.log(document.querySelector("#myCarousel"));
