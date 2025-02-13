import { Aluno } from "../sistema/aluno";
import { Evento }  from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";
import { passarAlunoMesa } from "./passarAlunoMesa";
import { Refeitorio } from "../sistema/refeitorio";

export class chegadaAlunoAtendimento extends Evento{
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
      const sucesso = this.refeitorio.moverAlunoParaAtendimento(this.aluno);

      //agendar novos eventos
      if(sucesso && atendimentoEstaVazio){
        const seguirparamesa = new passarAlunoMesa(this.timeStamp,this.refeitorio,this.maquinaEventos);
        this.maquinaEventos.adicionarEvento(seguirparamesa);

        }



      }
    }
