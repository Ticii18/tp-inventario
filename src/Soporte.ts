import { Observador } from "./types";

export class Soporte implements Observador {
  actualizar(mensaje: string) {
    console.log(`Soporte notificado: ${mensaje}`);
  }
}
