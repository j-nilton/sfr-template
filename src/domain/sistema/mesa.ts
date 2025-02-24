import { Aluno } from "./aluno"; // Importando a classe Aluno de aluno.ts

export class Mesa {
    /**
     * Alunos que estão ocupando as mesas
     */
    private alunos: Aluno[] = []; 

    /**
     * LM (limiteMesa de Mesas).
     */
    private limiteMesa: number;

    /**
     * 
     * @param alunos - Alunos que estão ocupando as mesas
     * @param limiteMesa - LM (limiteMesa de Mesas).
     */
    constructor(limiteMesa: number) {
        this.alunos = [];
        this.limiteMesa = limiteMesa;
    }

    // Getter para alunos
    public getAlunos(): Aluno[] {
        return this.alunos;
    }

    // Getter para limiteMesa
    public getLimiteMesa(): number {
        return this.limiteMesa;
    }

    // Verifica se um aluno está na mesa comparando referências de objetos
    private alunoEstaNaMesa(aluno: Aluno): boolean {
        return this.alunos.includes(aluno);
    }

    // Adiciona um aluno à mesa se não ultrapassar o limiteMesa e se ele ainda não estiver na mesa
    public adicionarAlunoMesa(aluno: Aluno): boolean {
        if (this.alunos.length >= this.limiteMesa) {
            throw new Error("Você está tentando adicionar um aluno nas mesas, mas elas estão cheias.");
        }

        if (this.alunoEstaNaMesa(aluno)) {
            throw new Error("O aluno já está na mesa.");
        }

        this.alunos.push(aluno);
        return true;
    }

    // Remove um aluno da mesa verificando antes se ele está na mesa
    public removerAlunoMesa(aluno: Aluno): Aluno {
        if (!this.alunoEstaNaMesa(aluno)) {
            throw new Error("Você está tentando remover um aluno que não está na mesa");
        }

        const alunoRemovido = this.alunos.find(alunoArray => alunoArray === aluno);
        this.alunos = this.alunos.filter(alunoArray => alunoArray !== aluno);
        return alunoRemovido!;
    }
}
