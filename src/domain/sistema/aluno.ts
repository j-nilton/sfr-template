export class Aluno{

    /**
     * Identificador único de um aluno 
     */
    private id: string; 

    /**
     * Instante de chegada do aluno na fila externa
     */
    private instanteDeChegada: number; 

    /**
     * Tempo que o aluno esperou na fila externa 
     */
    private tempoFilaExterna: number; 

    /**
     * Tempo que o aluno esperou na catraca 
     */
    private tempoNaCatraca: number; 

    /**
     * Tempo que o aluno esperou na fila interna
     */
    private tempoFilaInterna: number; 

    /**
     * Tempo que o aluno levou para ser atendido
     */
    private tempoDeAtendimento: number; 

    /**
     * TMPNM (Tempo Médio de Permanência na Mesa).
     */
    private tempoPermanenciaMesa: number; 

    /**
     * Construtor para a classe Aluno 
     * @param id - Identificador único de um aluno 
     */
    constructor(id: string){
        this.id = id;
    }

    public getId(): string{
        return this.id; 
    }

    public getInstanteDeChegada() : number{
        return this.instanteDeChegada; 
    }
 
    public getTempoFilaExterna() : number {
        return this.tempoFilaExterna
    }
    
    public getTempoFilaInterna() : number {
        return this.tempoFilaInterna; 
    }

    public getTempoNaCatraca() : number {
        return this.tempoNaCatraca; 
    }
    
    public getTempoDeAtendimento() : number{
        return this.tempoDeAtendimento; 
    }

    public getTempoPermanenciaMesa() : number {
        return this.tempoPermanenciaMesa; 
    }
    
    
}