/**********************************************************************************
Carousel 
Descrizione:
Creare uno slider di immagini
Potete usare le immagini che desiderate.
Per facilitarvi la vita usate immagini delle stesse dimensioni :)
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider

In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera

Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
Bonus:
Clicchiamo sui pallini e mostriamo l’immagine corrispondente
Generiamo i pallini con JS

************************************************************************/

let app = new Vue({
    el: "#app",
    data: {
        counter: 0,
        images: [
            "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg" ,
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
            "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
        ],
    },
    methods: {
        next(){
            this.counter++;
            if(this.counter === this.images.length) {
                this.counter = 0;
            }
        },
        prev(){
            this.counter--;
            if(this.counter > 0) {
                this.counter --;;
            } else {
                this.counter = this.images.length -1;
            }
            
        }
    }
});

// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
/*
$ (document).ready(function() {
$ (document).bind('keydown', 'return', function(e) {
alert("Premuto"+e.which);
});
});
*/


// $ (document).ready(function() {
// $ (document).bind('keydown', 'return', function(e) {
//     if (e.which == 37 ) {
//         prevImg.trigger("click");
//     }
//     if (e.which == 39 ) {
//         prevImg.trigger("click");
//     }
// });
// });

