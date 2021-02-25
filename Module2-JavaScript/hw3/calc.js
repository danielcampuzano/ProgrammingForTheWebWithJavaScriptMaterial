/*
 * Implement all your JavaScript in this file!
 */

 var value1;
 var value2;
 var operation;

 $('.operator').click(function(){

    //Check if display contains any value
     if($('#display').val()){
        value1 = $('#display').val();
     }

    //Store the selected operation
     operation = $(this).val();

    //Clean the display
    $('#display').val('');
    
 });

 $('.number').click(function(){

    var tempValue = 0;

    
    if($('#display').val()){
        //Store actual display value
        tempValue = $('#display').val();
        //Concat with selected number
        tempValue += $(this).val();

        $('#display').val(tempValue);
    }else{
        //If the display is empty then I just show the selected number
        $('#display').val($(this).val());
    }

 });


 $('#equalsButton').click(function(){

    //If there is a value 1 stored before clicking the equals button so I compute the operation
     if(value1){
        value2 = $('#display').val();


        //By the time its always adding (Make the modificaction so that it use the var operation instead of +)
        //I store the result inside value1 so that it can be used for the next operation
        value1 = parseInt(value1, 10) + parseInt(value2, 10);

        //Show the result
        $('#display').val(value1);

     }
 });