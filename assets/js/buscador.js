const input = document.getElementById("search-input").value;

function buscador(){
    if(input.value == "") return
    
    juegos = document.getElementsByClassName("card-title");
    cards = document.getElementsByClassName("col-sm");
    for(i = 0; i <juegos.length; i++){
        if(juegos[i].textContent != input){
            cards[i].style.display = "none";
        }
    }
}
