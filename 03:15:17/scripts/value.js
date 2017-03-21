//hide minus

function hideMinus()
{
    $('.minus').hide();
    
}

//select client

function selectClient() 
{

    //hover states

    $(".client1").hover(
    function(e){ $('.divideclients1').hide();}, // over
    function(e){ $('.divideclients1').show();}  // out
    );

    $(".client2").hover(
    function(e){ $('.divideclients1').hide(); $('.divideclients2').hide();}, // over
    function(e){ $('.divideclients1').show(); $('.divideclients2').show();}  // out
    );

     $(".client3").hover(
    function(e){ $('.divideclients2').hide(); $('.divideclients3').hide();}, // over
    function(e){ $('.divideclients2').show(); $('.divideclients3').show();}  // out
    );

    $(".client4").hover(
    function(e){ $('.divideclients3').hide();}, // over
    function(e){ $('.divideclients3').show();}  // out
    );

    //click states 

    $(".client1").click(function(){
        $(".client2").removeClass('selected');
        $(".client3").removeClass('selected');
        $(".client4").removeClass('selected');
        $(".client2").addClass('unpicked');
        $(".client3").addClass('unpicked');
        $(".client4").addClass('unpicked');
        $('.divideclients1').remove();
        $('.divideclients2').remove();
        $('.divideclients3').remove();
        $(this).removeClass('unpicked');
        $(this).addClass('selected');
    });

    $(".client2").click(function(){
        $(".client1").removeClass('selected');
        $(".client3").removeClass('selected');
        $(".client4").removeClass('selected');
        $(".client1").addClass('unpicked');
        $(".client3").addClass('unpicked');
        $(".client4").addClass('unpicked');
        $('.divideclients1').remove();
        $('.divideclients2').remove();
        $('.divideclients3').remove();
        $(this).removeClass('unpicked');
        $(this).addClass('selected');
    });

    $(".client3").click(function(){
        $(".client2").removeClass('selected');
        $(".client1").removeClass('selected');
        $(".client4").removeClass('selected');
        $(".client2").addClass('unpicked');
        $(".client1").addClass('unpicked');
        $(".client4").addClass('unpicked');
        $('.divideclients1').remove();
        $('.divideclients2').remove();
        $('.divideclients3').remove();
        $(this).removeClass('unpicked');
        $(this).addClass('selected');
    });

    $(".client4").click(function(){
        $(".client2").removeClass('selected');
        $(".client3").removeClass('selected');
        $(".client1").removeClass('selected');
        $(".client2").addClass('unpicked');
        $(".client3").addClass('unpicked');
        $(".client1").addClass('unpicked');
        $('.divideclients1').remove();
        $('.divideclients2').remove();
        $('.divideclients3').remove();
        $(this).removeClass('unpicked');
        $(this).addClass('selected');
    });

    

        
}

function Next1()
{       
    var val1, val2, val3, val4, val5, 
    val6, val7, val8, val9, val10, val11, val12, val13, val14, val15, val16, val17, 
    result;

    val1 = parseInt(document.getElementById('number1').value, 10)*cost1;
    val2 = parseInt(document.getElementById("number2").value, 10)*cost2;
    val3 = parseInt(document.getElementById('number3').value, 10)*cost3;
    val4 = parseInt(document.getElementById("number4").value, 10)*cost4;
    val5 = parseInt(document.getElementById('number5').value, 10)*cost5;
    val6 = parseInt(document.getElementById("number6").value, 10)*cost6;
    val7 = parseInt(document.getElementById('number7').value, 10)*cost7;
    val8 = parseInt(document.getElementById("number8").value, 10)*cost8;
    val9 = parseInt(document.getElementById('number9').value, 10)*cost9;
    val10 = parseInt(document.getElementById("number10").value, 10)*cost10;
    val11 = parseInt(document.getElementById('number11').value, 10)*cost11;
    val12 = parseInt(document.getElementById("number12").value, 10)*cost12;
    val13 = parseInt(document.getElementById("number13").value, 10)*cost13;
    val14 = parseInt(document.getElementById("number14").value, 10)*cost14;
    val15 = parseInt(document.getElementById('number15').value, 10)*cost15;
    val16 = parseInt(document.getElementById("number16").value, 10)*cost16;
    val17 = parseInt(document.getElementById("number17").value, 10)*cost17;

    result =  (val1+val2+val3+val4+val5+val6+val7+val8+val9+val10+val11+val12+val13+val14+val15+val16+val17); 

    if (result==0) 
        {
            alert("Please add attendees.");
        }

    else {

        $(".next1").hide();
        $(".header").hide();
        $(".start").hide();
        $(".listitem").hide();
        $(".settimer").fadeIn(100);
        $(".arrow").fadeIn(100);
        $(".next2").fadeIn(100);
        $(".header2").fadeIn(100);
        $("#timeline").fadeIn(500);
    }
}


//template

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    //add to total
    document.getElementById('numbertotal').value = value*cost;
}

function decreaseValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

          if (value<0) {
        value=0;
    }
    document.getElementById('number').value = value;
    //decrease from total
    document.getElementById('numbertotal').value = value*cost;
}


//1

function incrementValue1()
{
    var value = parseInt(document.getElementById('number1').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    //show minus if value is more than 0
    if (value>0) {
        $('.minus1').show();
    }

    document.getElementById('number1').value = value;


}

function decreaseValue1()
{
    var value = parseInt(document.getElementById('number1').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }

    //hide minus if value is zero

    if (value==0) {
        $('.minus1').hide();
    }
    
    document.getElementById('number1').value = value;

}



//2

function incrementValue2()
{
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus2').show();
    }

    document.getElementById('number2').value = value;
}

function decreaseValue2()
{
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }


    if (value==0) {
        $('.minus2').hide();
    }
    

    document.getElementById('number2').value = value;
}


//3

function incrementValue3()
{
    var value = parseInt(document.getElementById('number3').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus3').show();
    }

    document.getElementById('number3').value = value;
}

function decreaseValue3()
{
    var value = parseInt(document.getElementById('number3').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }

    if (value==0) {
        $('.minus3').hide();
    }
    
    
    document.getElementById('number3').value = value;
}

//4

function incrementValue4()
{
    var value = parseInt(document.getElementById('number4').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus4').show();
    }

    document.getElementById('number4').value = value;
}

function decreaseValue4()
{
    var value = parseInt(document.getElementById('number4').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }

    if (value==0) {
        $('.minus4').hide();
    }
    
    
    document.getElementById('number4').value = value;
}


//5

function incrementValue5()
{
    var value = parseInt(document.getElementById('number5').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus5').show();
    }

    document.getElementById('number5').value = value;
}

function decreaseValue5()
{
    var value = parseInt(document.getElementById('number5').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value++;
    }

    if (value==0) {
        $('.minus5').hide();
    }
    
    
    document.getElementById('number5').value = value;
}


//6

