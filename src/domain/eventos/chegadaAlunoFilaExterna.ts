import { Evento } from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";
import { Refeitorio } from "../sistema/refeitorio";
import { FilaExterna } from "../sistema/fila-externa";
import { Aluno } from "../sistema/aluno";
import { PassarAlunoParaCatraca } from "./passarAlunoParaCatraca";


export class ChegadaAlunoFilaExterna extends Evento {
  private aluno: Aluno; 

  constructor(timeStamp: number, refeitorio: Refeitorio, maquinaEventos: MaquinaDeEventos, aluno: Aluno ){
      super(timeStamp, refeitorio, maquinaEventos)

      this.aluno = aluno; 
  }
  
  public processarEvento(): void {

    // log
    console.log(`Aluno chegou à fila externa no instante ${this.getTimeStamp()}`);

    // alterar o estado do sistema
    const filaEstaVazia = this.refeitorio.filaExternaEstaVazia(); 
    const sucesso = this.refeitorio.chegadaAlunoFilaExterna(this.aluno); 

    // agenda novos eventos
    if(sucesso && filaEstaVazia){
      const alunoVaiParaCatraca = new PassarAlunoParaCatraca(this.timeStamp, this.refeitorio, this.maquinaEventos, this.aluno);   
      this.maquinaEventos.adicionarEvento(alunoVaiParaCatraca); 
    }

  }
}