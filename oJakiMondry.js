

function makePhrases(){
    let words1 = ["huj", "wielowarstwowy", "kurwa", "cham", "niepowstrzymany"];
    let words2 = ["sols", "amy", "kurwaa", "alkoolik", "powstrzymany"];
    let words3 = ["hujec", "warstwowy", "skurwiwij", "skurwodaktyl", "trzymany"];

    let rand1 = Math.floor(Math.random() * words1.length);
    let rand2 = Math.floor(Math.random() * words2.length);
    let rand3 = Math.floor(Math.random() * words3.length);

    let phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    alert(phrase);
}

makePhrases()