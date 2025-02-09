import { Refeitorio } from "../sistema/refeitorio";
import { MaquinaDeEventos } from "./maquinaDeEventos";

export abstract class Evento {
    protected timeStamp: number;
    protected refeitorio: Refeitorio;
    protected maquinaEventos: MaquinaDeEventos;

    constructor(timeStamp: number, refeitorio: Refeitorio, maquinaEventos: MaquinaDeEventos) {
        this.timeStamp = timeStamp;
        this.refeitorio = refeitorio;
        this.maquinaEventos = maquinaEventos;
    }

    public getTimeStamp(): number {
        return this.timeStamp;
    }

    abstract processarEvento(): void;
}
