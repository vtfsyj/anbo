$(".toggleli").hover(function(){
    $(this).find(".toggle-hide").stop(true).fadeIn(200);
},function(){
    $(this).find(".toggle-hide").stop(true).fadeOut(200);
})
//返回顶部
$(window).scroll(function(){
    if($(window).scrollTop() > 600){
        $("#totop").stop().fadeIn(300);
    }else{
        $("#totop").stop().fadeOut(300);
    }
})
$("#totop").click(function(){
    $("html").stop().animate({
        scrollTop: 0
    })
})