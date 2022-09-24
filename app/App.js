import { arregloString } from "./helpers/arregloSting.js";
import { azar } from "./helpers/azar.js";

export function App(){
const alazar=document.getElementById("alazar")
const lista=document.querySelector(".lista")
const arreglo=[]
let guardado
let html=""
let list=""



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


        azar(JSON.parse(localStorage.getItem("palabrasAdivinar")))
       }
})

   
}





/*-----------------------------------*/

document.addEventListener("reset",()=>{
    localStorage.setItem("palabrasAdivinar","vacio")
    location.reload()
})

