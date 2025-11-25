// Interfaz base para equipos
export interface Equipo {
    tipo: string;
    nombre: string;
    ram: string;
    procesador: string;
    detalles(): string;
}
