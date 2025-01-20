const hit = document.querySelector("#Hit");
const stand = document.querySelector("#Stand");
const paraScore = document.querySelector("#Score");
const paracardA = document.querySelector("#paracardA");
const paravalA = document.querySelector("#paravalA");
let list = 'Cards:';
let val = 0;
let Aces = 0;

let cardset = [['A♥', 11], ['A♦', 11], ['A♣', 11], ['A♠', 11], ['2♥', 2], ['3♥', 3], ['4♥', 4], ['5♥', 5], ['6♥', 6], ['7♥', 7], ['8♥', 8], ['9♥', 9], ['10♥', 10], ['J♥', 10], ['Q♥', 10], ['K♥', 10], ['2♦', 2], ['3♦', 3], ['4♦', 4], ['5♦', 5], ['6♦', 6], ['7♦', 7], ['8♦', 8], ['9♦', 9], ['10♦', 10], ['J♦', 10], ['Q♦', 10], ['K♦', 10], ['2♣', 2], ['3♣', 3], ['4♣', 4], ['5♣', 5], ['6♥', 6], ['7♣', 7], ['8♣', 8], ['9♣', 9], ['10♣', 10], ['J♣', 10], ['Q♣', 10], ['K♣', 10], ['2♠', 2], ['3♠', 3], ['4♠', 4], ['5♠', 5], ['6♠', 6], ['7♠', 7], ['8♠', 8], ['9♠', 9], ['10♠', 10], ['J♠', 10], ['Q♠', 10], ['K♠', 10],]
let c = [['A♥', 11], ['A♦', 11], ['A♣', 11], ['A♠', 11], ['2♥', 2], ['3♥', 3], ['4♥', 4], ['5♥', 5], ['6♥', 6], ['7♥', 7], ['8♥', 8], ['9♥', 9], ['10♥', 10], ['J♥', 10], ['Q♥', 10], ['K♥', 10], ['2♦', 2], ['3♦', 3], ['4♦', 4], ['5♦', 5], ['6♦', 6], ['7♦', 7], ['8♦', 8], ['9♦', 9], ['10♦', 10], ['J♦', 10], ['Q♦', 10], ['K♦', 10], ['2♣', 2], ['3♣', 3], ['4♣', 4], ['5♣', 5], ['6♥', 6], ['7♣', 7], ['8♣', 8], ['9♣', 9], ['10♣', 10], ['J♣', 10], ['Q♣', 10], ['K♣', 10], ['2♠', 2], ['3♠', 3], ['4♠', 4], ['5♠', 5], ['6♠', 6], ['7♠', 7], ['8♠', 8], ['9♠', 9], ['10♠', 10], ['J♠', 10], ['Q♠', 10], ['K♠', 10],]


hit.addEventListener("click", doHit, true);
stand.addEventListener("click", Stand, true);

function doHit() {
    if (val < 21) {
        num = Math.floor(Math.random() * c.length)
        list += c[num][0] + ",";
        val += c[num][1];
        if (c[num][1] == 11) {
            Aces += 1;
        }
        if (val < 21) {
            while (Aces > 0 && val > 21) {
                val -= 10;
                Aces--;
            }
        }
        c.splice(num, 1);
        paracardA.innerHTML = list;
        paravalA.innerHTML = 'Value:' + val;
        paraScore.innerHTML = val
    }
}

function Stand() {
    if (val < 21) {
        paraScore.style.opacity = "100%";
    } else if (val == 21) {
        paraScore.style.color = "#00ff00";
        paraScore.style.opacity = "100%";
    }
    else if (val > 21) {
        paraScore.style.color = "#ff0000";
        paraScore.style.opacity = "100%";
    }

}

