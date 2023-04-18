const input = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", buscador, false);
input.addEventListener("keypress", function (e) {
    if(e.key == "Enter"){
        buscador();
    }
});

function buscador(){
    juegos = document.getElementsByClassName("card-title");
    cards = document.getElementsByClassName("col-sm");
    
    if(input.value == ""){
        for(i = 0; i < cards.length; i++){
            cards[i].style.display = "block";
        }
    }else{
    
    
    for(i = 0; i <juegos.length; i++){
        let text1 = juegos[i].textContent;
        let text2 = input.value; 
        if( text1.toLowerCase().includes(text2.toLowerCase())){
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";    
        }
    }}
}
