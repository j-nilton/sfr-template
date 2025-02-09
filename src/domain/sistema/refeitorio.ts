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
        filaExterna: FilaExterna,
        catraca: Catraca,
        filaInterna: FilaInterna,
        atendimento: Atendimento,
        mesas: Mesa
    ){
        this.filaExterna = filaExterna; 
        this.catraca = catraca; 
        this.filaInterna = filaInterna; 
        this.atendimento = atendimento; 
        this.mesas = mesas; 
    }

    //Simula a chegada de um aluno na fila externa do refeitório 
    private chegadaAlunoFilaExterna(aluno: Aluno): boolean{
        this.filaExterna.adicionarAlunoFilaExterna(aluno); 
        return true; 
    }

    //Simula a passagem de um aluno da fila externa para a catraca 
    private moverAlunoDaFilaExternaParaCatraca(aluno: Aluno): number{
        let alunoRemovidoFilaExterna = this.filaExterna.removerAluno();
        this.catraca.adicionarAlunoCatraca(alunoRemovidoFilaExterna); 
        return aluno.getTempoFilaExterna(); 
    }

    //Simula a passagem de um aluno da catraca para a fila interna
    private moverAlunoDaCatracaParaFilaInterna(aluno: Aluno): number{
        let alunoRemovidoCatraca = this.catraca.removerAlunoCatraca(); 
        this.filaInterna.adicionarAlunoFilaInterna(alunoRemovidoCatraca); 
        return aluno.getTempoNaCatraca(); 
    }

    //Simula a passagem de um aluno da fila interna para o refetório
    private moverAlunoParaAtendimento(aluno: Aluno): number{
        let alunoRemovidoFilaInterna = this.filaInterna.removerAluno(); 
        this.atendimento.adicionarAlunoAtendimento(alunoRemovidoFilaInterna); 
        return aluno.getTempoFilaInterna(); 
    } 

    //Simula a passagem de um aluno do atendimento para as mesas
    private moverAlunoParaMesa(aluno: Aluno): number{
        let alunoRemovidoAtendimento = this.atendimento.terminarAtendimento(); 
        this.mesas.adicionarAlunoMesa(alunoRemovidoAtendimento); 
        return aluno.getTempoDeAtendimento(); 
    }

    //Simula a finalização do atendimento de um aluno 
    private finalizarAtendimento(aluno: Aluno): Aluno{
        return this.mesas.removerAluno(aluno.getId()); 
    }

    //Verifica se a catraca está vazia
    private catracaEstaVazia(): boolean{
        return this.catraca.getAlunoAtual() === undefined; 
    }

    //Verifica se a fila interna está cheia
    private filaInternaEstaCheia(): boolean{
        return this.filaInterna.getAlunos().length >= this.filaInterna.getLimiteFilaInterna(); 
    }

    //Verifica se o atendimento esta vazio
    private atendimentoEstaVazio(): boolean{
        return this.atendimento.getAlunoAtual() === undefined; 
    }

    //Verifica se todas as mesas não estão lotadas
    private temMesaDisponivel(): boolean{
        return this.mesas.getAlunos().length < this.mesas.getLimite(); 
    }
}