// Example live scores
const matches = [

{
team1:"Barcelona",
team2:"Real Madrid",
score:"2 - 1"
},

{
team1:"Manchester City",
team2:"Arsenal",
score:"1 - 1"
}

]

let container = document.getElementById("liveScores")

matches.forEach(match => {

let div = document.createElement("div")

div.innerHTML = `
<h3>${match.team1} vs ${match.team2}</h3>
<p>${match.score}</p>
`

container.appendChild(div)

})