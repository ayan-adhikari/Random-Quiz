//Sends a console.log and generates a question when page loads
window.addEventListener(`load`, pageLoaded)
function pageLoaded()
{
    console.log(`Page loaded`)
    generateQuestion()
}
//Assigning elements to variables
const questionNumber = document.getElementById(`question-number`)
const answerA = document.getElementById(`answer-A`)
const answerB = document.getElementById(`answer-B`)
const answerC = document.getElementById(`answer-C`)
const answerD = document.getElementById(`answer-D`)

//Other Arrays
const multipliers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let wrongs;

//Event Listeners
answerA.addEventListener(`click`, clickedA)
answerB.addEventListener(`click`, clickedB)
answerC.addEventListener(`click`, clickedC)
answerD.addEventListener(`click`, clickedD)

//Variables for multipliers and answer
let multiplier1
let multiplier2
let answer
let correctOption
let randInt
let wrong1
let wrong2
let wrong3

//Functions
//Button click functions
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
//Question generation functions
function generateRandomNumber(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateQuestion()
{
    multiplier1 = generateRandomNumber(1, 12)
    multiplier2 = generateRandomNumber(1, 12)
    questionNumber.textContent = `${multiplier1} x ${multiplier2}`
    answer = multiplier1*multiplier2
    randInt = generateRandomNumber(1, 4)
    switch (randInt)
    {
        case 1:
            correctOption = `A`
            answerA.textContent = `${answer}`
            break
        case 2:
            correctOption = `B`
            answerB.textContent = `${answer}`
            break
        case 3:
            correctOption = `C`
            answerC.textContent = `${answer}`
            break
        case 4:
            correctOption = `D`
            answerD.textContent = `${answer}`
            break
        default:
            console.log(`An error has occured.`)
            break

    }
    function generateWrongs()
    {
        wrong1 = generateRandomNumber(answer -10, answer +10)
        wrong2 = generateRandomNumber(answer -5, answer +5)
        wrong3 = generateRandomNumber(answer -5, answer +5)
        if (wrong1 <= 0 || wrong1 == answer || wrong1 == wrong2 || wrong1 == wrong3 || wrong2 <= 0 || wrong3 <= 0 || wrong2 == answer || wrong3 == answer || wrong3 == wrong2)
        {
            generateWrongs()
        }
        wrongs = [wrong1, wrong2, wrong3]
    }
    generateWrongs()
    function assignWrongs()
    {
        randInt = generateRandomNumber(1, 4)
        if (correctOption == `A`)
        {
            //Assign wrongs to B, C and D
            randInt = generateRandomNumber (0, 2)
            answerB.textContent = `${wrongs[randInt]}`
            wrongs.splice(randInt, 1);
            randInt = generateRandomNumber (0, 1)
            answerC.textContent = `${wrongs[randInt]}`
            wrongs.splice(randInt, 1);
            randInt = 0
            answerD.textContent = `${wrongs[randInt]}`
        }
        else if (correctOption == `B`)
        {
            //Assign wrongs to A, C and D
            randInt = generateRandomNumber (0, 2)
            answerA.textContent = `${wrongs[randInt]}`
            wrongs.splice(randInt, 1);
            randInt = generateRandomNumber (0, 1)
            answerC.textContent = `${wrongs[randInt]}`
            wrongs.splice(randInt, 1);
            randInt = 0
            answerD.textContent = `${wrongs[randInt]}`
        }
        else if (correctOption == `C`)
        {
            //Assign wrongs to A, B and D
            randInt = generateRandomNumber (0, 2)
            answerA.textContent = `${wrongs[randInt]}`
            wrongs.splice(randInt, 1);
            randInt = generateRandomNumber (0, 1)
            answerB.textContent = `${wrongs[randInt]}`
            wrongs.splice(randInt, 1);
            randInt = 0
            answerD.textContent = `${wrongs[randInt]}`
        }
        else if (correctOption == `D`)
        {
            //Assign wrongs to A, B and C
            randInt = generateRandomNumber (0, 2)
            answerA.textContent = `${wrongs[randInt]}`
            wrongs.splice(randInt, 1);
            randInt = generateRandomNumber (0, 1)
            answerB.textContent = `${wrongs[randInt]}`
            wrongs.splice(randInt, 1);
            randInt = 0
            answerC.textContent = `${wrongs[randInt]}`
            
        }
    }
    assignWrongs()
    
}