import { Soporte } from "./models/observer/Soporte";
import { Equipo } from "./models/Equipo";
// Prueba Observer
const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
import { Inventario } from "./models/singleton/InvTec";
import { EquipoFactory } from "./models/factory/InvFactory";

// Pruebas Factory Method
const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
const desktop = factory.crearEquipo("Desktop", "HP Pavilion", "8GB", "i5");
const servidor = factory.crearEquipo("Servidor", "Lenovo ThinkServer", "32GB", "Xeon");

console.log(notebook.detalles());
console.log(desktop.detalles());
console.log(servidor.detalles());

// Pruebas Inventario
const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
inventario.agregarEquipo("Notebook ASUS", "Notebook", "en reparacion");
console.log(inventario.listarEquipos());

