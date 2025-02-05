import { Aluno } from "./aluno"; // Importando a classe Aluno de aluno.ts

export class Mesa {
    private limite: number;
    private quantidadeOcupada: number;
    private tempoMedioPermanencia: number;
    private distribuicaoPermanencia: string;

    constructor(limite: number, tempoMedioPermanencia: number, distribuicaoPermanencia: string) {
        this.limite = limite;
        this.quantidadeOcupada = 0;
        this.tempoMedioPermanencia = tempoMedioPermanencia;
        this.distribuicaoPermanencia = distribuicaoPermanencia;
    }

    // Getter para limite
    public getLimite(): number {
        return this.limite;
    }

    // Setter para limite
    public setLimite(limite: number): void {
        this.limite = limite;
    }

    // Getter para quantidadeOcupada
    public getQuantidadeOcupada(): number {
        return this.quantidadeOcupada;
    }

    // Setter para quantidadeOcupada
    public setQuantidadeOcupada(quantidade: number): void {
        this.quantidadeOcupada = quantidade;
    }

    // Getter para tempoMedioPermanencia
    public getTempoMedioPermanencia(): number {
        return this.tempoMedioPermanencia;
    }

    // Setter para tempoMedioPermanencia
    public setTempoMedioPermanencia(tempo: number): void {
        this.tempoMedioPermanencia = tempo;
    }

    // Getter para distribuicaoPermanencia
    public getDistribuicaoPermanencia(): string {
        return this.distribuicaoPermanencia;
    }

    // Setter para distribuicaoPermanencia
    public setDistribuicaoPermanencia(distribuicao: string): void {
        this.distribuicaoPermanencia = distribuicao;
    }

    // Adiciona um aluno à mesa se não ultrapassar o limite
    public adicionarAlunoMesa(aluno: Aluno): boolean {
        if (this.quantidadeOcupada < this.limite) {
            this.quantidadeOcupada++;
            console.log(`Aluno ${aluno.getId()} adicionado à mesa.`);
            return true;
        } else {
            console.log(`A mesa está cheia. Não é possível adicionar o aluno ${aluno.getId()}.`);
            return false;
        }
    }

    // Remove um aluno da mesa
    public removerAluno(): void {
        if (this.quantidadeOcupada > 0) {
            this.quantidadeOcupada--;
            console.log("Um aluno foi removido da mesa.");
        } else {
            console.log("A mesa já está vazia.");
        }
    }
}
