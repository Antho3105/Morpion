let player1NameInput = document.querySelector('#name1')
let player2NameInput = document.querySelector('#name2')

let player1Div = document.querySelector('#player1')
let player2Div = document.querySelector('#player2')

let startButton = document.querySelector('#start')
let stopButton = document.querySelector('#stop')
let player1 = document.querySelector('#playerOne h2')
let player2 = document.querySelector('#playerTwo h2')

gameStart = false

let hide = (element) => {
    element.style.opacity = '0';
    element.style.visibility = 'hidden';
}

let show = (element) => {
    element.style.opacity = '1';
    element.style.visibility = '';
}


startButton.onclick = () => {
    if (player1NameInput.value === "") {
        //Ajouter une alerte sur l'input 
        console.log('erreur de saisie1');
    } else if (player2NameInput.value === "") {
        //Ajouter une alerte sur l'input
        console.log('erreur de saisie2');
    } else {
        gameStart = true;
        console.log('Demarage jeu OK');
        player1.innerHTML = player1NameInput.value;
        player2.innerHTML = player2NameInput.value;
        hide(player1Div);
        hide(player2Div);
        startButton.style.display = "none";
        stopButton.style.display = "block";
    }
}

stopButton.onclick = () => {
    player1.innerHTML = 'Joueur 1';
    player2.innerHTML = 'Joueur 2';
    show(player1Div)
    show(player2Div)
    startButton.style.display = "block"
    stopButton.style.display = "none"

}




