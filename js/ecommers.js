const contenedorCursos = document.querySelector("#contenedor")

let carrito = [];

//INCREMENTAR NUMERO DE CARRITO
const carritoContenedor = document.querySelector('#carritoContenedor')

//1 FUNCIONALIDAD A BOTON VACIAR CARRITO
const vaciarCarrito = document.querySelector('#vaciarCarrito')

//1 TOTAL
const total = document.querySelector('#total')


document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse (localStorage.getItem('carrito')) || []
    mostrarCarrito()
})

cursos.forEach((curso) => {
    const {id, nombre, horario, descripcion, precio, img}= curso
     contenedor.innerHTML +=
     `<div class="card" style="width: 18rem;">
     <img class="card-img-top mt-2" src= "${img}"alt="${nombre}">
     <div class="card-body">
       <h5 class="card-title">${nombre}</h5>
       <p class="card-text">${descripcion}</p>
       <p class="card-text">Horario: ${horario}</p>
       <h6 class="card-title">Precio: $${precio}</h6>
       <button onclick= "agregarProducto(${id})" class="btn btn-primary">Agregar al carrito</button>
     </div>
   </div>`

})

//2 FUNCIONALIDAD A BOTON VACIAR CARRITO
vaciarCarrito.addEventListener('click', () => {
    carrito.length = []
    mostrarCarrito()
})

function agregarProducto(id){

    const existe = carrito.some((curso) => curso.id === id)

    if(existe){
        const curso = carrito.map (curso => {
            if(curso.id === id) {
                curso.cantidad++
            }
        })
    }else{
        const item = cursos.find((curso) => curso.id === id)
        carrito.push(item)
    }

    
    mostrarCarrito()
}

const mostrarCarrito = () => {
    const modalBody = document.querySelector(`.modal .modal-body`)

    modalBody.innerHTML = ``;
    carrito.forEach ((curso) => {
        const {id, nombre, cantidad, precio, img}= curso
        modalBody.innerHTML += `
        <div class= "modal-contenedor">
            <div>
                <img width="150" class = "ïmg-carrito" src = "${img}"/>
            </div>
            <div>
                <p>Producto: ${nombre}</p>
                <p>Precio: ${precio}</p>
                <p>Cantidad: ${cantidad}</p>

                <button  onclick="eliminarProducto(${id})" class = "btn btn-danger mb-3"> Eliminar Producto </button>
            </div>
        </div>
        `

    })

    //NO SE ENCUENTRAN PRODUCTOS EN EL CARRITO
    if(carrito.length === 0){
        modalBody.innerHTML=`
        <p class="text-center text-primary">No selecciono ningun curso</p>
        `
    }else{
        
    }

    //INCREMENTAR NUMERO DE CARRITO
    carritoContenedor.textContent = carrito.length;

    //2 TOTAL
    total.innerText = carrito.reduce((acc, curso) => acc + curso.cantidad * curso.precio, 0)
    guardarLS()
}
//FUNCIONALIDAD AL BOTON ELIMNAR CURSO DEL CARRITO

function eliminarProducto(id){
    const cursoId = id
    carrito = carrito.filter ((curso) => curso.id !== cursoId)
    mostrarCarrito()
}

//GUARDADO EN LOCALSTORAGE

function guardarLS(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}