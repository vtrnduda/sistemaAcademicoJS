

class DisciplinaControlador {

    constructor (alunocontrolador) {
        const alunoService = alunocontrolador.servico;
        this.servico = new DisciplinaService(alunoService);
        this.codigoElemento = document.querySelector("#codigo");
        this.nomeElemento = document.querySelector("#nomedisciplina");
        this.botaoCadastrarAtualizar = document.querySelector("#botaoCadastrarAtualizarDisciplina");

    }

    inserir() {
        const disciplinaInserida = this.servico.inserir(this.codigoElemento.value, this.nomeElemento.value);
        const listaDisciplinasElemento = document.querySelector("#listaDisciplinas");
        
        if(disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {

        console.log(disciplina);
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome}  `;
        this.inserirBotaoRemover(disciplinaElemento, disciplina.codigo);
        this.inserirBotaoEdicao(disciplinaElemento, disciplina);
        elementoDestino.appendChild(disciplinaElemento);
    }

    inserirAlunoNaDisciplina() {
        const codigoDisciplina = document.querySelector("#codigodisciplina").value;
        const matriculaAluno = document.querySelector("#matriculaaluno").value;
        const listaAlunosComDisciplinasElemento = document.querySelector("#listaAlunosComDisciplinas");
        this.servico.inserirAlunoNaDisciplina(codigoDisciplina, matriculaAluno);
        this.inserirAlunosComDisciplinasNoHtml(codigoDisciplina, listaAlunosComDisciplinasElemento);
    }

    inserirAlunosComDisciplinasNoHtml(codigoDisciplina, elementoDestino) {
        const disciplina = this.servico.pesquisarPorCodigo(codigoDisciplina);
        //let listaAlunos = this.servico.listarAlunos(codigoDisciplina);   
        
        console.log(disciplina);

        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Disciplina: ${disciplina[0].nome} (Código: ${disciplina[0].codigo})  `;
        elementoDestino.appendChild(disciplinaElemento);

        disciplina[0].alunos.forEach(aluno => {
            const alunoElemento = elementoDestino.lastChild;
            alunoElemento.textContent += `-  Aluno: ${aluno.nome} (Matrícula: ${aluno.matricula})`;
            disciplinaElemento.appendChild(alunoElemento);
        });
    }
    

    inserirBotaoRemover(disciplinaElemento, codigo) {
        //criar botao remocao
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'X';
        botaoRemover.addEventListener('click', () => {
            this.remover(codigo);
            disciplinaElemento.remove();
        });
        disciplinaElemento.appendChild(botaoRemover);
    }

    remover(codigo) {
        this.servico.remover(codigo);
    }

    inserirBotaoEdicao(disciplinaElemento, disciplina) {
        const botaoEdicao = document.createElement('button');
        botaoEdicao.textContent = 'E';
        botaoEdicao.addEventListener('click', () => {
            this.codigoElemento.value = disciplina.codigo;
            this.nomeElemento.value = disciplina.nome;
            this.botaoCadastrarAtualizar.textContent = 'Atualizar';
        });
        disciplinaElemento.appendChild(botaoEdicao);
    }
}