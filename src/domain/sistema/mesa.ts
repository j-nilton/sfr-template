import { Aluno } from "./aluno"; // Importando a classe Aluno de aluno.ts

export class Mesa {
    /**
     * Alunos que estão ocupando as mesas
     */
    private alunos: Aluno[] = []; 

    /**
     * LM (Limite de Mesas).
     */
    private limite: number;

    /**
     * Média de tempo que os alunos permanecem na mesa comendo
     */
    private tempoMedioPermanencia: number;

    /**
     * 
     * @param alunos - Alunos que estão ocupando as mesas
     * @param limite - LM (Limite de Mesas).
     * @param tempoMedioPermanencia - Média de tempo que os alunos permanecem na mesa comendo
     */
    constructor(alunos: Aluno[], limite: number, tempoMedioPermanencia: number) {
        this.alunos = alunos;
        this.limite = limite;
        this.tempoMedioPermanencia = tempoMedioPermanencia;
    }

    // Getter para alunos
    public getAlunos(): Aluno[] {
        return this.alunos;
    }

    // Getter para limite
    public getLimite(): number {
        return this.limite;
    }

    // Getter para tempo médio de permanência
    public getTempoMedioPermanencia(): number {
        return this.tempoMedioPermanencia;
    }

    // Verifica se um aluno está na mesa com base no ID
    private alunoEstaNaMesa(id: string): boolean {
        return this.alunos.some(aluno => aluno.getId() === id);
    }

    // Adiciona um aluno à mesa se não ultrapassar o limite e se ele ainda não estiver na mesa
    public adicionarAlunoMesa(aluno: Aluno): boolean {
        if (this.alunos.length >= this.limite) {
            throw new Error("Você está tentando adicionar um aluno nas mesas, mas elas estão cheias.");
        }

        if (this.alunoEstaNaMesa(aluno.getId())) {
            throw new Error("O aluno já está na mesa.");
        }

        this.alunos.push(aluno);
        return true;
    }

    // Remove um aluno da mesa pelo ID, verificando antes se ele está na mesa
    public removerAluno(aluno: Aluno): Aluno {
        const  id = aluno.getId();
        if (!this.alunoEstaNaMesa(id)) {
         throw new Error("Você está tentando remover um aluno que não está na mesa");
     }
        const alunoRemovido = this.alunos.find(alunoArray => alunoArray == aluno);
        this.alunos = this.alunos.filter(alunoArray => alunoArray != aluno);
        return alunoRemovido!;
    }
}
