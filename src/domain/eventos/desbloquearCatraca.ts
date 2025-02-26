import { GaussianRandom, RandomGeneratorI } from "../simulation-engine/util/random-generators";
import { Aluno } from "../sistema/aluno";
import { Refeitorio } from "../sistema/refeitorio";
import { ChegadaAlunoNaFilaInterna } from "./passarAlunoParaFilaInterna";
import { Evento } from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";
import { TransicaoAlunoFilaExternaParaFilaInterna } from "./passarAlunoParaCatraca";

export class DesbloquearCatraca extends Evento {
  private aluno : Aluno;

  constructor(timeStamp: number, refeitorio: Refeitorio, maquinaEventos: MaquinaDeEventos,aluno : Aluno){
    super(timeStamp,refeitorio,maquinaEventos);

    this.aluno = aluno;
  }

  processarEvento(): void {

    // Log
    console.log(`[${this.getTimeStamp()}] Catraca foi desbloqueada.`);

    // Alterar estado do sistema
    this.refeitorio.getCatraca().setBloqueada(false);
    // const alunoAtual = this.refeitorio.getCatraca().getAlunoAtual();

    // console.log(this.refeitorio.getCatraca().getAlunoAtual(), !this.refeitorio.getCatraca().estaBloqueada());

    // //Agendamento de eventos
    // if(this.refeitorio.getCatraca().getAlunoAtual() && !this.refeitorio.getCatraca().estaBloqueada()) {

    //   const sorteador: RandomGeneratorI = new GaussianRandom();

    //   // Adicionando o tempo gasto pelo o aluno para digitar a matricula no eevento
    //   const instanteDaPassagem: number = this.timeStamp + (sorteador.next() * 2 * this.refeitorio.getCatraca().getTempoMedioDigitarMatricula());

    //   const novaTransicaoAlunoFilaExternaParaInterna = new TransicaoAlunoFilaExternaParaFilaInterna(instanteDaPassagem, this.refeitorio, this.maquinaEventos, alunoAtual!);
    //   this.maquinaEventos.adicionarEvento(novaTransicaoAlunoFilaExternaParaInterna);
    // }
  }
}