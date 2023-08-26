const userChoices = document.querySelectorAll(".box")
const computerChoices = ["Rock", "Paper", "Scissors"]
let computerCounter = 0;
let userCounter = 0;
let userScore = document.getElementById("usr-score");
let compScore = document.getElementById("comp-score");
let gameStatus = document.getElementById("game-status");
let username = window.prompt("What Is Your Name : ")
function randomizeComputerChoice() {
    let randomComputerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    return randomComputerChoice
}
function restartGame(){
    let restartGame = window.confirm("You Want To Play Again ?")
    if(restartGame){
     window.location.reload()
    }else{
     window.close()
    }
}
userChoices.forEach(userChoice => {
    userChoice.addEventListener("click", (e) => {
        const userFinalChoice = e.target.dataset.name
        const computerFinalChoice = randomizeComputerChoice()
        let userChoiceImg = document.querySelector(".player-info");
        let compChoiceImg = document.querySelector(".computer-info");   
        let element = e.target
        const styles = getComputedStyle(element).backgroundImage
        if(computerFinalChoice === "Rock"){
            compChoiceImg.style = `background-image: url(images/icon-rock.svg);background-position: center; background-repeat: no-repeat;`
        }else if(computerFinalChoice === "Paper"){
            compChoiceImg.style = `background-image: url(images/icon-paper.svg);background-position: center; background-repeat: no-repeat;`
        }else if(computerFinalChoice === "Scissors"){
            compChoiceImg.style = `background-image: url(images/icon-scissors.svg);background-position: center; background-repeat: no-repeat;`
        }
        userChoiceImg.style = `background-image: ${styles};background-position: center; background-repeat: no-repeat;`
        if(userFinalChoice === "Paper" && computerFinalChoice === "Paper" || userFinalChoice === "Rock" && computerFinalChoice === "Rock" || userFinalChoice === "Scissors" && computerFinalChoice === "Scissors"){
            computerCounter += 1
            userCounter += 1
            compScore.textContent = computerCounter
            userScore.textContent = userCounter
        }
        if(userFinalChoice === "Paper" && computerFinalChoice === "Rock" || userFinalChoice === "Rock" && computerFinalChoice === "Scissors" || userFinalChoice === "Paper" && computerFinalChoice === "Rock"){
            userCounter += 1
            userScore.textContent = userCounter
        }
        if(computerFinalChoice === "Paper" && userFinalChoice === "Rock" || computerFinalChoice === "Rock" && userFinalChoice === "Scissors" || computerFinalChoice === "Scissors" && userFinalChoice === "Paper"){
            computerCounter += 1
            compScore.textContent = computerCounter
        }
        if(userCounter === 10 || computerCounter === 10){
            if(userCounter > computerCounter){
               gameStatus.textContent = username + " Win !"
            }else if(userCounter < computerCounter){
                gameStatus.textContent = "Computer Win !"
            }else {
                gameStatus.textContent = "Tie !!!"
            }
            setTimeout(restartGame, 5120)
        }
    })
})