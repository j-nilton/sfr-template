import { GaussianRandom, RandomGeneratorI } from "../simulation-engine/util/random-generators";
import { Aluno } from "../sistema/aluno";
import { Refeitorio } from "../sistema/refeitorio";
import { Evento } from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";
import { SairDoRefeitorio } from "./sairDoRefeitorio";

export class TransicaoAlunoDeMesaParaForaDoRefeitorio extends Evento {
  private aluno : Aluno;

  constructor(timeStamp: number, refeitorio: Refeitorio, maquinaEventos: MaquinaDeEventos,aluno : Aluno){
    super(timeStamp,refeitorio,maquinaEventos);

    this.aluno = aluno;
  }

  processarEvento(): void {
    // Log
    console.log(`Evento - Transição Almoço - TransicaoAlunoDeMesaParaForaDoRefeitorio - Aluno  - Tempo: ${this.getTimeStamp()} segundos`);

    // Agenda novos eventos
    this.refeitorio.retirarAlunoMesa(this.aluno);
    const sorteador: RandomGeneratorI = new GaussianRandom();
      
    // Adicionando o tempo gasto no atendiemnto
    const instanteDaPassagem: number = this.timeStamp + (sorteador.next() * 2 * this.refeitorio.getMesas().getTempoNaMesa());

    const sairDoRefeitorio = new SairDoRefeitorio(instanteDaPassagem, this.refeitorio, this.maquinaEventos, this.aluno);
    this.maquinaEventos.adicionarEvento(sairDoRefeitorio);
  }
}