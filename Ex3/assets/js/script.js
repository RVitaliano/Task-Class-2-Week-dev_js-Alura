var numeroSecreto = parseInt(Math.random() * 1001);
var numeroDeChutes = 0

while(chute != numeroSecreto) {

    var chute = prompt("Digite um número entre 1 e 1000");
    numeroDeChutes = numeroDeChutes + 1;

    if(numeroDeChutes == 10){
        alert("Você atingiu o limite de chuter (10)")
        break
    } 

    if(chute == numeroSecreto) {
        alert("Acertou!")
    } else if ( chute > numeroSecreto){
        alert("Errou... o número secreto é menor")
    } else if ( chute < numeroSecreto){
        alert("Errou... o número secreto é maior")
    }
}