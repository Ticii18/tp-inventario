export class InventarioViejo {
  private items: any[] = [];

  agregarItem(item: any) {
    this.items.push(item);
  }

  obtenerItems(): any[] {
    return [...this.items];
  }
}
