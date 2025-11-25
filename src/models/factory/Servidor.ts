import type { Equipo } from "../../Interfaces/Equipo";

export class Servidor implements Equipo {
    tipo: string;
    nombre: string;
    ram: string;
    procesador: string;
    constructor(nombre: string, ram: string, procesador: string) {
        this.tipo = "Servidor";
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }
    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}


