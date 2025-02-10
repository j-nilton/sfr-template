import { Evento } from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";
import { Refeitorio } from "../sistema/refeitorio";
import { FilaExterna } from "../sistema/fila-externa";
import { Aluno } from "../sistema/aluno";
import { passarAlunoParaCatraca } from "./passarAlunoParaCatraca";



export class chegadaAlunoFilaExterna extends Evento {
  private aluno: Aluno; 

  constructor(timeStamp: number, refeitorio: Refeitorio, maquinaEventos: MaquinaDeEventos, aluno: Aluno ){
      super(timeStamp, refeitorio, maquinaEventos)

      this.aluno = aluno; 
  }
  
  public processarEvento(): void {
    console.log(`Aluno chegou à fila externa no instante ${this.getTimeStamp()}`);

    const filaEstaVazia = this.refeitorio.filaExternaEstaVazia(); 
    const sucesso = this.refeitorio.chegadaAlunoFilaExterna(this.aluno); 

    if(sucesso && filaEstaVazia){
      let alunoVaiParaCatraca = new passarAlunoParaCatraca(this.timeStamp, this.refeitorio, this.maquinaEventos);   
      this.maquinaEventos.adicionarEvento(alunoVaiParaCatraca); 
    }


  }
}