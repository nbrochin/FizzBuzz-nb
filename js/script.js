$(document).ready(function () {

    $("#fizzbuzz").submit(function (event) {
        var start = parseInt($("#start").val());
        var finish = parseInt($("#finish").val());

        // check that the input values are numbers
        if (!isNaN(start) && !isNaN(finish)) {
            // loop through numbers
            var i; for (i = start; i <= finish; i++) {

                if (i % 3 === 0 && i % 5 === 0) {
                    $("#output tbody tr:last-child").append("<td class='fizzbuzz'>FizzBuzz</td>");
                } else if (i % 3 === 0) {
                    $("#output tbody tr:last-child").append("<td class='fizz'>Fizz</td>");
                } else if (i % 5 === 0) {
                    $("#output tbody tr:last-child").append("<td class='buzz'>Buzz</td>");
                } else {
                    $("#output tbody tr:last-child").append("<td class='regular'>" + i + "</td>");
                }
                if (i % 3 === 0 && i % 5 === 0) {
                   $("#output tbody").append("<tr></tr>")
                 }
            }
            $("#output span").fadeIn(400);
        } else {
            // if the inputs are not valid numbers
            $("#error").append("<p class='error'>Please enter a valid number</p>");
        }
        // prevent form submission
        return false;
    });

    // empty the output & error divs
    $('input').on('focus', function () {
        $("#output span").fadeOut(300, function () {
            $("#output").empty();
        });
        
    });

}); // end ready