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
    console.log(`Aluno passou para a catraca no instante ${this.getTimeStamp()}`);

    // Verificação de estado do sistema
    const filaInternaCheia: boolean = this.refeitorio.filaInternaEstaCheia();
    const tempoNaCatraca: number = this.refeitorio.moverAlunoDaCatracaParaFilaInterna(this.aluno);
    const bloqueado: boolean = this.refeitorio.getCatraca().getBloqueio();

    // Agendamento de eventos
    if (!filaInternaCheia) {
      const instanteLiberado: number = this.timeStamp + tempoNaCatraca;
      
      if (bloqueado) {
        const desbloquearAtendimento = new DesbloquearCatraca(instanteLiberado, this.refeitorio, this.maquinaEventos);
        this.maquinaEventos.adicionarEvento(desbloquearAtendimento);
      }
      
      const alunoVaiParaFilaInterna = new PassarAlunoFilaInterna(instanteLiberado, this.refeitorio, this.maquinaEventos, this.aluno);
      this.maquinaEventos.adicionarEvento(alunoVaiParaFilaInterna);
    } else {
      // Se a fila interna está cheia, bloquear a catraca somente se ainda não estiver bloqueada
      if (!bloqueado) {
        this.refeitorio.getCatraca().setBloqueio(true);
        const instanteFinalizado: number = this.timeStamp + tempoNaCatraca;
        const bloquearAtendimento = new BloquearCatraca(instanteFinalizado, this.refeitorio, this.maquinaEventos);
        this.maquinaEventos.adicionarEvento(bloquearAtendimento);
      }
    }
  }
}
