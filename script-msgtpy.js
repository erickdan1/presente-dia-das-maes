const text = `
Querida mãe..

Neste Dia das Mães, quero expressar toda a minha gratidão por ter você como minha mãe. Sua dedicação, amor e sacrifícios não passam despercebidos. Você faz de tudo por mim. A carta que você me enviou pelos correios foi uma verdadeira prova do seu amor incondicional.

Hoje, esta mensagem eletrônica é minha pequena forma de retribuir todo o carinho que você me proporciona. Você é uma mãe incrível, uma fonte constante de apoio, inspiração e sabedoria em minha vida. 

Quero te desejar que seu dia das mães seja repleto de alegria e felicidade, pois você merece todo o amor e reconhecimento do mundo. Obrigado por ser a melhor mãe que alguém poderia desejar. Eu te amo mais do que palavras podem expressar.

Com todo o meu amor,

Erick.`;

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
    if (i < arr.length) {
        console.log(arr[i]);
        document.querySelector(".textCont").textContent += arr[i];

        i++;
        console.log("Contagem i: " + i);
        setTimeout(function () {
            dashOut(arr);
        }, interval(arr[i]));
    }
}

function interval(letter) {
    console.log(letter);
    if (letter == ";" || letter == "." || letter == ",") {
        return Math.floor(Math.random() * 500 + 500);    
    } else {
        return Math.floor(Math.random() * 130 + 5);
    }
} 

function startFromBegin() {
    i = 0;
    dashOut(paragraph);
}

startFromBegin();
