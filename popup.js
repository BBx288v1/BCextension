var isLose = false,
    last = 0,
    loseStreak = 0,
    count = 0,
    i =0;

function getTime(){
    var current = new Date();
    return current.getHours()+":"+current.getMinutes();
}


function doThings() {


    clearInterval(theShit);

    var theLength = document.querySelector('.recent-list').querySelectorAll(".game-item").length-1;

    for (i = theLength; i >= 0; i--) {
        console.log(count + "--" + loseStreak);
        var text = document.querySelector('.recent-list').querySelectorAll(".game-item")[theLength].textContent;
        var id = document.querySelector('.recent-list').querySelectorAll(".game-item")[theLength].querySelector(".issus").textContent;
        var payout = parseFloat(text.replace(id,"").replace("x",""));
        if (last != payout) {
            last = payout;
            count += 1;
            if (payout < 2) {
                isLose = true;
                loseStreak += 1;
            }
            else {
                loseStreak = 0;
            }
        }

    }
    console.log(payout);
    if (isLose) {
        isLose = false;
        
        setTimeout(doThings, 500);

    } else {

        setTimeout(doThings, 500);

    }

}

var theShit = setInterval(doThings, 5000);

function calculate () {
    var bet = document.getElementById("bet").value,
        multiple = document.getElementById("multiply").value,
        sum = (bet * multiple).toFixed(8),
        list_sum = "",
        list_bet = document.getElementById("list_bet");
    for(var i = 0; i < 19; i++) {
        list_sum += sum+", ";
        sum = (sum*multiple).toFixed(8)
    }
    list_sum += sum;
    list_bet.value = (list_sum);
};