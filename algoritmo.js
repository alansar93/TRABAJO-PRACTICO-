const cantidadMostrar = document.querySelector("#cantidad-prodcutos-mostrar");
const cantidadPermitidaComprar = document.querySelector("#cantidad-permitida-producto");
const coloresUsuario = document.querySelector("#colores");
const MostrarProducto = document.querySelector("#producto-muestra");
const cadaProductoImg = document.querySelector("fieldset");
const cantProdElegido = document.querySelector("#cantidad-producto-elegida");
const pParrafoInfo = document.querySelector("#detalle-usuario-eleccion");
const productosMostrar = document.querySelector("#productos-mostrar");



img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJXyUIXxGgZqpm3CDxnrMErDGd2QIua1oXw&usqp=CAU";
img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBHUY1qzp0Twh9WXASuwrfOITM1FF3Voe-w&usqp=CAU"
img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiaJ22hGK5Zk-t3gurfTEaAYNbeaVKqsmWnQ&usqp=CAU"
img4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_buZHWE0LSjDhhxefALamImn5hM-4sN45uQ&usqp=CAU"
img5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbhajh4M4D2Hii75kqnKBRQYqrasQCA5PGIJxEIRdCmaw6FPwCeiVsrQaC0n1SB2nGSVg&usqp=CAU"
img6 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ816euiiKVv7y4GrlX8qfXpKEUp6LIgOKQBw&usqp=CAU"
img7 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnThtLEUVwvCHlJ8hOHYsn1txm2SXqM5z33Q&usqp=CAU"
img8 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhD8JVNMXcYGGy021ImvI2kxR3DpIqDFl7HA&usqp=CAU"
img9 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLaW2dDa34KE0Eqcvnu-YPf8mtv80Bhw7VDg&usqp=CAU"
img10 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjeVQIFHNsJ2CoLR_UPu97YFigY3jF-5zxw&usqp=CAU"

const imagenesVector = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];









//* Esta funcion, pone el texto que elige el usuario*//
function opcionesUsuario() {
   let cantidadElegidaUsuario = cantidadMostrar.value
   let coloresElegidoUsuario = coloresUsuario.value
   let cantidadPermitidaElegidaUsuario = cantidadPermitidaComprar.value


   cantProdElegido.innerHTML = `<option value=""> 1 </option>`
   MostrarProducto.innerHTML = ""
   
   nuevafuncion();
   function nuevafuncion() {
      for (let i = 2; i < cantidadPermitidaComprar.value; i++) {
         cantProdElegido.innerHTML += `<option value="${i}">"${i}"</option>`;
      };
   }
   pParrafoInfo.innerHTML = "La cantidad de prodcutos a mostrar es: " + cantidadElegidaUsuario + "<br>" +
      "La cantidad de prodcutos permitidos por compra es: " + cantidadPermitidaElegidaUsuario + "<br>" +
      "Los colores selecciones a usar son: " + coloresElegidoUsuario



   for (let i = 0; i < cantidadElegidaUsuario; i++) {
      MostrarProducto.innerHTML += `<p>Producto ${i + 1}</p>
      <img id="" src="${imagenesVector[i]}" alt=""></img>
   <label>Seleccione pago</label>
   <select name="" id="UsuarioEligioCantidad">
       <option value="efectivo">Efectivo</option>
       <option value="debito">Debito</option>
       <option value="credito">Credito</option>
   </select>
   <label for="cantidad-producto-elegida">Seleccione Cantidades</label>
        <select name="" id="cantidad-producto-elegida">
         ${nuevafuncion()}     
        </select>
   <button>Comprar</button>`
   }



}





