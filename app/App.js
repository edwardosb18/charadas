import { arregloString } from "./helpers/arregloSting.js";
import { azar } from "./helpers/azar.js";

export function App(){
const alazar=document.getElementById("alazar")
const lista=document.querySelector(".lista")
const arreglo=[]
let guardado
let html=""



if(localStorage.getItem("palabrasAdivinar")==="vacio" || !localStorage.getItem("palabrasAdivinar")){
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



        e.preventDefault()

  arreglo.push(e.target.propuestas.value)
  e.target.propuestas.value=""
  e.target.propuestas.focus()


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


        azar(JSON.parse(localStorage.getItem("palabrasAdivinar")))
       }
})

   
}

/*-----------------------------------*/

document.addEventListener("reset",()=>{
    localStorage.setItem("palabrasAdivinar","vacio")
    location.reload()
})

