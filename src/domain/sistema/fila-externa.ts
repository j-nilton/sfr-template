import { Aluno } from "./aluno"; // Importando a classe Aluno de aluno.ts

export class FilaExterna {
    private alunos: Aluno[] = [];
    private distribuicaoChegada: string;

    constructor(distribuicaoChegada: string) {
        this.distribuicaoChegada = distribuicaoChegada;
    }

    // Getter para alunos
    public getAlunos(): Aluno[] {
        return this.alunos;
    }

    // Setter para alunos
    public setAlunos(alunos: Aluno[]): void {
        this.alunos = alunos;
    }

    // Método para adicionar um aluno à fila externa
    public adicionarAlunoFilaExterna(aluno: Aluno): void {
        this.alunos.push(aluno);
    }

    // Método para remover um aluno da fila externa
    public removerAluno(): Aluno {
        if (this.alunos.length === 0) {
            throw new Error("Você está tentando remover um aluno de uma fila vazia"); 
        }
        return this.alunos.shift()!; // Remove o primeiro aluno da fila
    }
}
