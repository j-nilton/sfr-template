// SimulationParameters.ts
export class SimulationParameters {
    internalQueueLimit: number;
    tableLimit: number;
    registrationTime: number;
    servingTime: number;
    tableTime: number;
    turnstileLimit: number;
    studentCount: number;
    serviceInterval: number;
    arrivalDistribution: "normal" | "exp" | "uniform";
  
    constructor(
      internalQueueLimit: number,
      tableLimit: number,
      registrationTime: number,
      servingTime: number,
      tableTime: number,
      turnstileLimit: number,
      studentCount: number,
      serviceInterval: number,
      arrivalDistribution: "normal" | "exp" | "uniform"
    ) {
      const validatePositive = (value: number, name: string) => {
        if (typeof value !== "number" || value <= 0) {
          throw new Error(`${name} deve ser um número maior que 0`);
        }
      };
  
      // Validação dos parâmetros numéricos
      validatePositive(internalQueueLimit, "internalQueueLimit (LFI)");
      validatePositive(tableLimit, "tableLimit (LM)");
      validatePositive(registrationTime, "registrationTime (TMDM)");
      validatePositive(servingTime, "servingTime (TMPSC)");
      validatePositive(tableTime, "tableTime (TMPNM)");
      validatePositive(turnstileLimit, "turnstileLimit (QAL)");
      validatePositive(studentCount, "studentCount (QACR)");
      validatePositive(serviceInterval, "serviceInterval (IAR)");
  
      // **CORREÇÃO:** Aceita "normal", "exp" e "uniform"
      if (!["normal", "exp", "uniform"].includes(arrivalDistribution)) {
        throw new Error('Distribuição de chegada inválida');
      }
  
      this.internalQueueLimit = internalQueueLimit;
      this.tableLimit = tableLimit;
      this.registrationTime = registrationTime;
      this.servingTime = servingTime;
      this.tableTime = tableTime;
      this.turnstileLimit = turnstileLimit;
      this.studentCount = studentCount;
      this.serviceInterval = serviceInterval;
      this.arrivalDistribution = arrivalDistribution;
    }
  }
  