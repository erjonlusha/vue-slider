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

vue-slider
Istruzioni:
Ricreare lo slider di immagini ma questa volta con Vue
Bonus ufficiale:
Facciamo in modo che il nostro slider scorra automaticamente in avanti,
e ogni 3 secondi visualizzi un immagine differente.
Tip: possiamo usare una lifecycle Hook per inserire un nostro script quando l'istanza Vue é stata caricata.
Possibili extra Bonus:
cliccando sui pallini visualizzeremo l'immagine corrispondente
cliccando sulle frecce della tastiera sinista e destra scorriamo tra le immagini
I bonus metteteli in una cartella "bonus".

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
    created () {
    setInterval(this.next, 3000);
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

