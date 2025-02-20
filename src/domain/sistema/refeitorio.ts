import { Aluno } from "./aluno";
import { Atendimento } from "./atendimento";
import { Catraca } from "./catraca";
import { FilaExterna } from "./fila-externa";
import { FilaInterna } from "./fila-interna";
import { Mesa } from "./mesa";

export class Refeitorio {

    /**
     * Fila externa do refeitório 
     */
    private filaExterna: FilaExterna; 

    /** 
     * Catraca do refeitório 
     */
    private catraca: Catraca;

    /**
     * Fila interna do refeitório 
     */
    private filaInterna: FilaInterna;

    /**
     * Atendimento do do refeitório 
     */
    private atendimento: Atendimento;

    /**
     * Lugares para sentar e comer do refeitório 
     */
    private mesas: Mesa;


    /**
     * Construtor da classe Refeitorio
     */
    constructor(
        tamanhoFilaExterna: number, 
        alunoNaCatraca?: number, 
        tamanhoFilaInterna: number, 
        alunoNoAtendimento?: number,
        alunosNaMesa: Aluno[]
    ){
        this.filaExterna = new FilaExterna()
    }

    // Getters e Setters

    // Getter e Setter para filaExterna
    public getFilaExterna(): FilaExterna {
        return this.filaExterna;
    }

    public setFilaExterna(filaExterna: FilaExterna): void {
        this.filaExterna = filaExterna;
    }

    // Getter e Setter para catraca
    public getCatraca(): Catraca {
        return this.catraca;
    }

    public setCatraca(catraca: Catraca): void {
        this.catraca = catraca;
    }

    // Getter e Setter para filaInterna
    public getFilaInterna(): FilaInterna {
        return this.filaInterna;
    }

    public setFilaInterna(filaInterna: FilaInterna): void {
        this.filaInterna = filaInterna;
    }

    // Getter e Setter para atendimento
    public getAtendimento(): Atendimento {
        return this.atendimento;
    }

    public setAtendimento(atendimento: Atendimento): void {
        this.atendimento = atendimento;
    }

    // Getter e Setter para mesas
    public getMesas(): Mesa {
        return this.mesas;
    }

    public setMesas(mesas: Mesa): void {
        this.mesas = mesas;
    }

    // Método para simular a chegada de um aluno na fila externa
    public chegadaAlunoFilaExterna(aluno: Aluno): boolean{
        this.filaExterna.adicionarAlunoFilaExterna(aluno); 
        return true; 
    }

    // Simulação de movimentação entre filas
    public moverAlunoDaFilaExternaParaCatraca(aluno: Aluno): number {
        let alunoRemovidoFilaExterna = this.filaExterna.removerAluno();
        this.catraca.adicionarAlunoCatraca(alunoRemovidoFilaExterna); 
        return aluno.getTimeStampPassagemFilaExternaCatraca(); 
    }

    public moverAlunoDaCatracaParaFilaInterna(aluno: Aluno): number {
        let alunoRemovidoCatraca = this.catraca.removerAlunoCatraca(); 
        this.filaInterna.adicionarAlunoFilaInterna(alunoRemovidoCatraca); 
        return aluno.getTimeStampPassagemCatracaFilaInterna(); 
    }

    public moverAlunoParaAtendimento(aluno: Aluno): number {
        let alunoRemovidoFilaInterna = this.filaInterna.removerAluno(); 
        this.atendimento.adicionarAlunoAtendimento(alunoRemovidoFilaInterna); 
        return aluno.getTimeStampPassagemFilaInternaAtendimento(); 
    } 

    public moverAlunoParaMesa(aluno: Aluno): number {
        let alunoRemovidoAtendimento = this.atendimento.terminarAtendimento(); 
        this.mesas.adicionarAlunoMesa(alunoRemovidoAtendimento); 
        return aluno.getTimeStampPassagemAtendimentoMesa(); 
    }

    // Método para finalizar o atendimento de um aluno 
    public finalizarAtendimento(aluno: Aluno): Aluno{
        return this.mesas.removerAluno(aluno); 
    }

    // Métodos para verificar estados das filas e atendimento
    public catracaEstaVazia(): boolean{
        return this.catraca.getAlunoAtual() === undefined; 
    }

    public filaInternaEstaCheia(): boolean{
        return this.filaInterna.getAlunos().length >= this.filaInterna.getLimiteFilaInterna(); 
    }

    public atendimentoEstaVazio(): boolean{
        return this.atendimento.getAlunoAtual() === undefined; 
    }

    public temMesaDisponivel(): boolean{
        return this.mesas.getAlunos().length < this.mesas.getLimite(); 
    }

    public filaExternaEstaVazia(): boolean{
        return this.filaExterna.getAlunos().length === 0; 
    }
}
