import { Aluno } from "../sistema/aluno";
import { Refeitorio } from "../sistema/refeitorio";
import { Evento } from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";

export class SairDoRefeitorio extends Evento {
  private aluno: Aluno;

  constructor(timeStamp: number, refeitorio: Refeitorio, maquinaEventos: MaquinaDeEventos, aluno: Aluno) {
    super(timeStamp, refeitorio, maquinaEventos);

    this.aluno = aluno;
  }

  processarEvento(): void {
    // log
    console.log(`Evento - aluno sai do refeitório - Tempo: ${this.getTimeStamp()} segundos`);
  }
}