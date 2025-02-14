//Exercicio 1 
let num = prompt("Digite um número:");

if(num>0){

    console.log("O numero é positivo");

} else if (num < 0){
    
    console.log("O numero é negativo");

}else {
    
   console.log("O numero é zero.")  
}




//Exercicio 2

if (num % 2 === 0){
console.log("O numero é par");

}else{

console.log("O numero é impar")
}


//Exercicio 3

let idade2 = prompt("Informe qual é sua idade");


if (idade2 <= 12){

    console.log("Criança");
  }else if (idade2 >= 13 && idade2 <= 17 ){
        console.log("Adolescente");
  }else   ( idade2 >=18); {
    console.log("Adulto")
  }


  //Exercicio 4

  let nota = prompt("Informe a nota do Aluno:");

  if (nota >= 60){
    console.log("Aprovado")
  }else{
    console.log("Reprovado")
  }


  //Exercicio 5 Calculadora


let numero1 = parseInt(prompt("Informe o primeiro numero"));
let numero2 = parseInt(prompt("Informe o segundo numero"));


let operacao= prompt("Escolha uma operação");
switch (operacao) {

    case ("+"):
    console.log(numero1 + numero2);
        break;

    case ("-"):
    console.log(numero1 - numero2);
        break;

    case ("*"):
        console.log(numero1 * numero2);    
        break;

     case ("/"):
        console.log(numero1 / numero2);
        break;

default:
    console.log(erro);
}

compra * 10/100