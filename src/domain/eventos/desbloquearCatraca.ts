import { Evento } from "./evento";

export class desbloquearCatraca extends Evento {
  processarEvento(): void {
    console.log(`[${this.getTimeStamp()}] Catraca foi desbloqueada.`);
  }
}