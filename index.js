var randomTeam = Math.floor(Math.random() * 10) + 1;
var randomPilot = Math.floor(Math.random() * 2) + 1;

document.querySelector("#img1").setAttribute("src", "images/" + randomTeam + ".jpg");
document.querySelector("#img2").setAttribute("src", "images/" + randomTeam + randomPilot + ".jpg");

var teams = ["Mercedes", "Ferrari", "Red Bull Racing", "Renault", "Haas", "McLaren",
  "Racing Point", "Alfa Romeo Racing", "Toro Rosso", "Williams"
];
var pilots = ["Lewis Hamilton", "Valtteri Bottas", "Sebastian Vettel", "Charles Leclerc", "Max Verstappen",
  "Pierre Gasly", "Nico Hulkenberg", "Daniel Ricciardo", "Romain Grosjean", "Kevin Magnussen",
  "Carlos Sainz", "Lando Norris", "Sergio Perez", "Lance Stroll", "Kimi Raikkonen",
  "Antonio Giovinazzi", "Daniil Kvyat", "Alexander Albon", "Robert Kubica", "George Russell"
];


document.querySelector("h1").innerHTML = "🏁 " + pilots[(randomTeam - 1) * 2 + randomPilot - 1] + " from " +
  teams[randomTeam - 1] + " Wins! 🏁";

function myFunction() {
  location.reload();
}
