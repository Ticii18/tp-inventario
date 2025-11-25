import { Observador } from "./types";

export class Equipo {
  nombre: string;
  tipo: string;
  estado: string;
  private observadores: Observador[] = [];

  constructor(nombre: string, tipo: string, estado: string) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.estado = estado;
  }

  agregarObservador(obs: Observador) {
    this.observadores.push(obs);
  }

  removerObservador(obs: Observador) {
    this.observadores = this.observadores.filter((o) => o !== obs);
  }

  private notificar() {
    const mensaje = `${this.nombre} ha cambiado su estado a ${this.estado}.`;
    this.observadores.forEach((o) => o.actualizar(mensaje));
  }

  cambiarEstado(nuevoEstado: string) {
    this.estado = nuevoEstado;
    this.notificar();
  }

  detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, Estado: ${this.estado}`;
  }
}
