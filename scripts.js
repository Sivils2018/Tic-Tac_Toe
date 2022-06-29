var p1Score = 0; 
var p2Score = 0; 
var cats = 0; 
var turn = 1;
var display = ""; 

function checkWin(val) {
    //Checking Winners in Rows
    if ($(".row-1 .box." + val).length=== 3
    || $(".row-2 .box." + val).length=== 3 
    || $(".row-3 .box." + val).length=== 3
    
    //Check Winners in Colunms 
    || $(".col-1." + val).length=== 3
    || $(".col-2." + val).length=== 3
    || $(".col-3." + val).length=== 3
    //Check Winner Dia
    || ($("#1").hasClass(val) 
        && $("#5").hasClass(val) 
        && $("#9").hasClass(val))
    || ($("#3").hasClass(val) 
        && $("#5").hasClass(val) 
        && $("#7").hasClass(val)))
    {
        $(".box").empty(); 
        $(".X").removeClass("X");
        $(".O").removeClass("O"); 
        return true
    }
}

function checkCat() 
{
    if ($(".X").length + $(".O").length === 9)
    {
        $(".box").empty();
        $(".X").removeClass("X");
        $(".O").removeClass("O")
        cats++ 
        $("#cats").text(cats)
        $("#display").text("CAT!")

    }
}

$(".box").click(function(){
    if(turn === 1 && !$(this).text())
    {
        $(this).text("X")
        $(this).addClass("X")
        turn = 2 
        if (checkWin("X"))
        {
            p1Score ++; 
            $("#p-1-wins").text(p1Score);
            $("#display").text("Player1 Wins!") 
        } else checkCat()
    }
    else if (!$(this).text())
    {
        $(this).text("O")
        $(this).addClass("O")
        turn = 1
        if (checkWin("O"))
        { 
            p2Score ++; 
            $("#p-2-wins").text(p2Score);
            $("#display").text("Player2 Wins!") 
        } else checkCat()

    }
    $("#turn").text(turn)
})

$(function() {
    $('#reset').click(function() {
        p1Score = 0;
        $("#p-1-wins").text(p1Score);
        p2Score = 0; 
        $("#p-2-wins").text(p2Score);
        cats = 0;
        $("#cats").text(cats);
        $(".box").empty(); 
        $(".X").removeClass("X");
        $(".O").removeClass("O");
        turn = 1;
        $("#turn").text(turn)
        $("#display").text(display); 
    });
});