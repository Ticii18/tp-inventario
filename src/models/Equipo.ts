import type { Observador } from "./observer/Observador";

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

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    private notificarObservadores(): void {
        for (const obs of this.observadores) {
            obs.notificar(this);
        }
    }
}
