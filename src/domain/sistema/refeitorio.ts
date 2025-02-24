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
        limiteFilaInterna: number,
        tempoMedioAtendimento: number,
        limiteMesa: number, 
        quantidadeAlunosLiberarCatraca: number, 
        tempoMedioDigitarMatricula: number
    ){ 
        this.filaExterna = new FilaExterna(); 
        this.catraca = new Catraca(quantidadeAlunosLiberarCatraca, tempoMedioDigitarMatricula); 
        this.filaInterna = new FilaInterna(limiteFilaInterna);  
        this.atendimento = new Atendimento(tempoMedioAtendimento); 
        this.mesas = new Mesa(limiteMesa); 
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

    // Mover aluno da fila externa para a catraca
    public moverAlunoDaFilaExternaParaCatraca(): number {
        const aluno = this.filaExterna.removerAluno();
        this.catraca.adicionarAlunoCatraca(aluno);
        return this.catraca.getTempoMedioDigitarMatricula();
    }

    //Método para mover um aluno da catraca para a fila interna
    public moverAlunoDaCatracaParaFilaInterna(): Aluno {
        const aluno = this.catraca.removerAlunoCatraca(); 
        this.filaInterna.adicionarAlunoFilaInterna(aluno); 
        return aluno; 
    }

    //Método para mover um aluno da fila interna para o atendimento 
    public moverAlunoParaAtendimento(): Aluno {
        const aluno = this.filaInterna.removerAlunoFilaInterna(); 
        this.atendimento.adicionarAlunoAtendimento(aluno); 
        return aluno; 
    } 

    //Método para mover um aluno do atendimento para as mesas
    public moverAlunoParaMesa(): number {
         const aluno = this.atendimento.terminarAtendimento(); 
         this.mesas.adicionarAlunoMesa(aluno); 
         return this.atendimento.getTempoMedioAtendimento(); 
    }

    // Método para retirar um aluno do refeitório 
    public retirarAlunoMesa(aluno: Aluno): Aluno{
        return this.mesas.removerAlunoMesa(aluno); 
    }

    // Métodos para verificar estados das filas e atendimento
    public catracaEstaVazia(): boolean{
        return !this.catraca.getAlunoAtual();
    }

    public filaInternaEstaCheia(): boolean{
        return this.filaInterna.getAlunos().length == this.filaInterna.getLimiteFilaInterna(); 
    }

    public atendimentoEstaVazio(): boolean{
        return !this.atendimento.getAlunoAtual();
    }

    public temMesaDisponivel(): boolean{
        return this.mesas.getAlunos().length < this.mesas.getLimiteMesa(); 
    }

    public filaExternaEstaVazia(): boolean{
        return this.filaExterna.getAlunos().length === 0; 
    }
}
