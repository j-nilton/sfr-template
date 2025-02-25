import { Aluno } from "../sistema/aluno";
import { Evento } from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";
import { PassarAlunoMesa } from "./passarAlunoMesa";
import { Refeitorio } from "../sistema/refeitorio";
import { GaussianRandom, RandomGeneratorI } from "../simulation-engine/util/random-generators";

export class ChegadaAlunoAtendimento extends Evento {
  private aluno: Aluno;

  constructor(timeStamp: number, refeitorio: Refeitorio, maquinaEventos: MaquinaDeEventos, aluno: Aluno) {
    super(timeStamp, refeitorio, maquinaEventos);

    this.aluno = aluno;
  }

  processarEvento(): void {
    // log
    console.log(`Evento - Transição Atendimento - TransicaoAlunoFilaInternaParaMesa - Aluno ${this.aluno.getId()} - Tempo ${this.getTimeStamp()} segundos`);

    //alterar estado do sistema
    const atendimentoEstaVazio = !this.refeitorio.atendimentoEstaVazio();

    //agendar novos eventos
    if (atendimentoEstaVazio) {
      this.refeitorio.moverAlunoParaMesa();

      const sorteador: RandomGeneratorI = new GaussianRandom();

      // Adicionando o tempo gasto no atendiemnto
      const instanteDaPassagem: number = this.timeStamp + (sorteador.next() * 2 * this.refeitorio.getAtendimento().getTempoMedioAtendimento());

      const seguirParaMesa = new PassarAlunoMesa(instanteDaPassagem, this.refeitorio, this.maquinaEventos, this.aluno);
      this.maquinaEventos.adicionarEvento(seguirParaMesa);
    }
  }
}
