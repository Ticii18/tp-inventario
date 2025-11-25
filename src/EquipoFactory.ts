import { Notebook } from "./equipos/Notebook";
import { Desktop } from "./equipos/Desktop";
import { Servidor } from "./equipos/Servidor";
import { Equipo } from "./Equipo";

export class EquipoFactory {
  crearEquipo(tipo: string, nombre: string, a?: string, b?: string): Equipo {
    const t = tipo.toLowerCase();
    if (t === "notebook") {
      return new Notebook(nombre, a || "8GB", b || "i3");
    }
    if (t === "desktop") {
      return new Desktop(nombre, a || "8GB", b || "i5");
    }
    if (t === "servidor") {
      return new Servidor(nombre, a || "1TB", b || "Xeon");
    }
    throw new Error(`Tipo de equipo desconocido: ${tipo}`);
  }
}
