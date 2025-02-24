import { Aluno } from "./aluno"; 
export class Catraca {

    /**
     * Aluno que está usando a catraca no momento  
     */
    private alunoAtual: Aluno | undefined;

    /**
     * TTMDM (Tempo Médio para Digitar Matrícula).
     */
    private tempoMedioDigitarMatricula: number;

    /**
     * Numero mínimo de alunos para a catraca ser liberada após ser bloqueada por excesso de alunos na fila interna
     */
    private quantidadeDeAlunosParaLiberar: number;

    /**
     * Significa se a catraca está liberada ou não 
     */
    private bloqueada: boolean;

    /**
     * Construtor para a classe Catraca
     * @param quantidadeDeAlunosParaLiberar - Quantidade máxima de alunos que podem estar na fila interna para liberar a catraca depois de ter sido bloqueada
     * @param tempoMedioDigitarMatricula - TMDM (Tempo Médio para Digitar Matrícula).
     */
    constructor(quantidadeDeAlunosParaLiberar: number, tempoMedioDigitarMatricula: number) {
        this.quantidadeDeAlunosParaLiberar = quantidadeDeAlunosParaLiberar;
        this.tempoMedioDigitarMatricula = tempoMedioDigitarMatricula;
        this.bloqueada = false;
        this.alunoAtual = undefined;
    }

    // Getter e Setter para alunoAtual
    public getAlunoAtual(): Aluno | undefined {
        return this.alunoAtual;
    }

    public setAlunoAtual(aluno: Aluno | undefined): void {
        this.alunoAtual = aluno;
    }

    // Getter e Setter para tempoMedioDigitarMatricula
    public getTempoMedioDigitarMatricula(): number {
        return this.tempoMedioDigitarMatricula;
    }

    public setTempoMedioDigitarMatricula(tempo: number): void {
        this.tempoMedioDigitarMatricula = tempo;
    }

    // Getter e Setter para quantidadeDeAlunosParaLiberar
    public getQuantidadeDeAlunosParaLiberar(): number {
        return this.quantidadeDeAlunosParaLiberar;
    }

    public setQuantidadeDeAlunosParaLiberar(quantidade: number): void {
        this.quantidadeDeAlunosParaLiberar = quantidade;
    }

    // Getter e Setter para bloqueio
    public getBloqueada(): boolean {
        return this.bloqueada;
    }

    public setBloqueada(bloqueada : boolean): void {
        this.bloqueada = bloqueada;
    }

    // Adiciona um aluno à catraca
    public adicionarAlunoCatraca(aluno: Aluno): void {
        if(this.alunoAtual !== undefined){
            throw new Error("Você está tentando adicionar um aluno em uma catraca ocupada!"); 
        }
        this.alunoAtual = aluno; 
    }

    // Remove o aluno da catraca
    public removerAlunoCatraca(): Aluno | undefined {
       if(this.alunoAtual === undefined){
        throw new Error("Você está tentando remover um aluno de uma catraca vazia!"); 
       }
        let alunoRemovido = this.alunoAtual; 
        this.alunoAtual = undefined;
        return alunoRemovido;
    }                   
    
    public estaBloqueada(): boolean{
        return this.bloqueada; 
    }
}
