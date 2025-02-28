//1️ Filtrar números maiores que 10
const numeros = [1,2,3,10,20,30,40];

numerosMaioresQueDez = numeros.filter(numero => numero > 10);
console.log(numerosMaioresQueDez);




//2 Filtrar nomes que começam com a letra A

const nomes = ["Allan","Victor","Alencar","Marco","Kleber","Arthur"];
nomesComA = nomes.filter( nome => nome.startsWith("A"));
console.log(nomesComA);



//3 Filtrar produtos com preço menor que R$ 50

const precos =[
    {nome: "Mouse", valor:20},
    {nome: "Teclado", valor: 50 },
    {nome:  "mesa"  ,  valor: 35},
    {nome: "garrafa" , valor: 70},
    {nome: "celular" , valor: 100},
    {nome: "gabinete", valor: 400},
    {nome:"cadeira" , valor: 10}
];
produtosBaratos = precos.filter(produto => produto.valor < 50);
console.log(produtosBaratos);

//.find
const produtos =[

    {nome:" Arroz", preco: 45},
    {nome: "Cafe" , preco: 35},
    {nome: "Leite" ,preco: 20},
];
produtoEspecifico = produtos.find( j => j.preco == 35)
console.log(produtoEspecifico);

//.map 
const numeros_=[2,4,8,16,32];
numerosDobrados = numeros_.map(n => n *2);
console.log(numerosDobrados);


//4 filtrar pessoas maior de idade ou nao
