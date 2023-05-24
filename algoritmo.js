const cantidadMostrar = document.querySelector("#cantidad-prodcutos-mostrar")
const cantidadPermitidaComprar = document.querySelector("#cantidad-permitida-producto")
const coloresUsuario = document.querySelector("#colores")


const pParrafoInfo = document.querySelector("#detalle-usuario-eleccion")


function opcionesUsuario() {
    let cantidadElegidaUsuario = cantidadMostrar.value
    let cantidadPermitidaElegidaUsuario = cantidadPermitidaComprar.value
    let coloresElegidoUsuario = coloresUsuario.value

    pParrafoInfo.innerHTML = "La cantidad de prodcutos a mostrar es: " + cantidadElegidaUsuario + "<br>" +
        "La cantidad de prodcutos permitidos por compra es: " + cantidadPermitidaElegidaUsuario + "<br>" +
        "Los colores selecciones a usar son: " + coloresElegidoUsuario
 
    }