import { GaussianRandom, RandomGeneratorI } from "../simulation-engine/util/random-generators";
import { Aluno } from "../sistema/aluno";
import { Refeitorio } from "../sistema/refeitorio";
import { BloquearAtendimento } from "./bloquearAtendimento";
import { TransicaoAlunoFilaInternaParaMesa } from "./chegadaAlunoAtendimento";
import { DesbloquearAtendimento } from "./desbloquearAtendimento";
import { Evento } from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";
import { TransicaoAlunoFilaExternaParaFilaInterna } from "./passarAlunoParaCatraca";

export class ChegadaAlunoNaFilaInterna extends Evento {
  private aluno: Aluno;

  constructor(timeStamp: number, refeitorio: Refeitorio, maquinaEventos: MaquinaDeEventos, aluno: Aluno) {
    super(timeStamp, refeitorio, maquinaEventos);
    this.aluno = aluno;
  }

  processarEvento(): void {
    // Log do evento
    console.log(`Evento - Momento de Chegada - ChegadaAlunoNaFilaInterna - Aluno  - Tempo ${this.getTimeStamp()} segundos`);

    // Alterar o estado do sistema
    const moveuAlunoCatraParaFilaInterna = this.refeitorio.moverAlunoDaCatracaParaFilaInterna();
    const mesasDisponiveis: boolean = this.refeitorio.temMesaDisponivel();

    // Agendamento de eventos
    console.log(!this.refeitorio.filaExternaEstaVazia(), moveuAlunoCatraParaFilaInterna)
    if(!this.refeitorio.filaExternaEstaVazia() && moveuAlunoCatraParaFilaInterna) {
      const novaTransicaoAlunoFilaExternaParaInterna = new TransicaoAlunoFilaExternaParaFilaInterna(this.timeStamp, this.refeitorio, this.maquinaEventos, this.refeitorio.getFilaExterna().getAlunos()[0]);
      this.maquinaEventos.adicionarEvento(novaTransicaoAlunoFilaExternaParaInterna);
    }

    if (mesasDisponiveis) {
      
      // if (!atendimentoEstaLiberado) {
      //   console.log(`Evento - DesbloquearAtendimento - ${this.getTimeStamp()}`);
      //   const desbloquearAtendimento = new DesbloquearAtendimento(this.timeStamp, this.refeitorio, this.maquinaEventos);
      //   this.maquinaEventos.adicionarEvento(desbloquearAtendimento);
      // }

      const alunoVaiParaAtendimento = new TransicaoAlunoFilaInternaParaMesa(this.timeStamp, this.refeitorio, this.maquinaEventos, this.aluno);
      this.maquinaEventos.adicionarEvento(alunoVaiParaAtendimento);

    } 
    // else {
    //   console.log(`Evento - BloquearAtendimento - ${this.getTimeStamp()}`);
    //   const bloquearAtendimento = new BloquearAtendimento(this.timeStamp, this.refeitorio, this.maquinaEventos);
    //   this.maquinaEventos.adicionarEvento(bloquearAtendimento);
    // }
  }
}

    