import { Aluno } from "./aluno"; // Importando a classe Aluno de aluno.ts

export class FilaExterna {
    
    /**
     * Alunos que estão na fila externa do refeitório 
     */
    private alunos: Aluno[] = [];
    private tamanhoFilaExterna: number; 

    constructor(tamanhoFilaExterna: number){
        this.alunos = []; 
        this.tamanhoFilaExterna = tamanhoFilaExterna; 
    }

    // Getter para alunos
    public getAlunos(): Aluno[] {
        return this.alunos;
    }

    // Setter para alunos
    public setAlunos(alunos: Aluno[]): void {
        this.alunos = alunos;
    }

    public getTamanhoFilaExterna(): number{
        return this.tamanhoFilaExterna;
    }

    // Método para adicionar um aluno à fila externa
    public adicionarAlunoFilaExterna(aluno: Aluno): void {
        this.alunos.push(aluno);  
    }

    // Método para remover um aluno da fila externa
    public removerAluno(): Aluno {
        if (this.alunos.length === 0) {
            throw new Error("Você está tentando remover um aluno de uma fila vazia"); 
        }
        return this.alunos.shift()!; // O "!" no final significa que a verificação de que o aluno não é undefined já foi feita"
    }

}
