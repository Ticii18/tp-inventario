export interface EquipoData {
  nombre: string;
  tipo: string;
  estado: string;
}

export interface Observador {
  actualizar: (mensaje: string) => void;
}
