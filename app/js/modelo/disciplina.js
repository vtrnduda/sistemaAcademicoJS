//Desenvolver a classe Disciplina, contendo como atributos: código, nome e um array de alunos (da classe Aluno) e seus respectivos métodos get e set;

class Disciplina {
    codigo;
    nome;
    alunos = [];

    constructor(codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
    }

    get codigo () {
        return this.codigo;
    }

    set codigo (novoCodigo) {
        
        this.codigo = novoCodigo;
    }

    get nome () {
        return this.nome;
    }

    set nome (novoNome) {
        this.nome = novoNome;
    }

    get alunos () {
        return this.alunos;
    }

    adicionarAluno (aluno) {
        this.alunos.push(aluno);
    }

    
    

}