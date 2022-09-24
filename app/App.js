import { alarma } from "./helpers/alarma.js";
import { arregloString } from "./helpers/arregloSting.js";
import { azar } from "./helpers/azar.js";

export function App(){
    const tiempo=document.querySelector(".tiempo")
const alazar=document.getElementById("alazar")
const lista=document.querySelector(".lista")
const palabra=document.querySelector(".palabra")
const arreglo=[]
let reloj=2000
let guardado
let html=""
let list=""


const musicAletorio=["audio","audio6","audio7"]
azar(musicAletorio)
let music=azar(musicAletorio)
console.log(music)



const audio=document.createElement("audio")
audio.src=`app/assets/${music}.mp3`
audio.loop=true
console.log(audio)










/*-----------------------------------*/
// localStorage.setItem("palabra","para comenzar el juego debes de poner el tiempo")

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



/*-----------------------------------*/



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


if(e.target.className==="agregar"){
   
    console.log(e.target.className)
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


}


if(e.target.className==="tiempo"){
   e.preventDefault()
   audio.play()
console.log("first")
reloj=parseInt(e.target.tiempo.value)

console.log(reloj)


let hora=new Date().getTime()
alarma(hora+2000+(reloj*60000),".numero",audio)

}

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