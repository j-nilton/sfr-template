import { Aluno } from "../sistema/aluno";
import { Refeitorio } from "../sistema/refeitorio";
import { Evento } from "./evento";
import { FinalizarAtendimentoAluno } from "./finalizarAtendimentoAluno";
import { MaquinaDeEventos } from "./maquinaDeEventos";

export class PassarAlunoMesa extends Evento{
  private aluno: Aluno;

  constructor(timeStamp: number, refeitorio: Refeitorio, maquinaEventos: MaquinaDeEventos, aluno: Aluno) {
    super(timeStamp, refeitorio, maquinaEventos);
    this.aluno = aluno;
  }
    processarEvento(): void {
      //log
      console.log(`Aluno passou para a mesa no instante ${this.getTimeStamp()}`);

      // alterar o estado do sistema
      this.refeitorio.finalizarAtendimento(this.aluno);

      // agenda novos eventos
      const instanteFinalizado: number = this.timeStamp + this.aluno.getTempoPermanenciaMesa();
      const finalizarAtendimento = new FinalizarAtendimentoAluno(instanteFinalizado, this.refeitorio, this.maquinaEventos);
      this.maquinaEventos.adicionarEvento(finalizarAtendimento);

  }
}

