//1. Desenvolver as classes do padrão MVC para Disciplina, assim como fizemos para Aluno: classes DisciplinaRepositorio, DisciplinaServico, DisciplinaControlador. Além dos métodos de CRUD (inserir, pesquisar, atualizar e remover), similar a como foi feito com Aluno, você deve criar o método inserirAlunoNaDisciplina, que receberá um aluno e o colocará no array de alunos da Disciplina.

class DisciplinaRepositorio {
    disciplinas;
    
    constructor() {
        this.disciplinas = [];
    }

    inserir (disciplina) {
        this.disciplinas.push(disciplina);
    }

    remover (codigo) {
        const idxDisciplinaARemover = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);

        if (idxDisciplinaARemover > -1) {
            this.disciplinas.splice(idxDisciplinaARemover, 1);
        }

    }

    listar () {
        return this.disciplinas;
    }


}