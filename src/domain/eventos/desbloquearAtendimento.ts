import { Evento } from "./evento";

export class desbloquearAtendimento extends Evento {
  processarEvento(): void {
    console.log(`[${this.getTimeStamp()}] O atendimento foi desbloqueado.`);
  }
}