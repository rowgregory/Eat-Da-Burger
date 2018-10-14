// $('#eatMe').on('click', function() {
//     event.preventDefault();

//     let burger_name = $('#newB').val().trim();
//     console.log(burger_name);
// })


// $('#btnSubmit').on('click', function() {
    
//     event.preventDefault();

//     for(var i = 0; i <)
    
//     $('.text-center').addClass('animated rubberBand infinite');
    
// })

console.log('HELLO WORLD');

$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'bottom'
      });
    })
 

    $(document).ready(function(){
        $("#toptip").tooltip({
            placement:"top"
        });

        $("#bottomtip").tooltip({
            placement:"bottom"
        });

        $("#lefttip").tooltip({
            placement:"left"
        });

        $("#righttip").tooltip({
            placement:"right"
        });                
    });