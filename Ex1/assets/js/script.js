var numeroSecreto = parseInt(Math.random() * 1001);;
var numeroDeChutes = 0

while(chute != numeroSecreto) {
    var chute = prompt("Digite um número entre 1 e 1000")
    numeroDeChutes = numeroDeChutes + 1

    if (numeroDeChutes == 10) {
        alert("Você ja chutou 10 vezes")}
    if (numeroDeChutes == 20) {
        alert("Você ja chutou 20 vezes")}
    if(chute == numeroSecreto) {
        alert("Acertou!")
    } else if ( chute > numeroSecreto){
        alert("Errou... o número secreto é menor que " + chute)  
    } else if ( chute < numeroSecreto){
        alert("Errou... o número secreto é maior que " + chute)
    }
}
