import { Evento } from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";

export class passarAlunoParaCatraca extends Evento {
  processarEvento(): void {
    console.log(`Aluno passou para a catraca no instante ${this.getTimeStamp()}`);

  }
}