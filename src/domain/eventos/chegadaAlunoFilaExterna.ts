import { Evento } from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";
import { Refeitorio } from "../sistema/refeitorio";
import { FilaExterna } from "../sistema/fila-externa";
import { Aluno } from "../sistema/aluno";
import { PassarAlunoParaCatraca } from "./passarAlunoParaCatraca";


export class ChegadaAlunoFilaExterna extends Evento {
  private aluno: Aluno;

  constructor(timeStamp: number, refeitorio: Refeitorio, maquinaEventos: MaquinaDeEventos, aluno: Aluno) {
    super(timeStamp, refeitorio, maquinaEventos)

    this.aluno = aluno;
  }

  public processarEvento(): void {

    // log
    console.log(`Evento - Momento de Chegada -  ChegadaAlunoFilaExterna - Aluno ${this.aluno.getId()} - Tempo ${this.getTimeStamp()} segundos`);

    // alterar o estado do sistema
    const filaEstaVazia = this.refeitorio.filaExternaEstaVazia();
    // console.log(`Fila externa Vazia? ${filaEstaVazia}`);
    const sucesso = this.refeitorio.chegadaAlunoFilaExterna(this.aluno);
    // console.log(`Adicionei aluno na fila? ${filaEstaVazia}`);

    // agenda novos eventos
    if (sucesso && filaEstaVazia) {
      this.refeitorio.moverAlunoDaFilaExternaParaCatraca();
      const alunoVaiParaCatraca = new PassarAlunoParaCatraca(this.timeStamp, this.refeitorio, this.maquinaEventos, this.aluno);
      this.maquinaEventos.adicionarEvento(alunoVaiParaCatraca);
    }

  }
}