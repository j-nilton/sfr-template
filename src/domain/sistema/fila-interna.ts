import { Aluno } from "./aluno"; 

export class FilaInterna {

    /**
     * Alunos que estão na fila interna esperando para serem atendidos
     */
    private alunos: Aluno[] = [];

    /**
     * LFI (Limite da Fila Interna).
     */
    private limiteFilaInterna: number;

    /**
     * Tamanho atual da fila interna
     */
    private tamanhoDaFila: number;

    /**
     * Construtor para a classe FilaInterna
     * @param limiteFilaInterna - Número máximo de alunos que podem esperar para serem atendidos dentro do refeitório

     */
    constructor(limiteFilaInterna: number) {
        this.limiteFilaInterna = limiteFilaInterna;
        this.tamanhoDaFila = 0;
    }

    // Getter para alunos
    public getAlunos(): Aluno[] {
        return this.alunos;
    }

    // Setter para alunos
    public setAlunos(alunos: Aluno[]): void {
        this.alunos = alunos;
        this.tamanhoDaFila = alunos.length;
    }

    // Getter para limiteFilaInterna
    public getLimiteFilaInterna(): number {
        return this.limiteFilaInterna;
    }

    // Setter para limiteFilaInterna
    public setLimiteFilaInterna(limite: number): void {
        this.limiteFilaInterna = limite;
    }

    // Getter para tamanhoDaFila
    public getTamanhoFila(): number {
        return this.tamanhoDaFila;
    }

    // Setter para tamanhoDaFila
    public setTamanhoFila(tamanho: number): void {
        this.tamanhoDaFila = tamanho;
    }

    // Adiciona um aluno na fila interna se não ultrapassar o limite
    public adicionarAlunoFilaInterna(aluno: Aluno): boolean {
        if (this.getTamanhoFila() >= this.getLimiteFilaInterna()) {
         throw new Error("Você está tentando adicionar um aluno na fila interna, mas a fila está lotada");
    }
        this.alunos.push(aluno); // Adiciona o aluno à fila interna
        return true;
    }

    // Remove o primeiro aluno da fila interna
    public removerAluno(): Aluno {
        if(this.alunos.length == 0){
            throw new Error("Você está tentando remover um aluno de uma fila vazia"); 
        }
        return this.alunos.shift(); 
    }
}
