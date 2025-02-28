// //Exercicio 1 
// let num = prompt("Digite um número:");

// if(num>0){

//     console.log("O numero é positivo");

// } else if (num < 0){
    
//     console.log("O numero é negativo");

// }else {
    
//    console.log("O numero é zero.")  
// }




// //Exercicio 2

// if (num % 2 === 0){
// console.log("O numero é par");

// }else{

// console.log("O numero é impar")
// }


// //Exercicio 3

// let idade2 = parseInt(prompt("Informe qual é sua idade"));


// if (idade2 <= 12){

//     console.log("Criança");
//   }else if (idade2 >= 13 && idade2 < 18 ){
//         console.log("Adolescente");
//   }else  {
//     console.log("Adulto")
//   }


//   //Exercicio 4

//   let nota = prompt("Informe a nota do Aluno:");

//   if (nota >= 60){
//     console.log("Aprovado")
//   }else{
//     console.log("Reprovado")
//   }


//   //Exercicio 1 Intermediario: Calculadora


// let numero1 = parseInt(prompt("Informe o primeiro numero"));
// let numero2 = parseInt(prompt("Informe o segundo numero"));


// let operacao= prompt("Escolha uma operação");
// switch (operacao) {

//     case ("+"):
//     console.log(numero1 + numero2);
//         break;

//     case ("-"):
//     console.log(numero1 - numero2);
//         break;

//     case ("*"):
//         console.log(numero1 * numero2);    
//         break;

//      case ("/"):
//         console.log(numero1 / numero2);
//         break;

// default:
//     console.log(erro);
// }

// //Exercicio 2 Intermediario: 3 numeros com &&


// let numero3 = parseInt(prompt("Insira numero 1"));
// let numero4 = parseInt(prompt("Insira numero 2"));
// let numero5 = parseInt(prompt("Insira numero 3"));

// if (numero3 > numero4 && numero3 > numero5){
//   console.log(numero3 + " é o maior numero")
// }else if (numero4 > numero3 && numero4 > numero5){
//   console.log(numero4 + "é o maior numero")
// }else if (numero5 > numero3 && numero5 > numero4) {
//   console.log(numero5 +" é o maior numero")
// }else{
//   console.log("Por favor digite numeros diferntes!")}



//   //Exercicio 2 Intermediario: 3 numeros sem &&




// //Exercicio 3 Intermediario: desconto 10%



// let compra = parseInt(prompt("insira o valor da compra"));


// if (compra > 100){
//   console.log("10% de desconto : " + (compra - compra  * 0.1))
// } else {
//   console.log("O valor da compra é " +compra)
// }



// //Exercicio 4 Intermediario: login simples



//Exercicio 1 Avançado

// let lado1 = parseInt(prompt("Informe o lado a"));
// let lado2 = parseInt(prompt("Infome o lado b"));
// let lado3 = parseInt(prompt("Informe o lado c"));

// if (lado1 == lado2 &&  lado1 == lado3){
//   console.log("Triangulo equilatero")

// }else if (lado1 != lado2 && lado2 !=lado3 && lado1 != lado3)
//   console.log("Triangulo escaleno")

// else {
//   console.log("Triangulo isóceles")
// }



// //Exercicio 2 Avançado

// let nota1 = parseInt(prompt("Informe sua nota"))

// if (nota1 < 60 ){
//   console.log("E")

// } else if (nota1 < 90 && nota1 > 79){
// console.log("B")

// }else if (nota1 <80 && nota1 >69){
//   console.log("C")

// }else if(nota1 >59 && nota1 <70){
// console.log("D")

// }else {
//   console.log("A")
// }