const cantidadMostrar = document.querySelector("#cantidad-prodcutos-mostrar")
const cantidadPermitidaComprar = document.querySelector("#cantidad-permitida-producto")
const coloresUsuario = document.querySelector("#colores")
const MostrarProducto = document.querySelector("#producto-muestra")
const cadaProductoImg = document.querySelector("fieldset")
const cantProdElegido = document.querySelector("#cantidad-producto-elegida")

const pParrafoInfo = document.querySelector("#detalle-usuario-eleccion")

let imgProducto2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQECuaelhbHoT-NQhAPAX63MEQ2gYEGsm90eQ&usqp=CAU"


//* Esta funcion, pone el texto que elige el usuario*//
function opcionesUsuario() {
   let cantidadElegidaUsuario = cantidadMostrar.value
   let coloresElegidoUsuario = coloresUsuario.value
   let cantidadPermitidaElegidaUsuario = cantidadPermitidaComprar.value


   pParrafoInfo.innerHTML = "La cantidad de prodcutos a mostrar es: " + cantidadElegidaUsuario + "<br>" +
      "La cantidad de prodcutos permitidos por compra es: " + cantidadPermitidaElegidaUsuario + "<br>" +
      "Los colores selecciones a usar son: " + coloresElegidoUsuario

   for (let i = 1; i <= cantidadPermitidaElegidaUsuario; i++) {
      cantProdElegido.innerHTML += `<option value="${i}"> ${i} </option>`
   }
 
  

}





