import { Evento } from "./evento";

export class bloquearAtendimento extends Evento{
    processarEvento (): void{
        console.log(`[${this.getTimeStamp()}]Atendimento bloqueado.`)
    }
}