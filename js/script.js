$(document).ready(function () {
for (var i = 1; i <=100 ; i++) {

if (i % 3 !== 0 && i % 5 !== 0) {
 $('.table2 tr').append(i);
}
if (i % 3 == 0) {
 $('.table2 tr').append(' fizz');
}
if (i % 5 == 0) {
 $('.table2 tr').append('buzz ');
}
}

$('.display-container').prepend('<h1><span class="list-title">FizzBuzz Output</span></h1>');


// when the listItemForm is submitted
// prevent the form from submitting naturally
// pull the data out of the fields
// reset the form
// re-focus the first item in the form
// create HTML string representing a new TR
// append that TR to the table
$('#listItemForm').submit(function(event){
    event.preventDefault();
    var itemName = $('#itemName').val();
    var category = $('#category').val();
    var qty = $('#quantity').val();
    var qtyType = $('#qtyType').val();
    $('#listItemForm')[0].reset();
    $('#itemName').focus();

    var html='<tr class="item">'+
              '<td> <input class="checkItem" type="checkbox"></td>'+
                  '<td><span class="itemName">'+i+'</span></td>'+
                    '<td>'+'<span class="'+category+'">'+category+'</span>'+
                  '</td>'+
                  '<td><span><b>'+qty+'</b></span></td>'+
                  '<td><span class="quantity-new">'+qtyType+'</span></td>'+
                  '<td><span class="remove fa fa-minus-circle"></span></td>'+
                '</tr>';
    $('table.table2 tbody').append(html);
});


// var multipleThree = (i % 3 = 0 )
// var multipleFive = (i % 5 = 0 )
// start integer (i) count at 1
// increase by one for each loop as long as i <=100
// if not = multipleThree or multipleFive
//  then print i
// else print "Fizz" if multipleThree
// else print "Buzz" if multipleFive

  
});