import { molengeekinfo,partenaires,molengeekLogo,logoheader,burgericon,burger,imgpartenaires,seanceinfotitre,seanceinfop,lespcontact,logofooter,sociallink,reseauxSociaux,formations } from './instance.js'

burgericon.addEventListener("click",()=>{
    burger.classList.toggle("burger")
    
})

let slide=[partenaires.bxFormation.logo,partenaires.pwc.logo,partenaires.aws.logo,partenaires.Microsoft.logo,partenaires.google.logo,partenaires.proximus.logo,partenaires.actiris.logo,partenaires.meta.logo,partenaires.cactus.logo]
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
lespcontact[0].innerText=molengeekinfo.name
lespcontact[1].innerText=molengeekinfo.address
lespcontact[2].innerText=molengeekinfo.phone
lespcontact[3].innerText=molengeekinfo.email

logofooter.src=molengeekLogo

sociallink[0].href=reseauxSociaux.facebook
sociallink[1].href=reseauxSociaux.twitter
sociallink[2].href=reseauxSociaux.instagram
sociallink[3].href=reseauxSociaux.linkedin

console.log(sociallink);



// !page formation :  


// titreformcourte[0].innerHTML=formations.formationsCourtes[0].nom



// console.log(formations.formationsCourtes[0].nom);




// "logo": "https://molengeek.com/wp-content/uploads/2022/02/f3f2da8615bcd41f571b40fbb5d12871.png"
