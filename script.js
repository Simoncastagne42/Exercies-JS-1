// exercie 1
// let guytou = "guytou";
// alert(guytou);

// exercice 2

// let LastName = "Doe";
// let FirstName = "John";
// let city = "New-York";
// window.confirm(
//   "Nom :  " +
//     LastName +
//     "\n" +
//     "Prénom : " +
//     FirstName +
//     "\n" +
//     "Ville : " +
//     city
// );

// exercice 3
// let reponse = prompt("Quel est ton nom ?", "<Entrez ici votre nom>");
// if (reponse != null) {
//     alert("Bonjour " + reponse);
// };

// exercice 4
// let reponse = prompt("Quel est ton nom ?", "<Entrez ici votre nom>");
// if (reponse != null) {
//         prompt("Quel est votre prénom ?");
//         prompt("Quelle est votre ville ?");
//      };

// exercice 5 
let reponse = prompt("Donnez moi un nombres à virgules"); 
let reponse2 = prompt("Donnez moi un nombres à virgules");

let changenombre1= parseInt(reponse);
let changenombre2= parseInt(reponse2);

let resultat1 = Math.trunc(changenombre1);
let resultat2 = Math.trunc(changenombre2);

window.alert(resultat1*resultat2);

