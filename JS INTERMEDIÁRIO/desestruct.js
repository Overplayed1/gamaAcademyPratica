const pessoa = {
    nome: 'João Victor',
    sobrenome: 'Escudeiro',
    idade: 28,
    profissao: 'Estudante'
};

console.log(pessoa);

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;
// let profissao = pessoa.profissao;

let { nome, sobrenome, idade, profissao, endereco } = pessoa; //ENDERECO NÃO É LOCALIZADO NO OBJETO (PESSOA)

console.log(nome, sobrenome, idade, profissao, endereco);
