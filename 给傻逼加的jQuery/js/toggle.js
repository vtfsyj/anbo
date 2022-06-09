$(".toggleli").hover(function(){
    $(this).find(".toggle-hide").stop(true).fadeIn(200);
},function(){
    $(this).find(".toggle-hide").stop(true).fadeOut(200);
})


$(".bottombox2 a").hover(function(){
    if($(".bottombox2 a").is(":animated")){
        return;
    }
    $(this).find(".yy").slideDown(400)
    // console.log($(this));
},function(){
    $(this).find(".yy").slideUp(400)
})

$(function(){
    $(".jr .ff").hover(function () { 
        $(this).find(".no").css({"display":"block"})
        $(this).find(".no").css({"display":"block"})
        // console.log($(this));
    },function(){
        $(this).find(".no").css({"display":"none"})
        $(this).find(".no").css({"display":"none"})
    });
    $(".jr .ff1").hover(function () { 
        $(this).find(".no").css({"display":"block"})
        $(this).find(".no").css({"display":"block"})
        // console.log($(this));
    },function(){
        $(this).find(".no").css({"display":"none"})
        $(this).find(".no").css({"display":"none"})
    });
})

