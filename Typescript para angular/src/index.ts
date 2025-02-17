//Tipos primitivos: Boolean, number, string
let ligado: boolean= false;
let nome: string = "Daiane";
let idade: number = 26;
let altura: number = 1.5;

//Tipos especiais null, Undefined
let nulo: null= null;
let indefinido: undefined = undefined;

//Tipos abragentes: any, void
let retorno:void
let retornoView: any = false

//Objeto - Sem previsibilidade
let produto: object = {
    name:"daiane",
    cidade:"sp"
};

type ProdutoLoja = {
    nome:string;
    preco:number;
    unidade:number;

};

let meuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 89.90,
    unidade:60,

};

//Arrays


let dados: string[] = ["Daiane", "Fabio", "Denis"];
let dados2: Array<string>= ["Daiane", "Fabio", "Denis"];

