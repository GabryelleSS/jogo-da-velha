// 1 - O usuario deve escolher se quer X ou O;
// 2 - Se o contador atigir 9 será velha, fim de jogo;
// 3 - Jogador um seleciona um quadrado. 
// 4 - Se o contador for maior ou igual a cinco, entrar no laco;
// 5 - Quando o contator atingir 9, o jogo acaba.
// 6 - 


const jogadorUm = 0;
const jogadorDois = 1;
let numeroDeJogadas = 0; 

let verificacaoUm;
let verificacaoDois;
let verificacaoTres;
let verificacaoQuatro;
let verificacaoCinco;
let verificacaoSeis;
let verificacaoSete;
let verificacaoOito;
let verificacaoNove;

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
        
        verificacaoUm = jogadorUm;
        console.log(verificacaoUm);
    }
    else{
        quadradoUm.classList.add('efeito-quad-dois'); 
        
        verificacaoUm = jogadorDois;
        console.log(verificacaoUm);  
    }
    numeroDeJogadas++;
    alert(numeroDeJogadas);
}

const botaoQuadDois = function(){
    if(numeroDeJogadas % 2 == 0){
        quadradoDois.classList.add('efeito-quad');
        
        verificacaoDois = jogadorUm;
        console.log(verificacaoDois);
    }
    else{
        quadradoDois.classList.add('efeito-quad-dois'); 
        
        verificacaoDois = jogadorDois;
        console.log(verificacaoDois);  
    }
    numeroDeJogadas++;
    alert(numeroDeJogadas);
}

const botaoQuadTres = function(){
    if(numeroDeJogadas % 2 == 0){
        quadradoTres.classList.add('efeito-quad');
        
        verificacaoTres = jogadorUm;
        console.log(verificacaoTres);
    }
    else{
        quadradoTres.classList.add('efeito-quad-dois');
        
        verificacaoTres = jogadorDois;
        console.log(verificacaoTres);
    }
    numeroDeJogadas++;
    alert(numeroDeJogadas);
}

const botaoQuadQuatro = function(){
    if(numeroDeJogadas % 2 == 0){
        quadradoQuatro.classList.add('efeito-quad');
        
        verificacaoQuatro = jogadorUm;
        console.log(verificacaoQuatro);
    }
    else{
        quadradoQuatro.classList.add('efeito-quad-dois');
        
        verificacaoQuatro = jogadorDois;
        console.log(verificacaoQuatro);
    }
    numeroDeJogadas++;
}

const botaoQuadCinco = function(){
    if(numeroDeJogadas % 2 == 0){
        quadradoCinco.classList.add('efeito-quad');
        
        verificacaoCinco = jogadorUm;
        console.log(verificacaoCinco);
    }
    else{
        quadradoCinco.classList.add('efeito-quad-dois');
        
        verificacaoCinco = jogadorDois;
        console.log(verificacaoCinco);
    }
    numeroDeJogadas++;
}

const botaoQuadSeis = function(){
    if(numeroDeJogadas % 2 == 0){
        quadradoSeis.classList.add('efeito-quad');

        verificacaoSeis = jogadorUm;
        console.log(verificacaoSeis);
    }
    else{
        quadradoSeis.classList.add('efeito-quad-dois');
        
        verificacaoSeis = jogadorDois;
        console.log(verificacaoSeis);
    }
    numeroDeJogadas++;
}

const botaoQuadSete = function(){
    if(numeroDeJogadas % 2 == 0){
        quadradoSete.classList.add('efeito-quad');
        
        verificacaoSete = jogadorUm;
        console.log(verificacaoSete);
    }
    else{
        quadradoSete.classList.add('efeito-quad-dois');
        
        verificacaoSete = jogadorDois;
        console.log(verificacaoSete);
    }
    numeroDeJogadas++;
}

const botaoQuadOito = function(){
    if(numeroDeJogadas % 2 == 0){
        quadradoOito.classList.add('efeito-quad');
        
        verificacaoOito = jogadorUm;
        console.log(verificacaoOito);
    }
    else{
        quadradoOito.classList.add('efeito-quad-dois');
        
        verificacaoOito = jogadorDois;
        console.log(verificacaoOito);
    }
    numeroDeJogadas++;
}

const botaoQuadNove = function(){
    if(numeroDeJogadas % 2 == 0){
        quadradoNove.classList.add('efeito-quad');
        
        verificacaoNove = jogadorUm;
        console.log(verificacaoNove);
    }
    else{
        quadradoNove.classList.add('efeito-quad-dois');
        
        verificacaoNove = jogadorDois;
        console.log(verificacaoNove);
    }
    numeroDeJogadas++;
}

// if(quadradoUm && quadradoDois && quadradoTres == true){
    //     alert('Eba')
    // }
    
quadradoUm.onclick = botaoQuadUm;
quadradoDois.onclick = botaoQuadDois;
quadradoTres.onclick = botaoQuadTres;
quadradoQuatro.onclick = botaoQuadQuatro;
quadradoCinco.onclick = botaoQuadCinco;
quadradoSeis.onclick = botaoQuadSeis;
quadradoSete.onclick = botaoQuadSete;
quadradoOito.onclick = botaoQuadOito;
quadradoNove.onclick = botaoQuadNove;
    
// for(numeroDeJogadas; numeroDeJogadas <= 9;){
//     if(verificacaoUm == 0 && verificacaoDois == 0 && verificacaoTres == 0){
//             alert('uhuuuu');
//         }
// }  

// function verificacao(){
//     if(verificacaoUm == 0 && verificacaoDois == 0 && verificacaoTres == 0){
//         return alert('uhuuuu');
// } 
// }