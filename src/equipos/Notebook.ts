import { Equipo } from "../Equipo";

export class Notebook extends Equipo {
  ram: string;
  procesador: string;

  constructor(nombre: string, ram: string, procesador: string, estado = "disponible") {
    super(nombre, "Notebook", estado);
    this.ram = ram;
    this.procesador = procesador;
  }

  detalles(): string {
    return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}, Estado: ${this.estado}`;
  }
}
