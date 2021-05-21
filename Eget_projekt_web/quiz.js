
/*Här är koden för funktionen "check" det är detta som kallas när man trycker på "klar" knappen*/
function check() {
  var c=0;
  var q1=document.quiz.fråga1.value;
  var q2=document.quiz.fråga2.value;
  var q3=document.quiz.fråga3.value;
  var q4=document.quiz.fråga4.value;
  var q5=document.quiz.fråga5.value;
  var q6=document.quiz.fråga6.value;
  var q7=document.quiz.fråga7.value;
  var q8=document.quiz.fråga8.value;
  var q9=document.quiz.fråga9.value;
  var q10=document.quiz.fråga10.value;
  var resultat=document.getElementById('resultat');

/*Detta är alla rätta svaren och om man har klicka i de ska 1 poäng läggas 
till på variblen c som var 0 från början*/
  if (q1=="1970") {c++}
  if (q2=="England") {c++}
  if (q3=="Ebba Grön") {c++}
  if (q4=="vänster") {c++}
  if (q5=="Sexpistols") {c++}
  if (q6=="Antimode och Anarkism") {c++}
  if (q7=="X-tas") {c++}
  if (q8=="Göra allt") {c++}
  if (q9=="Mosh") {c++}
  if (q10=="Queens") {c++}


/*Här skrivs resultatet ut och om man har fått ihop 3 eller mindre kommer 
det att komma upp en text och har man fått mer än 3 kommer det att komma upp en annan*/
   resultat.textContent=`${c}`;
  if (c<=3) {
    resultat.textContent=`Ditt reultat blev ${c} du får ta och kolla igenom hemisdan en gång till`;
  } else {
    resultat.textContent=`Ditt reultat blev ${c} Toppen!`;
  }

/*Här byts knapparna så att "klar" knappen och resultat texten blir olsynlig och "reset" knappen blir synlig*/
  document.getElementById("button").style.visibility = 'hidden';
  document.getElementById("reset").style.visibility = 'visible';
  document.getElementById("resultat").style.visibility='visible';
}

/*Här är funktionen som kallas när man tryckt på reset knappen. Där blir "klar" kanppen 
och resultat texten synlig och "reset" knappen osynlig igen*/
function byt() {
  document.getElementById("reset").style.visibility = 'hidden';
  document.getElementById("button").style.visibility = 'visible';
  document.getElementById("resultat").style.visibility='hidden';
}


