//Exercicio 1 FOR
function exercicioRep01(){
for (let i = 1;i <=10; i++){
     console.log("Contagem:" , i);
 }


}
let divDeLogs = document.querySelector(".logs");
let paragrafo = document.createElement("p");
paragrafo.innerHTML = "Exercicio 1 executado";
divDeLogs.appendChild(paragrafo);

// Exercicio 1 WHILE
// let contador = 1;
// while(contador <=10){

//     console.log("Contagem:" , contador);
//     contador++;
// }

//Exercicio 1 Do while 
// let contador = 1;
//  do{
//     console.log("Contador" , contador);
//     contador++;
//  } while (contador <=10);

// Exercicio 2 tabuada
function exercicioRep02(){
let num = parseInt(prompt("Insira um número: "));

for (let contador1 = 1; contador1=10; contador1++){

  let valorCalculado = num * contador1;
   let mensagem = `${num} x ${contador1} = ${valorCalculado}`
 }



}
//Exercicio 3 soma dos primeiros numeros
function exercicioRep03(){
let num = parseInt(prompt("Insira um numero N"));
 
 for (let contador = 1; contador <=num; contador++){
 let valorCalculado = contador + num;
 let mensagem= `${num} + ${contador} = ${valorCalculado}`
 console.log(mensagem);
 }
}


//Exercicio 1 Intermediario for
function exercicioRep04(){
 for (let i = 1; i <= 50;i++){

     if(i % 2 == 0){

         console.log(i);
   }
 }
}

// //Exercicio 1 Intermediario While

// let contador = 2;


//  while(contador <=50){

//      console.log(contador);
//      contador += 2;
//  }


//Exercicio 2 jogo da advinhação
function exercicioRep05(){
let numero = Math.floor(Math.random()*100);
let chute = null;
while( chute = parseInt(prompt("Chute um número:")));

if (chute != numeroAleatorio) {

    if (chute > numeroAleatorio) {

        alert("Chutou alto.");

    } else {

        alert("Chutou baixo.");

    }

}

}


//Exercicio 3 Contagem regressiva
