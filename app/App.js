import { arregloString } from "./helpers/arregloSting.js";
import { azar } from "./helpers/azar.js";

export function App(){
const alazar=document.getElementById("alazar")
const lista=document.querySelector(".lista")
const palabra=document.querySelector(".palabra")
const arreglo=[]
let guardado
let html=""
let list=""

localStorage.setItem("palabra","comienze el juego")

if(localStorage.getItem("palabra")==="undefined" ){
    palabra.textContent="termino el juego"
}
else if(localStorage.getItem("palabra")==="vacio"){
    palabra.textContent=""

}
else if(localStorage.getItem("palabra")==="comienze el juego"){
    palabra.textContent="comienze el juego"

}
else{palabra.textContent=localStorage.getItem("palabra")}






if(localStorage.getItem("palabrasAdivinar")==="vacio" || !localStorage.getItem("palabrasAdivinar") || localStorage.getItem("palabrasAdivinar")==="[]"){
lista.innerHTML="<p>la lista esta vacia</p>"

}


 else{
 guardado=JSON.parse(localStorage.getItem("palabrasAdivinar"))


 guardado.forEach((ele)=>{
      html+=`<li>${ele}</li>`

  })

  lista.innerHTML=html

 }








/*-----------------------------------*/
document.addEventListener("submit",(e)=>{
    console.log("first")
    list=" "
     e.preventDefault()
   
  arreglo.push(e.target.propuestas.value)
  e.target.propuestas.value=""
  e.target.propuestas.focus()



  arreglo.forEach((ele)=>{
 
    list+=`<li>${ele}</li>`

})

lista.innerHTML=list



  let palabrasAdivinar=arregloString(arreglo)

  console.log(palabrasAdivinar)
  localStorage.setItem("palabrasAdivinar",palabrasAdivinar)

})






/*-----------------------------------*/

document.addEventListener("click",(e)=>{

  if(e.target.matches("#alazar")){

        if(localStorage.getItem("palabrasAdivinar")==="vacio"){

            console.log("no hay nada ")
            return
        }

        let parseado=JSON.parse(localStorage.getItem("palabrasAdivinar"))
       let suerte= azar(parseado)
       localStorage.setItem("palabra",suerte)


       const numero=parseado.findIndex((e)=>e===suerte)

       const nuevoArray=JSON.stringify(  parseado.filter((e)=>!(e===parseado[numero]) ))
       


     localStorage.setItem("palabrasAdivinar",nuevoArray)
       console.log(nuevoArray)

       location.reload()
       


       
       }
})



/*-----------------------------------*/

document.addEventListener("reset",()=>{
    localStorage.setItem("palabrasAdivinar","vacio")
    localStorage.setItem("palabra","vacio")
    location.reload()
})

}