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

    // Verifica se o aluno está sendo atendido
    public verificaSeTemAlguem(aluno: Aluno): boolean {
        return this.alunoAtual !== undefined && this.alunoAtual.getId() === aluno.getId();
    }

    // Adiciona um aluno ao atendimento
    public adicionarAlunoAtendimento(aluno: Aluno): void {
        if (!this.alunoAtual) {
            this.alunoAtual = aluno;
            console.log(`Aluno ${aluno.getId()} adicionado ao atendimento.`);
        } else {
            console.log(`Já existe um aluno sendo atendido. Não é possível adicionar outro aluno.`);
        }
    }

    // Realiza o atendimento do aluno
    public atenderAluno(aluno: Aluno): void {
        if (this.alunoAtual && this.alunoAtual.getId() === aluno.getId()) {
            console.log(`Iniciando atendimento do aluno ${aluno.getId()}...`);
            // A simulação do tempo de serviço pode ser feita aqui (com base na distribuição de serviço)
            console.log(`Atendimento finalizado para o aluno ${aluno.getId()}.`);
            this.alunoAtual = undefined; // Após o atendimento, o aluno sai
            this.estaLiberado = true; // O atendimento foi liberado
        } else {
            console.log(`Nenhum aluno encontrado para atendimento ou aluno não está na fila.`);
        }
    }

    // Método para verificar se o atendimento está liberado
    public taLiberado(): boolean {
        return this.estaLiberado;
    }
}
