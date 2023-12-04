/*
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
¡Ojo! Los elfos dicen que esto es una prueba técnica de Google.
*/

//Solucion 1
function findFirstRepeated(gifts) {
  let saveGifts = [];

  for (var i = 0; i <= gifts.length; i++) {
    if (i === 0) {
      saveGifts.push(gifts[i]);
    } else {
      console.log("save length -->" + saveGifts.length);
      for (var j = 0; j < saveGifts.length; j++) {
        console.log(saveGifts[j] + "==" + gifts[i]);
        if (gifts[i] === saveGifts[j]) {
          return gifts[i];
        }
      }
      saveGifts.push(gifts[i]);
    }
  }
  return -1;
}

const giftIds = [2, 1, 3, 5, 33, 22,6,8,9,0,33,4,5, 3, 2];
//const firstRepeatedId = findFirstRepeated(giftIds);
//console.log(firstRepeatedId); // 3



//Solucion 2
function findFirstRepeated2(gifts) {
    let saveGifts = new Set();
    for(gift in gifts){
        if(saveGifts.has(gifts[gift])){return gifts[gift];}
            saveGifts.add(gifts[gift]);
    }
    return -1;
  }
  
  const giftIds2 = [2, 1, 3, 5, 33, 22,6,8,9,0,4,5, 3, 2];
  const firstRepeatedId2 = findFirstRepeated2(giftIds2);
  console.log(firstRepeatedId2); // 3
  
  

