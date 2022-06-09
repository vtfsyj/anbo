$(window).scroll(function(){
    if($(window).scrollTop() > ($("#header-menu").offset().top + 56)){
        $("#header-menu-clone").stop().fadeIn(100);
    }else{
        $("#header-menu-clone").stop().fadeOut(100);
    }
})