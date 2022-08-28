// ARRAYS
var arrayData = new Array()
var arrayData2 = new Array()
var arrayData3 = new Array()
var arrayData4 = new Array()
var arrayData5 = new Array()
    // TRANSFORMAR TXT A TEXTO
var archivoTxt = new XMLHttpRequest()
var fileRuta = 'prueba.txt'
archivoTxt.open("GET", fileRuta, false)
archivoTxt.send(null)
    // VARIABLES VARIOS
var espacioTxt = document.querySelector('.texto')
var newTxt
var txt = archivoTxt.responseText
var separadas
var arraySeparadoSinEspacios

// CUANTIFICACIONES PARA LAS TERMINACIONES 
var patron = /\d{2}$/i
var patron2 = /[A-Z]{2}$/i
var patron3 = /[A-Z]+\d$/i
var patron4 = /\d+[A-Z]$/i

console.log("TEXTO ORIGNAL", txt)
quitarEspacios(txt)

// QUITAR LOS EXPACIOS
function quitarEspacios(txt) {
    newTxt = (txt.replace(/\s/g, ''))
    return newTxt
}
console.log("TEXTO SIN ESPACIOS", newTxt);
// SEPARAR EL TEXTO POR MEDIO DE | Y GUARDAR ELEMENTOS EN ARRAY
separadas = newTxt.split('|')
console.log("ARRAY CON SEPARACIONES", separadas)
    // QUITAR LOS ELEMENTOS VACIOS DEL ARRAY
arraySeparadoSinEspacios = separadas.filter(Boolean)
console.log("ARRAY CON SEPARACIONES Y SIN ELEMENTOS VACIOS", arraySeparadoSinEspacios)

// DEFINIR LOS ARRAYS POR MEDIO DE LAS CUANTIFICACIONES
for (let i = 0; i < arraySeparadoSinEspacios.length; i++) {
    if (patron.test(arraySeparadoSinEspacios[i])) {
        arrayData.push(arraySeparadoSinEspacios[i])
    } else if (patron2.test(arraySeparadoSinEspacios[i])) {
        arrayData2.push(arraySeparadoSinEspacios[i])
    } else
    if (patron3.test(arraySeparadoSinEspacios[i])) {
        arrayData3.push(arraySeparadoSinEspacios[i])
    } else
    if (patron4.test(arraySeparadoSinEspacios[i])) {
        arrayData4.push(arraySeparadoSinEspacios[i])
    } else {
        arrayData5.push(arraySeparadoSinEspacios[i])
    }
}

// IMPRESION DE ARRAYS
console.log("ARRAY CON TERMINACION DOS NUMEROS", arrayData)
console.log("ARRAY CON TERMINACION DOS LETRAS", arrayData2)
console.log("ARRAY CON TERMINACION UNA LETRA Y UN DIGITO", arrayData3)
console.log("ARRAY CON TERMINACION UN DIGITO Y UNA LETRA", arrayData4)
console.log("ARRAY CON TERMINACION REVUELTA", arrayData5)

// TRANSFORMACION DE ARRAYS A STRINGS
let texto1 = arrayData.join("\n")
let texto2 = arrayData2.join("\n")
let texto3 = arrayData3.join("\n")
let texto4 = arrayData4.join("\n")
let texto5 = arrayData5.join("\n")
console.log("TEXTO 1 \n", texto1)
console.log("TEXTO 2 \n", texto2)
console.log("TEXTO 3 \n", texto3)
console.log("TEXTO 4 \n", texto4)
console.log("TEXTO 5 \n", texto5)

// TRANSFORMAR A .TXT
const guardarArchivoDeTexto = (contenido, nombre) => {
    const a = document.createElement("a");
    const archivo = new Blob([contenido], { type: 'text/plain' });
    const url = URL.createObjectURL(archivo);
    a.href = url;
    a.download = nombre;
    a.click();
    URL.revokeObjectURL(url);
}
const $botonDescargar = document.querySelector("#descargar");
$botonDescargar.onclick = () => {
    guardarArchivoDeTexto(texto1, "b_11.txt");
    guardarArchivoDeTexto(texto2, "a_AA.txt");
    guardarArchivoDeTexto(texto3, "c_A1.txt");
    guardarArchivoDeTexto(texto4, "d_1A.txt");
    guardarArchivoDeTexto(texto5, "e_1A1.txt");
}

espacioTxt.innerHTML = newTxt