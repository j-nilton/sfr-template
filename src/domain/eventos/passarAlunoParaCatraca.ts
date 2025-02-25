import { GaussianRandom, RandomGeneratorI } from "../simulation-engine/util/random-generators";
import { Aluno } from "../sistema/aluno";
import { Refeitorio } from "../sistema/refeitorio";
import { BloquearCatraca } from "./BloquearCatraca";
import { DesbloquearCatraca } from "./desbloquearCatraca";
import { Evento } from "./evento";
import { MaquinaDeEventos } from "./maquinaDeEventos";
import { PassarAlunoFilaInterna } from "./passarAlunoParaFilaInterna";

export class PassarAlunoParaCatraca extends Evento {
  private aluno: Aluno;

  constructor(timeStamp: number, refeitorio: Refeitorio, maquinaEventos: MaquinaDeEventos, aluno: Aluno) {
    super(timeStamp, refeitorio, maquinaEventos);
    this.aluno = aluno;
  }

  processarEvento(): void {
    // Log do evento
    console.log(`Evento - aluno vai para catraca - Tempo ${this.getTimeStamp()} segundos`);

    // Verificação de estado do sistema
    const filaInternaCheia: boolean = this.refeitorio.filaInternaEstaCheia();
    const bloqueado: boolean = this.refeitorio.getCatraca().getBloqueada();

    // Agendamento de eventos
    if (!filaInternaCheia) {

      this.refeitorio.moverAlunoDaCatracaParaFilaInterna();

      if (bloqueado) {
        console.log(`Evento - DesbloquearCatraca - ${this.getTimeStamp()}`);
        const desbloquearAtendimento = new DesbloquearCatraca(this.timeStamp, this.refeitorio, this.maquinaEventos);
        this.maquinaEventos.adicionarEvento(desbloquearAtendimento);
      }

      const sorteador: RandomGeneratorI = new GaussianRandom();

      // Adicionando o tempo gasto pelo o aluno para digitar a matricula no eevento
      const instanteDaPassagem: number = this.timeStamp + (sorteador.next() * 2 * this.refeitorio.getCatraca().getTempoMedioDigitarMatricula());

      const alunoVaiParaFilaInterna = new PassarAlunoFilaInterna(instanteDaPassagem, this.refeitorio, this.maquinaEventos, this.aluno);
      this.maquinaEventos.adicionarEvento(alunoVaiParaFilaInterna);

    } else {
      // Se a fila interna está cheia, bloquear a catraca somente se ainda não estiver bloqueada
      if (!bloqueado) {
        console.log(`Evento - BloquearCatraca - ${this.getTimeStamp()}`);
        this.refeitorio.getCatraca().setBloqueada(true);
        const bloquearAtendimento = new BloquearCatraca(this.timeStamp, this.refeitorio, this.maquinaEventos);
        this.maquinaEventos.adicionarEvento(bloquearAtendimento);
      }
    }
  }
}
