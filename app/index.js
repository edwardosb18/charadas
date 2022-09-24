import { App } from "./App.js"

console.log("hola mundo 😁")

App()

let nombre =["edward","osbert","santamaria","benites"]

const k=nombre.findIndex((e)=>e==="santamaria")


const f=nombre.filter((e)=>!(e===nombre[k]) )


console.log(f)

