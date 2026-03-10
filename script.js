const apiKey = "df1f3c45122c328abb92ee7a48c59804b57a9267cb1c15df8170bb8107e59326";

fetch("https://v3.football.api-sports.io/fixtures?live=all",{
headers:{
"x-apisports-key": apiKey
}
})

.then(response => response.json())

.then(data => {

let matches = data.response;

let container = document.getElementById("liveScores");

container.innerHTML = "";

matches.forEach(match => {

let div = document.createElement("div");

div.innerHTML = `
<h3>${match.teams.home.name} vs ${match.teams.away.name}</h3>
<p>${match.goals.home} - ${match.goals.away}</p>
`;

container.appendChild(div);

});

});