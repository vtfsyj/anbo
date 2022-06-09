// s首页新闻文字滚动
var sollLeft = 950;
setInterval(function(){
    sollLeft--;
    if(sollLeft < -1450){
        sollLeft = 950;
    }
    $("#soll-in").stop().animate({"left":sollLeft},2)
},10)
// 首页新闻遮罩层
$(".news-item-box").hover(function(){
    $(this).find(".news-item-mask").stop().slideDown(300);
},function(){
    $(this).find(".news-item-mask").stop().slideUp(300);
})
// 展示部分遮罩层
$(".exhibition-item").hover(function(){
    $(this).find("i.exhibition-icon").stop().fadeIn(200);
},function(){
    $(this).find("i.exhibition-icon").stop().fadeOut(200);
})