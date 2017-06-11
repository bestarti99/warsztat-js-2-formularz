'get script'

var pobierzDane = document.getElementById( "formularz" ).addEventListener( 'click', function(event) {
    event.preventDefault();
    
    var fname = document.getElementsByName('fname')[0].value;
    console.log(fname);
    
    var lname = document.getElementsByName('lname')[0].value;
    console.log(lname);
} );

