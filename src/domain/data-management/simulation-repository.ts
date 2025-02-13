import { SimulationRepositoryI } from "@/adapter/interfaces/simulation-repository-interface";
import { Simulation } from "./Entities/simulation";
import { SimulationParameters } from "./Entities/simulation-parameters";

export class SimulationRepositoryMock implements SimulationRepositoryI {
  async save(simulation: Simulation): Promise<void> {
   
  }

  async getById(id: string): Promise<Simulation | null> {
    // Retorna um objeto vazio para manter a interface
    return Promise.resolve(new Simulation("mockid","mockname",new SimulationParameters(0,0,0,0,0,0,0,0,"normal")));
  }

  async getAll(): Promise<Simulation[]> {
    // Retorna array vazio
    return [];
  }

  async delete(id: string): Promise<void> {
    // Simula sucesso sem ação real
    return Promise.resolve();
  }

}