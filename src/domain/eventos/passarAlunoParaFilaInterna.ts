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
    console.log(`Aluno passou para a fila interna no instante ${this.getTimeStamp()}`);

    // Verificação de estado do sistema
    const mesasDisponiveis: boolean = this.refeitorio.temMesaDisponivel();
    const tempoFilaInterna: number = this.refeitorio.moverAlunoParaAtendimento(this.aluno);
    const atendimentoBloqueado: boolean = !this.refeitorio.getAtendimento().getEstaLiberado();

    // Agendamento de eventos
    if (mesasDisponiveis) {
      const instanteLiberado: number = this.timeStamp + tempoFilaInterna;
      
      if (atendimentoBloqueado) {
        const desbloquearAtendimento = new DesbloquearAtendimento(instanteLiberado, this.refeitorio, this.maquinaEventos);
        this.maquinaEventos.adicionarEvento(desbloquearAtendimento);
      }
      
      const alunoVaiParaAtendimento = new ChegadaAlunoAtendimento(instanteLiberado, this.refeitorio, this.maquinaEventos, this.aluno);
      this.maquinaEventos.adicionarEvento(alunoVaiParaAtendimento);
    } else {
      // Se não há mesas disponíveis, bloquear o atendimento se ainda não estiver bloqueado
      if (!atendimentoBloqueado) {
        this.refeitorio.getAtendimento().setEstaLiberado(false);
        const instanteFinalizado: number = this.timeStamp + tempoFilaInterna;
        const bloquearAtendimento = new BloquearAtendimento(instanteFinalizado, this.refeitorio, this.maquinaEventos);
        this.maquinaEventos.adicionarEvento(bloquearAtendimento);
      }
    }
  }
}

    