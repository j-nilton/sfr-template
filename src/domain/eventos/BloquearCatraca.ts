import { Refeitorio } from "../sistema/refeitorio";
import { Evento } from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";

export class BloquearCatraca extends Evento {

  constructor(timeStamp: number, refeitorio: Refeitorio, maquinaEventos: MaquinaDeEventos){
    super(timeStamp,refeitorio,maquinaEventos);
  }

  processarEvento(): void {
    // Log
    console.log(`[${this.getTimeStamp()}] CATRACA ESTA BLOQUEADA E PRECISA SER DESBLOQUEADA.`);

    // alterar o estado do sistema
    this.refeitorio.getCatraca().setBloqueada(true);

  }

  
}