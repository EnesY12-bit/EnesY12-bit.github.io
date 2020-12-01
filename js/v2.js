let clicks = 0;
let cardsWon = 0
let scoreBoard = document.querySelector(".scoreBoard"); 
let clickBoard = document.querySelector(".clickBoard");




const numberCards = 16
let openedCards = []
let cardTypes=[]
for (let index = 0; index < numberCards/2; index++) {
    cardTypes.push(index+1)
    cardTypes.push(index+1)
}
cardTypes = shuffle(cardTypes)
let p = document.querySelector('.grid-container')
for (let index = 0; index < numberCards; index++) {
        let c = document.createElement('div')
        c.innerHTML = cardTypes[index]
        c.type = cardTypes[index]
        c.className="grid-item"
        c.addEventListener('click',flipp)
        p.appendChild(c)
}



function flipp(event){
    //TODO
    //if(!this.classList.contains('found'))
        openCard(this)


}
function openCard(c){

   if(openedCards.length<2){
        c.classList.toggle('flip')
        openedCards.push(c)
        if(openedCards.length == 2){
            if(openedCards[0].type == openedCards[1].type){
                //alert('gleich')
                window.setTimeout(
                    ()=>{
                        openedCards.pop().classList.toggle('gefunden')
                        openedCards.pop().classList.toggle('gefunden')
                        openendCard.pop().classList.toggle('flip2')
                    },
                    1000
                )


               // cardsWon += 1;
              //  scoreBoard.innerHTML = cardsWon; 
            
            }
            else{
                //alert('nicht gleich')
                window.setTimeout(
                    ()=>{
                        openedCards.pop().classList.toggle('flip')
                        openedCards.pop().classList.toggle('flip')
                    },
                    1000
                )
            }
            clicks += 1
            clickBoard.innerHTML = clicks; 

        }

   }
}

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

