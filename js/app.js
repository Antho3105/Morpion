let player1NameInput = document.querySelector('#name1')
let player2NameInput = document.querySelector('#name2')

let player1Div = document.querySelector('#player1')
let player2Div = document.querySelector('#player2')

let startButton = document.querySelector('#start')
let stopButton = document.querySelector('#stop')
let player1Title = document.querySelector('#playerOne h2')
let player2Title = document.querySelector('#playerTwo h2')

let player1 = document.querySelector('#playerOne')
let player2 = document.querySelector('#playerTwo')

let bloc = document.querySelectorAll('.bloc')
let turn = 0

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
let returnScorePlayer1 = document.querySelector('#scorerPlayerOne')
let returnScorePlayer2 = document.querySelector('#scorerPlayerTwo')


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
    turn = 0;
    player1.style.backgroundColor = "green";
    player2.style.backgroundColor = "";
}

let Joueur2Gagne = () => {
    console.log('Joueur 2 gagne !');
    gameStart = false;
    turn = 0;
    player1.style.backgroundColor = "";
    player2.style.backgroundColor = "green";
}

let draw = () => {
    gameStart = false;
    console.log('pas de gagnant');
    turn = 0;
    player1.style.backgroundColor = "";
    player2.style.backgroundColor = "";

}


let color = (case1, case2, case3) => {
    case1.style.backgroundColor = "green";
    case2.style.backgroundColor = "green";
    case3.style.backgroundColor = "green";
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
        color(case1, case21, case31);
    } else if (case12.classList == "bloc circle" && case22.classList == "bloc circle" && case32.classList == "bloc circle") {
        Joueur2Gagne();
        color(case12, case22, case32);
    } else if (case13.classList == "bloc circle" && case23.classList == "bloc circle" && case33.classList == "bloc circle") {
        Joueur2Gagne();
        color(case31, case32, case33);
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
            if (turn % 2 == 0 && gameStart) {
                if (document.querySelector(`#${element.id}`).innerHTML == "") {
                    document.querySelector(`#${element.id}`).innerHTML = `<i class="fas fa-times"></i>`;
                    document.querySelector(`#${element.id}`).classList.add('cross')
                    ++turn;
                    player1.style.backgroundColor = "";
                    player2.style.backgroundColor = "green";
                    checkResult();
                }
            } else if (turn % 2 != 0 && gameStart) {
                if (document.querySelector(`#${element.id}`).innerHTML == "") {
                    document.querySelector(`#${element.id}`).innerHTML = `<i class="far fa-circle"></i>`;
                    document.querySelector(`#${element.id}`).classList.add('circle')
                    ++turn;
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

    hide(player1Div);
    hide(player2Div);
    startButton.style.display = "none";
    stopButton.style.display = "block";
    player1.style.backgroundColor = "green";
    player2.style.backgroundColor = "";
    startGame();
    checkResult();
}

stopButton.onclick = () => {
    player1Title.innerHTML = 'Joueur 1';
    player2Title.innerHTML = 'Joueur 2';
    show(player1Div);
    show(player2Div);
    startButton.style.display = "block";
    stopButton.style.display = "none";
    bloc.forEach(element =>
        element.innerHTML = '')
    player1.style.background = "";
    player2.style.background = "";
    bloc.forEach(element =>
        element.style.backgroundColor = "")
    turn = 0
    gameStart = false
}




