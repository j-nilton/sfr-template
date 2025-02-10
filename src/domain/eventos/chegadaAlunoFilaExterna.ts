import { Evento } from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";

export class chegadaAlunoFilaExterna extends Evento {
  processarEvento(): void {
    console.log(`Aluno chegou à fila externa no instante ${this.getTimeStamp()}`);
  }
}