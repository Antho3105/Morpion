let player1NameInput = document.querySelector('#name1')
let player2NameInput = document.querySelector('#name2')

let player1Div = document.querySelector('#player1')
let player2Div = document.querySelector('#player2')

let startButton = document.querySelector('#start')
let stopButton = document.querySelector('#stop')
let restartButton = document.querySelector('#restart')
let player1Title = document.querySelector('#playerOne h2')
let player2Title = document.querySelector('#playerTwo h2')

let player1 = document.querySelector('#playerOne')
let player2 = document.querySelector('#playerTwo')

let bloc = document.querySelectorAll('.bloc')
let turn = 0
let playerTurn = 1

let case11 = document.querySelector('#case11')
let case12 = document.querySelector('#case12')
let case13 = document.querySelector('#case13')
let case21 = document.querySelector('#case21')
let case22 = document.querySelector('#case22')
let case23 = document.querySelector('#case23')
let case31 = document.querySelector('#case31')
let case32 = document.querySelector('#case32')
let case33 = document.querySelector('#case33')

let scorePlayer1 = 0
let scorePlayer2 = 0
let returnScorePlayer1 = document.querySelector('#scorePlayerOne')
let returnScorePlayer2 = document.querySelector('#scorePlayerTwo')


gameStart = false

let hide = (element) => {
    element.style.opacity = '0';
    element.style.visibility = 'hidden';
}

let show = (element) => {
    element.style.opacity = '1';
    element.style.visibility = '';
}

let Joueur1Gagne = () => {
    console.log('Joueur 1 gagne !');
    gameStart = false;
    player1.style.backgroundColor = "green";
    player1.classList.add('winner')
    player2.style.backgroundColor = "";
    scorePlayer1 += 1;
    returnScorePlayer1.innerHTML = `${scorePlayer1}`;
    startButton.style.display = "none";
    stopButton.style.display = "none";
    restartButton.style.display = "block";

}

let Joueur2Gagne = () => {
    console.log('Joueur 2 gagne !');
    gameStart = false;
    player1.style.backgroundColor = "";
    player2.style.backgroundColor = "green";
    player2.classList.add('winner2')
    scorePlayer2 += 1;
    returnScorePlayer2.innerHTML = `${scorePlayer2}`;
    startButton.style.display = "none";
    stopButton.style.display = "none";
    restartButton.style.display = "block";
}

let draw = () => {
    gameStart = false;
    bloc.forEach(element =>
        element.style.backgroundColor = "lightgrey")
    console.log('pas de gagnant');
    player1.style.backgroundColor = "";
    player2.style.backgroundColor = "";
    startButton.style.display = "none";
    stopButton.style.display = "none";
    restartButton.style.display = "block";
}


let color = (case1, case2, case3) => {
    case1.style.backgroundColor = "green";
    case2.style.backgroundColor = "green";
    case3.style.backgroundColor = "green";
    case1.style.boxShadow = "5px 5px 5px black";
    case2.style.boxShadow = "5px 5px 5px black";
    case3.style.boxShadow = "5px 5px 5px black";
}


let checkResult = () => {
    if (case11.classList == "bloc circle" && case12.classList == "bloc circle" && case13.classList == "bloc circle") {
        Joueur2Gagne();
        color(case11, case12, case13);
    } else if (case21.classList == "bloc circle" && case22.classList == "bloc circle" && case23.classList == "bloc circle") {
        Joueur2Gagne();
        color(case21, case22, case23);
    } else if (case31.classList == "bloc circle" && case32.classList == "bloc circle" && case33.classList == "bloc circle") {
        Joueur2Gagne();
        color(case31, case32, case33);
    } else if (case11.classList == "bloc circle" && case21.classList == "bloc circle" && case31.classList == "bloc circle") {
        Joueur2Gagne();
        color(case11, case21, case31);
    } else if (case12.classList == "bloc circle" && case22.classList == "bloc circle" && case32.classList == "bloc circle") {
        Joueur2Gagne();
        color(case12, case22, case32);
    } else if (case13.classList == "bloc circle" && case23.classList == "bloc circle" && case33.classList == "bloc circle") {
        Joueur2Gagne();
        color(case13, case23, case33);
    } else if (case11.classList == "bloc circle" && case22.classList == "bloc circle" && case33.classList == "bloc circle") {
        Joueur2Gagne();
        color(case11, case22, case33);

    } else if (case13.classList == "bloc circle" && case22.classList == "bloc circle" && case31.classList == "bloc circle") {
        Joueur2Gagne();
        color(case13, case22, case31);


    } else if (case11.classList == "bloc cross" && case12.classList == "bloc cross" && case13.classList == "bloc cross") {
        Joueur1Gagne();
        color(case11, case12, case13);
    } else if (case21.classList == "bloc cross" && case22.classList == "bloc cross" && case23.classList == "bloc cross") {
        Joueur1Gagne();
        color(case21, case22, case23);
    } else if (case31.classList == "bloc cross" && case32.classList == "bloc cross" && case33.classList == "bloc cross") {
        Joueur1Gagne();
        color(case31, case32, case33);
    } else if (case11.classList == "bloc cross" && case21.classList == "bloc cross" && case31.classList == "bloc cross") {
        Joueur1Gagne();
        color(case11, case21, case31);
    } else if (case12.classList == "bloc cross" && case22.classList == "bloc cross" && case32.classList == "bloc cross") {
        Joueur1Gagne();
        color(case12, case22, case32);
    } else if (case13.classList == "bloc cross" && case23.classList == "bloc cross" && case33.classList == "bloc cross") {
        Joueur1Gagne();
        color(case13, case23, case33);
    } else if (case11.classList == "bloc cross" && case22.classList == "bloc cross" && case33.classList == "bloc cross") {
        Joueur1Gagne();
        color(case11, case22, case33);
    } else if (case13.classList == "bloc cross" && case22.classList == "bloc cross" && case31.classList == "bloc cross") {
        Joueur1Gagne();
        color(case13, case22, case31);
    } else if (turn == 9) {
        draw();
    }
}

