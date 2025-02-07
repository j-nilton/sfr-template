import { Aluno } from "./aluno"; // Importando a classe Aluno de aluno.ts

export class Atendimento {
    private tempoMedioServico: number;
    private distribuicaoServico: string;
    private estaLiberado: boolean;
    private alunoAtual: Aluno | undefined;

    constructor(tempoMedioServico: number, distribuicaoServico: string) {
        this.tempoMedioServico = tempoMedioServico;
        this.distribuicaoServico = distribuicaoServico;
        this.estaLiberado = false; // Inicialmente, o atendimento não está liberado
        this.alunoAtual = undefined;
    }

    // Getter e Setter para tempoMedioServico
    public getTempoMedioServico(): number {
        return this.tempoMedioServico;
    }

    public setTempoMedioServico(tempoMedioServico: number): void {
        this.tempoMedioServico = tempoMedioServico;
    }

    // Getter e Setter para distribuicaoServico
    public getDistribuicaoServico(): string {
        return this.distribuicaoServico;
    }

    public setDistribuicaoServico(distribuicaoServico: string): void {
        this.distribuicaoServico = distribuicaoServico;
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

    // Finaliza o atendimento do aluno, removendo-o
    public removerAluno(aluno: Aluno): void {
        if(this.getAlunoAtual === undefined){
            throw new Error("Você está tentando remover um aluno de um lugar vazio"); 
        }
        this.alunoAtual = undefined; 
        this.estaLiberado = false; 
    }
}
