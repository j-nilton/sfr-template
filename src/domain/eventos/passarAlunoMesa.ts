import { GaussianRandom, RandomGeneratorI } from "../simulation-engine/util/random-generators";
import { Aluno } from "../sistema/aluno";
import { Refeitorio } from "../sistema/refeitorio";
import { Evento } from "./evento";
import { TransicaoAlunoDeMesaParaForaDoRefeitorio } from "./finalizarAtendimentoAluno";
import { MaquinaDeEventos } from "./maquinaDeEventos";
import { TransicaoAlunoFilaInternaParaMesa } from "./chegadaAlunoAtendimento";
import { DesbloquearCatraca } from "./desbloquearCatraca";

export class ChegadaAlunoNaMesa extends Evento{
  private aluno: Aluno;

  constructor(timeStamp: number, refeitorio: Refeitorio, maquinaEventos: MaquinaDeEventos, aluno: Aluno) {
    super(timeStamp, refeitorio, maquinaEventos);
    this.aluno = aluno;
  }
    processarEvento(): void {
      // Log
      console.log(`Evento - Momento de Chegada - ChegadaAlunoNaMesa - Aluno - Tempo ${this.getTimeStamp()} segundos`);

      // Alterar o estado do sistema
      this.refeitorio.moverAlunoParaMesa();

      if(this.refeitorio.getAtendimento().estaLiberado()) {
        const novaTransicaoAlunoFilaExternaParaInterna = new TransicaoAlunoFilaInternaParaMesa(this.timeStamp, this.refeitorio, this.maquinaEventos, this.refeitorio.getFilaInterna().getAlunos()[0]);
        this.maquinaEventos.adicionarEvento(novaTransicaoAlunoFilaExternaParaInterna);
     }
  
      // Agenda novos eventos
      const finalizarAtendimento = new TransicaoAlunoDeMesaParaForaDoRefeitorio(this.timeStamp, this.refeitorio, this.maquinaEventos, this.aluno);
      this.maquinaEventos.adicionarEvento(finalizarAtendimento);

      
  }
}

