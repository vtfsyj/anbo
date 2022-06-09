$(".toubiao ul li").click(function () {
    $(this).addClass("current").siblings().removeClass("current").parent("").parent("").siblings(".tab_bottom").children(".introduce-nav").eq(
        $(this).index()).addClass("current").siblings().removeClass("current");

   a=$(this).children().html();
   $(".title a").last().html(a);
});