let symvols =['a','b','c','d','f','g','h']

let c = document.querySelectorAll('.grid-item')

for(const i of c){
    i.addEventListener('click', function(event){
        console.log("klick")
    })
}

function flipCard() {
  this.classList.toggle('flip');
}

c.forEach(c => c.addEventListener('click', flipCard));

const numberCards = 16
let openedCards =[]
let cardTypes = []

for (let index = 0; index < numberCards / 2; index++) {
      cardTypes.push(index+1)
      cardTypes.push(index +1)
}
cardTypes = shuffle(cardTypes)

let p = document.querySelector(' .grid-container')

for (let index = 0; index < numberCards; index++) {
  let c = document.createElement('div')
  c.innerHTML = cardTypes[index]
  c.type = cardTypes[index]
  c.className = "grid-item" 
  c.addEventListener('click',flipCard)
  p.appendChild(c)
}

function flip(event){
  //if(!this.classList.contains('gefunden'))
    openCard(this)
}
function openCard(c){
  // alert(c.innerHTML)
  if (openCards.length < 2) {
      c.classList.toggle('flipp')
      openCards.push(c)
      if (openCards.length == 2) {
        if (openCards[0].type == openCards[1].type) {
          alert('gleich')
         //TODO: Klasse found hinzufügen
          window.setTimeout(
            ()=>{
              openedCards.pop(classList.toggle('gefunden'))
              openedCards.pop(classList.toggle('gefunden'))
            }
          )
        
        }
        else{
        //alert ('nicht gleich')
        //TODO: warten (setTimeout) Karten wieder umdrehen
          //openCard = setTimeout(100)
          window.setTimeout(
            ()=>{
              openedCards.pop(classList.toggle('flip'))
              openedCards.pop(classList.toggle('flip'))
            },
            1000
          )
        }
      }
    }
}

/*function shuffle(c) {
  let counter = numberCards.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter --;

    let temp = array[counter];
    array[counter] = arry[index];
    array[index] = temp;
  }
  return array;
}*/

function shuffle(arra1) {
  var ctr = arra1.length, temp, index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr)
    ctr --;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}


/*
1)Leeres Array zum Speichern der aufdeckten Karten (openCads)
2) Karten richtig erzeugen [1,1,2,2,3,3,4,4.......8,8]
3) Karten mischen (suffle)
4) Karten zum Deck hinzufügen
5) Klick Eventhandler
6) Kartenlogik:
  6.1) prüfen ob karte bereits found ->  wie vielbbereits aufgedeckt sind (0,1,2)
  6.2) wenn weniger als 2 -> aufdecken
  6.3) Erkennen ob zwei gleiche Karten aufgedeckt wurden ->
  wenn gleich -> found; wenn nicht geich -> verdecken
*/

