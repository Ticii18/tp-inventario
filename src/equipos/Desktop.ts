import { Equipo } from "../Equipo";

export class Desktop extends Equipo {
  ram: string;
  procesador: string;

  constructor(nombre: string, ram: string, procesador: string, estado = "disponible") {
    super(nombre, "Desktop", estado);
    this.ram = ram;
    this.procesador = procesador;
  }

  detalles(): string {
    return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}, Estado: ${this.estado}`;
  }
}
