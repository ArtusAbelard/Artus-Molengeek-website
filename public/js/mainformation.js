import { titreformcourte,formations,pack,buttonformation,fromcourtes,formlongues,firstli,li2,li3,li4,li5,li6,titrelongues,testimonial1,videosTemoignage,faq,faqli,faqli1 } from "./instance.js";

for (let i = 0; i < titreformcourte.length; i++) {
    titreformcourte[i].innerHTML=formations.formationsCourtes[i].nom 
    pack[i].innerHTML=formations.formationsCourtes[i].pack
}
buttonformation[0].addEventListener('click', ()=>{
    fromcourtes[0].style.display="block"
    formlongues[0].style.display="none"
})
buttonformation[1].addEventListener('click', ()=>{
    fromcourtes[0].style.display="none"
    formlongues[0].style.display="block"
})


console.log(formations.formationsLongues.codingSchool.nom);


titrelongues[0].innerHTML=formations.formationsLongues.codingSchool.nom
titrelongues[1].innerHTML=formations.formationsLongues.marketingDigital.nom
titrelongues[2].innerHTML=formations.formationsLongues.webmaster360.nom
titrelongues[3].innerHTML=formations.formationsLongues.aws.nom
titrelongues[4].innerHTML=formations.formationsLongues.salesforceAdmin.nom

firstli[0].innerHTML=formations.formationsLongues.codingSchool.descriptif
firstli[1].innerHTML=formations.formationsLongues.marketingDigital.descriptif
firstli[2].innerHTML=formations.formationsLongues.webmaster360.descriptif
firstli[3].innerHTML=formations.formationsLongues.aws.descriptif
firstli[4].innerHTML=formations.formationsLongues.salesforceAdmin.descriptif

li2[0].innerHTML=formations.formationsLongues.codingSchool.duree
li2[1].innerHTML=formations.formationsLongues.marketingDigital.duree
li2[2].innerHTML=formations.formationsLongues.webmaster360.duree
li2[3].innerHTML=formations.formationsLongues.aws.duree
li2[4].innerHTML=formations.formationsLongues.salesforceAdmin.duree

li3[0].innerHTML="max "+formations.formationsLongues.codingSchool.condition.ageMax
li3[1].innerHTML="max "+formations.formationsLongues.marketingDigital.condition.ageMax
li3[2].innerHTML="max "+formations.formationsLongues.webmaster360.condition.ageMax
li3[3].innerHTML="max "+formations.formationsLongues.aws.condition.ageMax
li3[4].innerHTML="max "+formations.formationsLongues.salesforceAdmin.condition.ageMax

li4[0].innerHTML="status "+formations.formationsLongues.codingSchool.condition.situation
li4[1].innerHTML="status "+formations.formationsLongues.marketingDigital.condition.situation
li4[2].innerHTML="status "+formations.formationsLongues.webmaster360.condition.situation
li4[3].innerHTML="status "+formations.formationsLongues.aws.condition.situation
li4[4].innerHTML="status "+formations.formationsLongues.salesforceAdmin.condition.situation

li5[0].innerHTML=formations.formationsLongues.codingSchool.condition.prix
li5[1].innerHTML=formations.formationsLongues.marketingDigital.condition.prix
li5[2].innerHTML=formations.formationsLongues.webmaster360.condition.prix
li5[3].innerHTML=formations.formationsLongues.aws.condition.prix
li5[4].innerHTML=formations.formationsLongues.salesforceAdmin.condition.prix

li6[0].innerHTML=formations.formationsLongues.codingSchool.condition.horaire
li6[1].innerHTML=formations.formationsLongues.marketingDigital.condition.horaire
li6[2].innerHTML=formations.formationsLongues.webmaster360.condition.horaire
li6[3].innerHTML=formations.formationsLongues.aws.condition.horaire
li6[4].innerHTML=formations.formationsLongues.salesforceAdmin.condition.horaire

testimonial1[0].src=videosTemoignage.videoI
testimonial1[1].src=videosTemoignage.videoII

faqli1
faqli
faq 

faqli[0].innerHTML=faq.questionI
faqli[1].innerHTML=faq.questionII
faqli[2].innerHTML=faq.questionIII
faqli[3].innerHTML=faq.questionIV
faqli[4].innerHTML=faq.questionV

faqli1[0].innerHTML=faq.reponseI
faqli1[1].innerHTML=faq.reponseII
faqli1[2].innerHTML=faq.reponseIII
faqli1[3].innerHTML=faq.reponseIV
faqli1[4].innerHTML=faq.reponseV





