import { Equipo } from "../Equipo";

export class Servidor extends Equipo {
  almacenamiento: string;
  procesador: string;

  constructor(nombre: string, almacenamiento: string, procesador: string, estado = "disponible") {
    super(nombre, "Servidor", estado);
    this.almacenamiento = almacenamiento;
    this.procesador = procesador;
  }

  detalles(): string {
    return `Tipo: Servidor, Nombre: ${this.nombre}, Almacenamiento: ${this.almacenamiento}, Procesador: ${this.procesador}, Estado: ${this.estado}`;
  }
}
