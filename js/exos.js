/**
 *  Challenge Quizz
 *
 * Pour ce challenge, suit les instructions dans le fichier README.md
 * Et écris ton code ici même !
 */

/* Exo 1 */
// Ton code ici...

var question1 = "Quelle mer borde la ville de Sébastopol ?";
var solution1 = "la mer Noire";

/* Exo 2 */
// Ton code ici...

var result = 0;

var reponse1 = prompt(question1);

if (reponse1 === solution1) {
  result++;
  alert("Gagné 🎉");
} else {
  alert("Perdu 🧨");
}

/* Exo 3 */
// Ton code ici...

var question2 = "Quel est l'âge du capitaine ?";
var solution2 = 63;

var reponse2 = prompt(question2);

if (reponse2 == solution2) {
  result++;
  alert("Gagné 🎉");
} else {
  alert("Perdu 🧨");
}

alert(`Vous avez ${result} bonnes réponses`);
