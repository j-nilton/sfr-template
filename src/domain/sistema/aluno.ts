export class Aluno{
    private id: string; 
    private instanteDeChegada: number; 
    private tempoFilaExterna: number; 
    private tempoNaCatraca: number; 
    private tempoFilaInterna: number; 
    private tempoDeAtendimento: number; 
    private tempoPermanenciaMesa: number; 

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

    public 
    public getTempoPermanenciaMesa() : number {
        return this.tempoPermanenciaMesa; 
    }
    
    
}