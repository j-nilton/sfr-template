import { Refeitorio } from "@/domain/sistema/refeitorio";
import { MaquinaDeEventos } from "@/domain/eventos/maquinaDeEventos";
import { Simulation } from "./simulation";
import { Aluno } from "@/domain/sistema/aluno";

export class simulator{
    private refeitorio: Refeitorio; 
    private maquina: MaquinaDeEventos; 
    private simulacao: Simulation; 

    constructor(simulacao: Simulation){
        this.simulacao = simulacao; 
        this.refeitorio = new Refeitorio(); 
        this.maquina = new MaquinaDeEventos(); 
    }

    private configurarChegadaAlunos(){
        
    }
}