import { GaussianRandom, RandomGeneratorI } from "../simulation-engine/util/random-generators";
import { Aluno } from "../sistema/aluno";
import { Refeitorio } from "../sistema/refeitorio";
import { BloquearAtendimento } from "./bloquearAtendimento";
import { ChegadaAlunoAtendimento } from "./chegadaAlunoAtendimento";
import { DesbloquearAtendimento } from "./desbloquearAtendimento";
import { Evento } from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";

export class PassarAlunoFilaInterna extends Evento {
  private aluno: Aluno;

  constructor(timeStamp: number, refeitorio: Refeitorio, maquinaEventos: MaquinaDeEventos, aluno: Aluno) {
    super(timeStamp, refeitorio, maquinaEventos);
    this.aluno = aluno;
  }

  processarEvento(): void {
    // Log do evento
    console.log(`Evento - aluno chega na fila interna - Tempo ${this.getTimeStamp()} segundos`);

    // Verificação de estado do sistema
    const mesasDisponiveis: boolean = this.refeitorio.temMesaDisponivel();
    const atendimentoBloqueado: boolean = !this.refeitorio.getAtendimento().estaLiberado();

    // Agendamento de eventos
    if (mesasDisponiveis) {

      if (atendimentoBloqueado) {
        console.log(`Evento - DesbloquearAtendimento - ${this.getTimeStamp()}`);
        const desbloquearAtendimento = new DesbloquearAtendimento(this.timeStamp, this.refeitorio, this.maquinaEventos);
        this.maquinaEventos.adicionarEvento(desbloquearAtendimento);
      }

      this.refeitorio.moverAlunoParaAtendimento();

      // const sorteador: RandomGeneratorI = new GaussianRandom();

      // // Adicionando o tempo gasto no atendiemnto
      // const instanteDaPassagem: number = this.timeStamp + (sorteador.next() * 2 * this.refeitorio.getAtendimento().getTempoMedioAtendimento());

      const alunoVaiParaAtendimento = new ChegadaAlunoAtendimento(this.timeStamp, this.refeitorio, this.maquinaEventos, this.aluno);
      this.maquinaEventos.adicionarEvento(alunoVaiParaAtendimento);

    } else {
      // Se não há mesas disponíveis, bloquear o atendimento se ainda não estiver bloqueado
      if (!atendimentoBloqueado) {
        console.log(`Evento - BloquearCatraca - ${this.getTimeStamp()}`);
        const instanteFinalizado: number = this.timeStamp;
        const bloquearAtendimento = new BloquearAtendimento(instanteFinalizado, this.refeitorio, this.maquinaEventos);
        this.maquinaEventos.adicionarEvento(bloquearAtendimento);
      }
    }
  }
}

