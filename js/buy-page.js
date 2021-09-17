function precioEntradas (a,b){
  let totalEntradas = a * b;
  console.log(totalEntradas);
  return totalEntradas;
};
function renderPeli() {
const nombrePelicula = localStorage.getItem('pelicula') ? localStorage.getItem('pelicula') : '';
const peliculas = localStorage.getItem('peliculas') ? JSON.parse(localStorage.getItem('peliculas')) : [];

if(!nombrePelicula || peliculas.length === 0) {
  $(".infoPeli").append(
    `<img src="resources/unavailable.svg" alt="">
    <h2>Nombre Película</h2>
    <p>Duis ullamco irure ex fugiat enim incididunt esse magna officia aliquip ipsum occaecat. 
    Do tempor exercitation irure sint sint laboris minim nulla. Culpa minim nostrud mollit labore aliqua 
    qui incididunt qui Lorem duis pariatur ipsum consequat tempor. Anim cillum dolore minim fugiat in velit cupidatat. 
    Ex in ullamco aliqua laboris ex dolor ut duis dolor ipsum aliqua laboris fugiat.</p>
    <h3>Duración: 115 minutos</h3>
    <h3>Director: Fulano Mengano</h3>`);
  return;
}
const pelicula = peliculas.find(peli => peli.nombre === nombrePelicula);
$(".infoPeli").html(
  `<img src="${pelicula.img}" alt="${pelicula.nombre}">
  <h2>${pelicula.nombre}</h2>
  <p>${pelicula.descripcion}</p>
  <h3>Duración: ${pelicula.duracion}</h3>
  <h4>Director: ${pelicula.director}</h3>`);
const horarios = pelicula.horario.split(', ');
let horasBtn = '';
horarios.forEach(hora => {
  horasBtn += `
    <button class="btn-horarios" value="${hora}">${hora}</button>
  `;
  return horasBtn;
})

$('#horariosPelis').html(horasBtn)
}
$(document).ready(function(){
renderPeli();
  const inputsCompra = document.querySelectorAll('.input-compra');
  const form = document.querySelector('#buyTicket');
  const numeroEntradas = document.getElementById("numEntradas");
  const modal = document.getElementById("modalTotal");
  const span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }
  $(".btn-horarios").click((e)=>{
    e.preventDefault();
    $("#qEntradas").slideDown();
    $("#divCard").slideDown();
    let horaElegida = e.target.value;
    console.log(horaElegida);
  });
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  let dataComprador = {
    name:'',
    email:'',
    telefono: '',
    entradas: ''
  }
  inputsCompra.forEach(input => {
    input.addEventListener('change', (e) => {
      dataComprador = {
        ...dataComprador,
        [e.target.name]: e.target.value
      }
    })
  });
  numeroEntradas.addEventListener('change', e => {
    dataComprador = {
      ...dataComprador,
      [e.target.name]:e.target.value
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(dataComprador);
    const total = precioEntradas(parseInt(dataComprador.entradas), 2990);
    modal.style.display = "block";
    $(".modalContenido").html(
      `<h2>${dataComprador.name}</h2>
      <p>Haz comprado ${dataComprador.entradas} entradas para esta función.</p>
      <p>Tu código para retirar en boletería llegará al correo ${dataComprador.email}.</p>
      <p>y al teléfono ${dataComprador.telefono}.</p>
      <h3>Total:${total}</h3>`
    )
    form.reset();
  })
});