import { Inventario } from "./Inventario";
import { EquipoFactory } from "./EquipoFactory";
import { Soporte } from "./Soporte";
import { Equipo } from "./Equipo";
import { InventarioViejo } from "./InventarioViejo";
import { AdaptadorInventario } from "./AdaptadorInventario";

// Ejercicio 1: Singleton Inventario
const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log("Ejercicio 1 - Inventario:", inventario.listarEquipos());

// Ejercicio 2: Factory Method
const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log("Ejercicio 2 - Factory:", notebook.detalles());

// Ejercicio 3: Observer
const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");

// Ejercicio 4: Adaptador
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log("Ejercicio 4 - Adaptador:", adaptador.listarEquipos());