function incrementValue6()
{
    var value = parseInt(document.getElementById('number6').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus6').show();
    }

    document.getElementById('number6').value = value;
}

function decreaseValue6()
{
    var value = parseInt(document.getElementById('number6').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }

    if (value==0) {
        $('.minus6').hide();
    }
    

    document.getElementById('number6').value = value;
}

//7

function incrementValue7()
{
    var value = parseInt(document.getElementById('number7').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus7').show();
    }

    document.getElementById('number7').value = value;
}

function decreaseValue7()
{
    var value = parseInt(document.getElementById('number7').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }

    if (value==0) {
        $('.minus7').hide();
    }
    
    
    document.getElementById('number7').value = value;
}


//8

function incrementValue8()
{
    var value = parseInt(document.getElementById('number8').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus8').show();
    }

    document.getElementById('number8').value = value;
}

function decreaseValue8()
{
    var value = parseInt(document.getElementById('number8').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }

    if (value==0) {
        $('.minus8').hide();
    }
    
    
    document.getElementById('number8').value = value;
}

//9

function incrementValue9()
{
    var value = parseInt(document.getElementById('number9').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus9').show();
    }

    document.getElementById('number9').value = value;
}

function decreaseValue9()
{
    var value = parseInt(document.getElementById('number9').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }

    if (value==0) {
        $('.minus9').hide();
    }
    
    
    document.getElementById('number9').value = value;
}

//10

function incrementValue10()
{
    var value = parseInt(document.getElementById('number10').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus10').show();
    }

    document.getElementById('number10').value = value;
}

function decreaseValue10()
{
    var value = parseInt(document.getElementById('number10').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }

    if (value==0) {
        $('.minus10').hide();
    }
    
    
    document.getElementById('number10').value = value;
}

//11

function incrementValue11()
{
    var value = parseInt(document.getElementById('number11').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus11').show();
    }

    document.getElementById('number11').value = value;
}

function decreaseValue11()
{
    var value = parseInt(document.getElementById('number11').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }
    
    if (value==0) {
        $('.minus11').hide();
    }
    

    document.getElementById('number11').value = value;
}


//12

function incrementValue12()
{
    var value = parseInt(document.getElementById('number12').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus12').show();
    }

    document.getElementById('number12').value = value;
}

function decreaseValue12()
{
    var value = parseInt(document.getElementById('number12').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }

    if (value==0) {
        $('.minus12').hide();
    }
    
    
    document.getElementById('number12').value = value;
}


//13

function incrementValue13()
{
    var value = parseInt(document.getElementById('number13').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus13').show();
    }

    document.getElementById('number13').value = value;
}

function decreaseValue13()
{
    var value = parseInt(document.getElementById('number13').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }

    if (value==0) {
        $('.minus13').hide();
    }
    
    
    document.getElementById('number13').value = value;
}

//14

function incrementValue14()
{
    var value = parseInt(document.getElementById('number14').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus14').show();
    }

    document.getElementById('number14').value = value;
}

function decreaseValue14()
{
    var value = parseInt(document.getElementById('number14').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }

    if (value==0) {
        $('.minus14').hide();
    }
    
    
    document.getElementById('number14').value = value;
}


//15

function incrementValue15()
{
    var value = parseInt(document.getElementById('number15').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus15').show();
    }

    document.getElementById('number15').value = value;
}

function decreaseValue15()
{
    var value = parseInt(document.getElementById('number15').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }


    if (value==0) {
        $('.minus15').hide();
    }
    
    
    document.getElementById('number15').value = value;
}


//16

function incrementValue16()
{
    var value = parseInt(document.getElementById('number16').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus16').show();
    }

    document.getElementById('number16').value = value;
}

function decreaseValue16()
{
    var value = parseInt(document.getElementById('number16').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }

    if (value==0) {
        $('.minus16').hide();
    }
    
    
    document.getElementById('number16').value = value;
}

//17

function incrementValue17()
{
    var value = parseInt(document.getElementById('number17').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus17').show();
    }

    document.getElementById('number17').value = value;
}

function decreaseValue17()
{
    var value = parseInt(document.getElementById('number17').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }

    if (value==0) {
        $('.minus17').hide();
    }
    
    
    document.getElementById('number17').value = value;
}


//18

