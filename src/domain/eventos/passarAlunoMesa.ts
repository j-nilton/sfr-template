import { Evento } from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";

export class passarAlunoMesa extends Evento{
    processarEvento(): void {
    console.log(`Aluno passou para a mesa no instante ${this.getTimeStamp()}`);

  }
}

