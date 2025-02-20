import { Evento } from "./evento";

export class DesbloquearAtendimento extends Evento {
processarEvento(): void {
    console.log(`[${this.getTimeStamp()}] O atendimento foi desbloqueado.`);
  }
}