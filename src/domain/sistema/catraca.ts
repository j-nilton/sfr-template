import { Aluno } from "./aluno"; // Importando a classe Aluno de aluno.ts

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

    // Verifica se o aluno está presente na catraca
    public verficarSeTemAlguem(aluno: Aluno): boolean {
        return this.alunoAtual !== undefined && this.alunoAtual.getId() === aluno.getId();
    }

    // Adiciona um aluno à catraca
    public adicionarAlunoCatraca(aluno: Aluno): void {
        if (this.alunoAtual === undefined) {
            this.alunoAtual = aluno;
            this.estaOcupada = true;
            console.log(`Aluno ${aluno.getId()} entrou na catraca.`);
        } else {
            console.log(`Catraca já ocupada por outro aluno.`);
        }
    }

    // Registra a entrada do aluno na catraca
    public registrarEntrada(aluno: Aluno): void {
        if (this.alunoAtual === undefined) {
            console.log(`Não há aluno para registrar a entrada.`);
            return;
        }

        if (this.alunoAtual.getId() === aluno.getId()) {
            console.log(`Entrada registrada para o aluno ${aluno.getId()}.`);
        } else {
            console.log(`Aluno ${aluno.getId()} não está na catraca.`);
        }
    }

    // Remove o aluno da catraca
    public removerAlunoCatraca(): Aluno | undefined {
        const alunoRemovido = this.alunoAtual;
        if (this.alunoAtual) {
            console.log(`Aluno ${alunoRemovido.getId()} removido da catraca.`);
            this.alunoAtual = undefined;
            this.estaOcupada = false;
            return alunoRemovido;
        }
        console.log("Nenhum aluno para remover.");
        return undefined;
    }
}
