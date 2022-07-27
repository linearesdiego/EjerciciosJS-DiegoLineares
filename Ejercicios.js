function cacheFunction(cb) {
    // Usa closures para crear un cache para la funcion cb.
    // la funcion que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
    // cuando la funcion que hayas retornado es invocada de nuevo, deberia guardar el argumento y el resultado de la invocacion
    // cuando la funcion que retornaste sea invocada de nuevo con un argumento con el cual se habia invocado anterioremente, no deberia invocar de nuevo a cb
    // deberia retornar el resultado (previamente guardado)
    // Ejemplo:
    // cb -> function(x) { return x * x; }
    // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
    // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
    // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
    // Aqui tu codigo


}

function CadenaInvertida(str) {
    // Instrucción:
    // Dada una cadena, escriba una función recursiva para devolver la cadena invertida. */// Ejemplo:
    // => 'divoco'
    //cadena inversa('covid')
    // Aqui tu codigo
    if(str === '') return ''
    else CadenaInvertida(str.substr(1)) + str.charAt(0)
    

}
console.log(CadenaInvertida('Santiago'))

function EnteroMasGrande(array) {
    // Instruction:
    //Dada una matriz, escriba una función recursiva para encontrar el entero más grande en una matriz. */// Ejemplos:
    //maxOf([1, 4, 5, 3])
    // => 5
    //maxOf([3, 1, 6, 8, 2, 4, 5])
    // => 8
    //Aqui tu codigo
    if(array.length === 1) return array[0]
    if (array[1] > array[0]) array.splice(0,1)
    else array.splice(1,0)

    return EnteroMasGrande(array)


}
console.log(EnteroMasGrande([3,1,6,8,2,4,5]))
function Permutaciones(str){
    
// Instrucción:
//Dada una cadena, escriba una función recursiva para imprimir una matriz de todas las permutaciones posibles de la cadena. */// Ejemplos:
//permutaciones('abc')
// => ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
//permutaciones('aabc')
// => ["aabc", "aacb", "abac", "abca", "acab", "acba", "baac", "baca", "bcaa", "caab", "caba", " cbaa"]
//Aqui tu codigo
 }