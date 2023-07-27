$(document).ready(function(){
    // q1
    $("#btn1").click(function(){
        $(".show").show();
    });

    // q2
    
    $(".t1").click(function (){  
        $(this).css("background-color", "green");
    });

    // q3
    $(".btn3").click(function(){
        $(".first").toggleClass("second");   
    });

    // q4
    $("#btn4").click(function(){
        var txt = $(".update").val();
        console.log(txt);
        $("#btn4").text(txt);
    });
});

