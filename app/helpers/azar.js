export function azar(arreglo){

    const adivinar=arreglo
    let azar=Math.floor((Math.random())*adivinar.length)
    
    return adivinar[azar]

    
}
