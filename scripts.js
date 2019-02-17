// 1 - O usuario deve escolher se quer X ou O;
// 2 - Se o contador atigir 9 será velha, fim de jogo;
// 3 - Jogador um seleciona um quadrado. 
// 4 - Se o contador for maior ou igual a cinco, entrar no laco;
// 5 - Quando o contator atingir 9, o jogo acaba.
// 6 - 


const jogorUm = "X";
const jogordois = "O";
let numeroDeJogadas = 0; 

let quadradoUm = document.querySelector('.quad-um');
let quadradoDois = document.querySelector('.quad-dois');
let quadradoTres = document.querySelector('.quad-tres');
let quadradoQuatro = document.querySelector('.quad-quatro');
let quadradoCinco = document.querySelector('.quad-cinco');
let quadradoSeis = document.querySelector('.quad-seis');
let quadradoSete = document.querySelector('.quad-sete');
let quadradoOito = document.querySelector('.quad-oito');
let quadradoNove = document.querySelector('.quad-nove');

const botaoQuadUm = function(){

    if(numeroDeJogadas % 2 == 0){
        quadradoUm.classList.add('efeito-quad');
    }
    else{
        quadradoUm.classList.add('efeito-quad-dois');   
    }
    numeroDeJogadas++;
}

const botaoQuadDois = function(){
    if(numeroDeJogadas % 2 == 0){
        quadradoDois.classList.add('efeito-quad');
    }
    else{
        quadradoDois.classList.add('efeito-quad-dois');   
    }
    numeroDeJogadas++;
}

const botaoQuadTres = function(){
    if(numeroDeJogadas % 2 == 0){
        quadradoTres.classList.add('efeito-quad');
    }
    else{
        quadradoTres.classList.add('efeito-quad-dois');
    }
    numeroDeJogadas++;
}

const botaoQuadQuatro = function(){
    if(numeroDeJogadas % 2 == 0){
        quadradoQuatro.classList.add('efeito-quad');
    }
    else{
        quadradoQuatro.classList.add('efeito-quad-dois');
    }
    numeroDeJogadas++;
}

const botaoQuadCinco = function(){
    if(numeroDeJogadas % 2 == 0){
        quadradoCinco.classList.add('efeito-quad');
    }
    else{
        quadradoCinco.classList.add('efeito-quad-dois');
    }
    numeroDeJogadas++;
}

const botaoQuadSeis = function(){
    if(numeroDeJogadas % 2 == 0){
        quadradoSeis.classList.add('efeito-quad');
    }
    else{
        quadradoSeis.classList.add('efeito-quad-dois');
    }
    numeroDeJogadas++;
}

const botaoQuadSete = function(){
    if(numeroDeJogadas % 2 == 0){
        quadradoSete.classList.add('efeito-quad');
    }
    else{
        quadradoSete.classList.add('efeito-quad-dois');
    }
    numeroDeJogadas++;
}

const botaoQuadOito = function(){
    if(numeroDeJogadas % 2 == 0){
        quadradoOito.classList.add('efeito-quad');
    }
    else{
        quadradoOito.classList.add('efeito-quad-dois');
    }
    numeroDeJogadas++;
}

const botaoQuadNove = function(){
    if(numeroDeJogadas % 2 == 0){
        quadradoNove.classList.add('efeito-quad');
    }
    else{
        quadradoNove.classList.add('efeito-quad-dois');
    }
    numeroDeJogadas++;
}

quadradoUm.onclick = botaoQuadUm;
quadradoDois.onclick = botaoQuadDois;
quadradoTres.onclick = botaoQuadTres;
quadradoQuatro.onclick = botaoQuadQuatro;
quadradoCinco.onclick = botaoQuadCinco;
quadradoSeis.onclick = botaoQuadSeis;
quadradoSete.onclick = botaoQuadSete;
quadradoOito.onclick = botaoQuadOito;
quadradoNove.onclick = botaoQuadNove;
