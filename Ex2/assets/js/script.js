var numeroSecreto = parseInt(Math.random() * 1001);


while(chute != numeroSecreto) {

    var chute = prompt("Digite um número entre 1 e 1000")
    
    if(chute < 1 || chute > 1000){
        alert("Só é permitido números de 1 a 1000")
    }

    if(chute == numeroSecreto) {
        alert("Acertou!")
    } else if ( chute > numeroSecreto)
    {
        alert("Errou... o número secreto é menor")
    } else if ( chute < numeroSecreto)
    {
        alert("Errou... o número secreto é maior")
    }
}