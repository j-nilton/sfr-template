import { Evento } from "./evento";

export class DesbloquearCatraca extends Evento {
  processarEvento(): void {
    console.log(`[${this.getTimeStamp()}] Catraca foi desbloqueada.`);
  }
}