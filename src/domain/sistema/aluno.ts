export class Aluno {
    private horaChegada: number;
    private tempoNaMesa: number; 
    private tempoNaCatraca: number; 
    private horaSaida: number;

    constructor(horaSaida: number) {
        this.horaSaida = horaSaida;
    }

    public getHoraChegada(): number{
        return this.horaChegada; 
    }

    public setHoraChegada(horaChegada: number){
        this.horaChegada = horaChegada; 
    }

    public getTempoNaMesa(): number{
        return this.tempoNaMesa; 
    }

    public setTempoNaMesa(tempoNaMesa: number){
        this.tempoNaMesa = tempoNaMesa; 
    }

    public getTempoNaCatraca(): number{
        return this.tempoNaCatraca;
    }

    public setTempoNaCatraca(tempoNaCatraca: number){
        this.tempoNaCatraca = tempoNaCatraca; 
    }

    public getHoraSaida(): number{
        return this.tempoNaCatraca;
    }

    public setHoraSaida(horaSaida: number){
        this.horaSaida = horaSaida; 
    }

    public calcularEspera(): number{
        if(!this.horaChegada || !this.horaSaida){
            throw new Error("Impossível calcular o tempo de espera de um aluno que não chegou ou não foi atendido");
        }
        return this.horaSaida - this.horaChegada; 
    }
}
