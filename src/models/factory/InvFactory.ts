import type { Equipo } from "../../Interfaces/Equipo";

import { Desktop } from "./Desktop";
import { Notebook } from "./Notebook";
import { Servidor } from "./Servidor";

export class EquipoFactory {
  crearEquipo(
    tipo: string,
    nombre: string,
    ram: string,
    procesador: string
  ): Equipo {
    switch (tipo) {
      case "Notebook":
        return new Notebook(nombre, ram, procesador);
      case "Desktop":
        return new Desktop(nombre, ram, procesador);
      case "Servidor":
        return new Servidor(nombre, ram, procesador);
      default:
        throw new Error("Tipo de equipo no soportado");
    }
  }
}
