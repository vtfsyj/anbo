$(function(){
    $(document).on("scroll",function () {
        if($(document).scrollTop()>$(".header-menu")[0].offsetTop){
            $(".ceiling").stop(true).animate({opacity:"1"},100)
        }else{
            $(".ceiling").stop(true).animate({opacity:"0"},100)
        }
    })
})