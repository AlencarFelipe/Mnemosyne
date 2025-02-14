console.log("Hello World!");

let nome = "Victor"; //Pode ser alterado depois
console.log(nome);

const idade = 18;//Não pode ser alterado
console.log(idade);

var cidade = "São Paulo";//Não recomendado
console.log(cidade);

// Exercicio 3
const nome_ = "Victor";
let idade_ = 18;

let mensagem = `Meu nome é ${nome_},tenho ${idade_}anos.`;  //interpolação
let mensage = "Meu nome é" + nome + ", tenho " + idade + "anos" //Concatenação
console.log(mensagem);

// tipos primitivos
console.log(typeof nome_);
console.log(typeof idade_);

let maiorDeIdade = true;
let temCarro = false;

let tamanho;
console.log(tamanho);

let vazio = null;
console.log(vazio)


// Exercicio 3 - Tipos Primitivos

let a = 10;
let b = "Victor";
let c = "10";
let d = 20;

console.log("a + b", a +b);
console.log("a + b", a + c);
console.log("a + d", a + d);


// Convertendo uma variavel
let n1 = "42.5"
n1 = Number(n1);
console.log(n1);

//Separa em numero inteiro ou real
console.log(parseInt(n1));
console.log(parseFloat("40.12Ae"));


//Condicionais

let idade1 = 18;

if (idade1 < 18){

    console.log("Menor de idade");
  }else if (idade1 > 18 ){
        console.log("Maior de idade");
  }else if  ( idade1 === 18); {
    console.log("Acabou de atingir a amior idade")
  }
