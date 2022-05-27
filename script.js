let btn = document.getElementById('btn')
const arrayLetter = [0, 1, 2, 3, 4, 5]
const arrayQuestion = [0, 1, 2, 3, 4, 5]
let j = 0

btn.addEventListener('click', function() {
	//btn.disabled = true
	//setTimeout(() => btn.disabled = false, 3000)
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
	    document.getElementById(letter).style.animation = "reverses .4s ease-out forwards 1.2s"
	    document.getElementById(question).style.zIndex = j
	    document.getElementById(question).style.animation = "reverses2 .4s ease-out forwards"
    }
}
