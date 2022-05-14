let meuNome = 'João Victor';
let meuSobrenome = 'Escudeiro';
let minhaProfissao = 'Estudante';


//SEM TEMPLATE STRING
console.log("Meu nome é " + meuNome + " " + meuSobrenome + " e sou " + minhaProfissao)
//COM TEMPLATE STRING
console.log(`Olá, eu sou ${meuNome} ${meuSobrenome} e sou ${minhaProfissao}`);

console.log(`O resultado da soma de 1 + 1 = ${1 + 1}`);
console.log(`O objeto json ${{ chave: 'valor' }}`);

let meuObjeto = {
    chave: 'novo valor'
}