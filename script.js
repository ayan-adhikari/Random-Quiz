//Sends a console.log when page loads
window.addEventListener(`load`, pageLoaded)
function pageLoaded()
{
    console.log(`Page loaded`)
}
//Assigning elements to variables
const questionNumber = document.getElementById(`question-number`)
const answerA = document.getElementById(`answer-A`)
const answerB = document.getElementById(`answer-B`)
const answerC = document.getElementById(`answer-C`)
const answerD = document.getElementById(`answer-D`)

//Event Listeners
answerA.addEventListener(`click`, clickedA)
answerB.addEventListener(`click`, clickedB)
answerC.addEventListener(`click`, clickedC)
answerD.addEventListener(`click`, clickedD)

//Functions
function clickedA()
{
    console.log(`Clicked: A`)
}
function clickedB()
{
    console.log(`Clicked: B`)
}
function clickedC()
{
    console.log(`Clicked: C`)
}
function clickedD()
{
    console.log(`Clicked: D`)
}
function generateQuestion()
{

}