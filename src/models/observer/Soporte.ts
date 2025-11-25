import type { Observador } from "./Observador";
import type { Equipo } from "../Equipo";

export class Soporte implements Observador {
    notificar(equipo: Equipo): void {
        console.log(`Soporte notificado: El equipo '${equipo.nombre}' cambió su estado a '${equipo.estado}'.`);
    }
}
