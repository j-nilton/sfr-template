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

    // Getter para distribuicaoChegada
    public getDistribuicaoChegada(): string {
        return this.distribuicaoChegada;
    }

    // Setter para distribuicaoChegada
    public setDistribuicaoChegada(distribuicaoChegada: string): void {
        this.distribuicaoChegada = distribuicaoChegada;
    }

    // Método para adicionar um aluno à fila externa
    public adicionarAlunoFilaExterna(aluno: Aluno): void {
        this.alunos.push(aluno);
        console.log(`Aluno ${aluno.getId()} adicionado à fila externa.`);
    }

    // Método para remover um aluno da fila externa
    public removerAluno(): Aluno | undefined {
        if (this.alunos.length === 0) {
            console.log("A fila externa está vazia.");
            return undefined;
        }
        const alunoRemovido = this.alunos.shift(); // Remove o primeiro aluno da fila
        if (alunoRemovido) {
            console.log(`Aluno ${alunoRemovido.getId()} removido da fila externa.`);
            return alunoRemovido;
        }
        return undefined;
    }

    // Método para verificar o tamanho da fila externa
    public getTamanhoFila(): number {
        return this.alunos.length;
    }
}
