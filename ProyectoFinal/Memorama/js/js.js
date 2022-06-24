let cantidadTarjetas = 4
let Movimientos = 0;
let mov = document.getElementById("movi")
let iconos = []
let selecciones = []

generarTablero()

function cargarIconos() {
    iconos = [
        '<img src="./img/250px-Jwycliffejmk.jpg" width="100%">',
        '<img src="./img/640px-Arthur_G._Daniells.jpg" width="100%">',
        '<img src="./img/descarga (1).jpg" width="100%">',
        '<img src="./img/descarga (2).jpg" width="100%">',
        '<img src="./img/descarga (3).jpg" width="100%">',
        '<img src="./img/descarga (4).jpg" width="100%">',
        '<img src="./img/descarga (5).jpg" width="100%">',
        '<img src="./img/descarga (6).jpg" width="100%">',
        '<img src="./img/descarga (7).jpg" width="100%">',
        '<img src="./img/dudley-m-canright.jpg" width="100%">',
        '<img src="./img/GuillermoMiller.jpg" width="100%">',
        '<img src="./img/JaimeWhite.jpg" width="100%">',
        '<img src="./img/JohnKnox.jpg" width="100%">',
        '<img src="./img/RAQUELPRESTON.jpg" width="100%">',
        '<img src="./img/imagen-de-john-harvey-kellogg-tomada-en-1915_ed672898_412x554.jpg" width="100%">',

    ]
}

function generarTablero() {
    cargarIconos()
    let len = iconos.length
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []

    for (let i = 0; i < len * 2; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${iconos[0]}
                </div>
                <div class="cara superior">
                    '<img id="atras" src="./img/Emblema_del_Club_de_Conquistadores.svg.png" width="90%">'
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            iconos.splice(0, 1)

        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
    Movimientos = 0;
    mov.innerHTML = ('0');



}

function seleccionarTarjeta(i) {

    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
        Movimientos++;
        console.log(Movimientos)
        mov.innerHTML = Movimientos;

    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        } else {
            trasera1.style.background = "plum"
            trasera2.style.background = "plum"
        }
        if (verificarFin()) {
            swal.fire({
                title: `El juego ha finalizado`,
                text: `Movimientos Realizados: ` + Movimientos,
                icon: `success`
            })
        }
    }, 1000);
}

function verificarFin() {
    for (let i = 0; i < cantidadTarjetas; i++) {
        let trasera = document.getElementById("trasera" + i)
        if (trasera.style.background != "plum") {

            return false
        }
    }
    return true
}