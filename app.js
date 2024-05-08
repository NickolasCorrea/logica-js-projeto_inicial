alert("Boas vindas ao jogo do número secreto!"); // alert() --> Mostra mensagem na tela do usuário, por meio de caixas de diálogo
let numeroMaximo = 1000;

// Math.random --> gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo) de forma pseudo aleatória 
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // parseInt --> converte variável para o tipo inteiro
console.log(numeroSecreto); // console.log --> Mostra mensagens para os Devs no console de desenvolvedor do navegador
let entrada; // let --> utilizado para criar variáveis
let tentativas = 1;


// while --> Estrutura básica de loop, que executa um bloco de código enquanto uma determinada condição for verdadeira 
while (entrada != numeroSecreto) 
{
    entrada = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`); // prompt() --> Permite o usuário entrar com algum dado

    if (entrada == numeroSecreto) 
    {
        break; // Para a execução do loop while.
    }
    else if (entrada > numeroSecreto) 
    {
        alert("O número secreto é menor que " + entrada);
        tentativas++;
    }
    else if (entrada < numeroSecreto) 
    {
        alert("O número secreto é maior que " + entrada);
        tentativas++;
    }
    
}

// Operador ternário --> Age como se fosse um if(), verifica se a variável tentativas é maior do que 1, se for, será igual a "tentativas", se não, será "tentativa"
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";


alert(`Você descobriu o número secreto: ${numeroSecreto}, com ${tentativas} ${palavraTentativa}.`); // Template Strings --> uma forma de realizar concatenação em JS. Deve-se usar crase,e  a variável deve estar entre chaves, e antes dela deve haver um sifrão "$".

// alert("Você descobriu o número secreto: " + numeroSecreto + ", com " + tentativas + " " + palavraTentativa+ ".");  //Concatenação padrão.



