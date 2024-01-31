import { molengeekinfo,formations,partenaires,molengeekLogo,logoheader,burgericon,burger,imgpartenaires,seanceinfotitre,seanceinfop } from './instance.js'

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
  
    
    imgpartenaires.src = slide[numero]
}
setInterval(changeslide,1000)


logoheader.src=molengeekLogo
imgpartenaires.src=partenaires.bxFormation.logo
seanceinfotitre[0].innerText=formations.seancesInfos[0].date

for (let i = 0; i < seanceinfotitre.length; i++) {
    seanceinfotitre[i].innerText=formations.seancesInfos[i].date   
}
for (let i = 0; i < seanceinfop.length; i++) {
    seanceinfop[i].innerText=formations.seancesInfos[i].nom
}


// console.log(formations.formationsLongues);
// console.log(formations.formationsCourtes);


console.log(formations.seancesInfos[0].date);
console.log(seanceinfotitre[0]);




// "logo": "https://molengeek.com/wp-content/uploads/2022/02/f3f2da8615bcd41f571b40fbb5d12871.png"
