// Variables globales para almacenar el nickname del usuario y el carrito de compras
let usuario = null;
let carrito = [];

// Función para manejar el ingreso del usuario
function ingresarUsuario(nickname) {
    usuario = nickname;
    // Actualiza la interfaz para mostrar el mensaje de bienvenida

    
}

// Función para manejar la desconexión del usuario
function desconectarUsuario() {
    usuario = null;
    carrito = [];
    // Actualiza la interfaz para eliminar el mensaje de bienvenida y vaciar el carrito
}

// Función para mostrar el catálogo de productos
function mostrarCatalogo() {
    // Aquí necesitarás iterar sobre los datos de tu catálogo y crear elementos HTML para cada producto
}

// Función para agregar un producto al carrito
function agregarAlCarrito(producto, cantidad) {
    // Asegúrate de verificar que el usuario esté conectado y que la cantidad no supere la disponibilidad
}

// Función para editar la cantidad de un producto en el carrito
function editarCantidadEnCarrito(producto, nuevaCantidad) {
    // Asegúrate de verificar que la nueva cantidad no supere la disponibilidad
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(producto) {
    // No olvides devolver la cantidad reservada a la disponibilidad en el catálogo
}