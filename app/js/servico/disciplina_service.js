class DisciplinaService {
    repositorio;

    constructor (alunoService) {
        this.repositorio = new DisciplinaRepositorio();
        this.alunoService = alunoService;
    }

    inserir (codigo, nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);

        if (disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada');
        }

        const disciplinaNova = new Disciplina(codigo, nome);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    inserirAlunoNaDisciplina(codigo, matricula) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length < 1) {
          throw new Error("Disciplina não existente!");
        }
        const alunoPesquisado = this.alunoService.pesquisarPorMatricula(matricula);
        if (alunoPesquisado.length < 1) {
          throw new Error("Aluno não existente!");
        }
    
        const disciplina = disciplinaPesquisada[0];
        const aluno = alunoPesquisado[0];
        disciplina.adicionarAluno(aluno)
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(disciplina => disciplina.codigo === codigo);
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

} 