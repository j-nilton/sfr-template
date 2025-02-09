import { Aluno } from "./aluno"; // Importando a classe Aluno de aluno.ts

export class Atendimento {

    /**
     *Tempo Médio para Servir Comida (TMPSC)
     */
    private tempoMedioServico: number;

    /**
     * Atributo que indica se o atendimento está disponível
     */
    private estaLiberado: boolean;

    /**
     * Aluno que está sendo atendido 
     */
    private alunoAtual: Aluno | undefined;

    /**
     * 
     * @param tempoMedioServico - Tempo Médio para Servir Comida
     */
    constructor(tempoMedioServico: number) {
        this.tempoMedioServico = tempoMedioServico;
        this.estaLiberado = false; 
        this.alunoAtual = undefined;
    }

    // Getter e Setter para tempoMedioServico
    public getTempoMedioServico(): number {
        return this.tempoMedioServico;
    }

    public setTempoMedioServico(tempoMedioServico: number): void {
        this.tempoMedioServico = tempoMedioServico;
    }

    // Getter e Setter para estaLiberado
    public getEstaLiberado(): boolean {
        return this.estaLiberado;
    }

    public setEstaLiberado(estaLiberado: boolean): void {
        this.estaLiberado = estaLiberado;
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
            if(aluno !== undefined){
                throw new Error("Você está tentando adicionar um aluno em um atendimento ocupado"); 
            }
        
        this.alunoAtual = aluno; 
    }

    // Finaliza o atendimento do aluno, removendo-o dessa etapa
    public terminarAtendimento(): Aluno {
        const alunoRemovido = this.getAlunoAtual(); 

        if (alunoRemovido === undefined) {
            throw new Error("Você está tentando remover um aluno de um atendimento que não tem ninguém sendo atendido."); 
        }
        this.alunoAtual = undefined; 
        this.estaLiberado = false; 
        return alunoRemovido; 
}

}