function incrementValue18()
{
    var value = parseInt(document.getElementById('number18').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;


    if (value>0) {
        $('.minus18').show();
    }


    document.getElementById('number18').value = value;
}

function decreaseValue18()
{
    var value = parseInt(document.getElementById('number18').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }

    if (value==0) {
        $('.minus18').hide();
    }
    
    
    document.getElementById('number18').value = value;
}

//19

function incrementValue19()
{
    var value = parseInt(document.getElementById('number19').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus19').show();
    }

    document.getElementById('number19').value = value;
}

function decreaseValue19()
{
    var value = parseInt(document.getElementById('number19').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }

    if (value==0) {
        $('.minus19').hide();
    }
    
    
    document.getElementById('number19').value = value;
}

//20

function incrementValue20()
{
    var value = parseInt(document.getElementById('number20').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    if (value>0) {
        $('.minus20').show();
    }

    document.getElementById('number20').value = value;
}

function decreaseValue20()
{
    var value = parseInt(document.getElementById('number20').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;

      if (value<0) {
        value=0;
    }

    if (value==0) {
        $('.minus20').hide();
    }
    
    
    document.getElementById('number20').value = value;
}

// function addTimer()
// {
//     //add a timer
//     $(".one .add").click(function(){
//         $('.one').append('<span class="addtimer">0</span><br/>').html();     
//     });

//     $(".next2").click(function(){
//             $(".add").off(addTimer);
//     });
// }

function addTimer1()
{
        $(".one").append('<span class="addtimer stoptimer">0</span><br/>').html(); 
}

function removeTimer1()
{   

        $('.one .addtimer:last').remove();
}

function addTimer2()
{
        $(".two").append('<span class="addtimer stoptimer">0</span><br/>').html(); 
}

function removeTimer2()
{   

        $('.two .addtimer:last').remove();
}

function addTimer3()
{
        $(".three").append('<span class="addtimer stoptimer">0</span><br/>').html(); 
}

function removeTimer3()
{   

        $('.three .addtimer:last').remove();
}

function addTimer4()
{
        $(".four").append('<span class="addtimer stoptimer">0</span><br/>').html(); 
}

function removeTimer4()
{   

        $('.four .addtimer:last').remove();
}

function addTimer5()
{
        $(".five").append('<span class="addtimer stoptimer">0</span><br/>').html(); 
}

function removeTimer5()
{   

        $('.five .addtimer:last').remove();
}

function addTimer6()
{
        $(".six").append('<span class="addtimer stoptimer">0</span><br/>').html(); 
}

function removeTimer6()
{   

        $('.six .addtimer:last').remove();
}

function addTimer7()
{
        $(".seven").append('<span class="addtimer stoptimer">0</span><br/>').html(); 
}

function removeTimer7()
{   

        $('.seven .addtimer:last').remove();
}

function addTimer8()
{
        $(".eight").append('<span class="addtimer stoptimer">0</span><br/>').html(); 
}

function removeTimer8()
{   

        $('.eight .addtimer:last').remove();
}

function addTimer9()
{
        $(".nine").append('<span class="addtimer stoptimer">0</span><br/>').html(); 
}

function removeTimer9()
{   

        $('.nine .addtimer:last').remove();
}

function addTimer10()
{
        $(".ten").append('<span class="addtimer stoptimer">0</span><br/>').html(); 
}

function removeTimer10()
{   

        $('.ten .addtimer:last').remove();
}

function addTimer11()
{
        $(".eleven").append('<span class="addtimer stoptimer">0</span><br/>').html(); 
}

function removeTimer11()
{   

        $('.eleven .addtimer:last').remove();
}

function addTimer12()
{
        $(".twelve").append('<span class="addtimer stoptimer">0</span><br/>').html(); 
}

function removeTimer12()
{   

        $('.twelve .addtimer:last').remove();
}

function addTimer13()
{
        $(".thirteen").append('<span class="addtimer stoptimer">0</span><br/>').html(); 
}

function removeTimer13()
{   

        $('.thirteen .addtimer:last').remove();
}

function addTimer14()
{
        $(".fourteen").append('<span class="addtimer stoptimer">0</span><br/>').html(); 
}

function removeTimer14()
{   

        $('.fourteen .addtimer:last').remove();
}

function addTimer15()
{
        $(".fifteen").append('<span class="addtimer stoptimer">0</span><br/>').html(); 
}

function removeTimer15()
{   

        $('.fifteen .addtimer:last').remove();
}

function addTimer16()
{
        $(".sixteen").append('<span class="addtimer stoptimer">0</span><br/>').html(); 
}

function removeTimer16()
{   

        $('.sixteen .addtimer:last').remove();
}

function addTimer17()
{
        $(".seventeen").append('<span class="addtimer stoptimer">0</span><br/>').html(); 
}

function removeTimer17()
{   

        $('.seventeen .addtimer:last').remove();
}

var timerclock = 300000;

function startAllTimers(){


  $('.addtimer').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
    
}



function addNewTimer()
{   
    //add a new timer
    $(".one .add").click(function(){
        $('.one').append('<span class="newtimer stoptimer">1000</span><br/>').html();   
        
        $('.one .newtimer:last').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
        
    });

    //end

    //add a new timer
    $(".two .add").click(function(){
        $('.two').append('<span class="newtimer stoptimer">1000</span><br/>').html();   
        
        $('.two .newtimer:last').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    });

    //end

    //add a new timer
    $(".three .add").click(function(){
        $('.three').append('<span class="newtimer stoptimer">1000</span><br/>').html();   
        
        $('.three .newtimer:last').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    });

    //end

    //add a new timer
    $(".four .add").click(function(){
        $('.four').append('<span class="newtimer stoptimer">1000</span><br/>').html();   
        
        $('.four .newtimer:last').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    });

    //end

    //add a new timer
    $(".five .add").click(function(){
        $('.five').append('<span class="newtimer stoptimer">1000</span><br/>').html();   
        
        $('.five .newtimer:last').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    });

    //end

    //add a new timer
    $(".six .add").click(function(){
        $('.six').append('<span class="newtimer stoptimer">1000</span><br/>').html();   
        
        $('.six .newtimer:last').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    });

    //end

    //add a new timer
    $(".seven .add").click(function(){
        $('.seven').append('<span class="newtimer stoptimer">1000</span><br/>').html();   
        
        $('.seven .newtimer:last').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    });

    //end

    //add a new timer
    $(".eight .add").click(function(){
        $('.eight').append('<span class="newtimer stoptimer">1000</span><br/>').html();   
        
        $('.eight .newtimer:last').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    });

    //end

    //add a new timer
    $(".nine .add").click(function(){
        $('.nine').append('<span class="newtimer stoptimer">1000</span><br/>').html();   
        
        $('.nine .newtimer:last').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    });

    //end

    //add a new timer
    $(".ten .add").click(function(){
        $('.ten').append('<span class="newtimer stoptimer">1000</span><br/>').html();   
        
        $('.ten .newtimer:last').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    });

    //end

    //add a new timer
    $(".eleven .add").click(function(){
        $('.eleven').append('<span class="newtimer stoptimer">1000</span><br/>').html();   
        
        $('.eleven .newtimer:last').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    });

    //end

    //add a new timer
    $(".twelve .add").click(function(){
        $('.twelve').append('<span class="newtimer stoptimer">1000</span><br/>').html();   
        
        $('.twelve .newtimer:last').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    });

    //end

    //add a new timer
    $(".thirteen .add").click(function(){
        $('.thirteen').append('<span class="newtimer stoptimer">1000</span><br/>').html();   
        
        $('.thirteen .newtimer:last').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    });

    //end

    //add a new timer
    $(".fourteen .add").click(function(){
        $('.fourteen').append('<span class="newtimer stoptimer">1000</span><br/>').html();   
        
        $('.fourteen .newtimer:last').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    });

    //end


    //add a new timer
    $(".fifteen .add").click(function(){
        $('.fifteen').append('<span class="newtimer stoptimer">1000</span><br/>').html();   
        
        $('.fifteen .newtimer:last').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    });

    //end


    //add a new timer
    $(".sixteen .add").click(function(){
        $('.sixteen').append('<span class="newtimer stoptimer">1000</span><br/>').html();   
        
        $('.sixteen .newtimer:last').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    });

    //end


    //add a new timer
    $(".seventeen .add").click(function(){
        $('.seventeen').append('<span class="newtimer stoptimer">1000</span><br/>').html();   
        
        $('.seventeen .newtimer:last').prop('Counter',0).animate({
        Counter: 1000
    }, {
        duration: timerclock, //default 100 mins = 60000000,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    });

    //end
}

function removeNewTimer()
{   
    //remove a timer
    $(".one .minus").click(function(){  
        $('.one .stoptimer:last').stop();
        $('.one .stoptimer:last').removeClass('stoptimer');

    });
    
    //remove a timer
    $(".two .minus").click(function(){  
        $('.two .stoptimer:last').stop();
        $('.two .stoptimer:last').removeClass('stoptimer');

    });

    //remove a timer
    $(".three .minus").click(function(){  
        $('.three .stoptimer:last').stop();
        $('.three .stoptimer:last').removeClass('stoptimer');

    });

    //remove a timer
    $(".four .minus").click(function(){  
        $('.four .stoptimer:last').stop();
        $('.four .stoptimer:last').removeClass('stoptimer');

    });

    //remove a timer
    $(".five .minus").click(function(){  
        $('.five .stoptimer:last').stop();
        $('.five .stoptimer:last').removeClass('stoptimer');

    });

    //remove a timer
    $(".six .minus").click(function(){  
        $('.six .stoptimer:last').stop();
        $('.six .stoptimer:last').removeClass('stoptimer');

    });

    //remove a timer
    $(".seven .minus").click(function(){  
        $('.seven .stoptimer:last').stop();
        $('.seven .stoptimer:last').removeClass('stoptimer');

    });

    //remove a timer
    $(".eight .minus").click(function(){  
        $('.eight .stoptimer:last').stop();
        $('.eight .stoptimer:last').removeClass('stoptimer');

    });

    //remove a timer
    $(".nine .minus").click(function(){  
        $('.nine .stoptimer:last').stop();
        $('.nine .stoptimer:last').removeClass('stoptimer');

    });

    //remove a timer
    $(".ten .minus").click(function(){  
        $('.ten .stoptimer:last').stop();
        $('.ten .stoptimer:last').removeClass('stoptimer');

    });

    //remove a timer
    $(".eleven .minus").click(function(){  
        $('.eleven .stoptimer:last').stop();
        $('.eleven .stoptimer:last').removeClass('stoptimer');

    });

    //remove a timer
    $(".twelve .minus").click(function(){  
        $('.twelve .stoptimer:last').stop();
        $('.twelve .stoptimer:last').removeClass('stoptimer');

    });

    //remove a timer
    $(".thirteen .minus").click(function(){  
        $('.thirteen .stoptimer:last').stop();
        $('.thirteen .stoptimer:last').removeClass('stoptimer');

    });

    //remove a timer
    $(".fourteen .minus").click(function(){  
        $('.fourteen .stoptimer:last').stop();
        $('.fourteen .stoptimer:last').removeClass('stoptimer');

    });

    //remove a timer
    $(".fifteen .minus").click(function(){  
        $('.fifteen .stoptimer:last').stop();
        $('.fifteen .stoptimer:last').removeClass('stoptimer');

    });

    //remove a timer
    $(".sixteen .minus").click(function(){  
        $('.sixteen .stoptimer:last').stop();
        $('.sixteen .stoptimer:last').removeClass('stoptimer');

    });

    //remove a timer
    $(".seventeen .minus").click(function(){  
        $('.seventeen .stoptimer:last').stop();
        $('.seventeen .stoptimer:last').removeClass('stoptimer');

    });
}


//convert all spans to numbers

function addAll(){

    var array1 = [];
    var array2 = [];
    var array3 = [];
    var array4 = [];
    var array5 = [];
    var array6 = [];
    var array7 = [];
    var array8 = [];
    var array9 = [];
    var array10 = [];
    var array11 = [];
    var array12 = [];
    var array13 = [];
    var array14 = [];
    var array15 = [];
    var array16 = [];
    var array17 = [];

    $(".one span").each(function(index, elem){
    array1.push(Number($(this).text()));
    });

    $(".two span").each(function(index, elem){
    array2.push(Number($(this).text()));
    });

    $(".three span").each(function(index, elem){
    array3.push(Number($(this).text()));
    });

    $(".four span").each(function(index, elem){
    array4.push(Number($(this).text()));
    });

    $(".five span").each(function(index, elem){
    array5.push(Number($(this).text()));
    });

    $(".six span").each(function(index, elem){
    array6.push(Number($(this).text()));
    });

    $(".seven span").each(function(index, elem){
    array7.push(Number($(this).text()));
    });

    $(".eight span").each(function(index, elem){
    array8.push(Number($(this).text()));
    });

    $(".nine span").each(function(index, elem){
    array9.push(Number($(this).text()));
    });

    $(".ten span").each(function(index, elem){
    array10.push(Number($(this).text()));
    });

    $(".eleven span").each(function(index, elem){
    array11.push(Number($(this).text()));
    });

    $(".twelve span").each(function(index, elem){
    array12.push(Number($(this).text()));
    });

    $(".thirteen span").each(function(index, elem){
    array13.push(Number($(this).text()));
    });

    $(".fourteen span").each(function(index, elem){
    array14.push(Number($(this).text()));
    });

    $(".fifteen span").each(function(index, elem){
    array15.push(Number($(this).text()));
    });

    $(".sixteen span").each(function(index, elem){
    array16.push(Number($(this).text()));
    });

    $(".seventeen span").each(function(index, elem){
    array17.push(Number($(this).text()));
    });

    function getSum1(total, array1) {
    return total + array1;
}
    function getSum2(total, array2) {
    return total + array2;
}
    function getSum3(total, array3) {
    return total + array3;
}
    function getSum4(total, array4) {
    return total + array4;
}
    function getSum5(total, array5) {
    return total + array5;
}
    function getSum6(total, array6) {
    return total + array6;
}
    function getSum7(total, array7) {
    return total + array7;
}
    function getSum8(total, array8) {
    return total + array8;
}
    function getSum9(total, array9) {
    return total + array9;
}
    function getSum10(total, array10) {
    return total + array10;
}
    function getSum11(total, array11) {
    return total + array11;
}
    function getSum12(total, array12) {
    return total + array12;
}
    function getSum13(total, array13) {
    return total + array13;
}
    function getSum14(total, array14) {
    return total + array14;
}
    function getSum15(total, array15) {
    return total + array15;
}
    function getSum16(total, array16) {
    return total + array16;
}
    function getSum17(total, array17) {
    return total + array17;
}

    var sum1 = array1.reduce(getSum1) * (cost1/60);
    // console.log("add all 1", sum1);

    var sum2 = array2.reduce(getSum2) * (cost2/60);
    // console.log("add all 2", sum2);

    var sum3 = array3.reduce(getSum3) * (cost3/60);
    // console.log("add all 3", sum3);

    var sum4 = array4.reduce(getSum4) * (cost4/60);
    // console.log("add all 4", sum4);

    var sum5 = array5.reduce(getSum5) * (cost5/60);
    // console.log("add all 5", sum5);

    var sum6 = array6.reduce(getSum6) * (cost6/60);
    // console.log("add all 6", sum6);

    var sum7 = array7.reduce(getSum7) * (cost7/60);
    // console.log("add all 7", sum7);

    var sum8 = array8.reduce(getSum8) * (cost8/60);
    // console.log("add all 8", sum8);

    var sum9 = array9.reduce(getSum9) * (cost9/60);
    // console.log("add all 9", sum9);

    var sum10 = array10.reduce(getSum10) * (cost10/60);
    // console.log("add all 10", sum10);

    var sum11 = array11.reduce(getSum11) * (cost11/60);
    // console.log("add all 11", sum11);

    var sum12 = array12.reduce(getSum12) * (cost12/60);
    // console.log("add all 12", sum12);

    var sum13 = array13.reduce(getSum13) * (cost13/60);
    // console.log("add all 13", sum13);

    var sum14 = array14.reduce(getSum14) * (cost14/60);
    // console.log("add all 14", sum14);

    var sum15 = array15.reduce(getSum15) * (cost15/60);
    // console.log("add all 15", sum15);

    var sum16 = array16.reduce(getSum16) * (cost16/60);
    // console.log("add all 16", sum16);

    var sum17 = array17.reduce(getSum17) * (cost17/60);
    // console.log("add all 17", sum17);

    //total sum
    var thetotalcost = sum1 + sum2 + sum3 + sum4 + sum5 + sum6 + sum7 + sum8 + sum9 + sum10 + sum11 + sum12 + sum13 + sum14 + sum15 + sum16 + sum17;
    // console.log("total cost", thetotalcost);

}



//define costs

// var cost = 10;
var cost1;
var cost2;
var cost3;
var cost4;
var cost5;
var cost6;
var cost7;
var cost8;
var cost9;
var cost10;
var cost11;
var cost12;
var cost13;
var cost14;
var cost15;
var cost16;
var cost17;
// var cost18 = 500;
// var cost19 = 200;
// var cost20 = 120;

function setCosts() 
{

    //Comcast

    $(".client1").click(function(){
        cost1 = 420;
        cost2 = 350;
        cost3 = 310;
        cost4 = 420;
        cost5 = 310;
        cost6 = 255;
        cost7 = 255;
        cost8 = 220;
        cost9 = 190;
        cost10 = 175;
        cost11 = 160;
        cost12 = 220;
        cost13 = 190;
        cost14 = 190;
        cost15 = 160;
        cost16 = 160;
        cost17 = 65;
    });

    //Shire

    $(".client2").click(function(){
        cost1 = 370;
        cost2 = 300;
        cost3 = 260;
        cost4 = 370;
        cost5 = 260;
        cost6 = 190;
        cost7 = 190;
        cost8 = 150;
        cost9 = 130;
        cost10 = 100;
        cost11 = 80;
        cost12 = 198;
        cost13 = 130;
        cost14 = 130;
        cost15 = 80;
        cost16 = 80;
        cost17 = 80;
    });

    //Sculpsure

    $(".client3").click(function(){
        cost1 = 350;
        cost2 = 350;
        cost3 = 310;
        cost4 = 420;
        cost5 = 310;
        cost6 = 255;
        cost7 = 255;
        cost8 = 220;
        cost9 = 190;
        cost10 = 175;
        cost11 = 125;
        cost12 = 135;
        cost13 = 100;
        cost14 = 190;
        cost15 = 160;
        cost16 = 160;
        cost17 = 80;
    });

    //Ebay

    $(".client4").click(function(){
        cost1 = 307;
        cost2 = 249;
        cost3 = 216;
        cost4 = 307;
        cost5 = 216;
        cost6 = 183;
        cost7 = 183;
        cost8 = 158;
        cost9 = 145;
        cost10 = 133;
        cost11 = 125;
        cost12 = 158;
        cost13 = 145;
        cost14 = 145;
        cost15 = 125;
        cost16 = 125;
        cost17 = 80;
    });

            
}


function timeZero(){
    var thehours = $( "#hoursscroll option:selected" ).val();
    var themins = $( "#minsscroll option:selected" ).val();

    // var totalhours = thehours * 3600000;
    // var totalmins = themins * 60000;

    // for testing
    

    var timer = thehours + themins;
    if (timer == 0) {
        alert("Please set the time.");
    } 

    else {
        $(".next2").hide();
        $(".settimer").hide();
        $(".header2").hide();
        $(".header3").fadeIn(100);
        $(".totalboom").fadeIn(500);
        $(".fadeout").addClass('animatetotal');
        $(".stop").fadeIn(100); 
        findTotal();
    }

}



function findTotal(){ 


// setting up the timer
    

var hours = 0;
var mins = 0;
var seconds = 0;
var hourstwo = 0;
var minstwo = 0;
var secondstwo = 0;
var clock = 0.0001; //default 1000

$('.next2').click(function(){
      startTimer();
});

    // if (timer == 0) {
    //     alert("poop");
    // }

    // else {
    //     $(".next2").hide();
    //     $(".settimer").hide();
    //     $(".header2").hide();
    //     $(".header3").show();
    //     $(".totalboom").show();
    //     $(".stop").show(); 
    // }


$('#reset').click(function(){
      hours =0;      mins =0;      seconds =0;
  $('.hours','.mins').html('00');
  $('.seconds').html('00');
});

function startTimer(){
  timex = setTimeout(function(){
      seconds++;
    if(seconds >59){seconds=0;mins++;
       if(mins>59) {
       mins=0;hours++;
         if(hours <10) {$(".hours").text('0'+hours)} else $(".hours").text(hours);
                       }
                       
    if(mins<10){                     
      $(".mins").text('0'+mins);}       
       else $(".mins").text(mins);
                   }    
    if(seconds <10) {
      $(".seconds").text('0'+seconds);} else {
      $(".seconds").text(seconds);
      }
     
    
      startTimer();
  },clock); 
  // fuck with this to speed time, default is 1000
}


function startTimerTwo(){
  timey = setTimeout(function(){
      secondstwo++;
    if(secondstwo >59){secondstwo=0;minstwo++;
       if(minstwo>59) {
       minstwo=0;hourstwo++;
         if(hourstwo <10) {$(".hours2").text('0'+hourstwo)} else $(".hours2").text(hourstwo);
                       }
                       
    if(minstwo<10){                     
      $(".mins2").text('0'+minstwo);}       
       else $(".mins2").text(minstwo);
                   }    
    if(secondstwo <10) {
      $(".seconds2").text('0'+secondstwo);} else {
      $(".seconds2").text(secondstwo);
      }
     
    
      startTimerTwo();
  },clock); 
  // fuck with this to speed time, default is 1000
}



//timer ends


var val1, val2, val3, val4, val5, 
val6, val7, val8, val9, val10, val11, val12, val13, val14, val15, val16, val17, 
result, height, hours, mins, totalhours, totalmins, timer;

    val1 = parseInt(document.getElementById('number1').value, 10)*cost1;
    val2 = parseInt(document.getElementById("number2").value, 10)*cost2;
    val3 = parseInt(document.getElementById('number3').value, 10)*cost3;
    val4 = parseInt(document.getElementById("number4").value, 10)*cost4;
    val5 = parseInt(document.getElementById('number5').value, 10)*cost5;
    val6 = parseInt(document.getElementById("number6").value, 10)*cost6;
    val7 = parseInt(document.getElementById('number7').value, 10)*cost7;
    val8 = parseInt(document.getElementById("number8").value, 10)*cost8;
    val9 = parseInt(document.getElementById('number9').value, 10)*cost9;
    val10 = parseInt(document.getElementById("number10").value, 10)*cost10;
    val11 = parseInt(document.getElementById('number11').value, 10)*cost11;
    val12 = parseInt(document.getElementById("number12").value, 10)*cost12;
    val13 = parseInt(document.getElementById("number13").value, 10)*cost13;
    val14 = parseInt(document.getElementById("number14").value, 10)*cost14;
    val15 = parseInt(document.getElementById('number15').value, 10)*cost15;
    val16 = parseInt(document.getElementById("number16").value, 10)*cost16;
    val17 = parseInt(document.getElementById("number17").value, 10)*cost17;

    result =  (val1+val2+val3+val4+val5+val6+val7+val8+val9+val10+val11+val12+val13+val14+val15+val16+val17); 

    //update on close edit menu


    // set padding heights an shiet
    var height = $(document).height();

    var overtimepadding = height * 0.22;

    // refresh height on window resize

    $(window).resize(function () {
    var height = $(document).height();
    var overtimepadding = height * 0.22;
});


    var thehours = $( "#hoursscroll option:selected" ).val();
    var themins = $( "#minsscroll option:selected" ).val();

    // var totalhours = thehours * 3600000;
    // var totalmins = themins * 60000;

    // for testing
    var totalhours = thehours * 20000;
    var totalmins = themins * 300;

    var timer = totalhours + totalmins;

    // var timediff = timer/9;

    //finesse time input



//animate counter and hourglass

    $('#numbertotal').text(result);

    $('#numbertotal').prop('Counter',0).animate({
        Counter: $('#numbertotal').text()
    }, {
        duration: timer,
        easing: 'linear',
        complete: function(){
            $('.fadeout').animate({'opacity': 0.5, 'padding-top': overtimepadding},{duration:500});
            $('.overtime').animate({'opacity': 1},{duration:500});
            startTimerTwo();
        },
        step: function (now) {
            // $(this).text(Math.ceil(now));
            $(this).text(now.toFixed(2)); 
            $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
        }

    });

    $('.hourglass').animate({ 
    'padding-top' : height - 72,
    'backgroundColor' : "#ff0000",
  }, timer);


//edit attendees

$('.close').click(function(){

    $('#numbertotal').stop();

    var currentvalue = $('#numbertotal').text();

    val1 = parseInt(document.getElementById('number1').value, 10)*cost1;
    val2 = parseInt(document.getElementById("number2").value, 10)*cost2;
    val3 = parseInt(document.getElementById('number3').value, 10)*cost3;
    val4 = parseInt(document.getElementById("number4").value, 10)*cost4;
    val5 = parseInt(document.getElementById('number5').value, 10)*cost5;
    val6 = parseInt(document.getElementById("number6").value, 10)*cost6;
    val7 = parseInt(document.getElementById('number7').value, 10)*cost7;
    val8 = parseInt(document.getElementById("number8").value, 10)*cost8;
    val9 = parseInt(document.getElementById('number9').value, 10)*cost9;
    val10 = parseInt(document.getElementById("number10").value, 10)*cost10;
    val11 = parseInt(document.getElementById('number11').value, 10)*cost11;
    val12 = parseInt(document.getElementById("number12").value, 10)*cost12;
    val13 = parseInt(document.getElementById("number13").value, 10)*cost13;
    val14 = parseInt(document.getElementById("number14").value, 10)*cost14;
    val15 = parseInt(document.getElementById('number15').value, 10)*cost15;
    val16 = parseInt(document.getElementById("number16").value, 10)*cost16;
    val17 = parseInt(document.getElementById("number17").value, 10)*cost17;

    result =  (val1+val2+val3+val4+val5+val6+val7+val8+val9+val10+val11+val12+val13+val14+val15+val16+val17); 

    var currenthours = $('.hours').text();
    var currentmins = $('.mins').text();

    var updatehours = currenthours * 20000;
    updatehours = Math.abs(updatehours);
    var updatemins = currentmins * 300;
    updatemins = Math.abs(updatemins);

    var updatetimer = updatehours + updatemins;

    var newtimer = timer - updatetimer;

    $('#numbertotal').text(result);

    $('#numbertotal').prop('Counter',currentvalue).animate({
        Counter: $('#numbertotal').text()
    }, {
        duration: newtimer,
        easing: 'linear',
        complete: function(){
            $('.fadeout').animate({'opacity': 0.5, 'padding-top': overtimepadding},{duration:500});
            $('.overtime').animate({'opacity': 1},{duration:500});
            startTimerTwo();
        },
        step: function (now) {
            // $(this).text(Math.ceil(now));
            $(this).text(now.toFixed(2)); 
            $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
        }

    });
});


//notches

//00:15

if (thehours == 00 && themins <= 15 ) {
    $('.mins15').hide();

}

//00:30

if (thehours == 00 && themins >= 30 && themins < 45 ) {
    $('.mins15').hide();
    $('.mins30').show();
    $('.notches').addClass('padding30');
}

//00:45

if (thehours == 00 && themins >= 45 ) {
    $('.mins15').hide();
    $('.mins45').show();
    $('.notches').addClass('padding45');
}

//01:00

if (thehours == 01) {
    $('.mins15').hide();
    $('.onehour').show();
    $('.notches').addClass('padding1');
}

//01:15

if (thehours == 01 && themins >= 15 && themins < 30 ) {
    $('.onehour').show();
    $('.mins15').show();
    $('.notches').addClass('padding115');
}

//01:30

if (thehours == 01 && themins >= 30 && themins < 45 ) {
    $('.onehour').show();
    $('.mins15').show();
    $('.mins30').show();
    $('.notches').addClass('padding130');
}

//01:45

if (thehours == 01 && themins >= 45 ) {
    $('.onehour').show();
    $('.mins15').show();
    $('.mins45').show();
    $('.notches').addClass('padding145');
}

//02:00

if (thehours == 02) {
    $('.onehour').show();
    $('.twohours').show();
    $('.notches').addClass('padding2');
}

//02:15

if (thehours == 02 && themins >= 15 && themins < 30 ) {
    $('.onehour').show();
    $('.twohours').show();
    $('.mins15').show();
    $('.notches').removeClass('padding2');
    $('.notches').addClass('padding215');
}

//02:30

if (thehours == 02 && themins >= 30 && themins < 45 ) {
    $('.onehour').show();
    $('.twohours').show();
    $('.mins30').show();
    $('.notches').removeClass('padding2');
    $('.notches').addClass('padding230');
}

//02:45

if (thehours == 02 && themins >= 45 ) {
    $('.onehour').show();
    $('.twohours').show();
    $('.mins45').show();
    $('.notches').removeClass('padding2');
    $('.notches').addClass('padding245');
}

//03:00

if (thehours == 03) {
    $('.onehour').show();
    $('.twohours').show();
    $('.threehours').show();
    $('.mins15').hide();
    $('.notches').addClass('padding3');
}

//03:15

if (thehours == 03 && themins >= 15 && themins < 30 ) {
    $('.onehour').show();
    $('.twohours').show();
    $('.threehours').show();
    $('.mins15').show();
    $('.notches').addClass('padding315');
}

//03:30

if (thehours == 03 && themins >= 30 && themins < 45 ) {
    $('.onehour').show();
    $('.twohours').show();
    $('.threehours').show();
    $('.mins15').show();
    $('.mins30').show();
    $('.notches').addClass('padding330');
}

//03:45

if (thehours == 03 && themins >= 45 ) {
    $('.onehour').show();
    $('.twohours').show();
    $('.threehours').show()
    $('.mins15').show();
    $('.mins45').show();
    $('.notches').addClass('padding345');
}

//04:00

if (thehours == 04) {
    $('.onehour').show();
    $('.twohours').show();
    $('.threehours').show();
    $('.fourhours').show();
    $('.notches').addClass('padding4');
}


//04:15

// if (thehours == '04' && themins >= 15 && themins < 30 ) {
//     $('.onehour').show();
//     $('.twohours').show();
//     $('.threehours').show();
//     $('.fourhours').show();
//     $('.mins15').show();
//     $('.notches').addClass('padding415');
// }

//04:30

// if (thehours == '04' && themins >= 30 && themins < 45 ) {
//     $('.onehour').show();
//     $('.twohours').show();
//     $('.threehours').show();
//     $('.fourhours').show();
//     $('.mins30').show();
//     $('.notches').addClass('padding430');
// }

// //04:45

// if (thehours == '04' && themins >= 45 ) {
//     $('.onehour').show();
//     $('.twohours').show();
//     $('.threehours').show()
//     $('.fourhours').show();
//     $('.mins45').show();
//     $('.notches').addClass('padding445');
// }

//05:00

if (thehours == 05) {
    $('.onehour').show();
    $('.twohours').show();
    $('.threehours').show();
    $('.fourhours').show();
    $('.fivehours').show();
    $('.notches').addClass('padding5');
}

//05:15

// if (thehours == '05' && themins >= 15 && themins < 30 ) {
//     $('.onehour').show();
//     $('.twohours').show();
//     $('.threehours').show();
//     $('.fourhours').show();
//     $('.fivehours').show();
//     $('.mins15').show();
//     $('.notches').addClass('padding515');
// }

// //05:30

// if (thehours == '05' && themins >= 30 && themins < 45 ) {
//     $('.onehour').show();
//     $('.twohours').show();
//     $('.threehours').show();
//     $('.fourhours').show();
//     $('.fivehours').show();
//     $('.mins30').show();
//     $('.notches').addClass('padding530');
// }

// //05:45

// if (thehours == '05' && themins >= 45 ) {
//     $('.onehour').show();
//     $('.twohours').show();
//     $('.threehours').show()
//     $('.fourhours').show();
//     $('.fivehours').show();
//     $('.mins45').show();
//     $('.notches').addClass('padding545');
// }


//06:00

if (thehours == 06) {
    $('.onehour').show();
    $('.twohours').show();
    $('.threehours').show();
    $('.fourhours').show();
    $('.fivehours').show();
    $('.sixhours').show();
    $('.notches').addClass('padding6');
}

//06:15

// if (thehours == '06' && themins >= 15 && themins < 30 ) {
//     $('.onehour').show();
//     $('.twohours').show();
//     $('.threehours').show();
//     $('.fourhours').show();
//     $('.fivehours').show();
//     $('.sixhours').show();
//     $('.mins15').show();
//     $('.notches').addClass('padding615');
// }

// //06:30

// if (thehours == '06' && themins >= 30 && themins < 45 ) {
//     $('.onehour').show();
//     $('.twohours').show();
//     $('.threehours').show();
//     $('.fourhours').show();
//     $('.fivehours').show();
//     $('.sixhours').show();
//     $('.mins30').show();
//     $('.notches').addClass('padding630');
// }

// //06:45

// if (thehours == '06' && themins >= 45 ) {
//     $('.onehour').show();
//     $('.twohours').show();
//     $('.threehours').show()
//     $('.fourhours').show();
//     $('.fivehours').show();
//     $('.sixhours').show();
//     $('.mins45').show();
//     $('.notches').addClass('padding645');
// }

//07:00

if (thehours == 07) {
    $('.onehour').show();
    $('.twohours').show();
    $('.threehours').show();
    $('.fourhours').show();
    $('.fivehours').show();
    $('.sixhours').show();
    $('.sevenhours').show();
    $('.notches').addClass('padding7');
}

//07:15

// if (thehours == '07' && themins >= 15 && themins < 30 ) {
//     $('.onehour').show();
//     $('.twohours').show();
//     $('.threehours').show();
//     $('.fourhours').show();
//     $('.fivehours').show();
//     $('.sixhours').show();
//     $('.sevenhours').show();
//     $('.mins15').show();
//     $('.notches').addClass('padding715');
// }

// //07:30

// if (thehours == '07' && themins >= 30 && themins < 45 ) {
//     $('.onehour').show();
//     $('.twohours').show();
//     $('.threehours').show();
//     $('.fourhours').show();
//     $('.fivehours').show();
//     $('.sixhours').show();
//     $('.sevenhours').show();
//     $('.mins30').show();
//     $('.notches').addClass('padding730');
// }

// //07:45

// if (thehours == '07' && themins >= 45 ) {
//     $('.onehour').show();
//     $('.twohours').show();
//     $('.threehours').show()
//     $('.fourhours').show();
//     $('.fivehours').show();
//     $('.sixhours').show();
//     $('.sevenhours').show();
//     $('.mins45').show();
//     $('.notches').addClass('padding745');
// }

//08:00

if (thehours == 08) {
    $('.onehour').show();
    $('.twohours').show();
    $('.threehours').show();
    $('.fourhours').show();
    $('.fivehours').show();
    $('.sixhours').show();
    $('.sevenhours').show();
    $('.eighthours').show();
    $('.notches').addClass('padding8');
}

//08:15

// if (thehours == '08' && themins >= 15 && themins < 30 ) {
//     $('.onehour').show();
//     $('.twohours').show();
//     $('.threehours').show();
//     $('.fourhours').show();
//     $('.fivehours').show();
//     $('.sixhours').show();
//     $('.sevenhours').show();
//     $('.eighthours').show();
//     $('.mins15').show();
//     $('.notches').addClass('padding815');
// }

// //08:30

// if (thehours == '08' && themins >= 30 && themins < 45 ) {
//     $('.onehour').show();
//     $('.twohours').show();
//     $('.threehours').show();
//     $('.fourhours').show();
//     $('.fivehours').show();
//     $('.sixhours').show();
//     $('.sevenhours').show();
//     $('.eighthours').show();
//     $('.mins30').show();
//     $('.notches').addClass('padding830');
// }

// //08:45

// if (thehours == '08' && themins >= 45 ) {
//     $('.onehour').show();
//     $('.twohours').show();
//     $('.threehours').show()
//     $('.fourhours').show();
//     $('.fivehours').show();
//     $('.sixhours').show();
//     $('.sevenhours').show();
//     $('.eighthours').show();
//     $('.mins45').show();
//     $('.notches').addClass('padding845');
// }


// overtime


    $('#moneyovertime').text(result*100);

    $('#moneyovertime').delay(timer).prop('Counter',0).animate({
        Counter: $('#moneyovertime').text()
    }, {
        duration: timer*100,
        easing: 'linear',
        step: function (now) {
            // $(this).text(Math.ceil(now));
            $(this).text(now.toFixed(2)); 
            $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
        }
    });


// if you didnt enter any attendees or time, resort to default timer screen

 //    if (result == 0) {
 //    $('.hourglass').hide();
 //    $('#numbertotal').text(0);
 //    $('.overtime').hide();
 //    $('.fadeout').stop();
 // }


// stop counting
    $('.stop').click(function() {
    $('#numbertotal').stop();
    $('.hourglass').stop();
    $('#moneyovertime').stop();
    clearTimeout(timex);

    //calculate summary values

    var totalcost1 = parseFloat($("#numbertotal").text().replace(/,/g,'')) 
    + parseFloat($("#moneyovertime").text().replace(/,/g,''));
    var totalcost2 = parseFloat($("#moneyovertime").text().replace(/,/g,''));
    var finalcost1 = parseFloat(totalcost1).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    var finalcost2 = parseFloat(totalcost2).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    $('.finalcost').text(finalcost1); // total cost
    $('.burncost').text(finalcost2); // amount burned
    
    //VARIABLES FOR DATABASE


    var cost_total = totalcost1;
    console.log("cost_total", cost_total);


    //END
    var finalhours = $('.hours').text();
    var finalmins = $('.mins').text();
    var overhours = $('.hours2').text();
    var overmins = $('.mins2').text();

    $('.finaltime1').text(finalhours);
    $('.finaltime2').text(finalmins);
    $('.overcost1').text(overhours);
    $('.overcost2').text(overmins);

    //saved money and time

    // var moneysaved = parseFloat(result - finalcost1).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    var savings = result - parseFloat($("#numbertotal").text().replace(/,/g,''));
    var moneysaved = parseFloat(savings).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

    $('.savecost').text(moneysaved);

    var hourssaved = parseFloat(thehours) - parseFloat(finalhours);
    var minssaved = parseFloat(themins) - parseFloat(finalmins);

    hourssaved = Math.abs(hourssaved);
    minssaved = Math.abs(minssaved); //remove negatives

    $('.savetime1').text(hourssaved);
    $('.savetime2').text(minssaved);

    if(hourssaved <10) 
        {$(".savetime1").text('0'+hourssaved)} 
    else {$(".savetime1").text(hourssaved);
        }
    if(minssaved <10) 
        {$(".savetime2").text('0'+minssaved)} 
    else {$(".savetime2").text(minssaved);
        }


    //hide or show overtime or save

    var over_time;
    var over_cost;

    if(totalcost1 < result) 
        {
            $('.over').hide();
            $('.fadethree').hide();
            $('.fadefour').hide();
            $('.save').show();
            $(".fadeone").delay(300).fadeIn(100);
            $(".fadetwo").delay(500).fadeIn(100);
            $(".fadethree").delay(700).fadeIn(100);
            $(".fadefour").delay(900).fadeIn(100);
            over_time = false;
            over_cost = false;
        } 
    
    if(totalcost1 > result) 
        {
            $('.save').hide();
            $('.fadefive').hide();
            $('.fadesix').hide();
            $('.over').show();
            $(".fadeone").delay(300).fadeIn(100);
            $(".fadetwo").delay(500).fadeIn(100);
            $(".fadefive").delay(700).fadeIn(100);
            $(".fadesix").delay(900).fadeIn(100);
            over_time = true;
            over_cost = true;
        }

    console.log("over_time", over_time);
    console.log("over_cost", over_cost);

    });

    $('.restart').click(function(){
      location.reload(true)
});

}


//variables to port to dashboard / API

function calculateVariables(){

var thehours = Number($( "#hoursscroll option:selected" ).val());
var themins = Number($( "#minsscroll option:selected" ).val())/60;
val1 = parseInt(document.getElementById('number1').value, 10)*cost1;
val2 = parseInt(document.getElementById("number2").value, 10)*cost2;
val3 = parseInt(document.getElementById('number3').value, 10)*cost3;
val4 = parseInt(document.getElementById("number4").value, 10)*cost4;
val5 = parseInt(document.getElementById('number5').value, 10)*cost5;
val6 = parseInt(document.getElementById("number6").value, 10)*cost6;
val7 = parseInt(document.getElementById('number7').value, 10)*cost7;
val8 = parseInt(document.getElementById("number8").value, 10)*cost8;
val9 = parseInt(document.getElementById('number9').value, 10)*cost9;
val10 = parseInt(document.getElementById("number10").value, 10)*cost10;
val11 = parseInt(document.getElementById('number11').value, 10)*cost11;
val12 = parseInt(document.getElementById("number12").value, 10)*cost12;
val13 = parseInt(document.getElementById("number13").value, 10)*cost13;
val14 = parseInt(document.getElementById("number14").value, 10)*cost14;
val15 = parseInt(document.getElementById('number15').value, 10)*cost15;
val16 = parseInt(document.getElementById("number16").value, 10)*cost16;
val17 = parseInt(document.getElementById("number17").value, 10)*cost17;




//VALUES FOR DATABASE

var client = $(".selected").text(); //String
var time_allocated = thehours + themins; //Number
var time_start = new Date(); //Date
var cost_estimated = (val1+val2+val3+val4+val5+val6+val7+val8+val9+val10+val11+val12+val13+val14+val15+val16+val17); //Number



var over_time; //true or false

var over_cost; //true or false
// * attendees[]
//    * role
//    * team
//    * time_start
//    * time_end
//    * rate

console.log("client", client);
console.log("time_allocated",  time_allocated);
console.log("time_start", time_start);
console.log("cost_estimated", cost_estimated);


}

function calculateVariables2(){
    //Time Elapsed

var timerhours = Number($( ".hours" ).text());
var timermins = Number($( ".mins" ).text())/60;




//VALUES FOR DATABASE
var time_end = new Date(); //Date
var time_elapsed = timerhours + timermins; //Number
// var cost_total; //Number - REFER TO FUNCTION FINDTOTAL 

console.log("time_end", time_end);
console.log("time_elapsed", time_elapsed);
}

var role;
var team;
var rate;
var time_start;
var time_start_perc;
var time_end;
var time_end_perc;



function attendeesArray(){


    $(".one .add").click(function(){
        var timerhours = Number($( ".hours" ).text());
        var timermins = Number($( ".mins" ).text())/60;
        role = $( ".one .positiontitle" ).text();
        team = "Account";
        rate = cost1;
        time_start = new Date();
        time_start_perc = timerhours + timermins;
        var attendee = [role, team, time_start, time_start_perc, rate];

        console.log(attendee);
    });

    $(".one .minus").click(function(){
        var timerhours = Number($( ".hours" ).text());
        var timermins = Number($( ".mins" ).text())/60;
        var time_end = new Date();
        var time_end_perc = timerhours + timermins;

        var attendee = [role, team, time_end, time_end_perc, rate];

        console.log(attendee);
    });
}