let startGame = () => {
    bloc.forEach(element =>
        element.onclick = () => {
            if (playerTurn === 1 && gameStart) {
                if (document.querySelector(`#${element.id}`).innerHTML == "") {
                    document.querySelector(`#${element.id}`).innerHTML = `<i class="fas fa-times"></i>`;
                    document.querySelector(`#${element.id}`).classList.add('cross')
                    ++turn;
                    playerTurn = 2
                    player1.style.backgroundColor = "";
                    player2.style.backgroundColor = "green";
                    checkResult();
                }
            } else if (playerTurn === 2 && gameStart) {
                if (document.querySelector(`#${element.id}`).innerHTML == "") {
                    document.querySelector(`#${element.id}`).innerHTML = `<i class="far fa-circle"></i>`;
                    document.querySelector(`#${element.id}`).classList.add('circle')
                    ++turn;
                    playerTurn = 1
                    player1.style.backgroundColor = "green";
                    player2.style.backgroundColor = "";
                    checkResult();
                }
            }
        }
    )
}




startButton.onclick = () => {
    if (player1NameInput.value === "") {
        player1Title.innerHTML = "Joueur 1";
    } else player1Title.innerHTML = player1NameInput.value;
    if (player2NameInput.value === "") {
        player2Title.innerHTML = "Joueur 2";
    } else player2Title.innerHTML = player2NameInput.value;
    gameStart = true;
    player2.classList.remove('winner2')
    player1.classList.remove('winner')
    hide(player1Div);
    hide(player2Div);
    startButton.style.display = "none";
    stopButton.style.display = "block";
    restartButton.style.display = "none";
    player1.style.backgroundColor = "green";
    player2.style.backgroundColor = "";
    startGame();
    checkResult();
    turn = 0
}

stopButton.onclick = () => {
    player1Title.innerHTML = 'Joueur 1';
    player2Title.innerHTML = 'Joueur 2';
    show(player1Div);
    show(player2Div);
    startButton.style.display = "block";
    stopButton.style.display = "none";
    restartButton.style.display = "none";
    bloc.forEach(element =>
        element.innerHTML = '')
    player1.style.background = "";
    player2.style.background = "";
    bloc.forEach(element =>
        element.style.backgroundColor = "")
    bloc.forEach(element =>
        element.style.boxShadow = "none");
    turn = 0
    playerTurn = 1
    gameStart = false
    scorePlayer1 = 0
    returnScorePlayer1.innerHTML = 0;
    scorePlayer2 = 0
    returnScorePlayer2.innerHTML = 0;

}


restartButton.onclick = () => {
    startButton.style.display = "none";
    stopButton.style.display = "block";
    restartButton.style.display = "none";
    gameStart = true;
    turn = 0
    bloc.forEach(element =>
        element.innerHTML = '')
    bloc.forEach(element =>
        element.style.backgroundColor = "")
    bloc.forEach(element =>
        element.classList = "bloc")
    bloc.forEach(element =>
        element.style.boxShadow = "none");
    player2.classList.remove('winner2')
    player1.classList.remove('winner')
    if (playerTurn === 2){
        player1.style.backgroundColor = "";
        player2.style.backgroundColor = "green";
    }else {
        player1.style.backgroundColor = "green";
        player2.style.backgroundColor = "";
    }

    startGame();
    checkResult();
}

