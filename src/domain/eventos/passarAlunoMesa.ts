import { GaussianRandom, RandomGeneratorI } from "../simulation-engine/util/random-generators";
import { Aluno } from "../sistema/aluno";
import { Refeitorio } from "../sistema/refeitorio";
import { Evento } from "./evento";
import { FinalizarAtendimentoAluno } from "./finalizarAtendimentoAluno";
import { MaquinaDeEventos } from "./maquinaDeEventos";

export class PassarAlunoMesa extends Evento {
  private aluno: Aluno;

  constructor(timeStamp: number, refeitorio: Refeitorio, maquinaEventos: MaquinaDeEventos, aluno: Aluno) {
    super(timeStamp, refeitorio, maquinaEventos);
    this.aluno = aluno;
  }
  processarEvento(): void {
    //log
    console.log(`Evento - Momento de Chegada - ChegadaAlunoNaMesa - Aluno ${this.aluno.getId()} - Tempo ${this.getTimeStamp()} segundos`);

    // alterar o estado do sistema
    this.refeitorio.retirarAlunoMesa(this.aluno);

    // agenda novos eventos

    // const sorteador: RandomGeneratorI = new GaussianRandom();

    // // Adicionando o tempo gasto no atendiemnto
    // const instanteDaPassagem: number = this.timeStamp + (sorteador.next() * 2 * this.refeitorio.getMesas().getTempoNaMesa());

    const finalizarAtendimento = new FinalizarAtendimentoAluno(this.timeStamp, this.refeitorio, this.maquinaEventos, this.aluno);
    this.maquinaEventos.adicionarEvento(finalizarAtendimento);
  }
}

