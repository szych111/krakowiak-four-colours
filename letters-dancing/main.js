$(document).ready(function() {

    $('p').click(function() {
        
        // rozdzielam litery paragrafu i wstawiam je w tablice
        let myString = $(this).text();
        console.log($(myString));
        
        let newArray = myString.split('');
        console.log(newArray);
    
        // kolejne elementy tablicy trafiaja do osobnych spanow
        for (let i = 0; i < newArray.length; i++) {

            let newSpan = $('<span></span>').text(newArray[i]);
            console.log(newSpan.text());

        /* // span powinien zastepowac wyjsciowy paragraf
            
            $('p').append(newSpan);

        // span przesuwa sie w gore, a nastepnie w dol, od pierwszej litery do ostatniej

            $(newSpan).animate({display: 'inline-block', top: '-=40px'});
            $(newSpan).animate({top: '+=40px'});
        }
        
        // span przesuwa sie w gore, a nastepnie w dol, od ostatniej litery do pierwszej 
        for (i = newArray.length-1; i >= 0; i--) {

            $(newSpan).animate({display: 'inline-block', top: '-=40px'});
            $(newSpan).animate({top: '+=40px'}); */
            

        }

        
     });
    

})