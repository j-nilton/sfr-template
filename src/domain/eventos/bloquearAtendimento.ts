import { Evento } from "./evento";
import { TransicaoAlunoFilaInternaParaMesa } from "./chegadaAlunoAtendimento";

export class BloquearAtendimento extends Evento{
    processarEvento (): void{
        console.log(`[${this.getTimeStamp()}]Atendimento bloqueado.`);

        if(this.refeitorio.getAtendimento().estaLiberado()) {
            this.refeitorio.moverAlunoParaAtendimento();
            const novaTransicaoAlunoFilaExternaParaInterna = new TransicaoAlunoFilaInternaParaMesa(this.timeStamp, this.refeitorio, this.maquinaEventos, this.refeitorio.getFilaInterna().getAlunos()[0]);
            this.maquinaEventos.adicionarEvento(novaTransicaoAlunoFilaExternaParaInterna);
         }

    }
}