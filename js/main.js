
/*En esta constante creamos un objeto que representa una grilla que contiene todas las peliculas que actualmente se muestran en el cine ficticio
sus horarios, nombre y poster*/
const grillaPelis = [
    {nombre: "Black Widow", horario: "16:30, 18:45, 20:55", img:"resources/widow.jpg", price: 2990, duracion: "101 minutos", director: "Cate Shortland", descripcion: "Perseguida por una fuerza que no se detendrá ante nada para acabar con ella, Natasha debe lidiar con su historia como espía y con la estela de relaciones destruidas que dejó atrás mucho antes de convertirse en Vengadora."},
    {nombre: "El Conjuro: El Diablo Me<br>Obligó a Hacerlo", horario: "15:10, 17:40, 19:20", img:"resources/conjuro.jpg", price: 2990, duracion: "122 minutos", director: "Michael Chaves", descripcion:"Uno de los casos más insólitos de los archivos de Ed y Lorraine Warren comienza con la batalla por el alma de un niño, la cual los lleva a algo nunca antes visto."},
    {nombre: "The Suicide Squad", horario: "15:45, 18:30, 21:10", img:"resources/suicide.jpg", price: 2990, duracion: "215 minutos", director: "James Gunn", descripcion:"Te presentamos Belle Reve, la prisión infernal con la mayor tasa de mortalidad de los EE. UU. donde se encuentran los peores supervillanos, que harán lo que sea para salir, incluso unirse al escuadrón supersecreto Fuerza Especial X."},
    {nombre: "Venom: Habrá Matanza", horario: "16:10, 18:55, 20:40", img: "resources/venom.jpg", price: 2990, duracion: "124 minutos", director: "Andy Serkis", descripcion:"Eddie Brock deberá acostumbrarse a vivir con el simbionte, pero cuando parece que se está convirtiendo en el protector de San Francisco, una nueva amenaza surge: ¡Carnage!."},
    {nombre: "Halloween Kills", horario: "17:40, 20:30, 22:10", img: "resources/halloween.jpg", price: 2990, duracion: "146 minutos", director: "David Gordon Green", descripcion:"Laurie junto a su hija Karen y su nieta Allyson iniciarán la cacería de Michael con otros habitantes de Haddonfield, tomando la justicia en sus manos para detener de una vez por todas a la personificación del mal."},
    {nombre: "Jackass Por Siempre", horario: "15:15, 17:40, 20:10", img: "resources/jackass.jpg", price: 2990, duracion: "110 minutos", director: "Jeff Tremaine", descripcion:"Johnny Knoxville, Steve-O, Preston Lacy, Wee Man, Chris Pontius, Dave England y Ehren McGhehey son algunos de los conocidos rostros que aparecen realizando todo tipo de arriesgadas acrobacias y ridículas bromas."},
    {nombre: "Top Gun: Maverick", horario: "15:55, 16:35, 18:50", img: "resources/top-gun.jpg", price: 2990, duracion: "148 minutos", director: "Joseph Kosinski", descripcion:"Tras más de 30 años de servicio como uno de los mejores aviadores de la Armada, Pete Maverick Mitchel se encuentra dónde siempre quiso estar, empujando los límites como un valiente piloto de prueba."},
    {nombre: "Matrix: Resurrecciones", horario: "18:00, 20:20, 22:00", img: "resources/matrix.jpg", price: 2990, duracion: "109 minutos", director: "Lana Wachowski", descripcion:"Cuarta entrega de la franquicia Matrix en la que Neo y Trinity se embarcarán en una nueva misión."},
    {nombre: "Spiderman: Sin Camino<br> A Casa", horario: "17:00, 19:20, 21:00", img: "resources/spiderman.jpg", price: 2990, duracion: "156 minutos", director: "Jon Watts", descripcion:"Secuela de Spider-Man: Lejos de casa basada en los cómics de Stan Lee y Steve Ditko."},
    {nombre: "Sing 2", horario: "14:15, 16:30, 18:00", img: "resources/sing-2.jpg", price: 2990, duracion: "122 minutos", director: "Garth Jennings", descripcion:"Buster Moon ama su teatro y es capaz de cualquier cosa para salvarlo. Sabe que su sueño está a punto de desaparecer y solo tiene una oportunidad: organizar el concurso de canto más grande del mundo."},
    {nombre: "Amor Sin Barreras", horario: "17:20, 19:45, 21:50", img: "resources/wss.jpg", price: 2990, duracion: "133 minutos", director: "Steven Spielberg", descripcion:"Transporta el Romeo y Julieta de Shakespeare a la ciudad de Nueva York, en donde dos jóvenes enamorados se ven atrapados por el enfrentamiento entre dos bandas callejeras, los Americanos Jets y los Puertorriqueños Sharks."},
    {nombre: "The Batman", horario: "18:10, 20:35, 22:20", img: "resources/batman.jpg", price: 2990, duracion: "98 minutos", director: "Matt Reeves", descripcion:"En su segundo año luchando contra el crimen, Batman explora la corrupción existente en la ciudad de Gotham y el vínculo de esta con su propia familia. Además, entrará en conflicto con un asesino en serie conocido como El Acertijo."}
];
function verMas(pelicula) {
    localStorage.setItem('pelicula', pelicula);
    window.location = 'buy-page.html';
}
//Ya que estamos trabajando con tantas imágenes agregamos ready() para ayudar a la carga
$(document).ready(function() {
    localStorage.setItem('peliculas', JSON.stringify(grillaPelis));
    //El botón "Comprar" va a direccionar al hacer click a la página donde se compra
    $(".btn-horarios").click((e) => {
        e.preventDefault();
        window.location = "buy-page.html";
    });
    //Se instancia cada película a partir de la grilla
    for (const pelicula of grillaPelis){
    //A través de del js minificado se crea una card para cada película en el div de nombre "grilla"
    $("#grilla").append(    
        `<div id="cardPeli">
        <img src="${pelicula.img}" alt="${pelicula.nombre}">
        <h2>${pelicula.nombre}</h2>
        <button class="btn-horarios" onclick="verMas('${pelicula.nombre}')">Ver Horarios</button></div>`);
    }
});
