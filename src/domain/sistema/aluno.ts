export class Aluno {
    private timeStampChegadaFilaExterna: number | undefined;
    private timeStampPassagemFilaExternaCatraca: number | undefined;
    private timeStampPassagemCatracaFilaInterna: number;
    private timeStampPassagemFilaInternaAtendimento: number;
    private timeStampPassagemAtendimentoMesa: number;
    private timeStampSaiDoRefeitorio: number;

    constructor(timeStampSaiDoRefeitorio: number) {
        this.timeStampSaiDoRefeitorio = timeStampSaiDoRefeitorio;
    }

    // Getters e Setters
    public getTimeStampChegadaFilaExterna(): number | undefined {
        return this.timeStampChegadaFilaExterna;
    }

    public setTimeStampChegadaFilaExterna(value: number | undefined): void {
        this.timeStampChegadaFilaExterna = value;
    }

    public getTimeStampPassagemFilaExternaCatraca(): number | undefined {
        return this.timeStampPassagemFilaExternaCatraca;
    }

    public setTimeStampPassagemFilaExternaCatraca(value: number | undefined): void {
        this.timeStampPassagemFilaExternaCatraca = value;
    }

    public getTimeStampPassagemCatracaFilaInterna(): number {
        return this.timeStampPassagemCatracaFilaInterna;
    }

    public setTimeStampPassagemCatracaFilaInterna(value: number): void {
        this.timeStampPassagemCatracaFilaInterna = value;
    }

    public getTimeStampPassagemFilaInternaAtendimento(): number {
        return this.timeStampPassagemFilaInternaAtendimento;
    }

    public setTimeStampPassagemFilaInternaAtendimento(value: number): void {
        this.timeStampPassagemFilaInternaAtendimento = value;
    }

    public getTimeStampPassagemAtendimentoMesa(): number {
        return this.timeStampPassagemAtendimentoMesa;
    }

    public setTimeStampPassagemAtendimentoMesa(value: number): void {
        this.timeStampPassagemAtendimentoMesa = value;
    }

    public getTimeStampSaiDoRefeitorio(): number {
        return this.timeStampSaiDoRefeitorio;
    }

    public setTimeStampSaiDoRefeitorio(value: number): void {
        this.timeStampSaiDoRefeitorio = value;
    }
}
