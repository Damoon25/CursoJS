// CALCULO DE NOTA FINAL DEL ALUMNO

let bienvenida = alert("bienvenido/a a Heladeria Tus Gustos Congelados")
let pedidoHelado = prompt("Que vas a ordenar: 1/4kg , 1/2kg, o 1kg. (por favor inserta tal cual opción dada)")
let cuartoKilo = "1/4kg"
let medioKilo = "1/2kg"
let kilo = "1kg"
let boteCuarto = 350;
let boteMedio = 600;
let boteKilo = 1100;


function ordenHelado() {
    if (cuartoKilo == pedidoHelado) {
        let pedido = parseInt(prompt("Que gusto deseas (inserte el nro de la opción deseada) : \n 1 : Mousse de chocolate \n 2 : Frutilla a la crema \n 3 : Maracuya \n 4 : Crema Oreo \n 5 : Chocotorta \n 6 : Banana Dolca "))
        switch (pedido) {
            case 1:
                alert("Has pedido Mousse de chocolate")
                break;

            case 2:
                alert("Has pedido Frutilla a la crema")
                break;

            case 3:
                alert("Has pedido Maracuya")
                break;

            case 4:
                alert("Has pedido Crema Oreo")
                break;

            case 5:
                alert("Has pedido Chocotorta ")
                break;

            case 6:
                alert("Has pedido Banana Dolca ")
                break;

            default:
                alert("solo tenemos los gustos expuestos, vuelve a realizar el pedido")
                break;
        }

        let cantBote = parseInt(prompt('Cuantos botes deseas pedir:'))
        let subTotal = cantBote * boteCuarto;


        if (cantBote >= 1) {
            alert("El subtotal es $" + subTotal)
            let agregado = prompt("quieres agregar otro pedido: \n si/no")
            if (agregado === "si") {
                let opcionAgregado = parseInt(prompt("que deseas agregar, recuerda escogerlo por número : \n 1 : Bombon helado \n 2 : Torta helada \n 3 : Helado artesanal de agua"))
                switch (opcionAgregado) {
                    case 1:
                        alert("has escogido Bombon helado")
                        break;

                    case 2:
                        alert("has escogido Torta helada")
                        break;

                    case 3:
                        alert("has escogido Helado artesanal de agua")
                        break;

                    default:
                        alert(opcionAgregado + " " + "no es un valor dado, por favor vuelve a intentarlo ")
                        break;
                }
                let agregadoBote = 1 * 600;
                let total = subTotal + agregadoBote;

                if (opcionAgregado >= 1) {
                    alert("el total mas el agregado es de $" + total)
                }

            } else if (agregado === "no") {
                alert("Tu total seria $" + subTotal)

            } else {
                alert(" no es un valor dado , vuelve a intentarlo")
            }

        } else if (cantBote > 1) {
            alert("El subtotal es $" + subTotal)
            alert("Gracias por su compra!")
        }


    } else if (medioKilo == pedidoHelado) {
        let pedido = parseInt(prompt("Que gusto deseas (inserte el nro de la opción deseada) : \n 1 : Mousse de chocolate \n 2 : Frutilla a la crema \n 3 : Maracuya \n 4 : Crema Oreo \n 5 : Chocotorta \n 6 : Banana Dolca "))
        switch (pedido) {
            case 1:
                alert("Has pedido Mousse de chocolate")
                break;

            case 2:
                alert("Has pedido Frutilla a la crema")
                break;

            case 3:
                alert("Has pedido Maracuya")
                break;

            case 4:
                alert("Has pedido Crema Oreo")
                break;

            case 5:
                alert("Has pedido Chocotorta ")
                break;

            case 6:
                alert("Has pedido Banana Dolca ")
                break;

            default:
                alert("solo tenemos los gustos expuestos, vuelve a realizar el pedido")
                break;
        }

        let cantBote = parseInt(prompt('Cuantos botes deseas pedir:'))
        let subTotal = cantBote * boteMedio;

        if (cantBote >= 1) {
            alert("El subtotal es $" + subTotal)
            let agregado = prompt("quieres agregar otro pedido: \n si/no")
            if (agregado === "si") {
                let opcionAgregado = parseInt(prompt("que deseas agregar, recuerda escogerlo por número : \n 1 : Bombon helado \n 2 : Torta helada \n 3 : Helado artesanal de agua"))
                switch (opcionAgregado) {
                    case 1:
                        alert("has escogido Bombon helado")
                        break;

                    case 2:
                        alert("has escogido Torta helada")
                        break;

                    case 3:
                        alert("has escogido Helado artesanal de agua")
                        break;

                    default:
                        alert(opcionAgregado + " " + "no es un valor dado, por favor vuelve a intentarlo ")
                        break;
                }
                let agregadoBote = 1 * 600;
                let total = subTotal + agregadoBote;

                if (opcionAgregado >= 1) {
                    alert("el total mas el agregado es de $" + total)
                }

            } else if (agregado === "no") {
                alert("Tu total seria $" + subTotal)

            } else {
                alert(" no es un valor dado , vuelve a intentarlo")
            }

        } else if (cantBote > 1) {
            alert("El subtotal es $" + subTotal)
            alert("Gracias por su compra!")
        }
    } else if (kilo == pedidoHelado) {
        let pedido = parseInt(prompt("Que gusto deseas (inserte el nro de la opción deseada) : \n 1 : Mousse de chocolate \n 2 : Frutilla a la crema \n 3 : Maracuya \n 4 : Crema Oreo \n 5 : Chocotorta \n 6 : Banana Dolca "))
        switch (pedido) {
            case 1:
                alert("Has pedido Mousse de chocolate")
                break;

            case 2:
                alert("Has pedido Frutilla a la crema")
                break;

            case 3:
                alert("Has pedido Maracuya")
                break;

            case 4:
                alert("Has pedido Crema Oreo")
                break;

            case 5:
                alert("Has pedido Chocotorta ")
                break;

            case 6:
                alert("Has pedido Banana Dolca ")
                break;

            default:
                alert("solo tenemos los gustos expuestos, vuelve a realizar el pedido")
                break;
        }

        let cantBote = parseInt(prompt('Cuantos botes deseas pedir:'))
        let subTotal = cantBote * boteKilo;

        if (cantBote >= 1) {
            alert("El subtotal es $" + subTotal)
            let agregado = prompt("quieres agregar otro pedido: \n si/no")
            if (agregado === "si") {
                let opcionAgregado = parseInt(prompt("que deseas agregar, recuerda escogerlo por número : \n 1 : Bombon helado \n 2 : Torta helada \n 3 : Helado artesanal de agua"))
                switch (opcionAgregado) {
                    case 1:
                        alert("has escogido Bombon helado")
                        break;

                    case 2:
                        alert("has escogido Torta helada")
                        break;

                    case 3:
                        alert("has escogido Helado artesanal de agua")
                        break;

                    default:
                        alert(opcionAgregado + " " + "no es un valor dado, por favor vuelve a intentarlo ")
                        break;
                }
                let agregadoBote = 1 * 600;
                let total = subTotal + agregadoBote;

                if (opcionAgregado >= 1) {
                    alert("el total mas el agregado es de $" + total)
                }

            } else if (agregado === "no") {
                alert("Tu total seria $" + subTotal)

            } else {
                alert(" no es un valor dado , vuelve a intentarlo")
            }

        } else if (cantBote > 1) {
            alert("El subtotal es $" + subTotal)
            alert("Gracias por su compra!")
        }
    }
}

ordenHelado()
