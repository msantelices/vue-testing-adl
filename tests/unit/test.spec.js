import { sumar, filtrarArreglo, crearUsuario } from './test.js'

// Describo mi lista de tests
describe('Pruebas para el archivo test.js', ()=> {

    // Describo mi prueba unitaria
    test('La funcion sumar debe retornar 3 si se ingresan los valores 1 y 2', ()=> {
        expect(sumar(1, 2)).toBe(3)
    })

    test('La funcion filtrarArreglo debe retornar un arreglo sin elemento especificado', ()=> {
        let arr = [1, 2, 3, 4, 5]
        let item = 4
        let filtrado = filtrarArreglo(arr, item)

        expect(filtrado).not.toContain(item)
    })

    test('La funcion crearUsuario debe retornar un objeto con los datos del usuario', ()=> {
        let nombre = 'Susana'
        let apellido = 'Horia'
        let rut = '12.345.678-9'

        let usuario = crearUsuario(nombre, apellido, rut)

        expect(usuario).toEqual({nombre, apellido, rut})
    })

})