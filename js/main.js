var test
function zuruck() {
	window.open(test)
}
var ziel = " target='_parent'"
target = "'_parent'"
var zuSuchendesObjekt
var matches
function abbruch() {
	document.getElementById("results").innerHTML = ""
}
const artikelListe = [
	"Schulranzenreißen",
	"Schulranzenschleppen",
	"Schulranzenschlepperton",
	"Seasons",
	"Schulranzenstemmen",
	"Schulranzenpressen",
	"Schulranzensprint",
	"Schulen",
	"Coaches",
]
var res
function sucheArtikel() {
	zuSuchendesObjekt = document.getElementById("sucheintrag").value
	matches = []
	for (let i = 0; i < artikelListe.length; i++) {
		if (artikelListe[i].search(zuSuchendesObjekt) > -1) {
			let m = matches.length
			matches[m] = artikelListe[i]
		}
	}
	res = document.getElementById("results")
	res.innerHTML = ""

	for (let i = 0; i < matches.length; i++)
		res.innerHTML =
			res.innerHTML +
			"<p><a href=/" +
			matches[i] +
			ziel +
			">" +
			matches[i] +
			"</a></p>"
	if (res.innerHTML == "")
		res.innerHTML =
			"<p>" +
			"kein Ergebniss gefunden. Achten sie auf Groß- und Kleinschreibung" +
			"</p>"
	res.innerHTML =
		res.innerHTML + "<button onclick='abbruch()'> Fertig</button>"
}
function test() {
	document.write("hi")
}
var ts
