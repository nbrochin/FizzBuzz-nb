$(document).ready(function () {

$('.display-container').prepend('<h1><span class="list-title">Weekly Grocery List</span></h1>');

// Whenever someone clicks on the checkbox
// go to the parent TR and add a class of checked
$('.table2').on('click','.checkItem',function() {
  $(this).parent().parent().toggleClass('checked');
});

// Function to get input value.
$('#create-list').click(function() {
  var text_value = $("#new-list-name").val();
  if(text_value=='') {
    alert("Enter A New List Name");
  }else{
    $('.display-container .list-title').text(text_value);
    $('#new-list-name').val('');
  }
});


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
                  '<td><span class="itemName">'+itemName+'</span></td>'+
                    '<td>'+'<span class="'+category+'">'+category+'</span>'+
                  '</td>'+
                  '<td><span><b>'+qty+'</b></span></td>'+
                  '<td><span class="quantity-new">'+qtyType+'</span></td>'+
                  '<td><span class="remove fa fa-minus-circle"></span></td>'+
                '</tr>';
    $('table.table2 tbody').append(html);
});

// remove parent TR from list when .remove is clicked

// parent that is loaded during document.ready - .table2
// event to trigger - click
// descendent to trigger the event on - .remove
// descendent can be added after document.ready

$('.table2').on('click', '.remove', function(event){
  $(this).parent().parent().remove();
});

// delete any TR w/ the class of checked

$('#clearAll').click(function(event){
        $('.logo').replaceWith('<div class="logo">imWatchingYou</div>');
        $('.table2 tbody').remove();
        $('#clearAll')[0].reset();

    });

$('#delChkBtn').click(function(){
        $('form input:checked').parents('tr').remove();
    });

// for (var i = 1; i <=100 ; i++) {

// if (i % 3 !== 0) {
//  $('.main')append.('yagurt');
// }
// else if (i % 3 == 0) {
//  console.log ("fizz");
// }

// else (i % 5 == 0) {
//  console.log ("buzz");
// }



// }


// var multipleThree = (i % 3 = 0 )
// var multipleFive = (i % 5 = 0 )
// start integer (i) count at 1
// increase by one for each loop as long as i <=100
// if not = multipleThree or multipleFive
//  then print i
// else print "Fizz" if multipleThree
// else print "Buzz" if multipleFive

  
});