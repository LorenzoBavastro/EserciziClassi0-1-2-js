/*Esercizio 1
creare una classe Student, con i seguenti campi:
nome, cognome, data di nascita, hobby, motto 
e i metodi:getAge() -> "$Nome ha X anni"
getMotto() -> "Il motto di $Nome e' $Motto"
Bonus:compareAge(s1, s2) ritorna true se s1 piu' vecchio
haveSameHobby(s1,s2)
 */

const Student = require('./Student');

let s1 = new Student ("Riccardo", "Di Dio", "1984", "insegnare a degli sfigati", "Faccio schifo, lo so, ma sono bravo");
let s2 = new Student ("Francesco", "Bertolini", "2001", "rubare nei supermercati", "le cose rubate sono piú buone");
let s3 = new Student ("Daniele", "Madeddu", "1992", "leggere manga", "la vita è il nemico");

s1.getMotto();
s1.getAge();
console.log(s1.haveSameHobby(s2.getHobby));
console.log(s1.compareAge(s2.getAge()));
