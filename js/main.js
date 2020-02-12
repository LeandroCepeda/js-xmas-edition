//VALIDACIÓN DE FORMULARIOS //CONSIGNAS EN js-xmas-edition.nivel1.md 

//const nombre = $form.nombre.value; // dentro del form busca name = "nombre";
// Tambien se puede escribir como: 
// const $nombre = document.querySelector('[name = nombre]').value;

//const ciudad = $form.ciudad.value;


//Como son input de tipo Radio, si los selecciono usando el querySelectorAll, no puedo saber cual es el input que esta seleccionado, es por eso que tengo que usar esta forma. 
//Usando querySelectorAll me devuelve => NodeList(3) [input, input, input]
//Usando $form.atributteName => // RadioNodeList(3) [input, input, input, value: "maso"]

//const compartamiento = $form.comportamiento.value;


//const descripcionRegalo = $form['descripcion-regalo'].value; // En este caso name="descripcion-regalo", por lo que tengo que escribirlo entre corchetes y comillas


//EXPRESIONES REGULARES PARA VALIDACIONES

// /abc/ -> Es un objeto de Tipo Expresion Regular por lo que tiene metodos.
// `const contieneSoloLetras = /^[A-z]+$/.test(valor);`
// /^abc/ (^ me dice que el texto tiene que comenzar con "abc")
// [A-z]+ (acepta caracteres de la A a la z sin importar mayusculas ni minusculas,  el "+" significa que quiero 1 o mas, "*" es 0 o mas,{1} quiero un caracter, {1,3} rango de 3 numeros (1,2 o 3))
// $, indica que quiero que la cadena termine en ese momento.
// /[a-z]+/i -> si pongo "i" al finalizar la expresion regular, significa que no me importa si es mayuscula o minuscula.


//VALIDACIONES

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos un caracter';
    }

    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }

    if (!/^[a-z]+$/i.test(nombre)) {
        return 'El campo nombre solo acepta letras';
    }

    return '';
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return 'El campo ciudad no puede estar vacío';
    }

    return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return 'El campo descripción no puede estar vacío';
    }

    if (descripcionRegalo.length >= 100) {
        return 'El campo descripcion es muy largo'
    }

    //acepta cualquier numero,letras,comas,puntos,guion-bajo.
    if (!/^[a-z0-9,\._ ]+$/i.test(descripcionRegalo)) {

        return "El campo descripción solo puede tener numeros y letras";
    }

    return '';
}

function validarFormulario(event) {
    const $form = document.querySelector('#carta-a-santa');

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    //const compartamiento = $form.comportamiento.value; //no se valida,siempre hay algo elegido
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        "descripcion-regalo": errorDescripcionRegalo
    };

    const esExito = (manejarErrores(errores) === 0);

    if (esExito) {
        $form.className = "oculto";
        const $exito = document.querySelector('#exito');
        $exito.className = "";
        setTimeout(function(){location.href="wishlist.html"} , 5000);
    }

    event.preventDefault();
}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;

    $errores.innerHTML ="";

    keys.forEach(function (key) {
        const error = errores[key];

        if (error) {
            cantidadErrores++;
            $form[key].className = "error"; //los keys deben ser iguales a los "name" de html

            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        } else {
            $form[key].className = "";
        }
    })

    return cantidadErrores;
}

const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;
