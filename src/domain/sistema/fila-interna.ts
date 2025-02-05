import { Aluno } from "./aluno"; // Importando a classe Aluno de aluno.ts

export class FilaInterna {
    private alunos: Aluno[] = [];
    private limiteFilaInterna: number;
    private tamanhoDaFila: number;

    constructor(limiteFilaInterna: number) {
        this.limiteFilaInterna = limiteFilaInterna;
        this.tamanhoDaFila = 0;
    }

    // Getter para alunos
    public getAlunos(): Aluno[] {
        return this.alunos;
    }

    // Setter para alunos
    public setAlunos(alunos: Aluno[]): void {
        this.alunos = alunos;
        this.tamanhoDaFila = alunos.length;
    }

    // Getter para limiteFilaInterna
    public getLimiteFilaInterna(): number {
        return this.limiteFilaInterna;
    }

    // Setter para limiteFilaInterna
    public setLimiteFilaInterna(limite: number): void {
        this.limiteFilaInterna = limite;
    }

    // Getter para tamanhoDaFila
    public getTamanhoFila(): number {
        return this.tamanhoDaFila;
    }

    // Setter para tamanhoDaFila
    public setTamanhoFila(tamanho: number): void {
        this.tamanhoDaFila = tamanho;
    }

    // Adiciona um aluno na fila interna se não ultrapassar o limite
    public adicionarAlunoFilaInterna(aluno: Aluno): boolean {
        if (this.tamanhoDaFila < this.limiteFilaInterna) {
            this.alunos.push(aluno);
            this.tamanhoDaFila++;
            console.log(`Aluno ${aluno.getId()} adicionado à fila interna.`);
            return true;
        } else {
            console.log(`A fila interna está cheia. Não é possível adicionar o aluno ${aluno.getId()}.`);
            return false;
        }
    }

    // Remove o primeiro aluno da fila interna
    public removerAluno(): Aluno {
        if (this.tamanhoDaFila > 0) {
            const alunoRemovido = this.alunos.shift(); // Remove o primeiro aluno da fila
            this.tamanhoDaFila--;
            console.log(`Aluno ${alunoRemovido?.getId()} removido da fila interna.`);
            return alunoRemovido!;
        } else {
            console.log("A fila interna está vazia.");
            throw new Error("Fila interna vazia");
        }
    }
}
