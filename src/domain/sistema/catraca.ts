import { Aluno } from "./aluno"; 
import { FilaInterna } from "./fila-interna";

export class Catraca {
    private alunoAtual: Aluno | undefined;
    private tempoDePermanencia: number;
    private limiteFilaInterna: number;
    private quantidadeDeAlunosParaLiberar: number;
    private bloqueio: boolean;
    private estaOcupada: boolean;

    constructor(limiteFilaInterna: number, quantidadeDeAlunosParaLiberar: number, tempoDePermanencia: number) {
        this.limiteFilaInterna = limiteFilaInterna;
        this.quantidadeDeAlunosParaLiberar = quantidadeDeAlunosParaLiberar;
        this.tempoDePermanencia = tempoDePermanencia;
        this.bloqueio = false;
        this.estaOcupada = false;
        this.alunoAtual = undefined;
    }

    // Getter e Setter para alunoAtual
    public getAlunoAtual(): Aluno | undefined {
        return this.alunoAtual;
    }

    public setAlunoAtual(aluno: Aluno | undefined): void {
        this.alunoAtual = aluno;
    }

    // Getter e Setter para tempoDePermanencia
    public getTempoDePermanencia(): number {
        return this.tempoDePermanencia;
    }

    public setTempoDePermanencia(tempo: number): void {
        this.tempoDePermanencia = tempo;
    }

    // Getter e Setter para limiteFilaInterna
    public getLimiteFilaInterna(): number {
        return this.limiteFilaInterna;
    }

    public setLimiteFilaInterna(limite: number): void {
        this.limiteFilaInterna = limite;
    }

    // Getter e Setter para quantidadeDeAlunosParaLiberar
    public getQuantidadeDeAlunosParaLiberar(): number {
        return this.quantidadeDeAlunosParaLiberar;
    }

    public setQuantidadeDeAlunosParaLiberar(quantidade: number): void {
        this.quantidadeDeAlunosParaLiberar = quantidade;
    }

    // Getter e Setter para bloqueio
    public getBloqueio(): boolean {
        return this.bloqueio;
    }

    public setBloqueio(bloqueio: boolean): void {
        this.bloqueio = bloqueio;
    }

    // Getter e Setter para estaOcupada
    public getEstaOcupada(): boolean {
        return this.estaOcupada;
    }

    public setEstaOcupada(ocupada: boolean): void {
        this.estaOcupada = ocupada;
    }

    // Adiciona um aluno à catraca
    public adicionarAlunoCatraca(aluno: Aluno): void {
        if(aluno !== undefined){
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
        this.estaOcupada = false;
        return alunoRemovido;
    }                                                                                 
}
