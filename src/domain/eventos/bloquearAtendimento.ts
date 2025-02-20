import { Evento } from "./evento";

export class BloquearAtendimento extends Evento{
    processarEvento (): void{
        console.log(`[${this.getTimeStamp()}]Atendimento bloqueado.`);
    }
}