import { Aluno } from "../sistema/aluno";
import { Evento }  from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";
import { ChegadaAlunoNaMesa } from "./passarAlunoMesa";
import { Refeitorio } from "../sistema/refeitorio";
import { GaussianRandom, RandomGeneratorI } from "../simulation-engine/util/random-generators";

export class TransicaoAlunoFilaInternaParaMesa extends Evento{
  private aluno : Aluno;

  constructor(timeStamp: number, refeitorio: Refeitorio, maquinaEventos: MaquinaDeEventos,aluno : Aluno){
    super(timeStamp,refeitorio,maquinaEventos);

    this.aluno = aluno;
  }
  
  processarEvento(): void {
    // log
    console.log(`Evento - Transição Atendimento - TransicaoAlunoFilaInternaParaMesa - Aluno - Tempo ${this.getTimeStamp()} segundos`);
      
    //alterar estado do sistema
    this.refeitorio.moverAlunoParaAtendimento();
    const atendimentoEstaVazio = this.refeitorio.atendimentoEstaVazio();
    const tempoAtendimento = this.refeitorio.getAtendimento().getTempoMedioAtendimento();
    
    //agendar novos eventos
    if(atendimentoEstaVazio){

      const sorteador: RandomGeneratorI = new GaussianRandom();

      // Adicionando o tempo gasto no atendimento
      const instanteDaPassagem: number = this.timeStamp + (sorteador.next() * 2 * tempoAtendimento);
      
      // console.log(`ALUNO NA MESA ${this.aluno.getId()} ${instanteDaPassagem - this.timeStamp}`);
      const seguirParaMesa = new ChegadaAlunoNaMesa(instanteDaPassagem,this.refeitorio,this.maquinaEventos, this.aluno);
      this.maquinaEventos.adicionarEvento(seguirParaMesa);
    }
  }
}
