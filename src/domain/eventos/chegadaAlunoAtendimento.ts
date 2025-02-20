import { Aluno } from "../sistema/aluno";
import { Evento }  from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";
import { PassarAlunoMesa } from "./passarAlunoMesa";
import { Refeitorio } from "../sistema/refeitorio";

export class ChegadaAlunoAtendimento extends Evento{
  private aluno : Aluno;
  constructor(timeStamp: number, refeitorio: Refeitorio, maquinaEventos: MaquinaDeEventos,aluno : Aluno){
    super(timeStamp,refeitorio,maquinaEventos);

    this.aluno = aluno;
  }
    processarEvento(): void {
      // log
      console.log(`Evento - ChegadaAlunoAtendimento - ${this.getTimeStamp()}`);
      
      //alterar estado do sistema
      const atendimentoEstaVazio = this.refeitorio.atendimentoEstaVazio();
      const moveuAlunoParaAtendimento = this.refeitorio.moverAlunoParaAtendimento(this.aluno);

      //agendar novos eventos
      if(moveuAlunoParaAtendimento && atendimentoEstaVazio){
        const seguirParaMesa = new PassarAlunoMesa(this.timeStamp,this.refeitorio,this.maquinaEventos, this.aluno);
        this.maquinaEventos.adicionarEvento(seguirParaMesa);
        }
      }
    }
