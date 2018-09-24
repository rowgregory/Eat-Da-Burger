$('#eatMe').on('click', function() {
    event.preventDefault();

    let burger_name = $('#newB').val().trim();
    console.log(burger_name);
})