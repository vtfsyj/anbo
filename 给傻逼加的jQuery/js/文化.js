$(function () {
    $(window).on("resize",function () {
        console.log($(window).height())
        console.log($(window).width())
        $(".swip").stop(true).animate({height:$(window).height()/2},200)
        $(".swip").stop(true).animate({width:$(window).width()},200)
    })
})