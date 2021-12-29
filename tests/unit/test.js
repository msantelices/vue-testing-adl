const sumar = (a, b)=> {
    return a + b
}

const filtrarArreglo = (arr, item)=> {
    return arr.filter((element)=> element !== item)
}

const crearUsuario = (nombre, apellido, rut)=> {
    let usuario = {nombre, apellido, rut}
    return usuario
}

export { sumar, filtrarArreglo, crearUsuario }