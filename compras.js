/**
 *
 *
 * @class Producto
 */
class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
  /**
   *
   *
   * @return {*} 
   * @memberof Producto
   */
  calcularTotal() {
    return this.precio * this.cantidad;
  }
}

/**
 *
 *
 * @class Carrito
 */
class Carrito {
  constructor() {
    this.productos = [];
  }
  /**
   *
   *
   * @param {*} producto
   * @memberof Carrito
   */
  agregarProducto(producto) {
    this.productos.push(producto);
  }
  /**
   *
   *
   * @return {*} 
   * @memberof Carrito
   */
  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }
  /**
   *
   *
   * @memberof Carrito
   */
  vaciarCarrito() {
    this.productos = [];
  }
}
/**
 *
 *
 * @class Usuario
 */
class Usuario {
  /**
   * Creates an instance of Usuario.
   * @param {*} nombre
   * @param {*} correo
   * @memberof Usuario
   */
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = new Carrito();
  }
  /**
   * 
   * @param {*} producto 
   */
  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }
  /**
   *
   *
   * @memberof Usuario
   */
  finalizarCompra() {
    const total = this.carrito.calcularTotalCarrito();
    console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
    this.carrito.vaciarCarrito();
  }
}

/** @type {*} */
const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();
