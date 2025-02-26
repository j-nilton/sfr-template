import { Evento } from "./evento";

export class MaquinaDeEventos {
    private eventos: Evento[] = [];
    private instanteDeSimulacao = 0;

    public getEventos(): Evento[]{
        return this.eventos;
    } 

    public processarEventos(): Evento | void {
        while (this.eventos.length > 0) {
            this.eventos = this.eventos.sort((a, b) => a.getTimeStamp() - b.getTimeStamp());
            const e: Evento = this.eventos.shift()!;
            e.processarEvento();
        }
    }

    public adicionarEvento(NovoEvento: Evento): void {
        this.eventos.push(NovoEvento);
    }

    private atualizarInstanteDeSimulacao(novoInstanteDeSimulacao: number): void {
        if (novoInstanteDeSimulacao < this.instanteDeSimulacao) {
            throw new Error("Você não pode voltar no tempo.");

        }
        this.instanteDeSimulacao = novoInstanteDeSimulacao;
    }
}
