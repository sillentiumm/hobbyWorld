let mainGame = document.getElementById('mainGame')
const arrayLetter = []
const arrayQuestion = []
let j = 0
let topLeft = document.getElementById("score-topLeft")
let topRight = document.getElementById("score-topRight")
let bottomLeft = document.getElementById("score-bottomLeft")
let bottmRight = document.getElementById("score-bottomRight")

for (k = 0;k < 53; k++) {
	arrayLetter.push(k)
	arrayQuestion.push(k)
}

document.querySelectorAll('.score').forEach(el => {
	el.addEventListener('click', function() {
		let text = el.children[0].innerHTML
		text++
		el.children[0].innerHTML = text
	})
})

mainGame.addEventListener('click', function() {
	newNumber()
})


function newNumber() {
	if (arrayLetter.length > 0) {
	    j++
	    let randomLetter = Math.floor(Math.random()*arrayLetter.length);
	    let randomQuestion = Math.floor(Math.random()*arrayQuestion.length);
	    let rValueLetter = arrayLetter[randomLetter];
	    let rValueQuestion = arrayQuestion[randomQuestion];
	    let letter = "letter" + rValueLetter
	    let question = "question" + rValueQuestion
	    arrayLetter.splice(arrayLetter.indexOf(rValueLetter),1)
	    arrayQuestion.splice(arrayQuestion.indexOf(rValueQuestion),1)
	    document.getElementById(letter).style.zIndex = j
	    document.getElementById(letter).style.animation = "reversesLetter .4s ease-out forwards 3s"
	    document.getElementById(question).style.zIndex = j
	    document.getElementById(question).style.animation = "reversesQuestion .4s ease-out forwards"
    }
}
