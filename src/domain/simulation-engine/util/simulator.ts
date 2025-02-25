import { Refeitorio } from "@/domain/sistema/refeitorio";
import { MaquinaDeEventos } from "@/domain/eventos/maquinaDeEventos";
import { Simulation } from "../../data-management/Entities/simulation";
import { SimulatorI } from "@/adapter/interfaces/simulator-interface";
import { ExponentialRandom, GaussianRandom, RandomGeneratorI, UniformRandom } from "./random-generators";

export class simulator implements SimulatorI{
    private refeitorio: Refeitorio; 
    private maquina: MaquinaDeEventos; 
    private simulation: Simulation; 

    constructor(simulation: Simulation){
        this.simulation = simulation; 
        this.refeitorio = new Refeitorio(
            simulation.parameters.internalQueueLimit, 
            simulation.parameters.servingTime, 
            simulation.parameters.tableLimit, 
            simulation.parameters.turnstileLimit, 
            simulation.parameters.registrationTime
        )
        this.maquina = new MaquinaDeEventos(); 
    }

    private configurarChegadaAlunos(){
    }

    startSimulation(
        simulation: Simulation, 
        onProgressUpdate: (progress: number) => void, 
        onError: (error: Error) => void
    ): () => void {
        let sorteador : RandomGeneratorI;
        
        switch (simulation.parameters.arrivalDistribution) {
            case "normal":
                sorteador = new GaussianRandom();
                break;
            case "uniform":
                sorteador = new UniformRandom();
                break;
            case "exp":
                sorteador = new ExponentialRandom();
                break;
            default:
                onError(new Error("Distribuição de chegada inválida"));
                return () => {};
        }

        let progress = 0;
        const totalSteps = simulation.parameters.studentCount;
        let isRunning = true;

        const intervalId = setInterval(() => {
            if (!isRunning) {
                clearInterval(intervalId);
                return;
            }

            // Simula a chegada de um aluno
            const arrivalTime = sorteador.next() * simulation.parameters.serviceInterval;
            console.log(`Aluno chegou no tempo: ${arrivalTime.toFixed(2)}`);

            progress++;
            onProgressUpdate((progress / totalSteps) * 100);

            if (progress >= totalSteps) {
                clearInterval(intervalId);
                isRunning = false;
            }
        }, simulation.parameters.serviceInterval);

        return () => {
            isRunning = false;
            clearInterval(intervalId);
        };
    }
}