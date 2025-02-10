import { Evento } from "./evento";

export class BloquearCatraca extends Evento {
  processarEvento(): void {
    console.log(`[${this.getTimeStamp()}] Catraca bloqueada.`);
  }
}