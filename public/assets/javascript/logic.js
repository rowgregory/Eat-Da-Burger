// $('#eatMe').on('click', function() {
//     event.preventDefault();

//     let burger_name = $('#newB').val().trim();
//     console.log(burger_name);
// })

$('.submitCoaster').on('click', function() {
    
    event.preventDefault();
    var input = $('#newB').val().trim();
    if (!input) {
        alert('Please create coaster!');
    }
    
})

