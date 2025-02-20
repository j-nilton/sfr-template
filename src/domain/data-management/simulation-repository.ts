import { SimulationRepositoryI } from "@/adapter/interfaces/simulation-repository-interface";
import { Simulation } from "./Entities/simulation";
import { SimulationParameters } from "./Entities/simulation-parameters";

export class SimulationRepositoryMock implements SimulationRepositoryI {
  private STORAGE_KEY = "simulations";

  async save(simulation: Simulation): Promise<void> {
    let simulations = this.getAllSync();

    // Verifica se a simulação já existe (atualiza) ou adiciona uma nova
    const index = simulations.findIndex((sim) => sim.id === simulation.id);
    if (index !== -1) {
      simulations[index] = simulation;
    } else {
      simulations.push(simulation);
    }

    this.saveToLocalStorage(simulations);
  }

  async getById(id: string): Promise<Simulation | null> {
    const simulations = this.getAllSync();
    const found = simulations.find((sim) => sim.id === id);
    return found ? this.restoreSimulation(found) : null;
  }

  async getAll(): Promise<Simulation[]> {
    return this.getAllSync().map(this.restoreSimulation);
  }

  async delete(id: string): Promise<void> {
    let simulations = this.getAllSync();
    simulations = simulations.filter((sim) => sim.id !== id);
    this.saveToLocalStorage(simulations);
  }

  private getAllSync(): Simulation[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveToLocalStorage(simulations: Simulation[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(simulations));
  }

  private restoreSimulation(obj: any): Simulation {
    return new Simulation(obj.id, obj.name, new SimulationParameters(
      obj.parameters.internalQueueLimit,
      obj.parameters.tableLimit,
      obj.parameters.registrationTime,
      obj.parameters.servingTime,
      obj.parameters.tableTime,
      obj.parameters.turnstileLimit,
      obj.parameters.studentCount,
      obj.parameters.serviceInterval,
      obj.parameters.arrivalDistribution
    ));
  }
}
