$(".toggleli").hover(function(){
    $(this).find(".toggle-hide").stop(true).fadeIn(200);
},function(){
    $(this).find(".toggle-hide").stop(true).fadeOut(200);
})