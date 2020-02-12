function probarValidarNombre() {
    console.assert(
        validarNombre('') === "Este campo debe tener al menos un caracter",
        'ValidarNombre no validó que el nombre no sea vacío'
    );

    console.assert(
        validarNombre('111111111111111111111111111111111111111111111111111111111111111111111111') === "Este campo debe tener menos de 50 caracteres",
        'ValidarNombre no validó que el nombre sea menor a 50 caracteres'
    );

    console.assert(
        validarNombre(12345) === "El campo nombre solo acepta letras",
        'ValidarNombre no validó que el nombre solo tenga letras'
    );

    console.assert(
        validarNombre('Leandro') === "",
        'ValidarNombre falló con un nombre válido'
    );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('Formosa') === '',
        'validarCiudad no funcionó con un nombre de ciudad válido'
    )

    console.assert(
        validarCiudad('') === 'El campo ciudad no puede estar vacío',
        'validarCiudad no mostró un error cuando la ciudad es vacía'
    )
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'El campo descripcion es muy largo',
        'validarDescripcionRegalo no validó que la descripcion del regalo tenga menos de 100 caracteres'
    )

    console.assert(
        validarDescripcionRegalo('') === 'El campo descripción no puede estar vacío',
        'valirdarDescripcionRegalo no validó que la descripcion del regalo no este vacía'
    )

    console.assert(
        validarDescripcionRegalo('Quiero 3 $##&') === 'El campo descripción solo puede tener numeros y letras',
        'valirdarDescripcionRegalo no validó que la descripcion solo contenga numeros y letras'
    )

    console.assert(
        validarDescripcionRegalo('quiero una patineta') === '',
        'La función validar descripcion regalo no funcionó con una descripción correcta'
    )
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();

