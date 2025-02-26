import { SimulationResults } from "../data-management/Entities/simulation-results";

export class Observador {
    
    private quantidadeAlunosAtendidos: number; 
    private tamanhoFilaExternaDuranteSimulacao: number[];
    private tamanhoMaximoFilaExterna: number[];
    private tamanhoFilaInternaDuranteSimulacao: number[];
    private tamanhoMaximoFilaInterna: number[];
    private ocupacaoMesasDuranteSimulacao: number[];
    private ocupacaoMaximaMesas: number[];
    private tempoEspera: number; 
    private tempoMaximoEspera: number;
    private tempoDeSimulacao: number;
    private tempoInicioSimulacao: number;
    private tempoFimSimulacao: number | null;

    constructor() {
        this.tamanhoFilaExternaDuranteSimulacao = [];
        this.tamanhoMaximoFilaExterna = [];
        this.tamanhoFilaInternaDuranteSimulacao = [];
        this.tamanhoMaximoFilaInterna = [];
        this.ocupacaoMesasDuranteSimulacao = [];
        this.ocupacaoMaximaMesas = [];
        this.tempoEspera = 0;
        this.tempoDeSimulacao = 0;
        this.tempoInicioSimulacao = performance.now();
        this.tempoFimSimulacao = null;
        this.tempoMaximoEspera = 0;
    }

    public observarAlunosAtendidos() {
        this.quantidadeAlunosAtendidos++; 
    }

    public observarTamanhoFilaExternaDuranteSimulacao(tamanhoFilaExternaDuranteSimulacao: number) {
        this.tamanhoFilaExternaDuranteSimulacao.push(tamanhoFilaExternaDuranteSimulacao);
    }

    public observarTamanhoFilaInternaDuranteSimulacao(tamanhoFilaInternaDuranteSimulacao: number) {
        this.tamanhoFilaInternaDuranteSimulacao.push(tamanhoFilaInternaDuranteSimulacao);
    }

    public observarOcupacaoMesasDuranteSimulacao(ocupacaoMesasDuranteSimulacao: number) {
        this.ocupacaoMesasDuranteSimulacao.push(ocupacaoMesasDuranteSimulacao);
    }

    public observarTempoEspera(tempoEspera: number) {
        this.tempoEspera += tempoEspera;
        if (tempoEspera > this.tempoMaximoEspera) {
            this.tempoMaximoEspera = tempoEspera;
        }
    }

    public finalizarSimulacao(tempoDeSimulacao: number) {
        this.tempoFimSimulacao = performance.now();
        this.tempoDeSimulacao = tempoDeSimulacao;
    }

    public computarResultados(): SimulationResults {  
        let tamanhoMedioFilaExterna = this.tamanhoFilaExternaDuranteSimulacao.reduce((a, b) => a + b, 0) / this.tamanhoFilaExternaDuranteSimulacao.length;
        let tamanhoMaximoFilaExterna = Math.max(...this.tamanhoMaximoFilaExterna);
        let tamanhoMedioFilaInterna = this.tamanhoFilaInternaDuranteSimulacao.reduce((a, b) => a + b, 0) / this.tamanhoFilaInternaDuranteSimulacao.length;
        let tamanhoMaximoFilaInterna = Math.max(...this.tamanhoMaximoFilaInterna);
        let ocupacaoMediaMesas = this.ocupacaoMesasDuranteSimulacao.reduce((a, b) => a + b, 0) / this.ocupacaoMesasDuranteSimulacao.length;
        let ocupacaoMaximaMesas = Math.max(...this.ocupacaoMaximaMesas);
        let tempoRealDeSimulacao = this.tempoFimSimulacao ? (this.tempoFimSimulacao - this.tempoInicioSimulacao) / 1000 : 0;
        tempoRealDeSimulacao = tempoRealDeSimulacao < 60 ? tempoRealDeSimulacao : tempoRealDeSimulacao / 60; // Converte para minutos se necessário
        let tempoMaximoEspera = this.tempoMaximoEspera;
        let tempoDeSimulacao = this.tempoDeSimulacao; 

        return new SimulationResults(
            tamanhoMedioFilaInterna,
            tamanhoMedioFilaExterna, 
            ocupacaoMediaMesas,
            tempoMaximoEspera, 
            tamanhoMaximoFilaExterna, 
            tamanhoMaximoFilaInterna, 
            ocupacaoMaximaMesas,
            tempoDeSimulacao,
            tempoRealDeSimulacao

        )
    }
}
