import { Evento } from "./evento";

export class FinalizarAtendimentoAluno extends Evento {
  processarEvento(): void {
    console.log(`Atendimento do aluno finalizado no instante ${this.getTimeStamp()}`);

  }
}