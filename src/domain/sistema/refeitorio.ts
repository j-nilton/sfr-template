import { Aluno } from "./aluno";
import { Atendimento } from "./atendimento";
import { Catraca } from "./catraca";
import { FilaExterna } from "./fila-externa";
import { FilaInterna } from "./fila-interna";
import { Mesa } from "./mesa";


export class Refeitorio {
    private filaExterna: FilaExterna; 
    private catraca: Catraca
    private filaInterna: FilaInterna
    private atendimento: Atendimento
    private mesas: Mesa[]

    constructor(
        filaExterna: FilaExterna,
        catraca: Catraca,
        filaInterna: FilaInterna,
        atendimento: Atendimento,
        mesas: Mesa[]
    ){
        this.filaExterna = filaExterna; 
        this.catraca = catraca; 
        this.filaInterna = filaInterna; 
        this.atendimento = atendimento; 
        this.mesas = mesas; 
    }

    private iniciarSimulacao(): void{}
    private verificarDisponibilidade(): void{}
}