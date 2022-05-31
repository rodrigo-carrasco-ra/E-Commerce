

// abrir carro modal
const carro = document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.cart-modal-overlay');

carro.addEventListener('click', () => {
  if (cartModalOverlay.style.transform === 'translateX(-100%)'){
    cartModalOverlay.style.transform = 'translateX(0)';
  } else {
    cartModalOverlay.style.transform = 'translateX(-100%)';
  }
})
// fin

// cerrar carro modal
const cerrarBtn = document.querySelector ('#close-btn');

cerrarBtn.addEventListener('click', () => {
  cartModalOverlay.style.transform = 'translateX(-200%)';
});

cartModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-modal-overlay')){
    cartModalOverlay.style.transform = 'translateX(-200%)'
  }
})
// fin

// agregar productos al carrito
const agregarAlCarro = document.getElementsByClassName('add-to-cart');
const productoFila = document.getElementsByClassName('product-row');

for (var i = 0; i < agregarAlCarro.length; i++) {
  boton = agregarAlCarro[i];
  boton.addEventListener('click', agregarClicked)
}

function agregarClicked (event) {
  boton = event.target;
  var carroArticulo = boton.parentElement;
  var precio = carroArticulo.getElementsByClassName('product-price')[0].innerText;
  
  var imagenSrc = carroArticulo.getElementsByClassName('product-image')[0].src;
  agregar (precio, imagenSrc);
  actualizarCarro()
}

function agregar (precio, imagenSrc) {
  var productoFila = document.createElement('div');
  productoFila.classList.add('product-row');
  var productoFilas = document.getElementsByClassName('product-rows')[0];
  var carroImagen = document.getElementsByClassName('cart-image');
  
  for (var i = 0; i < carroImagen.length; i++){
    if (carroImagen[i].src == imagenSrc){
      alert ('Este artículo ya está en el carrito.')
      return;
    }
  }
  
  var carroFilaArticulos = `
  <div class="product-row">
        <img class="cart-image" src="${imagenSrc}" alt="">
        <span class ="cart-price">${precio}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Borrar</button>
        </div>
        
      `
  productoFila.innerHTML = carroFilaArticulos;
  productoFilas.append(productoFila);
  productoFila.getElementsByClassName('remove-btn')[0].addEventListener('click', sacarArticulo)
  productoFila.getElementsByClassName('product-quantity')[0].addEventListener('change', cambiarCantidad)
  actualizarCarro()
}
// fin

// remover productos del carrito
const sacarBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < sacarBtn.length; i++) {
  boton = sacarBtn[i]
  boton.addEventListener('click', sacarArticulo)
}

function sacarArticulo (event) {
  btnClicked = event.target
  btnClicked.parentElement.parentElement.remove()
  actualizarCarro()
}

//fin

// actualizar cantidad
var cantidadInput = document.getElementsByClassName('product-quantity')[0];

for (var i = 0; i < cantidadInput; i++){
  input = cantidadInput[i]
  input.addEventListener('change', cambiarCantidad)
}

function cambiarCantidad(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  actualizarCarro()
}
// fin

//actualizar el total
function actualizarCarro() {
  var total = 0
  for (var i = 0; i < productoFila.length; i += 2) {
    carroFila = productoFila[i]
  var precioElement = carroFila.getElementsByClassName('cart-price')[0]
  var cantidadElement = carroFila.getElementsByClassName('product-quantity')[0]
  var precio = parseFloat(precioElement.innerText.replace('$', ''))
  var cantidad = cantidadElement.value
  total = total + (precio * cantidad )
    
  }
  document.getElementsByClassName('total-price')[0].innerText =  '$' + total

document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2
}
// fin

// comprar articulo

const comprarBtn = document.querySelector('.purchase-btn');

const closeCartModal = document.querySelector('.cart-modal');

comprarBtn.addEventListener('click', comprarBtnClicked)

function comprarBtnClicked () {
  alert ('Gracias por su compra');
  cartModalOverlay.style.transform= 'translateX(-100%)'
 var carroArticulos = document.getElementsByClassName('product-rows')[0]
 while (carroArticulos.hasChildNodes()) {
   carroArticulos.removeChild(carroArticulos.firstChild)
   
 }
  actualizarCarro()
}
// fin

const matrix=[
  [01,"Codex: Marines Espaciales",43990,'98 hojas de datos que cubren las unidades disponibles para cada Capítulo',12],
  [02,"Patrulla de Combate: Marines Espaciales",109990,"Una fuerza de tamaño Patrulla en una caja, ¡diseñada para ahorrarte dinero!",10],
  [03,'Capitán en armadura Gravis',31990,'Una elección de Cuartel General indomable para tu ejército de Marines Espaciales.',50]
  [04,'Capitán rifle bolter pesado artesanal',30990,'Del Cuartel General. Armado con armadura Mk X Gravis y rifle bólter pesado artesanal',20]
  [05,'Primaris Intercesores',49990,'10 miniaturas multicomponentes para estar en primera fila.',50]
  [06,'Escuadrón Táctico',29990,'Controlan terreno y proporcionan fuego de apoyo y se lanzan al cuerpo a cuerpo, según dicten las necesidades del momento',45]
  ]

