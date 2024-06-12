var tentativas = document.getElementById('tentativas');
var digiteNumero = document.getElementById('digite-numero');
var botaoAdivinhar = document.getElementById('botao');
var msg = document.getElementById('msg');
var numSorte = sorteia(100);
var maximoTentativas = 10;


tentativas.innerHTML = maximoTentativas;

function adivinharNumero() {
    if(maximoTentativas == 1){
        msg.innerHTML = 'Ops, acabaram suas tentativas!';
        return;
    }
    var numero = digiteNumero.value;
    console.log(numSorte);
    if(numero != numSorte){
        maximoTentativas--;
        tentativas.innerHTML = maximoTentativas;
        if(numSorte > numero){
            msg.innerHTML = 'O número para ser encontrado é maior!';
        }else{
            msg.innerHTML = 'O número para ser encontrado é menor!';
        }
    } else{
        var erros = (10 - maximoTentativas);
        msg.innerHTML = ('Parabéns! Você acertou o número com '+erros+' tentativa(s)');
    }
}

function sorteia(n) {
    return Math.round(Math.random () * n);
}

