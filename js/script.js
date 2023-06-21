let total = 0
let opcion
let productos = [
    { id: 3, nombre: "Alimento de gato x 1kg", categoria: "alimento", precio: 1000 },
    { id: 5, nombre: "Alimento de perro x 1kg", categoria: "alimento", precio: 1300 },
    { id: 6, nombre: "Collar de gato", categoria: "accesorios", precio: 700 },
    { id: 8, nombre: "Collar de perro", categoria: "accesorios", precio: 900 },
    { id: 11, nombre: "Piedras sanitarias x 1kg", categoria: "higiene", precio: 400 },
    { id: 13, nombre: "Ratón de plástico", categoria: "juguetes", precio: 700 },
    { id: 15, nombre: "Pelota de tenis", categoria: "juguetes", precio: 600 },
    { id: 17, nombre: "Hueso de cuero", categoria: "juguetes", precio: 500 },
    { id: 13, nombre: "Rascador para gatos", categoria: "juguetes", precio: 800 },
]
let carrito = []

let mensaje = "Ingrese una opción\n1) Lista de productos\n2) Lista de productos ord. por precio\n3) Lista de productos por categoria\n4) Ver carrito\n5) Pagar\n6) Vaciar carrito\n0) Salir"

alert("Hola bienvenido/a a nuestro PetShop!")

do {
    opcion = parseInt(prompt(mensaje))
    if (isNaN(opcion)) {
        alert("Inserte un número para elegir una opción")
    } else {
        if (opcion === 1) {
            agregarProductosCarrito(productos)
        } else if (opcion === 2) {

            let ordPorPrecio

            do {
                ordPorPrecio = Number(prompt("Seleccione orden por precio mediante numeros:\n1) De menor a mayor\n2) De mayor a menor"))
                if (ordPorPrecio === 1) {
                    let ordenarMenorMayor = productos.sort((a, b) => a.precio - b.precio)
                    agregarProductosCarrito(ordenarMenorMayor)
                } else if (ordPorPrecio === 2) {
                    let ordenarMayorMenor = productos.sort((a, b) => a.precio + b.precio)
                    agregarProductosCarrito(ordenarMayorMenor)
                }
            } while (ordPorPrecio !== 1 && ordPorPrecio !== 2);

        } else if (opcion === 3) {

            let categoria

            do {
                categoria = Number(prompt("Seleccione categoria mediante numeros:\n1) Alimentos\n2) Accesorios\n3) Higiene\n4) Juguetes"))
                if (categoria === 1) {
                    categoria = "alimento"
                } else if (categoria === 2) {
                    categoria = "accesorios"
                } else if (categoria === 3) {
                    categoria = "higiene"
                } else if (categoria === 4) {
                    categoria = "juguetes"
                } else {
                    alert("Ingrese una opcion valida")
                }
            } while (categoria !== "alimento" && categoria !== "accesorios" && categoria !== "higiene" && categoria !== "juguetes")

            let productosCategoria = productos.filter(producto => producto.categoria === categoria)

            agregarProductosCarrito(productosCategoria)

        } else if (opcion === 4) {
            if (carrito.length === 0) {
                alert("Carrito vacio")
            } else {
                alert(mostrarCarrito(carrito))
            }
        } else if (opcion === 5) {
            if (carrito.length === 0) {
                alert("No seleccionó ningún producto")
            } else {
                alert("Su pago de $" + total + " se realizó con éxito")
                carrito = []
                do {
                    let refresh = Number(prompt("Inserte un número para elegir una opción\n1) Volver al menú\n2) Salir"))
                    if (refresh === 1) {
                        location.reload()
                    } else if (refresh === 2) {
                        alert("Gracias vuelva pronto")
                    } else {
                        alert("Ingrese un valor correcto")
                    }
                } while (refresh !== 2)

            }
        } else if (opcion === 6) {
            alert("Se vació el carrito")
            carrito = []
        }
    }

} while (opcion !== 0)

alert("Adiós gracias por visitar la tienda online")

function mostrar(arrayMostrar) {
    let indice = "ID - Nombre\n"
    for (const producto of arrayMostrar) {
        indice += producto.id + " - " + producto.nombre + " - $" + producto.precio + "\n"
    }
    return indice
}

function mostrarCarrito(arrayMostrar) {
    let indiceCarrito = "ID - Nombre - Unidades\n"
    for (const productoElegido of arrayMostrar) {
        indiceCarrito += productoElegido.id + " - " + productoElegido.nombre + " - $" + productoElegido.subTotal + " - " + productoElegido.unidades + "\n"
    }
    return indiceCarrito
}

function agregarProductosCarrito(productos) {
    let id = Number(prompt("Ingrese ID del producto a comprar\n" + mostrar(productos)))
    let productoElegido = productos.find(objeto => objeto.id === id)
    if (productoElegido === undefined) {
        alert("El producto seleccionado no está en la lista. Por favor, elija otro producto.")
    } else {
        let posProductoCarrito = carrito.findIndex(objeto => objeto.id === productoElegido.id)

        if (posProductoCarrito === -1) {
            carrito.push({
                id: productoElegido.id,
                nombre: productoElegido.nombre,
                precioUnitario: productoElegido.precio,
                unidades: 1,
                subTotal: productoElegido.precio,
            })
        } else {
            carrito[posProductoCarrito].unidades++
            carrito[posProductoCarrito].subTotal = carrito[posProductoCarrito].precioUnitario * carrito[posProductoCarrito].unidades
        }

        alert("Producto añadido al carrito")

        total = carrito.reduce((acumulador, producto) => acumulador + producto.subTotal, 0)
    }
}