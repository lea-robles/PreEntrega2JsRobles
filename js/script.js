let total = 0
let opcion
let mensaje = "Ingrese una opción\n1) Lista de productos\n2) Lista de productos Ord. por precio\n3) Lista de productos por categoria\n4) Ver carrito\n4) Pagar\n5) Vaciar carrito\n9) Salir"

alert("Hola bienvenido/a a nuestro PetShop!")

do {
    opcion = parseInt(prompt(mensaje))
    if (isNaN(opcion)) {
        alert("Inserte un número para elegir una opción")
    } else {
        calcularCompra(opcion)
        if (opcion === 6) {
            if (total === 0) {
                alert("No seleccionó ningún producto")
            } else {
                alert("Su monto a pagar es: $" + total)
            }
        } else if (opcion === 7) {
            if (total === 0) {
                alert("No seleccionó ningún producto")
            } else {
                alert("Su pago de $" + total + " se realizó con éxito")
                total = 0
                do {
                    let refresh = Number(prompt("Inserte un número para elegir una opción\n1) Volver al menú\n2) Salir"))
                    if (refresh === 1) {
                        location.reload()
                    } else if (refresh === 2){
                    alert("Gracias vuelva pronto")
                    } else {
                        alert("Ingrese un valor correcto")
                    }
                } while (refresh !== 2)
                
            }
        } else if (opcion === 8) {
            alert("Se vació el carrito")
            total = 0
        }
    }

} while (opcion !== 9)



alert("Adiós gracias por visitar la tienda online")

function calcularCompra(opcion) {
    if (opcion === 1) {
        alert("Alimento de perro 1kg añadido al carrito")
        total += 1000
    } else if (opcion === 2) {
        total += 800
        alert("Alimento de gato 1kg añadido al carrito")
    } else if (opcion === 3) {
        alert("Collar perro añadido al carrito")
        total += 750
    } else if (opcion === 4) {
        alert("Collar gato añadido al carrito")
        total += 450
    } else if (opcion === 5) {
        alert("Piedra sanitarias 1kg añadido al carrito")
        total += 400
    }
}