let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location1 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while (isSunk == false) {
    guess = prompt("Gotów, cel, jeeb! (podaj liczbę z zakresu 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Prosze podac prawidlowy numerek solstika!");
    }
    else{
        guesses += 1;
    }
    if (guess == location1 ||  guess == location2 || guess == location3) {
        alert("Soools TRAFIONY");
            hits += 1;
    }
    else{
        alert("huj sie ukryl");
    }
    if (hits == 3) {
        isSunk = true;
        alert("Zatopiłeś skurwysyna");
    }
}

let stats  = "Potrzebowałeś " + guess + " prób, by zatopić keraxxa, " + "czyli Twoja efetwność wynosi: " + (3/guesses) + ".";
alert(stats);