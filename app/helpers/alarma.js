export const alarma=(finalidad,etiqueta,audio)=>{

    const pp=document.querySelector(etiqueta)

    const g=setInterval(()=>{
    
    console.log("first")
    
    
        let limite=finalidad-new Date().getTime()
    
    
    let min=Math.floor(limite/(1000*60))
    let seg=Math.floor((limite%(1000*60))/(1000))
    
        pp.innerHTML=`faltan ${min}:${seg}`
    
    
    if(limite<0){
        clearInterval(g)
        pp.innerHTML=`termino tu tiempo `
        audio.pause()
        console.log("fin")
    }
    
    },1000)
    
    
    
     
    
    
    }
    
    
    