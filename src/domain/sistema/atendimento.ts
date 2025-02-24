import { Aluno } from "./aluno"; // Importando a classe Aluno de aluno.ts

export class Atendimento {

    /**
     *Tempo Médio para Servir Comida (TMPSC)
     */
    private tempoMedioAntendimento: number;

    /**
     * Aluno que está sendo atendido 
     */
    private alunoAtual: Aluno | undefined;

    /**
     * 
     * @param tempoMedioAntendimento - Tempo Médio para Servir Comida
     */
    constructor(tempoMedioAntendimento: number) {
        this.tempoMedioAntendimento = tempoMedioAntendimento;
        this.alunoAtual = undefined;
    }

    // Getter e Setter para tempoMedioAntendimento
    public getTempoMedioAtendimento(): number {
        return this.tempoMedioAntendimento;
    }

    public setTempoMedioAtendimento(tempoMedioAntendimento: number): void {
        this.tempoMedioAntendimento = tempoMedioAntendimento;
    }

    // Getter e Setter para alunoAtual
    public getAlunoAtual(): Aluno | undefined {
        return this.alunoAtual;
    }

    public setAlunoAtual(aluno: Aluno | undefined): void {
        this.alunoAtual = aluno;
    }

    // Adiciona um aluno ao atendimento
    public adicionarAlunoAtendimento(aluno: Aluno): void {
        if (aluno !== undefined) {
            throw new Error("Você está tentando adicionar um aluno em um atendimento ocupado");
        }

        this.alunoAtual = aluno;
    }

    // Finaliza o atendimento do aluno, removendo-o dessa etapa
    public terminarAtendimento(): Aluno {
        const alunoRemovido = this.alunoAtual;

        if (alunoRemovido === undefined) {
            throw new Error("Você está tentando remover um aluno de um atendimento que não tem ninguém sendo atendido.");
        }
        this.alunoAtual = undefined;
        return alunoRemovido;
    }
 
    public estaLiberado(): boolean{
        return !this.alunoAtual; 
    }

}
