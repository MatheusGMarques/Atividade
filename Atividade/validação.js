let regExNome = /^[A-Za-z\$][0,100]/
let regExEmail = /^[a-zA-Z0-9.!#$%&+-/=?^_{|}]+@[a-zA-Z0-9-]+(?:\.[a-zA-z0-9-]+)$/
let regExNumero = /\(?:[1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/

document.addEventListener("DOMContentLoaded",function(){
    let botao = document.getElementById("botton");
    botao.addEventListener("click",function(){
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let numero = documento.getElementById("numero").value;
        ValidacaoNome = regExNome.test(nome);
        ValidacaoEmail = regExEmail.test(email);
        ValidacaoNumero = regExNumero.teste(numero);
        console.log(nome);
        console.log(ValidacaoNome);
        console.log(email);
        console.log(ValidacaoEmail);
        console.log(numero);
        console.log(ValidacaoNumero);
    })
})