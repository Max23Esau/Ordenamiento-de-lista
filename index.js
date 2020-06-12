// Opcion 1
var lista = [5, 2, 4, 1]
var listaOrdenada = []

if(lista[0] == 5){
    listaOrdenada[3] = 5
}
if(lista[1] == 2){
    listaOrdenada[1] = 2
}
if(lista[2] == 4){
    listaOrdenada[2] = 4
}
if(lista[3] == 1){
    listaOrdenada[0] = 1
}
console.table(listaOrdenada)

// Opcion 2
var lista = [5, 2, 4, 1]

lista[0] = 1
lista[3] = 5

console.table(lista)