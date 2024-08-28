
function executar(){
    //pegando os caras
    let elementoNome = document.getElementById("nome");
    let elementoSobrenome = document.getElementById("sobrenome");
    let elementoAnoNascimento = document.getElementById("anonascimento");
    let elementoResultado = document.getElementById("resultado");
    let pessoa = {
        nome: elementoNome.value,
        sobrenome: elementoSobrenome.value,
        anoNascimento: elementoAnoNascimento.value,
        concatenarNomes: () => {return `Nome completo: ${pessoa.nome} ${pessoa.sobrenome} `}
    }
    elementoResultado.innerHTML = pessoa.concatenarNomes(); 
}

console.log("Entrou na página")