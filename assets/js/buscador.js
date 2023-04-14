const input = document.getElementById("search-input");

function buscador(){
    juegos = document.getElementsByClassName("card-title");
    cards = document.getElementsByClassName("col-sm");
    
    if(input.value == ""){
        for(i = 0; i < cards.length; i++){
            cards[i].style.display = "block";
        }
    }else{
    
    
    for(i = 0; i <juegos.length; i++){
        if(juegos[i].textContent != input.value){
            cards[i].style.display = "none";
        } else {
            cards[i].style.display = "block";    
        }
    }}
}
