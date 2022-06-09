$(function(){
    $('.nav-left a').click(function () { 
       
        $(this).attr('class','cure').find("i").css('display','inline-block').parent().siblings().attr('class','aa').find("i").css('display','none')
    });


    $('.paging span').click(function(){
        $(this).attr('class','user').siblings().removeClass('user')
    })






                $(".paging span").click(function(event) {

                    var idx= $(this).index()
                    console.log(idx)
                            /* Act on the event */
                            $("html,body").animate({
                                scrollTop:"300px"},
                                666
                                )
                       
                 $('.box1').eq(idx).css("display",'block').siblings('.box1').css("display",'none')

                        });
          $('.nav-left a').click(function(){
            var idxs= $(this).index()
            $('.box1').eq(idxs).css("display",'block').siblings('.box1').css("display",'none')
          })


          $('.nav-left a i').hover(function(){
            
               $(this).attr('class','iconfont icon-guanbixiao')
          },function(){
            $(this).attr('class','iconfont icon-duigouxiao')
          })
});