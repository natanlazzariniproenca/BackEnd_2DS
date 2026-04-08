//Funções são blocos de código reaproveitáveis
//Podem ou NÃO receber parâmetros
//Podem ou NÃO retornar valores
//Permitem qualquer tipo de valor

//1ª etapa - declaração
function dizOla(){
    console.log('Ola!!!')
}

//2ª etapa - invocação
dizOla()

function somDoAnimal(nomeAnimal, tipoSom){
    console.log("o animal " + nomeAnimal + " emite o som " + tipoSom);
}

somDoAnimal("Papagaio", "TESTE")