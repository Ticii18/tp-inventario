import { EquipoData } from "./types";

export class Inventario {
  private static instancia: Inventario | null = null;
  private equipos: EquipoData[] = [];

  private constructor() {}

  static obtenerInstancia(): Inventario {
    if (!Inventario.instancia) {
      Inventario.instancia = new Inventario();
    }
    return Inventario.instancia;
  }

  agregarEquipo(nombre: string, tipo: string, estado: string) {
    this.equipos.push({ nombre, tipo, estado });
  }

  listarEquipos(): EquipoData[] {
    return [...this.equipos];
  }
}
