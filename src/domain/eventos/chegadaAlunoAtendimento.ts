import { Evento }  from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";

export class chegadaAlunoAtendimento extends Evento{
    processarEvento: void() {
        console.log(`Aluno chegou para o atendimento no momento ${this.getTimeStamp()}`);
      }
    }
