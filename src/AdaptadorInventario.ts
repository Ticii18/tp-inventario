import { InventarioViejo } from "./InventarioViejo";
import { EquipoData } from "./types";

export class AdaptadorInventario {
  private viejo: InventarioViejo;

  constructor(viejo: InventarioViejo) {
    this.viejo = viejo;
  }

  agregarEquipo(nombre: string, tipo: string, estado: string) {
    const item: EquipoData = { nombre, tipo, estado };
    this.viejo.agregarItem(item);
  }

  listarEquipos(): EquipoData[] {
    return this.viejo.obtenerItems();
  }
}
