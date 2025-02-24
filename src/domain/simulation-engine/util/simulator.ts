import { Refeitorio } from "@/domain/sistema/refeitorio";
import { MaquinaDeEventos } from "@/domain/eventos/maquinaDeEventos";
import { Simulation } from "../../data-management/Entities/simulation";
import { Aluno } from "@/domain/sistema/aluno";
import { SimulatorI } from "@/adapter/interfaces/simulator-interface";
import { ExponentialRandom, GaussianRandom, RandomGeneratorI, UniformRandom } from "./random-generators";

export class simulator implements SimulatorI{
    private refeitorio: Refeitorio; 
    private maquina: MaquinaDeEventos; 
    private simulacao: Simulation; 

    constructor(simulacao: Simulation){
        this.simulacao = simulacao; 
        this.refeitorio = new Refeitorio(simulacao.parameters.); 
        this.maquina = new MaquinaDeEventos(); 
    }

    private configurarChegadaAlunos(){
        
    }

    //
    startSimulation(simulation: Simulation, onProgressUpdate: (progress: number) => void, onError: (error: Error) => void): () => void {
       
       
        let sorteador : RandomGeneratorI;
        if(simulation.parameters.arrivalDistribution === "normal"){
            sorteador = new GaussianRandom();
        }
        else if(simulation.parameters.arrivalDistribution === "uniform"){
            sorteador = new UniformRandom();
        }
        else if(simulation.parameters.arrivalDistribution === "exp"){
            sorteador = new ExponentialRandom();
        }
        else{
            throw new Error("Distribuição de chegada inválida");
        }
        simulation.parameters.serviceInterval
    }
}