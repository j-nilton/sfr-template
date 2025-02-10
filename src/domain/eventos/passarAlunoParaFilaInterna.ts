import { Evento } from "./evento";

export class passarAlunoFilaInterna extends Evento{
    processarEvento() : void{
        console.log(`Aluno passou para a fila interna no instante ${this.getTimeStamp()}`);

      }
    }
    