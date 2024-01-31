import { molengeekinfo,formations,partenaires,molengeekLogo,logoheader,burgericon,burger,imgpartenaires } from './instance.js'

burgericon.addEventListener("click",()=>{
    burger.classList.toggle("burger")
    
})

let slide=[partenaires.bxFormation.logo,partenaires.pwc.logo,partenaires.aws.logo,partenaires.Microsoft.logo,partenaires.google.logo,partenaires.proximus.logo,partenaires.actiris.logo,partenaires.meta.logo]
let numero = 0 

function changeslide() {
    numero=numero+1
    if (numero > slide.length -1) {
        numero = 0
    }
    console.log(numero);
    
    imgpartenaires.src = slide[numero]
}


setInterval(changeslide,1000)


logoheader.src=molengeekLogo
imgpartenaires.src=partenaires.bxFormation.logo

console.log(partenaires.pwc.logo);
// console.log(formations.formationsLongues);
// console.log(formations.formationsCourtes);
