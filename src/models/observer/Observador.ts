// Interfaz para observadores
export interface Observador {
    notificar(equipo: Equipo): void;
}

// Importar la interfaz Equipo para tipado
import type { Equipo } from "../Equipo";